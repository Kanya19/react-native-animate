import React from 'react'
import {Alert, Dimensions, Text, View} from 'react-native'
import s from '~/style/component/post'
import FastImage from 'react-native-fast-image'
import ViewShot from 'react-native-view-shot'
import CameraRoll from '@react-native-community/cameraroll'
import Price from '~/component/price'
import * as WeChat from 'react-native-wechat-lib'
import {checkPermission} from '~/common/index'

class Post extends React.Component {
  // template
  render() {
    const {textTwo, image, title, price, tagImage, qrCode, desc} = this.props
    const {height} = this.state
    const width = Dimensions.get('window').width
    return (
      <View style={{margin: 14}}>
        <ViewShot ref="viewShot" options={{format: 'png', quality: 1}} style={{backgroundColor: 'transparent'}}>
          <View className={s.poster} style={{width: width - 28}}>
            <FastImage
              className={s.image}
              onLoad={(event) => {
                this.imageLoad(event, width - 48)
              }}
              style={{width: width - 48, height: height}}
              source={{uri: image}}
              resizeMode={FastImage.resizeMode.stretch}
            />
            <FastImage
              className={s.tagImage}
              onLoad={(event) => {
                this.imageLoad(event, width - 48)
              }}
              style={{width: width - 48, height: height}}
              source={{uri: tagImage}}
              resizeMode={FastImage.resizeMode.stretch}
            />
            <View style={{padding: 14}}>
              {!!title && <Text className={s.txt}>{title}</Text>}
              {!!price && (
                <View style={{marginTop: 20}}>
                  <Price price={price} color={'#fb622c'} />
                </View>
              )}
              {!!desc && (
                <View style={{marginTop: 20}}>
                  <Text style={{color: '#fb622c', fontWeight: '500'}}>{desc}</Text>
                </View>
              )}
            </View>
            <FastImage
              style={{width: width - 48, height: 10}}
              source={{uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/dash-border.png'}}
              resizeMode={FastImage.resizeMode.stretch}
            />

            <View className={s.bottom}>
              <View className={s.left}>
                <FastImage
                  style={{width: 40, height: 40, borderRadius: 20}}
                  source={{uri: this.props.user.detail.avatar}}
                  resizeMode={FastImage.resizeMode.stretch}
                />
                <View style={{marginLeft: 10}}>
                  <Text className={s.nickname}>好友 {this.props.user.detail.nickname}</Text>
                  <Text className={s.slogan}>{textTwo}</Text>
                </View>
              </View>
              <View>
                <FastImage
                  style={{width: 80, height: 80}}
                  source={{uri: qrCode}}
                  resizeMode={FastImage.resizeMode.stretch}
                />
              </View>
            </View>
          </View>
        </ViewShot>
      </View>
    )
  }
  // data
  constructor(props: any) {
    super(props)
    this.state = {
      height: 0,
    }
    WeChat.registerApp('wx677f8abb01c89ddb', 'https://www.tuwangnet.com/app/')
  }
  imageLoad = (event, width) => {
    let scale = event.nativeEvent.width / event.nativeEvent.height
    const height = width / scale
    this.setState({height})
  }
  saveImage = (shareWechat) => {
    checkPermission().then(() => {
      this.refs.viewShot.capture().then((uri) => {
        CameraRoll.save(uri, {type: 'photo'})
          .then(function (result) {
            if (shareWechat) {
              WeChat.isWXAppInstalled().then((isInstalled) => {
                if (isInstalled) {
                  WeChat.shareLocalImage({
                    imageUrl: uri,
                    scene: 1,
                  })
                } else {
                  Alert.alert('请安装微信')
                }
              })
            } else {
              alert('已保存到系统相册')
            }
          })
          .catch(function (error) {
            console.log(error)
            alert('保存失败，请检查是否给了相册或存储权限')
          })
      })
    })
  }
  componentDidMount(): void {
    this.props.onRef(this)
  }
}

export default Post
