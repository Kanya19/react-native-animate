import React from 'react'
import Modal from 'react-native-modal'
import {Dimensions, ScrollView, Text, TouchableOpacity, View, Alert} from 'react-native'
import s from '~/style/component/modal-verification'
import Price from '~/component/price'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/AntDesign'
import wx from '~/common/wx'
import {navigate} from '~/route/navigation'

class ModalVerification extends React.Component {
  // template
  render() {
    const {visible, verifyInfo} = this.props
    return (
      <Modal
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          zIndex: 0,
        }}
        onBackdropPress={() => this.handleClose()}
        isVisible={visible}
        scrollTo={this.handleScrollTo}
        propagateSwipe={true}>
        {!!visible && (
          <View className={s.orderPanelWrap}>
            <View className={s.orderPanel}>
              <Text className={s.title}>商品核销信息确认</Text>
              <View
                className={s.header}
                style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text numberOfLines={1} style={{width: 200}}>
                  {verifyInfo.shopName}商品核销信息确认商品核销信息确认商品核销信息确认
                </Text>
                <Text className={s.status}>{verifyInfo.statusLabel}</Text>
              </View>
              <View className={s.orderSku}>
                <View style={{width: '20%'}}>
                  <FastImage
                    style={{height: 65, width: 65, borderRadius: 8, marginRight: 14}}
                    source={{
                      uri: verifyInfo.image,
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                </View>
                <View style={{width: '70%'}}>
                  <View className={s.content}>
                    <Text numberOfLines={2}>{verifyInfo.productName}</Text>
                    <View className={s.priceWrap}>
                      <Price price={verifyInfo.price} color={'#777777'} />
                      <Text>
                        {' x ' + verifyInfo.count}
                        {verifyInfo.stockUnit}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{flexDirection: 'row', borderTopWidth: 1, borderColor: '#EEE', paddingTop: 10, marginTop: 10}}>
                <Text>除此单之外，共消费{verifyInfo.orderCount}单，</Text>
                <Text onPress={this.props.handleToOrder} style={{color: '#FB6D6D'}}>
                  查看明细
                </Text>
                <Icon className={s.listLabel} name="right" size={15} color="#FB6D6D" />
              </View>
            </View>
            <View className={s.btnWrap}>
              <TouchableOpacity style={{width: '50%'}} onPress={this.handleClose}>
                <Text className={s.cancel}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleVerifyConfirm}
                style={{width: '50%', borderLeftWidth: 1, borderLeftColor: '#E4E7ED'}}>
                <Text className={s.ok}>确认核销</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Modal>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {
      data: '示例页面',
      form: {},
    }
  }

  // methods
  handleVerifyConfirm = () => {
    const {verifyInfo} = this.props
    if (verifyInfo.verifyStatus === 0) {
      api.verifyConfirmOrderSku({hashId: verifyInfo.hashId}).then((res) => {
        this.handleClose()
        Alert.alert('核销成功')
      })
    } else {
      Alert.alert('此商品已核销，请不要重复核销')
    }
  }

  handleClose = () => {
    this.props.handleClose()
  }

  // mounted
  componentDidMount(): void {}
}

export default ModalVerification
