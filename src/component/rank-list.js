import React from 'react'
import {Text, View} from 'react-native'
import Modal from 'react-native-modal'
import {ScrollView} from 'react-native'
import TabView from '~/component/tab-view'
import api from '~/api'
import YuList from '~/component/yu-list'
import FastImage from 'react-native-fast-image'
import s from '~/style/component/modal-tally'
import {humanizedNum} from '~/common/index'
import TouchableOpacity from '~/component/touchable-opacity'

class ModalTally extends React.Component {
  // template
  render() {
    const {visible, list, loading, rankIcon} = this.state
    const {rankList, label} = this.props
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
        {/*<View style={{position: 'relative'}}>*/}
        <FastImage
          style={{position: 'relative', width: '100%', height: 55}}
          source={{
            uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/decoration.png',
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

        {/*</View>*/}

        <View style={{height: '60%', backgroundColor: 'white', width: '100%'}}>
          <ScrollView>
            {rankList.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#ebebeb',
                  }}>
                  <View style={{width: 50, marginRight: 20, alignItems: 'center', justifyContent: 'center'}}>
                    {index < 3 ? (
                      <FastImage
                        style={{
                          width: 48,
                          height: 53,
                        }}
                        source={{uri: rankIcon[index]}}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                    ) : (
                      <Text style={{fontWeight: 'bold'}}>{index + 1}</Text>
                    )}
                  </View>
                  <FastImage
                    style={{
                      width: 50,
                      height: 50,
                      marginRight: 20,
                      borderRadius: 25,
                      borderWidth: 2,
                      borderColor: item.isLive ? '#fe163d' : '#fff',
                    }}
                    source={{uri: item.userAvatar}}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                  <View>
                    <Text style={{fontWeight: 'bold', marginBottom: 10}}>{item.userNickname}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>{label} </Text>
                      <Text> {item.value}kg</Text>
                    </View>
                  </View>
                </View>
              )
            })}
          </ScrollView>
        </View>
      </Modal>
    )
  }
  // data
  constructor(props: any) {
    super(props)
    this.state = {
      rankIcon: [
        'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/rank1.png',
        'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/rank2.png',
        'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/rank3.png',
      ],
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

  componentDidMount() {
    this.props.onRef(this)
  }
}

export default ModalTally
