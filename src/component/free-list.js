import React from 'react'
import {ScrollView, Text, View, Image, Platform} from 'react-native'
import s from '~/style/component/free-list'
import TouchableOpacity from '~/component/touchable-opacity'
import FastImage from 'react-native-fast-image'
import Sound from 'react-native-sound'
import {connect} from 'react-redux'

class FreeList extends React.Component {
  // template
  render() {
    const {audioStatus, freeList, freeShowList} = this.state
    const {close} = this.props
    return (
      <View className={s.listBox}>
        <View className={s.listTitle}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text className={s.listText}>免单用户</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
                height: 50,
              }}
              onPress={this.toggleAudio}>
              {audioStatus ? (
                <FastImage
                  style={{
                    width: 16,
                    height: 16,
                  }}
                  resizeMode={FastImage.resizeMode.stretch}
                  source={{uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/audio2.png'}}
                />
              ) : (
                <FastImage
                  style={{
                    width: 16,
                    height: 16,
                  }}
                  resizeMode={FastImage.resizeMode.stretch}
                  source={{uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/mute2.png'}}
                />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={close}>
            <FastImage
              style={{
                width: 20,
                height: 20,
              }}
              resizeMode={FastImage.resizeMode.stretch}
              source={{uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/mall-close.png'}}
            />
          </TouchableOpacity>
        </View>
        {freeList.length ? (
          <View pointerEvents="none">
            <ScrollView
              ref={(ref) => (this.freeScrollView = ref)}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              className={s.list}>
              {freeShowList.map((item, key) => {
                return (
                  <View key={key} className={`${s.listItem} ${s.free}`} pointerEvents="none">
                    {/*{Platform.OS === 'ios' ? (*/}
                    <FastImage
                      className={s.avatar}
                      resizeMode={FastImage.resizeMode.stretch}
                      source={{uri: item.userAvatar}}
                    />
                    {/*) : (*/}
                    {/*  <Image className={s.avatar} resizeMode={'stretch'} source={{uri: item.userAvatar}} />*/}
                    {/*)}*/}
                    <Text className={s.desc} numberOfLines={1}>
                      {item.userNickname} 自动免单补贴到账：{item.amount}元
                    </Text>
                  </View>
                )
              })}
            </ScrollView>
          </View>
        ) : (
          <View className={s.noInfo}>
            <Text className={s.noInfoText}>暂无数据</Text>
          </View>
        )}
      </View>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {
      audioStatus: false,
      soundLoading: false,
      loading: false,
      freeList: [],
      index: 0,
      freeShowList: [],
    }
  }

  // methods
  handlePlay = () => {
    const {index, freeList, audioStatus, loading} = this.state
    if (loading) {
      return
    }
    this.setState(
      {
        loading: true,
      },
      () => {
        let i = index
        // 暂时没有找到重播的方法，默认循环调用，以后有时间再改
        if (freeList && freeList.length && freeList[index] && freeList[index].audioUrl) {
          this.sound = new Sound(freeList[index].audioUrl, null, (e) => {
            if (e) {
              i++
              if (i > freeList.length - 1) {
                i = 0
              }
              this.setState(
                {
                  loading: false,
                  index: i,
                },
                this.handlePlay,
              )
              return
            }
            if (!audioStatus) {
              this.setState({
                loading: false,
              })
              return
            }
            this.sound?.play(() => {
              i++
              if (i > freeList.length - 1) {
                i = 0
              }
              this.setState(
                {
                  loading: false,
                  index: i,
                },
                this.handlePlay,
              )
            })
          })
        }
      },
    )
  }
  setStatus = () => {
    const {audioStatus, freeList, index} = this.state
    let i = index
    this.setState(
      {
        audioStatus: !audioStatus,
        soundLoading: false,
      },
      () => {
        audioStatus
          ? this.sound?.pause()
          : this.sound?.play(() => {
              i++
              if (i > freeList.length - 1) {
                i = 0
              }
              this.setState({
                index: i,
              })
              this.handlePlay()
            })
      },
    )
  }
  toggleAudio = () => {
    const {
      user: {detail: user},
    } = this.props
    const {soundLoading} = this.state
    if (!soundLoading) {
      if (user.id) {
        this.setState({soundLoading: true}, () => {
          api
            .editVoiceSet()
            .then(() => {
              this.setStatus()
            })
            .catch((err) => {
              this.setStatus()
            })
        })
      } else {
        this.setStatus()
      }
    }
  }
  setScroll = () => {
    const {freeList} = this.state
    const freeListArr = [...freeList]
    let freeTime = null
    const freeShowList = [...freeList]
    let freeIndex = 0
    freeTime = setInterval(() => {
      if (this.freeScrollView && this.freeScrollView.scrollToEnd) {
        freeShowList.push(freeListArr[freeIndex])
        if (freeIndex === 0 && freeShowList.length === freeListArr.length * 2) {
          freeShowList.splice(0, freeListArr.length)
          freeIndex = 0
        }
        this.setState(
          {
            freeShowList,
          },
          () => {
            setTimeout(() => {
              if (this.freeScrollView && this.freeScrollView.scrollToEnd) {
                this.freeScrollView.scrollToEnd({animated: true})
              }
              freeIndex++
              if (freeIndex >= freeListArr.length) {
                freeIndex = 0
              }
            })
          },
        )
      } else {
        clearInterval(freeTime)
      }
    }, 2000)
  }

  getRewardQueue = () => {
    api.getRewardQueue().then((res) => {
      let freeList = []
      let audioStatus = null
      res.map((item) => {
        if (item.userType === 0) {
          freeList.push(item)
          if (item.isVoiceOn === 0) {
            audioStatus = false
          } else if (item.isVoiceOn === 1) {
            audioStatus = true
          }
        }
      })
      this.setState(
        Object.assign({}, this.state, {
          freeList,
          freeShowList: freeList,
          audioStatus,
        }),
        () => {
          this.handlePlay()
          setTimeout(() => {
            this.setScroll()
            if (this.freeScrollView && this.freeScrollView.scrollToEnd) {
              this.freeScrollView.scrollToEnd({animated: true})
            }
          })
        },
      )
    })
  }
  // mounted
  componentWillMount(): void {
    this.didFocus = this.props.navigation.addListener(
      'blur',
      () => {
        console.log('切换了路由')
        this.sound?.pause()
        // this.sound = null
      }, //放你需要执行的函数
    )
    // this._unsubscribe = this.props.navigation.addListener('focus', () => {
    // 刷新
    console.log('刷新')
    this.getRewardQueue()
    // })
  }
  componentWillUnmount() {
    console.log('componentWillUnmount: 销毁')
    this.didFocus()
    this.sound?.stop()
    this.sound = null
    // this._unsubscribe()
  }
}
const mapStateToProps = (state) => {
  const {user} = state
  return {user}
}
export default connect(mapStateToProps)(FreeList)
