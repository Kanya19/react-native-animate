import React from 'react'
import {Dimensions, Text, View} from 'react-native'
import FastImage from 'react-native-fast-image'
import s from '~/style/component/water-fall'
import TouchableOpacity from '~/component/touchable-opacity'
import Icon from 'react-native-vector-icons/AntDesign'

const calc = require('yu.calculator')
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class WaterFall extends React.Component {
  // template
  render() {
    const {leftList, maxHeight, maxWidth, rightHeights, leftHeights, rightDivHeight, rightList, leftDivHeight} =
      this.state
    const {showButton, showCollection, onCollection, borderRadius, btnText} = this.props
    return (
      <View className={s.waterFallWrap}>
        <View className={s.leftWrap}>
          {leftList.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => this.props.onClick && this.props.onClick(item, index)}>
                <View className={s.imgWrap} style={{minHeight: 50, maxHeight: maxHeight}}>
                  <FastImage
                    className={s.mainImage}
                    style={{height: leftHeights[index] || 200, borderRadius}}
                    source={{
                      uri: item.mainImage || item.image,
                      priority: FastImage.priority.normal,
                    }}
                    onLoad={(event) => {
                      this.imageLoad(event, index)
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                  {!!showCollection && (
                    <TouchableOpacity
                      onPress={() => {
                        this.props.onCollection && this.props.onCollection(item)
                      }}
                      className={s.icons}>
                      <Icon name="star" size={20} style={{color: item.isCollection ? '#ff9100' : 'black'}} />
                    </TouchableOpacity>
                  )}
                  {!!showButton && (
                    <TouchableOpacity
                      className={s.editBtn}
                      onPress={() => this.props.onBtnClick && this.props.onBtnClick(item)}>
                      <Text style={{lineHeight: 34, color: '#fff', textAlign: 'center'}}>{btnText}</Text>
                    </TouchableOpacity>
                  )}
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
              <TouchableOpacity key={index} onPress={() => this.props.onClick && this.props.onClick(item, index)}>
                <View className={s.imgWrap} style={{minHeight: 50, maxHeight: maxHeight}}>
                  <FastImage
                    className={s.mainImage}
                    style={{height: rightHeights[index] || 200, borderRadius}}
                    source={{
                      uri: item.mainImage || item.image,
                      priority: FastImage.priority.normal,
                    }}
                    onLoad={(event) => {
                      this.rightImageLoad(event, index)
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                  {!!showCollection && (
                    <TouchableOpacity
                      onPress={() => {
                        this.props.onCollection && this.props.onCollection(item)
                      }}
                      className={s.icons}>
                      <Icon name="star" size={20} style={{color: item.isCollection ? '#ff9100' : 'black'}} />
                    </TouchableOpacity>
                  )}
                  {!!showButton && (
                    <TouchableOpacity
                      className={s.editBtn}
                      onPress={() => this.props.onBtnClick && this.props.onBtnClick(item)}>
                      <Text style={{lineHeight: 34, color: '#fff', textAlign: 'center'}}>{btnText}</Text>
                    </TouchableOpacity>
                  )}
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
      list: [],
    }
  }

  // methods
  imageLoad = (event, index) => {
    let scale = calc.div(event.nativeEvent.width, event.nativeEvent.height)
    const {leftHeights} = this.state
    leftHeights[index] = calc.div(this.state.maxWidth, scale)
    this.setState({leftHeights})
  }
  rightImageLoad = (event, index) => {
    let scale = calc.div(event.nativeEvent.width, event.nativeEvent.height)
    const {rightHeights} = this.state
    rightHeights[index] = calc.div(this.state.maxWidth, scale)
    this.setState({rightHeights})
  }
  handleList = (list) => {
    const maxWidth = calc.sub(calc.mul(width, 0.5), 12)
    const maxHeight = calc.mul(width, 1.5)
    let {leftDivHeight, rightDivHeight} = this.state
    const leftList = []
    let leftHeight = 0
    const rightList = []
    let rightHeight = 0
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
      list,
      maxHeight,
      maxWidth,
      leftHeight,
      rightHeight,
      leftDivHeight,
      rightDivHeight,
      leftList,
      rightList,
    })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.list.length > this.state.list.length) {
      this.handleList(nextProps.list)
    }
  }
  // mounted
  componentDidMount(): void {
    this.handleList(this.props.list)
  }
}

export default WaterFall
