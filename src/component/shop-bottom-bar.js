import React from 'react'
import {ScrollView, Text, View} from 'react-native'
import s from '~/style/component/shop-bottom-bar'
import v from '~/style/varible'
import TouchableOpacity from '~/component/touchable-opacity'
import FastImage from 'react-native-fast-image'
import {navigate} from '~/route/navigation'
import wx from '~/common/wx'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {updateFriend} from '~/store/action/ws-actions'

class ShopBottomBar extends React.Component {
  // template
  render() {
    const {defaultActive} = this.state
    const {list, active} = this.props
    return (
      <View style={{flex: 1, paddingBottom: 20}} className={s.bottomBar}>
        {/*底部导航 */}
        <TouchableOpacity
          className={s.shopBottomItem}
          onPress={() => {
            navigate('BusinessAdmin')
          }}>
          {/*<Icon name="home" className={s.bottomIcon} size={20} color={active === 0 ? v.primary : v.textLight} />*/}
          <FastImage
            style={{
              width: 31,
              height: 43,
            }}
            source={{
              uri:
                active === 0
                  ? 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/index1.png'
                  : 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/index.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity className={s.shopBottomItem} onPress={this.goToChat}>
          <FastImage
            style={{
              width: 31,
              height: 43,
            }}
            source={{
              uri:
                active === 1
                  ? 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/mes1.png'
                  : 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/message.png',
            }}
          />
        </TouchableOpacity>
        {/*<TouchableOpacity className={s.shopBottomItem} onPress={this.goToChat}>*/}
        {/*  <FastImage*/}
        {/*    style={{*/}
        {/*      width: 31,*/}
        {/*      height: 43,*/}
        {/*    }}*/}
        {/*    source={{*/}
        {/*      uri:*/}
        {/*        active === 3*/}
        {/*          ? 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/stu1.png'*/}
        {/*          : 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/study.png',*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</TouchableOpacity>*/}
        <TouchableOpacity
          className={s.shopBottomItem}
          onPress={() => {
            navigate('MyShop')
          }}>
          <FastImage
            style={{
              width: 31,
              height: 43,
            }}
            source={{
              uri:
                active === 2
                  ? 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/mine1.png'
                  : 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/mine.png',
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {
      data: '示例页面',
      disabledGradientStart: '#f0f0f0',
      disabledGradientEnd: '#f0f0f0',
      gradientStart: '#0DC6B4',
      gradientEnd: '#35EB89',
      defaultActive: 0,
    }
  }

  // methods
  onChange(item) {
    this.props.onChange(item)
    this.setState({
      defaultActive: item.value,
    })
  }
  goToChat = () => {
    // 判断是否有token
    navigate('History')
  }
  componentWillMount(): void {
    this.setState({
      defaultActive: this.props.active,
    })
  }
}
const mapStateToProps = (state) => {
  const {user} = state
  return {user}
}
const mapDispatchToProps = (dispatch) => bindActionCreators({updateFriend}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShopBottomBar)
