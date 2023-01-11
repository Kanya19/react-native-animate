import * as React from 'react'
import {DefaultTheme, NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {isReadyRef, navigationRef} from './navigation'
// TODO：react-native-permissions 未引用
// import AgentDetail from '~/page/packageTwo/agent-detail'
import {Animated} from '~/page/animated/index'
// 管理后台路由

const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#333333',
    background: 'rgb(255, 255, 255)',
  },
}

const Stack = createStackNavigator()
export default function MainContainer() {
  return (
    <NavigationContainer
      theme={MyTheme}
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true
      }}>
      <Stack.Navigator
      // 全局定义页面跳转过渡从右往左
      // screenOptions={() => ({
      //   ...TransitionPresets.SlideFromRightIOS,
      // })}
      >
        <Stack.Screen
          options={() => ({headerShown: false, headerBackTitle: ' ', title: ''})}
          name="Animated"
          component={Animated}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
