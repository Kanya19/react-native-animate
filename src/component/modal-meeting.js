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
    const {visible, meetingInfo} = this.props
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
              <Text className={s.title}>{meetingInfo.title}</Text>
              <View className={s.header}>
                <Text className={s.status}>{meetingInfo.statusLabel}</Text>
              </View>
              <FastImage
                style={{width: '100%', height: 200, borderRadius: 8, marginRight: 14}}
                source={{
                  uri: meetingInfo.mainImage,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View className={s.orderSku} style={{alignItems: 'center'}}>
                <View style={{width: '20%'}}>
                  <FastImage
                    style={{height: 65, width: 65, borderRadius: 8, marginRight: 14}}
                    source={{
                      uri: meetingInfo.userAvatar,
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                </View>
                <View style={{width: '70%'}}>
                  <View className={s.content}>
                    <Text numberOfLines={2}>{meetingInfo.userNickname}</Text>
                    <Text>{meetingInfo.date}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className={s.btnWrap}>
              <TouchableOpacity style={{width: '50%'}} onPress={this.handleClose}>
                <Text className={s.cancel}>??????</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.handleVerifyConfirm} style={{width: '50%'}}>
                <Text className={s.ok}>????????????</Text>
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
      data: '????????????',
      form: {},
    }
  }

  // methods
  handleVerifyConfirm = () => {
    const {meetingInfo} = this.props
    api
      .verifyConfirmMeetUser({
        hashId: meetingInfo.hashId,
        meetingId: meetingInfo.id,
      })
      .then((res) => {
        this.handleClose()
        Alert.alert('????????????')
      })
  }

  handleClose = () => {
    this.props.handleClose()
  }

  // mounted
  componentDidMount(): void {}
}

export default ModalAppointment
