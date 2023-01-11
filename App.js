import React from 'react'
import {LogBox, Platform, Text, TextInput, RefreshControl} from 'react-native'
import {Provider as ReduxProvider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from '~/store/reducer/index'
import api from '~/api'
import adminApi from '~/admin-api'
import config from '~/imports/config'
import '~/util/storage'
import {Provider} from '@ant-design/react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import MainContainer from '~/route'
import JPush from 'jpush-react-native'
import {navigate} from '~/route/navigation'
import v from '~/style/varible'
import SplashScreen from 'react-native-splash-screen'

//屏蔽系统默认字体
TextInput.defaultProps = Object.assign({}, TextInput.defaultProps, {
  allowFontScaling: false,
  placeholderTextColor: '#cccccc',
}) // 新版RN使用该方法替代
Text.defaultProps = Object.assign({}, Text.defaultProps, {
  allowFontScaling: false,
  color: v.text,
  fontSize: 12,
})

const defaultFontFamily = {
  ...Platform.select({
    android: {fontFamily: ''},
  }),
}

const oldRender = Text.render
Text.render = function (...args) {
  const origin = oldRender.call(this, ...args)
  return React.cloneElement(origin, {
    style: [defaultFontFamily, origin.props.style],
  })
}

global.store = {env: 1}
global.api = api
global.adminApi = adminApi
global.config = config

const store = createStore(rootReducer)

class App extends React.Component {
  constructor(props) {
    super(props)
    LogBox.ignoreLogs([
      'Require cycle: node_modules',
      'Debugger and',
      'perform a React state',
      'EventEmitter.removeListener',
      'No source prop was provided',
      'You seem to update props of the',
      'Animated: `useNativeDriver` was not specified',
      'Warning: componentWillMount has been',
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: componentWillReceiveProps',
      'Module RCTImageLoader requires',
      'Promise Rejection',
      '-[RCTRootView',
      'Setting a timer',
      'Module AudioRecorderManager requires',
      'Remote debugger is in a background',
    ])
  }
  render() {
    return (
      <ReduxProvider store={store}>
        <Provider>
          <SafeAreaProvider>
            <MainContainer />
          </SafeAreaProvider>
        </Provider>
      </ReduxProvider>
    )
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      SplashScreen.hide()
    }
    storage.load({key: 'agreement'}).then((res) => {
      if (res === 1) {
        JPush.init(config.JPushConfig)
        //连接状态
        this.connectListener = (result) => {
          console.log('connectListener:' + JSON.stringify(result))
        }
        JPush.addConnectEventListener(this.connectListener)
        //通知回调
        this.notificationListener = (result) => {
          // notificationListener:{"extras":{"route":"{\"path\":\"Mine\",\"query\":{\"id\":1}}"},"content":"可以的！","messageID":"47288073942664869","title":"面包好吃吗","notificationEventType":"notificationOpened"}
          let extras = result.extras ? {...result.extras} : {}
          if (extras.route) {
            extras.route = JSON.parse(extras.route)
            // notificationArrived 是消息送达，因为是已经在APP里了
            // notificationOpened 是消息已打开，即点击了消息进入
            if (result.notificationEventType === 'notificationOpened') {
              setTimeout(() => {
                navigate(extras.route.path, extras.route.query)
              }, 500)
            }
          }
          console.log('notificationListener:' + JSON.stringify(result))
        }
        JPush.addNotificationListener(this.notificationListener)
        //本地通知回调
        this.localNotificationListener = (result) => {
          console.log('localNotificationListener:' + JSON.stringify(result))
        }
        JPush.addLocalNotificationListener(this.localNotificationListener)
        //自定义消息回调
        // this.customMessageListener = result => {
        //     console.log("customMessageListener:" + JSON.stringify(result))
        // };
        // JPush.addCustomMessagegListener(this.customMessageListener);
        //tag alias事件回调
        this.tagAliasListener = (result) => {
          console.log('tagAliasListener:' + JSON.stringify(result))
        }
        JPush.addTagAliasListener(this.tagAliasListener)
        //手机号码事件回调
        this.mobileNumberListener = (result) => {
          console.log('mobileNumberListener:' + JSON.stringify(result))
        }
        JPush.addMobileNumberListener(this.mobileNumberListener)
        console.log('JPush.setBadge')
        JPush.setBadge({
          badge: 0,
          appBadge: 0,
        })
      }
    })
  }
}

export default App
