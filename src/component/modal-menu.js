import React from 'react'
import {Text, View} from 'react-native'
import Modal from 'react-native-modals'
import s from '~/style/component/modal-menu'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/AntDesign'
import TouchableOpacity from '~/component/touchable-opacity'

class ModalTally extends React.Component {
  // template
  render() {
    const {visible, tabIndex, list, loading} = this.state
    return (
      <Modal.BottomModal
        visible={visible}
        onTouchOutside={() => {
          this.setState({visible: false})
        }}
        onSwipeOut={() => this.setState({visible: false})}
        useNativeDriver={false}>
        <LinearGradient end={{x: 0, y: 0}} start={{x: 1, y: 1}} colors={['#1a1a1a', '#1a1a1a']} style={{}}>
          <View className={s.modalBox}>
            {list.map((item, key) => {
              return (
                <TouchableOpacity key={key} className={s.rankItem} onPress={() => item.onPress()}>
                  <Icon name={item.name} color={'#888'} size={30} />
                  <Text style={{color: '#888', marginTop: 8, textAlign: 'center'}}>{item.label}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </LinearGradient>
      </Modal.BottomModal>
    )
  }
  // data
  constructor(props: any) {
    super(props)
    this.state = {
      visible: false,
      list: [
        {
          name: 'camera',
          label: '分享',
          onPress: () => {
            console.log(1)
          },
        },
        {
          name: 'camera',
          label: '上热门',
          onPress: () => {
            console.log(1)
          },
        },
        {
          name: 'camera',
          label: '送礼特效',
          onPress: () => {
            console.log(1)
          },
        },
        {
          name: 'camera',
          label: '清屏',
          onPress: () => {
            console.log(1)
          },
        },
        {
          name: 'camera',
          label: '投屏',
          onPress: () => {
            console.log(1)
          },
        },
        {
          name: 'camera',
          label: '播放设置',
          onPress: () => {
            console.log(1)
          },
        },
        {
          name: 'camera',
          label: '清晰度',
          onPress: () => {
            console.log(1)
          },
        },
        {
          name: 'camera',
          label: '举报',
          onPress: () => {
            console.log(1)
          },
        },
      ],
    }
  }
  openModal = () => {
    this.setState({
      visible: true,
    })
  }
  handleClick = (item) => {
    console.log(item)
  }
  componentDidMount() {
    this.props.onRef(this)
  }
}
export default ModalTally
