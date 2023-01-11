import React from 'react'
import {Alert, Text, View} from 'react-native'
import Modal from 'react-native-modal'
import {Modal as M} from '@ant-design/react-native'
import s from '~/style/component/product-share'
import FastImage from 'react-native-fast-image'
import TouchableOpacity from '~/component/touchable-opacity'
import SharePost from '~/component/product-share-post'
import * as WeChat from 'react-native-wechat-lib'
import config from '~/imports/config'
import {navigate} from '~/route/navigation'

class ModalTally extends React.Component {
  // template
  render() {
    const {visible} = this.props
    const {postVisible} = this.state
    return (
      <>
        <Modal
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            margin: 0,
          }}
          isVisible={visible}
          onBackdropPress={this.handleClose}
          propagateSwipe={false}>
          <View className={s.modalBox}>
            <Text className={s.header}>分享</Text>
            <View className={s.itemWrap}>
              <TouchableOpacity className={s.item} onPress={this.handleShare}>
                <FastImage
                  style={{width: 44, height: 36}}
                  source={{
                    uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/wechat.png',
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.stretch}
                />
                <Text className={s.label}>分享给微信好友</Text>
              </TouchableOpacity>
              <TouchableOpacity className={s.item} onPress={this.doShowSharePicture}>
                <FastImage
                  style={{width: 44, height: 36}}
                  source={{
                    uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/friend-circle.png',
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.stretch}
                />
                <Text className={s.label}>生成分享海报</Text>
              </TouchableOpacity>
            </View>
          </View>
          <SharePost
            {...this.props}
            visible={postVisible}
            handleClose={() => {
              this.setState({
                postVisible: false,
              })
            }}
          />
        </Modal>
      </>
    )
  }
  // data
  constructor(props: any) {
    super(props)
    this.state = {
      postVisible: false,
    }
    WeChat.registerApp('wx677f8abb01c89ddb', 'https://www.tuwangnet.com/app/')
  }
  handleShare = () => {
    const share = this.onShareAppMessage()
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
    this.handleClose()
  }

  onShareAppMessage = () => {
    const {sharePath, title, image} = this.props
    let sharePath1
    if (sharePath) {
      sharePath1 = sharePath
    } else {
      sharePath1 = `pages/home/productDetail?spuId=${this.props.spu.id}`
      if (this.props.user.detail.inviteCode) {
        sharePath1 = `${sharePath1}&inviteCode=${this.props.user.detail.inviteCode}`
      }
    }

    return {
      // 标题
      title: title || this.props.spu.name,
      path: sharePath1,
      imageUrl: image || this.props.spu.mainImage,
    }
  }
  doShowSharePicture = () => {
    if (!this.props.user.detail.id) {
      M.alert('温馨提示', '请登录', [
        {text: '取消', onPress: () => '', style: 'cancel'},
        {text: '确定', onPress: () => navigate('Login')},
      ])
      this.handleClose()
      return
    }
    // this.handleClose()
    this.setState({
      postVisible: true,
    })
  }
  handleClose = () => {
    this.props.handleClose()
  }
  componentDidMount() {}
}
export default ModalTally
