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
import wx from '~/common/wx'

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
          style={{position: 'relative', width: '100%', height: 54}}
          source={{
            uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/tree-popup-header.png',
          }}
          resizeMode={FastImage.resizeMode.stretch}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                marginBottom: 5,
              }}>
              树苗选择
            </Text>
          </View>

          <TouchableOpacity onPress={this.closeModal}>
            <FastImage
              style={{position: 'absolute', right: 20, top: -40, width: 28, height: 28}}
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
                  <Text>{item.name}</Text>
                  <FastImage
                    style={{width: 80, height: 80, marginBottom: 10}}
                    source={{
                      uri: item.feature[0].treeImage,
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                  <TouchableOpacity onPress={() => this.handleClick(item)}>
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
                        {item.stock > 0 ? '领取' : '暂无库存'}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )
            })}
          </ScrollView>
        </View>
        <View style={{width: '100%', backgroundColor: '#eeeeee'}}>
          <Text style={{fontSize: 14, marginTop: 14, marginBottom: 30, marginLeft: 14}}>
            最多同时种3棵果树，请用心选择哦~
          </Text>
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

  handleClick = (item) => {
    api.addTree({saplingId: item.id}).then((res) => {
      Alert.alert('树苗领取成功')
      this.props.getDetail()
    })
  }

  componentDidMount() {
    console.log('list', this.props.list)
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.setReset()
  }
}

export default mailBox
