import React from 'react'
import {Text, View} from 'react-native'
import Modal from 'react-native-modal'
import TabView from '~/component/tab-view'
import api from '~/api'
import YuList from '~/component/yu-list'
import FastImage from 'react-native-fast-image'
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
          zIndex: 0,
        }}
        onBackdropPress={() => this.setState({visible: false})}
        isVisible={visible}
        propagateSwipe={true}>
        {/*<View style={{position: 'relative'}}>*/}
        <FastImage
          style={{position: 'relative', width: '100%', height: 55}}
          source={{
            uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/mailDesc.png',
          }}
          resizeMode={FastImage.resizeMode.stretch}>
          <TouchableOpacity
            onPress={() => {
              this.setState({visible: false})
            }}>
            <FastImage
              style={{position: 'absolute', right: 20, top: 15, width: 28, height: 28}}
              source={{
                uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/close_fill.png',
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </TouchableOpacity>
        </FastImage>

        {/*</View>*/}

        <View style={{height: '60%', backgroundColor: '#EEEEEE', width: '100%'}}>
          <YuList
            hasMore={hasMore}
            paddingBottom={0}
            list={list}
            loading={loading}
            renderItem={({item, index}) => {
              return (
                <View
                  key={index}
                  style={{
                    margin: 20,
                    marginBottom: 10,
                    backgroundColor: 'white',
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 15,
                  }}>
                  <View>
                    <Text style={{fontWeight: 'bold', marginBottom: 10}}>{item.title}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>{item.content}</Text>
                    </View>
                  </View>
                </View>
              )
            }}
            onRefresh={this.onPullDownRefresh}
            onEndReached={this.onReachBottom}
            keyExtractor={(item) => item.id.toString()}
          />
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
      form: {
        pageNo: 1,
        pageSize: 10,
      },
      hasMore: false,
    }
  }

  openModal = () => {
    this.setState({
      visible: true,
    })
  }

  onPullDownRefresh = async () => {
    await this.props.setReset()
    await this.props.getList()
  }

  onReachBottom = () => {
    this.props.getMore()
  }

  componentDidMount() {
    this.props.onRef(this)
  }
}

export default mailBox
