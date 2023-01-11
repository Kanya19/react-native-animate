import React from 'react'
import {Dimensions, StyleSheet, View} from 'react-native'
import FastImage from 'react-native-fast-image'
import s from '~/style/component/water-fall-product'
import TouchableOpacity from '~/component/touchable-opacity'

import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-controls'
import Icon from 'react-native-vector-icons/AntDesign'
const calc = require('yu.calculator')
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class WaterFall extends React.Component {
  // template
  render() {
    const {leftList, maxHeight, selectItem, rightHeights, leftHeights, rightDivHeight, rightList, leftDivHeight} =
      this.state
    return (
      <View className={s.waterFallWrap}>
        <View className={s.leftWrap}>
          {leftList.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => this.handleClick(item, index)}>
                <View
                  className={[s.imgWrap, selectItem === item && s.selected]}
                  style={{minHeight: 50, maxHeight: maxHeight}}>
                  <FastImage
                    className={s.mainImage}
                    style={{height: leftHeights[index] || 200}}
                    source={{
                      uri: item.mainImage || item.image,
                      priority: FastImage.priority.normal,
                    }}
                    onLoad={(event) => {
                      this.imageLoad(event, index)
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                </View>
              </TouchableOpacity>
            )
          })}
          {leftDivHeight > 40 && (
            <View className={s.markDiv} style={{height: leftDivHeight}}>
              <FastImage
                className={s.markImg}
                source={{
                  uri: 'https://twwimg.oss-cn-hangzhou.aliyuncs.com/user-resource/logo-empty.842cf2c7.png',
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.stretch}
              />
            </View>
          )}
        </View>
        <View className={s.rightWrap}>
          {rightList.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => this.handleClick(item, index)}>
                <View
                  className={[s.imgWrap, selectItem === item && s.selected]}
                  style={{minHeight: 50, maxHeight: maxHeight}}>
                  <FastImage
                    className={s.mainImage}
                    style={{height: rightHeights[index] || 200}}
                    source={{
                      uri: item.mainImage || item.image,
                      priority: FastImage.priority.normal,
                    }}
                    onLoad={(event) => {
                      this.rightImageLoad(event, index)
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                </View>
              </TouchableOpacity>
            )
          })}
          {rightDivHeight > 40 && <View className={[s.imgWrap, s.markImg]} style={{height: rightDivHeight}} />}
          <FastImage
            className={s.markImag}
            source={{
              uri: 'https://twwimg.oss-cn-hangzhou.aliyuncs.com/user-resource/logo-empty.842cf2c7.png',
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.stretch}
          />
        </View>
      </View>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {
      isVisible: false,
      rightDivHeight: 0,
      leftDivHeight: 0,
      leftHeight: 0,
      rightHeight: 0,
      maxHeight: 0,
      maxWidth: 0,
      leftList: [],
      rightList: [],
      leftHeights: [],
      rightHeights: [],
      selectItem: {},
    }
  }

  // methods
  imageLoad = (event, index) => {
    let scale = event.nativeEvent.width / event.nativeEvent.height
    const {leftHeights} = this.state
    leftHeights[index] = this.state.maxWidth / scale
    this.setState({leftHeights})
  }
  rightImageLoad = (event, index) => {
    let scale = event.nativeEvent.width / event.nativeEvent.height
    const {rightHeights} = this.state
    rightHeights[index] = this.state.maxWidth / scale
    this.setState({rightHeights})
  }
  handleClick = (item, index) => {
    this.props.onClick(item, index)
    this.setState({
      selectItem: item,
    })
  }
  // mounted
  componentDidMount(): void {
    const maxWidth = calc.mul(width, 0.5)
    const maxHeight = calc.mul(width, 1.5)
    let {leftHeight, rightHeight, leftDivHeight, rightDivHeight, leftList, rightList} = this.state
    const {list} = this.props
    if (list) {
      list.map((item) => {
        item.calcHeight = calc.div(calc.mul(item.height, maxWidth), item.width)
        if (leftHeight <= rightHeight) {
          leftList.push(item)
          leftHeight += item.calcHeight > maxHeight ? maxHeight : item.calcHeight
        } else {
          rightList.push(item)
          rightHeight += item.calcHeight > maxHeight ? maxHeight : item.calcHeight
        }
      })
      if (leftHeight > rightHeight) {
        rightDivHeight = leftHeight - rightHeight - 16
        leftDivHeight = 0
      } else {
        leftDivHeight = rightHeight - leftHeight - 16
        rightDivHeight = 0
      }
    }

    this.setState({
      maxHeight,
      maxWidth,
      leftHeight,
      rightHeight,
      leftDivHeight,
      rightDivHeight,
      leftList,
      rightList,
      selectItem: list[0],
    })
  }
}

export default WaterFall
