import React from 'react'
import {Alert, Text, View} from 'react-native'
import Modal from 'react-native-modal'
import {navigate} from '~/route/navigation'
import api from '~/api'
import {connect} from 'react-redux'
import YuList from '~/component/yu-list'
import FastImage from 'react-native-fast-image'
import s from '~/style/component/modal-tally'
import {Stepper} from '@ant-design/react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import TouchableOpacity from '~/component/touchable-opacity'
import {FarmTypeEnum} from '~/common/constant'
import LinearGradient from 'react-native-linear-gradient'
import wx from '~/common/wx'

class mailBox extends React.Component {
  // template
  render() {
    const {visible, loading, addressShow, addressLabel, name, phone} = this.state
    const {list, hasMore, type} = this.props
    const {userAddress} = this.props.user.detail
    return (
      <View>
        <Modal
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            margin: 0,
          }}
          onBackdropPress={() => this.setState({visible: false})}
          isVisible={visible}
          propagateSwipe={true}>
          {/*<View style={{position: 'relative'}}>*/}
          <FastImage
            style={{position: 'relative', width: '100%', height: 54}}
            source={{
              uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/exchange.png',
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

          <View style={{height: '60%', backgroundColor: '#EEEEEE', width: '100%'}}>
            <YuList
              hasMore={hasMore}
              header={
                <TouchableOpacity
                  onPress={() => this.setState({visible: false}, navigate('ChangeList'))}
                  className={s.cowRow}
                  style={{height: 30, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                  <Text style={{marginRight: 10}}>我兑换的产品</Text>
                </TouchableOpacity>
              }
              paddingBottom={0}
              list={list}
              loading={loading}
              renderItem={({item, index}) => {
                return (
                  <View
                    key={item.id}
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
                            style={{width: 70, height: 70, borderRadius: 10, flexShrink: 0, marginRight: 20}}
                            source={{
                              uri: item.mainImage,
                            }}
                            resizeMode={FastImage.resizeMode.stretch}
                          />
                        </View>
                        <View style={{width: 100}}>
                          <Text numberOfLines={1} style={{width: 100, fontSize: 16, fontWeight: 'bold'}}>
                            {item.name}
                          </Text>
                          <View>
                            <Text numberOfLines={1} style={{width: 100, marginTop: 4, fontSize: 12, color: '#999'}}>
                              库存：{item.stock}
                            </Text>
                            {type === FarmTypeEnum.COW && (
                              <Text style={{color: '#999', marginTop: 4, fontSize: 12}}>兑换需{item.milk}kg牛奶</Text>
                            )}
                            {type === FarmTypeEnum.TREE && (
                              <Text style={{color: '#999', marginTop: 4, fontSize: 12}}>兑换需1棵果树</Text>
                            )}
                          </View>
                        </View>
                      </View>
                    </View>
                    <LinearGradient
                      end={{x: 0, y: 1}}
                      start={{x: 1, y: 1}}
                      colors={['#31D49B', '#16A962']}
                      style={{borderRadius: 15, width: 60, alignItems: 'center'}}>
                      <TouchableOpacity onPress={() => this.handleSubmit(item)}>
                        <Text style={{color: 'white', lineHeight: 30, fontSize: 14}}>兑换</Text>
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
        <Modal
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
          }}
          onBackdropPress={() => this.setState({addressShow: false})}
          isVisible={addressShow}
          propagateSwipe={true}>
          <View style={{borderRadius: 20, padding: 20, backgroundColor: '#EEEEEE', width: '80%'}}>
            <Text>填写收货地址</Text>
            <TouchableOpacity
              onPress={this.goToAddressList}
              style={{marginVertical: 18, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{width: '90%'}}>{addressLabel}</Text>
              <Icon name="right" size={16} />
            </TouchableOpacity>
            <View style={{marginBottom: 18, flexDirection: 'row', alignItems: 'center'}}>
              <Text>{name}</Text>
              <Text>{phone}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>数量</Text>
              <Stepper
                style={{marginLeft: 100}}
                step={1}
                key="1"
                min={1}
                readOnly={false}
                defaultValue={1}
                onChange={this.handleCountChange}
              />
            </View>
            <View style={{width: '100%', marginTop: 20, alignItems: 'center'}}>
              <LinearGradient
                end={{x: 0, y: 1}}
                start={{x: 1, y: 1}}
                colors={['#31D49B', '#16A962']}
                style={{borderRadius: 15, paddingHorizontal: 20}}>
                <TouchableOpacity onPress={this.goToConfirm}>
                  <Text style={{color: 'white', lineHeight: 30, fontSize: 14}}>兑换</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
  // data
  constructor(props: any) {
    super(props)
    this.state = {
      loading: false,
      visible: false,
      addressShow: false,
      tabIndex: 0,
      list: [],
      total: 0,
      count: 0,
      addressLabel: '',
      name: '',
      phone: '',
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

  goToAddressList = () => {
    this.setState(
      {
        visible: false,
        addressShow: false,
      },
      navigate('AddressList'),
    )
  }

  goToConfirm = () => {
    const {currentMilk, count, item, treeId, userAddress} = this.state
    const {type} = this.props
    if (type === FarmTypeEnum.COW && currentMilk < count * item.milk) {
      wx.showToast({
        title: '牛奶不够啦，快去喂食挤奶吧',
        icon: 'fail',
      })
      return
    }

    if (userAddress.id) {
      const orderItem = {
        count: count,
        farmProductId: item.id,
        userAddressId: userAddress.id,
      }

      if (type === FarmTypeEnum.COW) {
        api.exchangeFarmProduct(orderItem).then((res) => {
          wx.showToast({
            title: '兑换成功',
            icon: 'success',
          })
          this.setState({
            addressShow: false,
            visible: false,
          })
        })
      }
      if (type === FarmTypeEnum.TREE) {
        orderItem.treeId = treeId
        api.exchangeTreeProduct(orderItem).then((res) => {
          wx.showToast({
            title: '兑换成功',
            icon: 'success',
          })
          this.setState({
            addressShow: false,
            visible: false,
          })
        })
      }
    } else {
      wx.showToast({
        title: '请填写收获地址',
        icon: 'fail',
      })
    }
  }

  handleCountChange = (e) => {
    this.setState({
      count: e,
    })
  }

  getUserAddress = () => {
    const {id} = this.props.user.detail
    api.getUserAddressList().then((res) => {
      res.map((item) => {
        if (item.main === 1) {
          console.log(item)
          const nameList = item.mergerName.split(',')
          item.addressLabel = nameList[0] + nameList[1] + nameList[2] + nameList[3] + item.address
          this.setState({
            addressLabel: item.addressLabel,
            name: item.name,
            phone: item.phone,
            userAddress: item,
          })
        }
      })
    })
  }

  handleSubmit(item) {
    console.log(item)
    if (item.stock <= 0) {
      Alert.alert('库存不足')
      return
    }
    if (this.props.type === FarmTypeEnum.COW && this.props.currentMilk < item.milk) {
      Alert.alert('牛奶不足')
      return
    }
    // this.$store.dispatch('autoLogin').then((res) => {
    //   if (!this.state.userAddress.id) {
    //     api.getMainUserAddress().then((res) => {
    //       if (res) {
    //         this.$store.commit('UPDATE_MAIN_ADDRESS', res)
    //       }
    //     })
    //   }
    // })
    this.setState(
      {
        item: item,
        addressShow: true,
      },
      this.getUserAddress,
    )
  }

  onPullDownRefresh = async () => {
    await this.props.setReset()
    await this.props.getList()
  }

  onReachBottom = () => {
    this.props.getMore()
  }

  componentDidMount() {
    console.log(this.props)
    this.props.onRef(this)
  }
}

const mapStateToProps = (state) => {
  const {user, order} = state
  return {user, order}
}
export default connect(mapStateToProps)(mailBox)
