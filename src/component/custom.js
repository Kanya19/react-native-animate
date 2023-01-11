import React from 'react'
import s from '~/style/component/custom'
import {CouponTypeEnum, CustomPageDataTypeEnum} from '~/common/constant'
import {Dimensions, ScrollView, Text, View} from 'react-native'
import TouchableOpacity from '~/component/touchable-opacity'
import LinearGradient from 'react-native-linear-gradient'
import empty from './empty'
import FastImage from 'react-native-fast-image'
import {miniNavigate} from '~/common/index'
import p from '~/style/component/product-list-column'
import p2 from '~/style/component/product-list'
import s2 from '~/style/page/mine/coupon'
import {navigate} from '~/route/navigation'
import Price from '~/component/price'
import wx from '~/common/wx'
import {Carousel} from '@ant-design/react-native'

class Custom extends React.Component {
  static defaultProps = {
    tableData: [],
    customPage: {
      backgroundColor: '#ffffff',
    },
  }

  render() {
    const {tableData, customPage} = this.props
    const {heights} = this.state
    const width = Dimensions.get('window').width
    return (
      <ScrollView
        contentContainerStyle={{
          backgroundColor: customPage.backgroundColor,
          flexDirection: 'row',
          flexWrap: 'wrap',
          position: 'relative',
        }}>
        {tableData.length > 0 ? (
          tableData.map((item, index) => {
            return (
              <View className={s.customItem} key={index} style={{width: item.itemWidth}}>
                {/*纯展示、跳转链接、添加到购物车、获取优惠券*/}
                {(item.type === CustomPageDataTypeEnum.SHOW ||
                  item.type === CustomPageDataTypeEnum.REDIRECT ||
                  item.type === CustomPageDataTypeEnum.TO_CART ||
                  item.type === CustomPageDataTypeEnum.GET_COUPON) && (
                  <TouchableOpacity onPress={() => this.handlePress(item)}>
                    <FastImage
                      style={{width: item.itemWidth, height: heights[index]}}
                      source={{uri: item.image}}
                      resizeMode={FastImage.resizeMode.stretch}
                      onLoad={(event) => {
                        this.imageLoad(event, index, item.itemWidth)
                      }}
                    />
                  </TouchableOpacity>
                )}
                {/*商品*/}
                {item.type === CustomPageDataTypeEnum.PRODUCT && !!item.spu && !item.spuType && (
                  <TouchableOpacity
                    className={p.item}
                    style={{marginTop: 7, marginBottom: 7, marginLeft: 14, marginRight: 14}}
                    key={item.spu.id}
                    onPress={() => navigate('ProductDetail', {spuId: item.spu.id})}>
                    <View className={p.inner}>
                      <FastImage
                        className={p.image}
                        source={{
                          uri: item.spu.mainImage,
                          priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.stretch}
                      />
                      <View className={p.content} style={{width: width - 180}}>
                        <Text numberOfLines={2} className={p.title}>
                          {item.spu.name}
                        </Text>
                        <View className={p.bottom}>
                          <Price price={item.spu.minPrice}></Price>
                        </View>
                        <View className={p.footer}>
                          {item.spu.sales > 0 && <Text className={p.comment}>已售 {item.spu.sales}</Text>}
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                {item.type === CustomPageDataTypeEnum.PRODUCT && !!item.spu && !!item.spuType && (
                  <TouchableOpacity
                    className={p2.item}
                    key={item.spu.id}
                    onPress={() => {
                      navigate('ProductDetail', {spuId: item.spu.id})
                    }}
                    style={{
                      width: '100%',
                      padding: 8,
                    }}>
                    <View className={p2.inner}>
                      <FastImage
                        style={{
                          width: (width - 32) / 2,
                          height: (width - 32) / 2,
                          borderTopLeftRadius: 6,
                          borderTopRightRadius: 6,
                        }}
                        source={{
                          uri: item.spu.mainImage,
                          priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.stretch}
                      />
                      <View className={p2.content}>
                        <Text numberOfLines={2} className={p2.title}>
                          {item.spu.name}
                        </Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <View>
                            <View className={p2.bottom}>
                              <Price price={item.spu.minPrice}></Price>
                            </View>
                            <View>
                              {item.spu.sales > 0 && (
                                <Text style={{marginTop: 10}} className={p.comment}>
                                  已售 {item.spu.sales}
                                </Text>
                              )}
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}

                {/*优惠券*/}
                {item.type === CustomPageDataTypeEnum.COUPON && !!item.coupon && (
                  <View className={s2.header}>
                    <View className={s2.left}>
                      <View className={s2.price}>
                        <Text className={s2.priceUnit}>￥</Text>
                        <Text className={s2.priceAmount}>{item.coupon.discountAmount}</Text>
                      </View>
                      <View className={s2.center}>
                        <Text numberOfLines={1} className={s2.title}>
                          {item.coupon.title}
                        </Text>
                        <Text className={s2.time}>
                          有效期：{item.coupon.startTime}至{item.coupon.endTime}
                        </Text>
                        <Text className={s2.place}>
                          {item.coupon.type === CouponTypeEnum.ALL ? '全场' : '指定商品'}消费满{item.coupon.minAmount}
                          元可用
                        </Text>
                      </View>
                    </View>
                    <View className={s2.dashedLine} />
                    <View className={s2.right}>
                      <TouchableOpacity
                        onPress={() => navigate('CouponList', {couponId: item.coupon.id})}
                        className={s2.btnWrap}>
                        <LinearGradient
                          className={s2.lineBtnWrap}
                          end={{x: 1, y: 1}}
                          start={{x: 0, y: 1}}
                          colors={['#ff4e2c', '#ff5c37']}>
                          <Text className={s2.lineBtn}>领取</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}

                {/*左右轮播*/}
                {item.type === CustomPageDataTypeEnum.SWIPE && item.swipeType === 0 && (
                  <Carousel
                    style={{width: '100%', height: item.imgHeight, overflow: 'hidden'}}
                    selectedIndex={2}
                    dotStyle={{
                      height: 5,
                      width: 5,
                    }}
                    dotActiveStyle={{
                      backgroundColor: '#FF2A41',
                      width: 13,
                      height: 4,
                    }}
                    autoplay
                    infinite>
                    {item.imageList.map((each, ind) => {
                      return (
                        <TouchableOpacity key={ind} onPress={() => this.goToUrl(each.url)}>
                          <FastImage
                            onLoad={(event) => {
                              this.imageLoad(event, index + '-' + ind, width)
                            }}
                            style={{
                              height: heights[index + '-' + ind],
                              width,
                            }}
                            source={{
                              uri: each.image,
                              priority: FastImage.priority.normal,
                            }}
                            resizeMode={FastImage.resizeMode.stretch}
                          />
                        </TouchableOpacity>
                      )
                    })}
                  </Carousel>
                )}

                {/*左右滑动*/}
                {item.type === CustomPageDataTypeEnum.SWIPE && item.swipeType === 1 && (
                  <ScrollView
                    horizontal
                    style={{width: width - 10, padding: 10}}
                    showsHorizontalScrollIndicator={false}>
                    {item.imageList.map((each, ind) => {
                      return (
                        <TouchableOpacity key={ind} onPress={() => this.goToUrl(each.url)}>
                          <FastImage
                            onLoad={(event) => {
                              this.imageLoad(event, 's' + index + '-' + ind, item.imgWidth)
                            }}
                            style={{
                              height: heights['s' + index + '-' + ind],
                              width: item.imgWidth,
                            }}
                            source={{uri: each.image}}
                            resizeMode={FastImage.resizeMode.stretch}
                          />
                        </TouchableOpacity>
                      )
                    })}
                  </ScrollView>
                )}
              </View>
            )
          })
        ) : (
          <View style={{flex: 1, height: Dimensions.get('window').height}}>{empty(false)}</View>
        )}
      </ScrollView>
    )
  }

  constructor(props: any) {
    super(props)
    this.state = {
      heights: {},
    }
  }
  addCart(item) {
    navigate('ProductDetail', {spuId: item.relateId})
  }
  addCoupon(item) {
    api.selectCoupon({id: item.relateId}).then(() => {
      wx.showToast({title: '已领取成功'})
    })
  }
  imageLoad = (event, index, width) => {
    let scale = event.nativeEvent.width / event.nativeEvent.height
    this.state.heights[index] = width / scale
    this.setState({heights: this.state.heights})
  }
  handlePress = (item) => {
    if (item.type === CustomPageDataTypeEnum.SHOW) {
    } else if (item.type === CustomPageDataTypeEnum.REDIRECT) {
      this.goToUrl(item.url)
    } else if (item.type === CustomPageDataTypeEnum.TO_CART) {
      this.addCart(item)
    } else if (item.type === CustomPageDataTypeEnum.GET_COUPON) {
      this.addCoupon(item)
    }
  }
  goToUrl(url) {
    miniNavigate(url)
  }
}

export default Custom
