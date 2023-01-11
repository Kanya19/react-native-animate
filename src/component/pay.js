import React from 'react'
import {Dimensions, KeyboardAvoidingView, Platform, Text, View} from 'react-native'
import s from '~/style/component/pay'
import Checkbox from '~/component/checkbox'
import YuButton from '~/component/button'
import {connect} from 'react-redux'
import {PayTypeEnum} from '~/common/constant'

// redux
import {List} from '@ant-design/react-native'
import FastImage from 'react-native-fast-image'
import Modal from 'react-native-modal'

const Item = List.Item
const calc = require('yu.calculator')
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class Pay extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      selectedItem: {},
      isWeixin: false,
      payList: [],
    }
  }

  render() {
    const {visible} = this.props
    const {selectedItem, payList} = this.state

    return (
      <Modal
        style={{
          justifyContent: 'flex-end',
          margin: 0,
          zIndex: 0,
        }}
        onBackdropPress={this.props.onClose}
        isVisible={visible}
        swipeDirection={['down']}
        propagateSwipe={true}>
        <View>
          <View
            style={{
              width: width,
              height: height * 0.7,
              position: 'absolute',
              bottom: 0,
              backgroundColor: 'white',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              zIndex: 0,
            }}>
            <Text className={s.skuHeader}>请选择支付方式</Text>
            <View style={{width: '100%'}}>
              {payList.map((item) => {
                return (
                  <Item
                    key={item.name}
                    onPress={() => {
                      this.handleSelect(item)
                    }}
                    extra={
                      <Checkbox
                        color={'rgb(238, 10, 36)'}
                        // onPress={() => {
                        //   this.handleSelect(item)
                        // }}
                        check={item.selected}
                        size={24}
                      />
                    }>
                    <View className={s.payList}>
                      <FastImage
                        style={{width: 28, height: 28, marginRight: 10}}
                        source={{
                          uri: item.img,
                        }}
                        resizeMode={FastImage.resizeMode.stretch}
                      />
                      <Text className={s.leftTitle}>{item.name}</Text>
                    </View>
                  </Item>
                )
              })}
            </View>
          </View>
          <View style={{backgroundColor: 'white', height: 80, margin: 10}}>
            <YuButton style={{marginTop: 30, marginBottom: 20}} text={'立即购买'} onPress={this.goToConfirmOrder} />
          </View>
        </View>
      </Modal>
    )
  }

  handlePayList = () => {
    let arr = []
    if (Platform.OS !== 'ios' || !this.props.virtral) {
      arr = arr.concat([
        {
          name: '微信支付',
          value: PayTypeEnum.WECHAT,
          img: 'https://twwimg.oss-cn-hangzhou.aliyuncs.com/resource/pay2.png',
          tip: '打开微信APP，扫一扫立即支付',
        },
        {
          name: '支付宝',
          value: PayTypeEnum.ALIPAY,
          img: 'https://twwimg.oss-cn-hangzhou.aliyuncs.com/resource/pay1.png',
          tip: '打开支付宝APP，扫一扫立即支付',
        },
        // {
        //   name: '银联云闪付',
        //   value: PayTypeEnum.BANK,
        //   img: 'https://twwimg.oss-cn-hangzhou.aliyuncs.com/resource/pay3.png',
        //   tip: '打开银联云闪付APP，扫一扫立即支付'
        // },
        // {
        //   name: '招商银行一网通',
        //   value: PayTypeEnum.ZHAOSHANG,
        //   img: 'https://twwimg.oss-cn-hangzhou.aliyuncs.com/resource/pay4.png',
        //   tip: '打开招商银行一网通支付',
        // },
      ])
    }
    if (this.props.usePoint) {
      arr.push({
        name: `账户积分余额(${this.props.user.detail.point}积分) `,
        value: PayTypeEnum.POINT,
        img: 'https://twwimg.oss-cn-hangzhou.aliyuncs.com/resource/pay5.png',
        tip: '积分余额支付',
      })
    }
    this.setState({
      payList: arr,
    })
  }

  handleSelect = (each) => {
    const {payList} = this.state
    payList.map((item) => {
      item.selected = false
    })
    each.selected = true
    this.setState({payList})
  }

  goToConfirmOrder = () => {
    const {payList} = this.state
    const check = payList.filter((item) => item.selected)
    if (check && check.length) {
      this.props.onSubmit(check[0].value)
    }
    // console.log('check', check)
    // if (this.checked === '') {
    //   return
    // }
    // console.log('this.isBaidu', this.isBaidu)
    // if (this.isBaidu && this.checked !== PayTypeEnum.POINT) {
    //   this.baiduVisible = true
    //   // this.onClose()
    //   return
    // }
    // this.$emit('submit', this.checked)
  }
  componentWillMount() {
    this.handlePayList()
  }
}

const mapStateToProps = (state) => {
  const {user} = state
  return {user}
}
export default connect(mapStateToProps)(Pay)
