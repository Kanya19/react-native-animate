import React from 'react'
import {Text, View, ScrollView} from 'react-native'
import Modal from 'react-native-modal'
import s from '~/style/component/product-share-post'
import Post from '~/component/post'
import TouchableOpacity from '~/component/touchable-opacity'

class SharePost extends React.Component {
  // template
  render() {
    const {visible, bottomText} = this.props
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
          propagateSwipe={true}>
          <View className={s.invitePage}>
            <ScrollView>
              <View className={s.sharePicture}>
                <View className={s.canvasWrap}>
                  <Post onRef={this.onRef} {...this.props} />
                  <TouchableOpacity className={s.sharePicBtn} onPress={() => this.saveImage(true)}>
                    <Text className={s.shareText} style={{marginBottom: 10}}>
                      一键发圈
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity className={s.sharePicBtn} onPress={() => this.saveImage(false)}>
                    <Text className={s.shareText}>保存海报</Text>
                    {!!bottomText && <Text className={s.bottomText}>{bottomText}</Text>}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{height: 100}} />
            </ScrollView>
          </View>
        </Modal>
      </>
    )
  }
  // data
  constructor(props: any) {
    super(props)
    this.state = {
      image: '',
      qrcode: '',
    }
  }
  onRef = (ref) => {
    this.child = ref
  }
  handleShare = () => {
    console.log('分享')
    this.handleClose()
  }
  shareFriend = () => {}
  handleClose = () => {
    this.props.handleClose()
  }
  saveImage = (shareWechat) => {
    this.child.saveImage(shareWechat)
  }
  componentDidMount(): void {}
}

export default SharePost
