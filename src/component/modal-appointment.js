import React from 'react'
import Modal from 'react-native-modal'
import {Dimensions, ScrollView, Text, TouchableOpacity, View, Alert} from 'react-native'
import s from '~/style/component/modal-verification'
import Price from '~/component/price'
import FastImage from 'react-native-fast-image'
import wx from '~/common/wx'

class ModalAppointment extends React.Component {
  // template
  render() {
    const {visible, appointmentInfo} = this.props
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
              <View className={s.header}>
                <Text className={s.status}>{appointmentInfo.statusLabel}</Text>
              </View>
              <View className={s.orderSku}>
                <View style={{width: '20%'}}>
                  <FastImage
                    style={{height: 65, width: 65, borderRadius: 8, marginRight: 14}}
                    source={{
                      uri: appointmentInfo.image,
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                </View>
                <View style={{width: '70%'}}>
                  <View className={s.content}>
                    <Text numberOfLines={2}>{appointmentInfo.productName}</Text>
                    <View className={s.priceWrap}>
                      <Price price={appointmentInfo.price} color={'#777777'} />
                      <Text>
                        {' x ' + appointmentInfo.count}
                        {appointmentInfo.stockUnit}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View className={s.btnWrap}>
              <TouchableOpacity style={{width: '50%'}} onPress={this.handleClose}>
                <Text className={s.cancel}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleVerifyConfirm} style={{width: '50%'}}>
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

export default ModalAppointment
