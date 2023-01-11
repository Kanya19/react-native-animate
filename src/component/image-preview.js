import React, {Component} from 'react'
import {ActivityIndicator, Dimensions, Modal, Platform, View} from 'react-native'
import CameraRoll from '@react-native-community/cameraroll'
import RNFetchBlob from 'rn-fetch-blob'
import ImageViewer from 'react-native-image-zoom-viewer'
import {checkPermission} from '~/common/index'

const screenHeight = Dimensions.get('window').height
export default class ImagePreview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
      animating: true,
    }
    this.renderLoad = this.renderLoad.bind(this)
    this.savePhoto = this.savePhoto.bind(this)
    this._Close = this._Close.bind(this)
  }
  _Close() {
    this.props.cancel()
  }
  renderLoad() {
    //这里是写的一个loading
    return (
      <View style={{marginTop: screenHeight / 2 - 20}}>
        <ActivityIndicator animating={this.state.animating} size={'large'} />
      </View>
    )
  }
  handleSavePhoto(url) {
    checkPermission().then(() => {
      CameraRoll.save(url, {type: 'photo'})
        .then(function (result) {
          alert('已保存到系统相册')
        })
        .catch(function (error) {
          alert('保存失败，请检查是否给了相册或存储权限')
        })
    })
  }
  savePhoto(url) {
    if (Platform.OS === 'ios') {
      this.handleSavePhoto(url)
    } else {
      RNFetchBlob.config({fileCache: true, appendExt: 'png'})
        .fetch('GET', url, {})
        .then((res) => {
          const localUri = res.path().startsWith('file://') ? res.path() : `file://${res.path()}`
          this.handleSavePhoto(localUri)
        })
        .catch((error) => {
          // 没有访问外部存储权限
        })
    }
  }

  render() {
    let imageData = this.props.imaeDataUrl
    // let IsArray = Array.isArray(this.props.imaeDataUrl)
    let ImageObjArray = []
    for (let i = 0; i < imageData.length; i++) {
      let Obj = {}
      Obj.url = imageData[i]
      ImageObjArray.push(Obj)
    }
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}>
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.props.modalVisible}
          //    onRequestClose={() => { this._pressSignClose() }}
        >
          <ImageViewer
            imageUrls={ImageObjArray} // 照片路径
            enableImageZoom={true} // 是否开启手势缩放
            saveToLocalByLongPress={true} //是否开启长按保存
            index={this.props.currentImageIndex} // 初始显示第几张
            // failImageSource={} // 加载失败图片
            loadingRender={this.renderLoad}
            enableSwipeDown={false}
            menuContext={{saveToLocal: '保存图片', cancel: '取消'}}
            onChange={(index) => {}} // 图片切换时触发
            onClick={() => {
              // 图片单击事件
              this._Close()
            }}
            onSave={(url) => {
              this.savePhoto(url)
            }}
          />
        </Modal>
      </View>
    )
  }
}
