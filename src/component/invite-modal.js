import React from 'react'
import {Alert, Dimensions, Text, View} from 'react-native'
import FastImage from 'react-native-fast-image'
import TouchableOpacity from '~/component/touchable-opacity'
import s from '~/style/page/packageTwo/agent-benefit'
import ViewShot from 'react-native-view-shot'
import {BannerSceneEnum} from '~/common/constant'
import {connect} from 'react-redux'
import st from '~/style/page/mine/invite'
import CameraRoll from '@react-native-community/cameraroll'
import * as WeChat from 'react-native-wechat-lib'
import config from '~/imports/config'
import {checkPermission} from '~/common/index'

import Modal from 'react-native-modal'

class InviteModal extends React.Component {
  // template
  render() {
    let {image, qrCodeInvite} = this.state
    const {
      user: {detail: user},
    } = this.props
    const width = Dimensions.get('window').width
    const {visible, qrCode, title: propsTitle} = this.props
    // if (user.id && (!qrCodeInvite || !image)) {
    //   this.getDetail()
    // }
    const title = propsTitle || '图王网'
    if (qrCode) {
      qrCodeInvite = qrCode
    }

    return (
      <Modal
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          zIndex: 100,
        }}
        onBackdropPress={this.closeModal}
        isVisible={visible}
        propagateSwipe={true}>
        <View className={s.contentBox}>
          <ViewShot ref="viewShot" options={{format: 'jpg', quality: 1}}>
            <View className={st.poster} style={{width: width - 28}}>
              <FastImage
                className={st.image}
                style={{width: width - 28, height: width - 8}}
                source={{uri: image}}
                resizeMode={FastImage.resizeMode.stretch}
              />
              <View className={st.bottom}>
                <View>
                  <Text className={st.txt}>{title}</Text>
                  <View className={st.left}>
                    <FastImage
                      style={{width: 40, height: 40, borderRadius: 20}}
                      source={{uri: this.props.user.detail.avatar}}
                      resizeMode={FastImage.resizeMode.stretch}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text className={st.nickname}>好友 {this.props.user.detail.nickname}</Text>
                      <Text className={st.slogan}>邀您共享电商直播副业时代</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <FastImage
                    style={{width: 80, height: 80, marginRight: 20}}
                    source={{uri: qrCodeInvite}}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                  {/*<Text className={s.mini}>长按识别小程序</Text>*/}
                </View>
              </View>
            </View>
          </ViewShot>
        </View>
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
                source={{uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/share-weixin.png'}}
              />
              <Text className={s.shareText}>微信</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.saveImage} className={s.shareItem}>
              <FastImage
                style={{borderRadius: 4, width: 45, height: 45}}
                source={{uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/share-friend.png'}}
              />
              <Text className={s.shareText}>朋友圈</Text>
            </TouchableOpacity>
            {/*<View className={s.shareItem}>*/}
            {/*  <FastImage*/}
            {/*    style={{borderRadius: 4, width: 45, height: 45}}*/}
            {/*    source={{uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/share-qq.png'}}*/}
            {/*  />*/}
            {/*  <Text className={s.shareText}>QQ</Text>*/}
            {/*</View>*/}
            <TouchableOpacity onPress={() => this.saveImage()} className={s.shareItem}>
              <FastImage
                style={{borderRadius: 4, width: 45, height: 45}}
                source={{uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/share-download.png'}}
              />
              <Text className={s.shareText}>保存图片</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {
      qrCodeInvite: '',
      image: '',
      loading: false,
    }
    WeChat.registerApp('wx677f8abb01c89ddb', 'https://www.tuwangnet.com/app/')
  }

  // methods
  onShareAppMessage = (item) => {
    const {title, image} = item
    const {path} = this.props
    const inviteCode = this.props.user.detail.inviteCode
    let handlePath = path || '/pages/home/index'
    let url = inviteCode ? `${handlePath}?inviteCode=${inviteCode}` : handlePath
    return {
      title,
      path: url,
      imageUrl: image,
    }
  }
  handleShare = () => {
    const {image} = this.state
    const share = this.onShareAppMessage({
      title: '分享直推码',
      image,
    })
    WeChat.isWXAppInstalled().then((isInstalled) => {
      if (isInstalled) {
        WeChat.shareMiniProgram({
          title: share.title,
          miniProgramType: config.env === 'test' ? 2 : 0, // 正式版:0，测试版:1，体验版:2
          userName: 'gh_36c68efdb652',
          webpageUrl: 'https://www.tuwangnet.com',
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
  closeModal = () => {
    this.props.close()
  }

  getDetail = () => {
    const {loading} = this.state
    if (!loading) {
      this.setState(
        {
          loading: true,
        },
        () => {
          api
            .getBanner({
              scene: BannerSceneEnum.SHARE,
            })
            .then((res) => {
              res = res || []
              if (res.length) {
                this.setState({
                  image: res[0].image,
                })
              }
            })

          api.getInviteQrcode().then((res) => {
            if (res) {
              this.setState({
                qrCodeInvite: 'data:image/jpeg;base64,' + res,
                loading: false,
              })
            }
          })
        },
      )
    }
  }
  // mounted
  componentDidMount(): void {
    console.log('invite-modal:componentDidMount')
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.getDetail()
    }
  }
}

const mapStateToProps = (state) => {
  const {user} = state
  return {user}
}
export default connect(mapStateToProps)(InviteModal)
