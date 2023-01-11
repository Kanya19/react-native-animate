import React from 'react'
import FastImage from 'react-native-fast-image'

import {Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native'
//导入Video组件
import Video from 'react-native-video'
// 导入 Silder组件
import Slider from '@react-native-community/slider'
// 屏幕方向锁定: 他需要改变 原来Android文件代码，当然适配两端的话，IOS也是需要更改的。
// import Orientation from 'react-native-orientation-locker'

let screenWidth = Dimensions.get('window').width
let screenHeight = Dimensions.get('window').height

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.changePausedState = this.changePausedState.bind(this)
    this.customerSliderValue = this.customerSliderValue.bind(this)
    this.enterFullScreen = this.enterFullScreen.bind(this)
    this._changePauseSliderFullState = this._changePauseSliderFullState.bind(this)
    this._onStartShouldSetResponder = this._onStartShouldSetResponder.bind(this)
    this.state = {
      isPaused: true, //是暂停
      duration: 0, //总时长
      currentTime: 0, //当前播放时间
      sliderValue: 0, //进度条的进度
      timeout: null,
      playVideoTimeOut: null,
      //用来控制进入全屏的属性
      videoWidth: screenWidth,
      videoHeight: 226,
      isFullScreen: false,
      isVisiblePausedSliderFullScreen: false,
    }
  }
  changePausedState() {
    //控制按钮显示播放，要显示进度条3秒钟，之后关闭显示
    this.setState(
      {
        isPaused: !this.state.isPaused,
        isVisiblePausedSliderFullScreen: true,
      },
      () => {
        if (this.props.changeStatus && typeof this.props.changeStatus === 'function') {
          this.props.changeStatus(this.state.isPaused)
        }
      },
    )
    //这个定时调用失去了this指向
    let that = this
    if (that.timeout) {
      clearTimeout(that.timeout)
    }
    that.timeout = setTimeout(function () {
      that.setState({
        isVisiblePausedSliderFullScreen: false,
      })
    }, 3000)
  }
  _changePauseSliderFullState() {
    // 单击事件，是否显示 “暂停、进度条、全屏按钮 盒子”
    let flag = !this.state.isVisiblePausedSliderFullScreen
    this.setState({
      isVisiblePausedSliderFullScreen: flag,
    })
    //这个定时调用失去了this指向
    let that = this
    if (that.timeout) {
      clearTimeout(that.timeout)
    }
    that.timeout = setTimeout(function () {
      that.setState({
        isVisiblePausedSliderFullScreen: false,
      })
    }, 3000)
  }
  //格式化音乐播放的时间为0：00。借助onProgress的定时器调用，更新当前时间
  formatMediaTime(time) {
    let minute = Math.floor(time / 60)
    let second = parseInt(time - minute * 60)
    minute = minute >= 10 ? minute : '0' + minute
    second = second >= 10 ? second : '0' + second
    return minute + ':' + second
  }
  //加载视频调用，主要是拿到 “总时间”，并格式化
  customerOnload(e) {
    let time = e.duration
    this.setState({
      duration: time,
    })
  }
  toggleStop = () => {
    this.setState(
      {
        isPaused: !this.state.isPaused,
      },
      () => {
        if (this.props.changeStatus && typeof this.props.changeStatus === 'function') {
          this.props.changeStatus(this.state.isPaused)
        }
      },
    )
    let that = this
    if (that.timeout) {
      clearTimeout(that.timeout)
    }
    that.timeout = setTimeout(function () {
      that.setState({
        isVisiblePausedSliderFullScreen: false,
      })
    }, 3000)
  }

  // 获得当前的，播放时间数，但这个数是0.104，需要处理
  customerOnprogress(e) {
    let time = e.currentTime // 获取播放视频的秒数
    this.setState({
      currentTime: time,
      sliderValue: time,
    })
  }
  // 移动滑块，改变视频播放进度
  customerSliderValue(value) {
    this.setState(
      {
        isPaused: true,
      },
      () => {
        let that = this
        if (that.timeout) {
          clearTimeout(that.timeout)
        }
        that.timeout = setTimeout(function () {
          that.setState({
            isVisiblePausedSliderFullScreen: false,
          })
        }, 3000)

        if (that.playVideoTimeOut) {
          clearTimeout(that.playVideoTimeOut)
        }
        that.playVideoTimeOut = setTimeout(function () {
          that.player.seek(value)
          that.setState({
            isPaused: false,
          })
        }, 200)
      },
    )
  }
  enterFullScreen() {
    //1.改变宽高  2.允许进入全屏模式  3.如何配置屏幕旋转,不需要改变进度条盒子的显示和隐藏
    this.setState({
      videoWidth: screenHeight,
      videoHeight: screenWidth,
      isFullScreen: true,
    })
    // 直接设置方向
    // Orientation.lockToLandscape()
  }
  _onStartShouldSetResponder(e) {}
  componentDidMount() {}
  render() {
    // 播放按钮组件：是否显示
    let playButtonComponent = (
      <TouchableWithoutFeedback onPress={this.changePausedState}>
        <View style={styles.playBtn}>
          <FastImage style={{width: 80, height: 80}} source={require('~/asset/img/9clci1_play.png')} />
        </View>
      </TouchableWithoutFeedback>
      // <TouchableWithoutFeedback onPress={this.changePausedState}>
      // </TouchableWithoutFeedback>
    )
    let pausedBtn = this.state.isPaused ? playButtonComponent : null
    // 暂停按钮、进度条、全屏按钮 是否显示
    let pausedSliderFullComponent = (
      <View style={{position: 'absolute', bottom: 0, left: 0}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* 进度条按钮     */}
          <View style={styles.sliderBox}>
            <Text style={styles.pauseBtn} onPress={this.toggleStop}>
              暂停
            </Text>
            <Text>{this.formatMediaTime(this.state.currentTime)}</Text>
            <Slider
              style={{width: 200, height: 40}}
              value={this.state.sliderValue}
              maximumValue={this.state.duration}
              thumbTintColor="#fff" //开关夹点的yanse
              minimumTrackTintColor="red"
              maximumTrackTintColor="#ccc"
              step={1}
              onValueChange={this.customerSliderValue}
            />
            <Text>{this.formatMediaTime(this.state.duration)}</Text>
            {/* 全屏按钮 */}
            {/*<View>*/}
            {/*  <TouchableOpacity onPress={this.enterFullScreen}>*/}
            {/*    <Text style={{padding: 5}}>全屏</Text>*/}
            {/*  </TouchableOpacity>*/}
            {/*</View>*/}
          </View>
        </View>
      </View>
    )
    let pausedSliderFull = this.state.isVisiblePausedSliderFullScreen ? pausedSliderFullComponent : null
    return (
      <View>
        <View>
          <TouchableWithoutFeedback
            onPress={this._changePauseSliderFullState}
            onResponderMove={this._onStartShouldSetResponder}>
            <Video
              source={this.props.source}
              ref={(ref) => {
                this.player = ref
              }}
              poster={this.props.poster}
              style={this.props.style}
              allowsExternalPlayback={false} // 不允许导出 或 其他播放器播放
              paused={this.state.isPaused} // 控制视频是否播放
              resizeMode="cover"
              repeat={true}
              onLoad={(e) => this.customerOnload(e)}
              onProgress={(e) => this.customerOnprogress(e)}
              fullscreen={this.state.isFullScreen}
              controls={false}
            />
          </TouchableWithoutFeedback>
          {/* 播放的按钮：点击之后需要消失 */}
          {pausedBtn}
          {/* 暂停按钮，进度条，全屏按钮 */}
          {pausedSliderFull}
        </View>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  myVideo: {
    width: 340,
    height: 240,
  },
  playBtn: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 50,
    position: 'absolute',
    top: '45%',
    left: '45%',
    marginLeft: -25,
    marginTop: -25,
    zIndex: 999,
  },
  pauseBtn: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  sliderBox: {
    width: Dimensions.get('window').width,
    opacity: 0.5,
    backgroundColor: '#f7f7f7',
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
