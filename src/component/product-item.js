import React from 'react'
import {View, Text} from 'react-native'
import s from '~/style/component/product-item'
import Icon from 'react-native-vector-icons/AntDesign'
import FastImage from 'react-native-fast-image'
import Price from '~/component/price'
import LinearGradient from 'react-native-linear-gradient'
import {navigate} from '~/route/navigation'
import TouchableOpacity from '~/component/touchable-opacity'

class ProductItem extends React.Component {
  // template
  render() {
    const {data} = this.state
    const {spu} = this.props
    return (
      <TouchableOpacity onPress={this.goToDetail} className={s.productBox}>
        <FastImage
          className={s.productImg}
          source={{
            uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/2021-11-23/a978a45ecdff40eb9f3b3fd60ff7c055.png',
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
        <TouchableOpacity className={s.closeIcon} onPress={this.handleClose}>
          <FastImage
            source={require('~/asset/img/live/room/9clci1_close.png')}
            style={{marginRight: -16, width: 10, height: 10}}
            resizeMode={FastImage.resizeMode.stretch}
          />
        </TouchableOpacity>

        <View className={s.productStatus}>
          <Text className={s.whiteDot} />
          <Text className={s.statusLabel}>讲解中</Text>
        </View>
        <View className={s.productInfo}>
          <Text numberOfLines={1} className={s.productName}>
            小米11 5G游戏手机 全网通 8G+128G 蓝色 官方标配【55W充电套装+晒单返20红包】
          </Text>
          <View className={s.tagBox}>
            <Text className={s.tag}>正品保障</Text>
            <View className={s.tagLine} />
            <Text className={s.tag}>极速退款</Text>
          </View>
          <LinearGradient
            className={s.priceBox}
            end={{x: 1, y: 1}}
            start={{x: 0, y: 1}}
            colors={['#FF4A4A', '#FF4A4A']}>
            <Price price={'1'} size="small" type={'short'} style={{flex: 0}} color={'#ffffff'} />
            <Text style={{color: '#fff', fontSize: 12, fontWeight: 'bold'}}>抢</Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {
      data: '示例页面',
    }
  }
  // methods
  handleClose = () => {
    console.log('close1')
    this.props.handleClose && this.props.handleClose()
  }
  goToDetail = () => {
    const {spu} = this.props
    console.log('spu', spu)
    if (spu.id) {
      navigate('ProductDetail', {spuId: spu.id})
    }
  }
}

export default ProductItem
