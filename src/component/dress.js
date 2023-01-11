import React from 'react'
import {Alert, ScrollView, Text, View} from 'react-native'
import Modal from 'react-native-modal'
import TabView from '~/component/tab-view'
import {navigate} from '~/route/navigation'
import api from '~/api'
import FastImage from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient'
import s from '~/style/component/modal-tally'
import {humanizedNum} from '~/common/index'
import TouchableOpacity from '~/component/touchable-opacity'

class mailBox extends React.Component {
  // template
  render() {
    const {visible, loading, rankIcon} = this.state
    const {list, hasMore} = this.props
    return (
      <Modal
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          margin: 0,
        }}
        onBackdropPress={this.closeModal}
        isVisible={visible}
        propagateSwipe={true}>
        {/*<View style={{position: 'relative'}}>*/}
        <FastImage
          style={{position: 'relative', width: '100%', height: 108}}
          source={{
            uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/props.png',
          }}
          resizeMode={FastImage.resizeMode.stretch}>
          <TouchableOpacity onPress={this.closeModal}>
            <FastImage
              style={{position: 'absolute', right: 20, top: 15, width: 28, height: 28}}
              source={{
                uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/close_fill.png',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </TouchableOpacity>
        </FastImage>
        <View style={{height: 210}}>
          <ScrollView horizontal style={{backgroundColor: '#eee'}}>
            {this.props.list.map((item, key) => {
              return (
                <View
                  key={key}
                  style={{
                    height: 170,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    padding: 16,
                    borderRadius: 15,
                    margin: 20,
                  }}>
                  <Text>{item.text}</Text>
                  <FastImage
                    style={{width: 80, height: 80}}
                    source={{
                      uri: item.img,
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                  <TouchableOpacity onPress={() => this.handleClick(key)}>
                    <LinearGradient
                      style={{borderRadius: 15, width: 108}}
                      end={{x: 0, y: 0}}
                      start={{x: 0, y: 1}}
                      colors={['#31D49B', '#16A962']}>
                      <Text
                        style={{
                          color: 'white',
                          textAlign: 'center',
                          lineHeight: 30,
                        }}>
                        {item.active ? '卸下' : '使用'}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )
            })}
          </ScrollView>
        </View>
      </Modal>
    )
  }
  // data
  constructor(props: any) {
    super(props)
    this.state = {
      loading: false,
      visible: false,
      tabIndex: 0,
      list: [],
      total: 0,
    }
  }

  openModal = () => {
    this.setState({
      visible: true,
    })
  }

  closeModal = () => {
    this.setState(
      {
        visible: false,
      },
      this.props.setReset,
    )
  }

  handleClick = (key) => {
    this.props.handleDress(key)
    const list = this.props.list
      .filter((item) => item.active)
      .map((item) => {
        item = item.className
        return item
      })
    api
      .editCow({
        decorate: JSON.stringify(list),
      })
      .then((res) => {
        console.log(res)
      })
  }

  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.setReset()
  }
}

export default mailBox
