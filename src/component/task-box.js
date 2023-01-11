import React from 'react'
import {Alert, Text, View} from 'react-native'
import Modal from 'react-native-modal'
import TabView from '~/component/tab-view'
import {navigate} from '~/route/navigation'
import api from '~/api'
import YuList from '~/component/yu-list'
import FastImage from 'react-native-fast-image'
import s from '~/style/component/modal-tally'
import {humanizedNum, miniNavigate} from '~/common/index'
import TouchableOpacity from '~/component/touchable-opacity'
import {
  CowStatus,
  MailBoxTypeEnum,
  TaskStatusEnum,
  FarmTaskKindEnum,
  FarmTaskKindURL,
  CowAfterAction,
} from '~/common/constant'
import LinearGradient from 'react-native-linear-gradient'
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
          style={{position: 'relative', width: '100%', height: this.props.type === MailBoxTypeEnum.COW ? 108 : 54}}
          source={{
            uri:
              this.props.type === MailBoxTypeEnum.COW
                ? 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/task.png'
                : 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/tree-popup-header.png',
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
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: 15,
                  }}>
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <View class="avatar">
                        <FastImage
                          style={{width: 40, height: 40, borderRadius: 6, flexShrink: 0, marginRight: 10}}
                          source={{
                            uri: item.mainImage,
                          }}
                          resizeMode={FastImage.resizeMode.stretch}
                        />
                      </View>
                      <View style={{width: 100}}>
                        <Text numberOfLines={1} style={{width: 150, fontSize: 16, fontWeight: 'bold'}}>
                          {item.name}
                        </Text>
                        <View>
                          {item.stock < 50 && (
                            <Text style={{color: '#999', fontSize: 12}}>
                              任务总数：{item.sales}/{item.sales + item.stock}
                            </Text>
                          )}
                          {item.limitCount < 11 && (
                            <Text style={{color: '#999', fontSize: 12}}>每人限做{item.limitCount}次</Text>
                          )}
                        </View>
                        <Text numberOfLines={1} style={{width: 150, marginTop: 4, fontSize: 12, color: '#999'}}>
                          {item.description}
                        </Text>
                        <Text style={{width: 100, marginTop: 4, fontSize: 12, color: '#999'}}>
                          +{item.reward}kg {this.props.type ? '水能量' : '草'}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <LinearGradient
                    end={{x: 0, y: 1}}
                    start={{x: 1, y: 1}}
                    colors={['#31D49B', '#16A962']}
                    style={{borderRadius: 15, width: 60, alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => this.handleClick(item)}>
                      <Text style={{color: 'white', lineHeight: 30, fontSize: 14}}>{item.statusLabel}</Text>
                    </TouchableOpacity>
                  </LinearGradient>
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
  closeModal = () => {
    this.setState({
      visible: false,
    })
  }

  handleClick = (item) => {
    if (item.taskStatus !== TaskStatusEnum.FINISHED) {
      if (item.taskStatus === TaskStatusEnum.UNCLAIMED) {
        api
          .editUserTask({
            taskId: item.id,
          })
          .then((res) => {
            console.log(res)
            item.taskStatus = TaskStatusEnum.CLAIMED
            item.statusLabel = '去完成'
            this.setState({})
            Alert.alert('领取成功，快去完成任务吧')
          })
          .catch(this.closeModal)
      } else if (item.taskStatus === TaskStatusEnum.CLAIMED) {
        console.log(item)
        if (item.kind === FarmTaskKindEnum.INVITE) {
          this.closeModal()
          miniNavigate(FarmTaskKindURL[item.kind])
        }

        if (item.kind === FarmTaskKindEnum.ALL_FREE_SPU) {
          this.closeModal()
          miniNavigate(FarmTaskKindURL[item.kind])
        }

        if (item.kind === FarmTaskKindEnum.TARGET_FREE_SPU) {
          const req = FarmTaskKindURL[item.kind]
          req.query = {spuId: item.relateId}
          this.closeModal()
          miniNavigate(req)
        }

        if (item.kind === FarmTaskKindEnum.ALL_SHOP_SPU) {
          this.closeModal()
          const req = FarmTaskKindURL[item.kind]
          miniNavigate(req)
        }

        if (item.kind === FarmTaskKindEnum.TARGET_SHOP_SPU) {
          this.closeModal()
          const req = FarmTaskKindURL[item.kind]
          req.query = {spuId: item.relateId}
          miniNavigate(req)
        }
        if (item.kind === FarmTaskKindEnum.SIGN_IN) {
          this.closeModal()
          const req = FarmTaskKindURL[item.kind]
          miniNavigate(req)
        }
        if (item.kind === FarmTaskKindEnum.SIGN_IN_CUMULATIVE) {
          this.closeModal()
          const req = FarmTaskKindURL[item.kind]
          miniNavigate(req)
        }
        if (item.kind === FarmTaskKindEnum.VIEW_URL) {
          this.closeModal()
          const feature = JSON.parse(item.feature)
          api.doneUserTask({kind: FarmTaskKindEnum.VIEW_URL, relateId: item.id})
          miniNavigate(feature.url)
        }
        if (item.kind === FarmTaskKindEnum.POSTER) {
          this.closeModal()
          navigate('Poster')
        }
      }
    } else {
      Alert.alert('您已完成啦，明天再来')
    }
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
  componentWillUnmount() {
    this.props.setReset()
  }
}

export default mailBox
