import React from 'react'
import {SafeAreaView, Text, View} from 'react-native'
import s from '~/style/component/my-modal'

import Modal from 'react-native-modal'

class MyModal extends React.Component {
  // template
  render() {
    const {visible, title, content, footer} = this.props
    return (
      <Modal
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          zIndex: 0,
        }}
        isVisible={visible}
        propagateSwipe={true}>
        <View className={s.modalBox}>
          <View className={s.modalWrap}>
            <Text className={s.title}>{title}</Text>
            <View>{!!content && content()}</View>
          </View>
          {!!footer && footer()}
        </View>
        {this.props.children}
      </Modal>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  // methods
  getDetail() {}

  // mounted
  componentDidMount(): void {
    this.getDetail()
  }
}

export default MyModal
