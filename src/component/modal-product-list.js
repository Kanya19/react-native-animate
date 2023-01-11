import React from 'react'
import {ImageBackground, Text, View, Alert, TextInput} from 'react-native'
import Modal from 'react-native-modal'
import api from '~/api'
import YuList from '~/component/yu-list'
import FastImage from 'react-native-fast-image'
import s from '~/style/component/modal-product-list'
import Price from '~/component/price'
import TouchableOpacity from '~/component/touchable-opacity'
import {navigate} from '~/route/navigation'
import {updateShoppingCartRefresh} from '~/store/action/app-action'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class ModalTally extends React.Component {
  // template
  render() {
    const {visible, searchText, list, loading} = this.state
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
        <View className={s.modalBox}>
          <YuList
            hasMore={this.state.hasMore}
            list={list}
            loading={loading}
            header={
              <View className={s.listHeader}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FastImage
                    style={{
                      width: 15,
                      height: 15,
                      marginRight: 2,
                    }}
                    source={{
                      uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/home_search_icon.png',
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                  <TextInput
                    onSubmitEditing={this.onSubmit}
                    style={{width: 100, marginLeft: 10}}
                    placeholder={'搜索'}
                    onChangeText={(value) => {
                      this.setState({
                        searchText: value,
                      })
                    }}
                    value={searchText}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: '#898989', marginRight: 10}}>客服</Text>
                  <TouchableOpacity onPress={() => navigate('Shop')}>
                    <Text style={{color: '#898989'}}>购物车</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity className={s.rankItem} onPress={() => this.goToProduct(item)}>
                  <View className={s.rankInfo}>
                    <ImageBackground
                      style={{
                        width: 100,
                        height: 100,
                        marginRight: 10,
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: item.isLive ? '#fe163d' : '#fff',
                      }}
                      source={{uri: item.spu.mainImage}}
                      resizeMode={FastImage.resizeMode.stretch}>
                      <View style={{backgroundColor: '#222', opacity: 0.7, alignSelf: 'flex-start', width: 40}}>
                        <Text style={{color: '#fff', textAlign: 'center'}}>{index + 1}</Text>
                      </View>
                    </ImageBackground>
                    <View
                      style={{
                        width: '70%',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}>
                      <Text numberOfLines={2}>{item.spu.name}</Text>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Price price={item.spu.minPrice} color={'#FF4A4A'} size="normal" style={{flex: 0}} />
                          <Text className={s.originalPrice}>￥{item.spu.originalPrice}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <TouchableOpacity onPress={() => this.addShop(item)}>
                            <FastImage
                              style={{
                                width: 20,
                                height: 20,
                              }}
                              source={{uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/live-cart.png'}}
                              resizeMode={FastImage.resizeMode.stretch}
                            />
                          </TouchableOpacity>
                          <Text className={s.btnBuy}>去抢购</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
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
      list: [],
      total: 0,
      searchText: '',
      form: {
        pageNo: 1,
        pageSize: 10,
      },
      hasMore: false,
    }
  }
  onSubmit = () => {
    const {form, searchText} = this.state
    form.pageNo = 1
    form.pageSize = 10
    this.setState(
      {
        list: [],
        total: 0,
        searchText,
        form,
      },
      () => {
        this.getList()
      },
    )
  }
  addShop = (item) => {
    const orderItem = {
      spuId: item.spu.id,
      count: 1,
    }
    // 添加到购物车中
    api.addToShoppingCart(orderItem).then((res) => {
      // Toast.success('成功添加购物车')
      Alert.alert('成功添加购物车', '', [
        {
          text: '确定',
        },
      ])
      this.props.updateShoppingCartRefresh(true)
    })
  }
  openModal = () => {
    this.getList()
    this.setState({
      visible: true,
    })
  }
  goToProduct = (item) => {
    this.setState(
      {
        visible: false,
      },
      navigate('ProductDetail', {
        spuId: item.spuId,
      }),
    )
  }
  goToShop = () => {
    this.setState(
      {
        visible: false,
      },
      navigate('Shop'),
    )
  }
  goToHomePage = () => {
    this.setState(
      {
        visible: false,
      },
      navigate('HomePage'),
    )
  }
  getList() {
    const {loading, searchText} = this.state
    if (!loading) {
      this.setState({loading: true}, () => {
        api
          .getRoomSpuList({
            roomId: 2,
            title: searchText,
          })
          .then((result) => {
            console.log('result', result)
            this.setState({
              list: result || [],
              loading: false,
            })
          })
      })
    }
  }

  onPullDownRefresh = () => {
    this.setState(
      {
        list: [],
        total: 0,
        form: {
          pageNo: 1,
          pageSize: 10,
        },
      },
      this.getList,
    )
  }

  onReachBottom = () => {
    const {form, hasMore, loading} = this.state
    if (!hasMore || loading) {
      return
    }
    form.pageNo = form.pageNo + 1
    this.setState({form}, this.getList)
  }

  componentDidMount() {
    this.props.onRef(this)
  }
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateShoppingCartRefresh,
    },
    dispatch,
  )
export default connect(mapDispatchToProps)(ModalTally)
