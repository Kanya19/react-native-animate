import React from 'react'
import {Text, TextInput, View} from 'react-native'
import Modal, {ModalContent, SlideAnimation} from 'react-native-modals'
import {UserLevelList, Regional, PriceAuditEnum} from '~/common/constant'
import g from '~/style/global'
import TabView from '~/component/tab-view'
import api from '~/api'
import YuList from '~/component/yu-list'
import FastImage from 'react-native-fast-image'
import s from '~/style/component/modal-tally'
import v from '~/style/varible'
import {humanizedNum} from '~/common/index'
import TouchableOpacity from '~/component/touchable-opacity'
import message from '../asset/svg/message'

class RejectMessage extends React.Component {
  // template
  render() {
    const {callback} = this.props
    const {visible, message} = this.state
    return (
      <Modal.BottomModal
        onTouchOutside={this.closeModal}
        onSwipeOut={this.closeModal}
        visible={visible}
        useNativeDriver={false}>
        <ModalContent>
          <Text className={g.modalTitle}>拒绝理由</Text>
          <TextInput
            multiline={true}
            numberOfLines={5}
            style={{
              marginTop: 20,
              marginHorizontal: 20,
              marginBottom: 20,
              textAlignVertical: 'top',
              borderWidth: 1,
              borderColor: '#f0f0f0',
              borderRadius: 5,
            }}
            onChangeText={(text) => {
              this.setState({
                message: text,
              })
            }}
            placeholder="请输入拒绝理由"
            value={message}
          />
          <TouchableOpacity
            onPress={this.onSubmit}
            style={{
              marginHorizontal: 20,
              backgroundColor: 'white',
              height: 40,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                width: '100%',
                textAlign: 'center',
                textAlignVertical: 'center',
                backgroundColor: '#005bf0',
                borderRadius: 5,
                color: 'white',
              }}>
              立即提交
            </Text>
          </TouchableOpacity>
        </ModalContent>
      </Modal.BottomModal>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {
      message: '',
      tabIndex: 0,
      visible: false,
      list: [],
      total: 0,
      form: {
        pageNo: 1,
        pageSize: 10,
      },
    }
  }
  onSubmit = () => {
    const {message} = this.state
    this.setState({
      visible: false,
    })
    this.props.callback(message)
  }
  openModal = () => {
    this.setState({
      message: '',
      visible: true,
    })
  }

  closeModal = () => {
    this.setState({
      visible: false,
    })
  }

  componentDidMount() {
    this.props.onRef(this)
  }
}

export default RejectMessage
