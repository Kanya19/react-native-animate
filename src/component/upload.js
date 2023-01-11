import React, {Component} from 'react'
import {Image, Text, View} from 'react-native'
import v from '~/style/varible'
import ImagePicker from 'react-native-image-crop-picker'
import ImagePreview from '~/component/image-preview'
import Icon from 'react-native-vector-icons/AntDesign'
import wx from '~/common/wx'
import TouchableOpacity from '~/component/touchable-opacity'
import config from '~/imports/config'

var Fly = require('flyio/dist/npm/fly')
const fly = new Fly()

class Upload extends Component {
  static defaultProps = {
    imageList: [],
    max: 1,
  }
  render() {
    const {visible, currentImage} = this.state
    const {imageList, max, size} = this.props
    let showImageList = imageList.length < max ? [...imageList, 'SELECT'] : imageList
    return (
      <View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {showImageList.map((item, index) => {
            return (
              <View key={index}>
                {item === 'SELECT' ? (
                  this.props.children ? (
                    <TouchableOpacity onPress={this.choosePic}>
                      {React.Children.map(this.props.children, function (value, key) {
                        return value
                      })}
                    </TouchableOpacity>
                  ) : (
                    <View style={{backgroundColor: v.bgColor, borderRadius: 6, marginRight: 10, marginBottom: 10}}>
                      <Text
                        style={{
                          width: size || 90,
                          height: size || 90,
                          textAlign: 'center',
                          lineHeight: size || 90,
                          color: v.textLighter,
                        }}
                        onPress={this.choosePic}>
                        <Icon name="plus" size={30} />
                      </Text>
                    </View>
                  )
                ) : (
                  <View
                    style={{
                      position: 'relative',
                      width: size || 90,
                      height: size || 90,
                      marginRight: 10,
                      marginBottom: 10,
                    }}>
                    <TouchableOpacity onPress={() => this.setState({visible: true, currentImage: item})}>
                      <Image
                        style={{width: size || 90, height: size || 90}}
                        resizeMode={'cover'}
                        source={{uri: item}}
                      />
                    </TouchableOpacity>
                    <Icon
                      name="closecircle"
                      size={16}
                      style={{position: 'absolute', top: 0, right: 0}}
                      color={v.textLight}
                      onPress={() => this.deleteImage(index)}
                    />
                  </View>
                )}
              </View>
            )
          })}
        </View>
        <ImagePreview
          modalVisible={visible}
          currentImage={currentImage}
          imaeDataUrl={imageList}
          cancel={() => this.setState({visible: false})}
        />
      </View>
    )
  }

  renderItem = ({item, index}) => {
    return (
      <View key={index}>
        {item === 'SELECT' ? (
          <View style={{backgroundColor: v.bgColor, borderRadius: 6, marginRight: 10, marginBottom: 10}}>
            <Text
              style={{
                width: 100,
                height: 100,
                textAlign: 'center',
                lineHeight: 100,
                color: v.textLighter,
              }}
              onPress={this.choosePic}>
              <Icon name="camera" size={30} />
            </Text>
          </View>
        ) : (
          <View style={{position: 'relative', width: 100, height: 100, marginRight: 10, marginBottom: 10}}>
            <TouchableOpacity onPress={() => this.setState({visible: true, currentImage: item})}>
              <Image style={{width: 100, height: 100}} resizeMode={'cover'} source={{uri: item}} />
            </TouchableOpacity>
            <Icon
              name="closecircle"
              size={16}
              style={{position: 'absolute', top: 0, right: 0}}
              color={v.textLight}
              onPress={() => this.deleteImage(index)}
            />
          </View>
        )}
      </View>
    )
  }

  //data
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      currentImage: '',
    }
  }

  choosePic = () => {
    const maxFiles = this.props.max - this.props.imageList.length
    ImagePicker.openPicker({multiple: true, maxFiles}).then((images) => {
      let data = new FormData()
      images.forEach((item) => {
        data.append('files', {uri: item.path, type: 'multipart/form-data', name: 'image.png'})
      })
      storage.load({key: 'token'}).then((token) => {
        fly.config.headers = {
          'Content-Type': 'multipart/form-data',
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        }
        const key = wx.showLoading({title: '图片上传中'})
        console.log('response', config.updateImages, data)
        fly
          .post(config.updateImages, data)
          .then((res) => {
            console.log('成功', res)
            this.props.onImageUpload(res.data.value)
            wx.hideLoading(key)
          })
          .catch((err) => {
            console.log('失败', err)
            wx.hideLoading(key)
          })
      })
    })
  }

  deleteImage = (index) => {
    this.props.onDeleteImage(index)
  }
}

export default Upload
