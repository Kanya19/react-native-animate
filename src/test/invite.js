import React from 'react'
import {Dimensions, Text, View, ScrollView, SafeAreaView, Alert} from 'react-native'
import s from '~/style/page/mine/invite'
import YuButton from '~/plugin/button'
import {BannerSceneEnum} from '~/common/constant'
import FastImage from 'react-native-fast-image'
import {connect} from 'react-redux'
import ViewShot from 'react-native-view-shot'
import CameraRoll from '@react-native-community/cameraroll'
import {checkPermission} from '~/common/index'
import config from '~/imports/config'
import TouchableOpacity from '~/plugin/touchable-opacity'
import * as WeChat from 'react-native-wechat-lib'
import Modal from 'react-native-modal'

class Invite extends React.Component {
  // template
  render() {
    const {image, qrcode, visible, title} = this.state
    const width = Dimensions.get('window').width
    return (
      <SafeAreaView>
        <ScrollView className={s.invitePage}>
          <View className={s.sharePicture}>
            <View className={s.canvasWrap}>
              {/*生成图片的画布 */}
              <ViewShot ref="viewShot" options={{format: 'png', quality: 1}}>
                <View className={s.poster} style={{width: width - 28}}>
                  <FastImage
                    className={s.image}
                    style={{width: '100%', height: width - 28 - 30}}
                    source={{uri: image}}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                  <View style={{padding: 14}}>
                    <Text className={s.posterText}>{title}</Text>
                  </View>

                  <View style={{flexDirection: 'row', overflow: 'hidden'}}>
                    {Array(100)
                      .fill()
                      .map((item, index) => {
                        return (
                          <View key={index} style={{width: 5, height: 0.5, marginRight: 5, backgroundColor: '#666'}} />
                        )
                      })}
                  </View>

                  <View className={s.bottom}>
                    <FastImage
                      style={{width: 70, height: 70, borderRadius: 2}}
                      source={{uri: this.props.user.detail.avatar}}
                      resizeMode={FastImage.resizeMode.stretch}
                    />
                    <View>
                      <Text className={s.nickname}>分享自 {this.props.user.detail.nickname}</Text>
                      <Text className={s.slogan}>健康穿戴，联结商业时代</Text>
                    </View>
                    <FastImage
                      style={{width: 70, height: 70}}
                      source={{uri: qrcode}}
                      resizeMode={FastImage.resizeMode.stretch}
                    />
                  </View>
                </View>
              </ViewShot>

              <View className={s.sharePicBtn}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <YuButton style={{width: '40%'}} text={'保存图片'} onPress={() => this.saveImage()} />
                  <YuButton style={{width: '40%'}} text={'分享'} onPress={this.share} />
                </View>
                <View>
                  <Text className={s.tips}>保存图片到手机相册后，将图片分享到您的圈子</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{height: 150}} />
        </ScrollView>
        <Modal
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            zIndex: 100,
          }}
          onBackdropPress={() => this.setState({visible: false})}
          isVisible={visible}
          propagateSwipe={true}>
          <View className={s.bottomModalBox}>
            <View className={s.titleBox}>
              <Text className={s.titleText} style={{fontSize: 16}}>
                分享至
              </Text>
            </View>
            <View className={s.shareBox}>
              <TouchableOpacity onPress={this.handleShare} className={s.shareItem}>
                <FastImage
                  style={{borderRadius: 4, width: 45, height: 45}}
                  source={require('~/images/img/app/share-weixin.png')}
                />
                <Text className={s.shareText}>微信</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.saveImage} className={s.shareItem}>
                <FastImage
                  style={{borderRadius: 4, width: 45, height: 45}}
                  source={require('~/images/img/app/share-friend.png')}
                />
                <Text className={s.shareText}>朋友圈</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {
      image: '',
      qrcode: '',
      visible: false,
      title: '肤素，拥有全球领先核心技术的大健康平台，向您发出诚挚邀请！',
    }
    WeChat.registerApp('wxffa723fd5468d96c', 'https://prod.fousu.net/app/')
  }

  // methods
  share = () => {
    this.setState({
      visible: true,
    })
  }
  getDetail() {
    api
      .getBanner({
        scene: BannerSceneEnum.SHARE,
      })
      .then((res) => {
        console.log('res', res)
        res = res || []
        this.setState({
          image: res[0].image,
        })
      })

    api.getInviteQrcode().then((res) => {
      if (res) {
        this.setState({
          qrcode: 'data:image/jpeg;base64,' + res,
        })
      }
    })
  }
  onRef = (ref) => {
    this.child = ref
  }
  onShareAppMessage = () => {
    const {image} = this.state
    const inviteCode = this.props.user.detail.inviteCode
    let handlePath = '/pages/home/index'
    let url = inviteCode ? `${handlePath}?inviteCode=${inviteCode}` : handlePath
    return {
      title: '肤素，拥有全球领先核心技术的大健康平台，向您发出诚挚邀请！',
      path: url,
      imageUrl: image,
    }
  }
  handleShare = () => {
    const share = this.onShareAppMessage()
    WeChat.isWXAppInstalled().then((isInstalled) => {
      if (isInstalled) {
        WeChat.shareMiniProgram({
          title: share.title,
          miniProgramType: config.env === 'test' ? 2 : 0, // 正式版:0，测试版:1，体验版:2
          userName: 'gh_90ba81978142',
          webpageUrl: config.url,
          thumbImageUrl: share.imageUrl,
          scene: 0, // 分享到, 0:会话 1:朋友圈 2:收藏
          path: share.path,
        })
      } else {
        Alert.alert('请安装微信')
      }
    })
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
            alert('保存失败，请检查是否给了相册或存储权限')
          })
      })
    })
  }

  // mounted
  componentDidMount(): void {
    this.getDetail()
  }
}

const mapStateToProps = (state) => {
  const {user} = state
  return {user}
}
export default connect(mapStateToProps)(Invite)
