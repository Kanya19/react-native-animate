import React from 'react'
import {Text, View} from 'react-native'
import Modal from 'react-native-modal'
import TabView from '~/component/tab-view'
import api from '~/api'
import YuList from '~/component/yu-list'
import FastImage from 'react-native-fast-image'
import s from '~/style/component/modal-tally'
import v from '~/style/varible'
import {humanizedNum} from '~/common/index'
import TouchableOpacity from '~/component/touchable-opacity'

class ModalTally extends React.Component {
  // template
  render() {
    const {visible, tabIndex, list, loading} = this.state
    const tabs = [
      {index: 0, key: 0, title: '带货榜'},
      {index: 1, key: 1, title: '人气榜'},
      {index: 2, key: 2, title: '地区榜'},
      {index: 3, key: 3, title: '新人榜'},
    ]
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
          <View style={{height: 50, borderBottomWidth: 1, borderBottomColor: '#eee'}}>
            <TabView
              focusedColor={v.text}
              style={{backgroundColor: 'transparent'}}
              tabs={tabs}
              onIndexChange={this.onIndexChange}
              index={tabIndex}
            />
          </View>
          <View class={s.listWrap}>
            <YuList
              hasMore={this.state.hasMore}
              list={list}
              loading={loading}
              renderItem={({item, index}) => this.renderItem(item, index, tabIndex)}
              onRefresh={this.onPullDownRefresh}
              onEndReached={this.onReachBottom}
              keyExtractor={(item) => item.userId.toString()}
            />
          </View>
          {!!list.length && this.renderBottomItem(list[0], tabIndex)}
        </View>
      </Modal>
    )
  }

  renderBottomItem = (item, tabIndex) => {
    switch (tabIndex) {
      case 0:
        return (
          <View className={[s.rankItem, s.bottomItem]}>
            <View className={s.rankInfo}>
              <Text style={{marginRight: 20, fontWeight: 'bold'}}>{1}</Text>
              <FastImage
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 10,
                  borderRadius: 25,
                  borderWidth: 2,
                  borderColor: item.isLive ? '#fe163d' : '#fff',
                }}
                source={{uri: item.userAvatar}}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View>
                <Text className={s.bottomUserName}>{item.userNickname}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text className={s.tag} style={{backgroundColor: 'rgba(161, 222, 255, 1)'}}>
                    综合
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <Text className={s.support}>支持</Text>
            </TouchableOpacity>
          </View>
        )
      case 1:
        return (
          <View className={[s.rankItem, s.bottomItem]}>
            <View className={s.rankInfo}>
              <Text style={{marginRight: 20, fontWeight: 'bold'}}>{1}</Text>
              <FastImage
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 10,
                  borderRadius: 25,
                  borderWidth: 2,
                  borderColor: item.isLive ? '#fe163d' : '#fff',
                }}
                source={{uri: item.userAvatar}}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View>
                <Text className={s.bottomUserName}>{item.userNickname}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: v.textLight}}>距离上一名还差2热度</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <Text className={s.support}>加入粉丝团</Text>
            </TouchableOpacity>
          </View>
        )
      case 2:
        return (
          <View className={[s.rankItem, s.bottomItem]}>
            <View className={s.rankInfo}>
              <Text style={{marginRight: 20, fontWeight: 'bold'}}>{1}</Text>
              <FastImage
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 10,
                  borderRadius: 25,
                  borderWidth: 2,
                  borderColor: item.isLive ? '#fe163d' : '#fff',
                }}
                source={{uri: item.userAvatar}}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View>
                <Text className={s.bottomUserName}>{item.userNickname}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text className={s.tag} style={{backgroundColor: 'rgba(161, 222, 255, 1)'}}>
                    综合
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <Text className={s.support}>支持</Text>
            </TouchableOpacity>
          </View>
        )
      case 3:
        return (
          <View className={[s.rankItem, s.bottomItem]}>
            <View className={s.rankInfo}>
              <Text style={{marginRight: 20, fontWeight: 'bold'}}>{1}</Text>
              <FastImage
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 10,
                  borderRadius: 25,
                  borderWidth: 2,
                  borderColor: item.isLive ? '#fe163d' : '#fff',
                }}
                source={{uri: item.userAvatar}}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View>
                <Text className={s.bottomUserName}>{item.userNickname}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text className={s.tag} style={{backgroundColor: 'rgba(161, 222, 255, 1)'}}>
                    综合
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <Text className={s.support}>支持</Text>
            </TouchableOpacity>
          </View>
        )
    }
  }

  proItem = (item, index) => {
    const backgroundColor = 'rgba(255,74,74,0.56)'
    return (
      <View className={s.rankItem}>
        <View className={s.rankInfo}>
          <Text style={{marginRight: 20, fontWeight: 'bold'}}>{index + 1}</Text>
          <FastImage
            className={s.avatar}
            style={{
              borderColor: item.isLive ? '#fe163d' : '#fff',
            }}
            source={{uri: item.userAvatar}}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View>
            <Text className={s.userName}>{item.userNickname}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text className={s.tag} style={{backgroundColor}}>
                综合
              </Text>
            </View>
          </View>
        </View>
        <Text className={s.totalCount}>{item.totalCount}</Text>
      </View>
    )
  }
  peoItem = (item, index) => {
    return (
      <View className={s.rankItem}>
        <View className={s.rankInfo}>
          <Text style={{marginRight: 20, fontWeight: 'bold'}}>{index + 1}</Text>
          <FastImage
            className={s.avatar}
            style={{
              borderColor: item.isLive ? '#fe163d' : '#fff',
            }}
            source={{uri: item.userAvatar}}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View>
            <Text className={s.userName}>{item.userNickname}</Text>
            <Text
              style={{
                marginTop: 10,
                padding: 2,
                borderRadius: 5,
                fontSize: 12,
                overflow: 'hidden',
                color: '#BFBFBF',
                alignSelf: 'flex-start',
              }}>
              粉丝团：小狮子 | 1299人助力
            </Text>
          </View>
        </View>
        <Text className={s.totalCount}>{item.totalCount}</Text>
      </View>
    )
  }
  areItem = (item, index) => {
    const backgroundColor = 'rgba(161, 222, 255, 1)'
    return (
      <View className={s.rankItem}>
        <View className={s.rankInfo}>
          <Text style={{marginRight: 20, fontWeight: 'bold'}}>{index + 1}</Text>
          <FastImage
            className={s.avatar}
            style={{
              borderColor: item.isLive ? '#fe163d' : '#fff',
            }}
            source={{uri: item.userAvatar}}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View>
            <Text className={s.userName}>{item.userNickname}</Text>
            <Text className={s.tag} style={{backgroundColor}}>
              综合
            </Text>
          </View>
        </View>
        <Text className={s.totalCount}>{item.totalCount}</Text>
      </View>
    )
  }
  newItem = (item, index) => {
    return (
      <View className={s.rankItem}>
        <View className={s.rankInfo}>
          <Text style={{marginRight: 20, fontWeight: 'bold'}}>{index + 1}</Text>
          <FastImage
            className={s.avatar}
            style={{
              borderColor: item.isLive ? '#fe163d' : '#fff',
            }}
            source={{uri: item.userAvatar}}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View>
            <Text>{item.userNickname}</Text>
            <Text className={s.tag}>综合</Text>
          </View>
        </View>
        <Text className={s.totalCount}>{item.totalCount}</Text>
      </View>
    )
  }
  renderItem = (item, index, tabIndex) => {
    switch (tabIndex) {
      case 0:
        return this.proItem(item, index)
      case 1:
        return this.peoItem(item, index)
      case 2:
        return this.areItem(item, index)
      case 3:
        return this.newItem(item, index)
    }
  }
  // data
  constructor(props: any) {
    super(props)
    this.state = {
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
  onIndexChange = (e) => {
    this.setState(
      {
        tabIndex: e,
      },
      this.getList,
    )
  }
  openModal = () => {
    this.getList()
    this.setState({
      visible: true,
    })
  }

  getList = () => {
    const {loading, tabIndex} = this.state
    if (!loading) {
      this.setState({loading: true}, () => {
        console.log({
          type: tabIndex,
        })
        api
          .getAnchorRank({
            type: tabIndex,
          })
          .then((result) => {
            result.map((item) => {
              item.totalCount = humanizedNum(item.totalCount)
            })
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

export default ModalTally
