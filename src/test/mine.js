import React from 'react'
import {Dimensions, Platform, ScrollView, Text, View} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addFriend} from '~/store/action/friends-actions'
import {ChannelTypeMap, OrderListStatusEnum, OrderStatusEnum, OrderTypeEnum, UnitTypeEnum} from '~/common/constant'
import s from '~/style/page/mine/mine'
import v from '~/style/varible'

import ProductList from '~/plugin/product-list'
import api from '~/api'
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/MaterialIcons'
import {updateUserDetail} from '~/store/action/user-actions'
import {setRefresh, updateNextPath} from '~/store/action/app-action'
import FastImage from 'react-native-fast-image'
import wx from '~/common/wx'
import {updateFriend} from '~/store/action/ws-actions'
import config from '~/imports/config'
import TouchableOpacity from '~/plugin/touchable-opacity'
import ImagePicker from 'react-native-image-crop-picker'
import {checkPermission, desensitization} from '~/common'

var Fly = require('flyio/dist/npm/fly')
const fly = new Fly()
const calc = require('yu.calculator')

const dateformat = require('yu.date')

class Mine extends React.Component {
  render() {
    return (
      <View>
        <ProductList
          hideFooterList
          header={this.HomeHeader}
          loading={false}
          productList={[]}
          onRefresh={this.onPullDownRefresh}
        />
      </View>
    )
  }
  phone() {
    const {user} = this.props
    if (user.detail.username) {
      return desensitization(user.detail.username, 4, -3)
    }
    return ''
  }
  HomeHeader = () => {
    const {user} = this.props
    const {detail, isManager, isShop} = user
    const {statistics, mineInfo, orderStatistics} = this.state
    const {navigate} = this.props.navigation
    const phone = this.phone()
    const MenuEnum = {
      tab0: 0,
      tab1: 1,
      tab2: 2,
      tab3: 3,
    }
    return (
      <>
        <ScrollView className={s.minePage}>
          <View className={s.top} />
          {detail.id ? (
            <>
              <View style={{height: Platform.OS === 'ios' ? 14 : 0}} />
              <View className={s.mineNav} style={{paddingTop: Platform.OS === 'ios' ? 20 : 0}}>
                <Text className={s.mineNavTitle}>我的</Text>
                <View className={s.config}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('SignIn')
                    }}>
                    <FastImage
                      resizeMode={'stretch'}
                      source={{uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/nav_checkin%402x.png'}}
                      className={s.configImage}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('Config')
                    }}>
                    <FastImage
                      resizeMode={'stretch'}
                      source={{uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/nav_setting%402x.png'}}
                      className={s.configImage}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.chatToPlatform}>
                    <FastImage
                      className={s.configImage}
                      source={{
                        uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/nav_message%402x.png',
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.stretch}
                    />
                    {!!mineInfo.unreadNumLabel && (
                      <View className={s.mineDot} style={{right: '-30%'}}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: '#fff',
                          }}>
                          {mineInfo.unreadNumLabel}
                        </Text>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <View className={s.userInfo}>
                <View className={s.avatar}>
                  <TouchableOpacity onPress={this.updateAvatar}>
                    <FastImage
                      className={s.image}
                      source={{uri: detail.avatar}}
                      resizeMode={FastImage.resizeMode.stretch}
                    />
                  </TouchableOpacity>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TouchableOpacity
                        style={{maxWidth: 160}}
                        onPress={() => {
                          this.props.navigation.navigate('Nickname')
                        }}>
                        <Text numberOfLines={1} className={s.nickname}>
                          {detail.nickname}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}
                        onPress={this.handleRefresh}>
                        <Text className={s.replay}>刷新</Text>
                        <Icons color={v.textLight} size={18} name="replay" />
                      </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                      <Text className={s.phone}>{phone}</Text>
                      <FastImage
                        className={s.vip}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/v2/vip.png',
                          priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.stretch}
                      />
                      <Text className="level"> V{detail.level}</Text>
                    </View>
                    <View className={s.labelBox}>
                      {!!isManager && (
                        <View className={s.labelView}>
                          <Text className={s.labelText}>代理商</Text>
                        </View>
                      )}
                      {!!isShop && (
                        <View className={s.labelView}>
                          <Text className={s.labelText}>分销员</Text>
                        </View>
                      )}
                      {!!detail.type && (
                        <View className={s.labelView}>
                          <Text className={s.labelText}>{ChannelTypeMap[detail.type]}</Text>
                        </View>
                      )}
                      {!!mineInfo.superior && (
                        <TouchableOpacity
                          onPress={() => {
                            this.goToUserCard(mineInfo.superior.id)
                          }}>
                          <Text style={{width: 100}} numberOfLines={1} className={s.bottomMenuItem}>
                            推荐人：{mineInfo.superior?.nickname}
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </>
          ) : (
            <>
              <View style={{height: Platform.OS === 'ios' ? 14 : 0}} />
              <View
                className={s.mineNav}
                style={{justifyContent: 'center', paddingTop: Platform.OS === 'ios' ? 20 : 0}}>
                <Text className={s.mineNavTitle}>我的</Text>
              </View>
              <TouchableOpacity onPress={() => navigate('Login')} className={s.userInfo}>
                <FastImage
                  className={s.image}
                  source={require('~/images/img/app/a9sd2ls_default-avatar.jpeg')}
                  resizeMode={FastImage.resizeMode.stretch}
                />
                {/*<View>*/}
                <Text className={s.loginBtn} textBreakStrategy={'simple'}>
                  登录 / 注册
                </Text>
                {/*</View>*/}
              </TouchableOpacity>
            </>
          )}
          <View className={s.betweenMenu}>
            <TouchableOpacity className={s.infoItem} onPress={() => navigate('Wallet')}>
              <Text numberOfLines={1} className={s.total}>
                {statistics.totalPoint || 0}
              </Text>
              <Text className={s.propName}>佣金</Text>
            </TouchableOpacity>
            <TouchableOpacity className={s.infoItem}>
              <Text numberOfLines={1} className={s.total}>
                {detail.coin || 0}
              </Text>
              <Text className={s.propName}>积分</Text>
            </TouchableOpacity>
            <TouchableOpacity className={s.infoItem} onPress={() => navigate('Coupon')}>
              <Text numberOfLines={1} className={s.total}>
                {statistics.coupon || 0}
              </Text>
              <Text className={s.propName}>优惠券</Text>
            </TouchableOpacity>
            <TouchableOpacity className={s.infoItem} onPress={() => navigate('Track')}>
              <Text numberOfLines={1} className={s.total}>
                {statistics.tracks || 0}
              </Text>
              <Text className={s.propName}>足迹</Text>
            </TouchableOpacity>
          </View>

          <View className={s.cardWrap}>
            {!!detail.id && (
              <View className={s.orderMenuWrap}>
                <View className={s.creativeCenter}>
                  <View
                    style={{
                      paddingRight: 13,
                      borderRightWidth: 0.5,
                      borderRightColor: '#ECECEC',
                    }}>
                    <FastImage
                      style={{width: 32, height: 36}}
                      source={{
                        uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/%E5%88%9B%E4%BD%9C%20%E4%B8%AD%E5%BF%83%402x.png',
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.stretch}
                    />
                  </View>

                  <TouchableOpacity onPress={() => this.goToHomePage(MenuEnum.tab0)} className={s.creativeCenterItem}>
                    <FastImage
                      style={{width: 20, height: 20, marginBottom: 5}}
                      source={{
                        uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/center_number%402x.png',
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.stretch}
                    />
                    <Text>视频</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.goToHomePage(MenuEnum.tab0)} className={s.creativeCenterItem}>
                    <FastImage
                      style={{width: 20, height: 20, marginBottom: 5}}
                      source={{
                        uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/center_activity%402x.png',
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.stretch}
                    />
                    <Text>作品</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.goToHomePage(MenuEnum.tab0)} className={s.creativeCenterItem}>
                    <FastImage
                      style={{width: 20, height: 20, marginBottom: 5}}
                      source={{
                        uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/center_money.png',
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.stretch}
                    />
                    <Text>喜欢</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.goToHomePage(MenuEnum.tab0)} className={s.creativeCenterItem}>
                    <FastImage
                      style={{width: 20, height: 20, marginBottom: 5}}
                      source={{
                        uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/center_shaidan%402x.png',
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.stretch}
                    />
                    <Text>收藏</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View className={s.orderMenuWrap}>
              {/*<Shadow shadowWidth={10} contentWidth={10} shadowOpacity={0.1} shadowRadius={20}>*/}
              <View className={s.myCollectionWrap}>
                <TouchableOpacity
                  onPress={() => navigate('Collection')}
                  className={s.myCollection}
                  style={{
                    borderRightColor: v.border,
                    borderRightWidth: 1,
                  }}>
                  <View className={s.collectionLeft}>
                    <FastImage
                      className={s.collectionIcon}
                      style={{height: 15}}
                      resizeMode={'stretch'}
                      source={{
                        uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/mine_collect%402x.png',
                      }}
                    />
                    <Text>我的收藏</Text>
                  </View>
                  <View className={s.collectionRight}>
                    <Text className={s.collectionRightText}>{statistics.collection || 0}</Text>
                    <Icon name="right" className={s.packageRight} size={14} color={v.textLight} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('Wallet')} className={s.myCollection}>
                  <View className={s.collectionLeft}>
                    <FastImage
                      className={s.collectionIcon}
                      resizeMode={'stretch'}
                      source={{
                        uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/mine_subscribe%402x.png',
                      }}
                    />
                    <Text>钱包</Text>
                  </View>
                  <View className={s.collectionRight}>
                    <Text className={s.collectionRightText}>{detail.point || 0}</Text>
                    <Icon name="right" className={s.packageRight} size={12} color={v.textLight} />
                  </View>
                </TouchableOpacity>
              </View>
              {/*</Shadow>*/}
            </View>
            <View className={s.orderMenuWrap}>
              {/*<Shadow shadowWidth={10} contentWidth={10} shadowOpacity={0.1} shadowRadius={20}>*/}
              <View className={s.cardHeader}>
                <Text className={s.mineHeader}>我的订单</Text>
              </View>
              <View className={s.mineList} style={{marginTop: -1}}>
                <TouchableOpacity
                  onPress={() => {
                    this.goToOrderListWithStatus(OrderStatusEnum.UNPAY)
                  }}
                  className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImageIcon}
                        resizeMode={'stretch'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/mine_unpay%402x.png',
                        }}
                      />
                      {statistics.unpay > 0 && (
                        <View className={s.mineDot}>
                          <Text
                            style={{
                              textAlign: 'center',
                              color: '#fff',
                            }}>
                            {statistics.unpay > 99 ? '99+' : statistics.unpay}
                          </Text>
                        </View>
                      )}
                    </View>
                    <Text className={s.mineTitle}>待付款</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.goToOrderListWithStatus(OrderStatusEnum.PAID)
                  }}
                  className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImageIcon}
                        resizeMode={'stretch'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/mine_unsend%402x.png',
                        }}
                      />
                      {statistics.paid > 0 && (
                        <View className={s.mineDot}>
                          <Text
                            style={{
                              textAlign: 'center',
                              color: '#fff',
                            }}>
                            {statistics.paid}
                          </Text>
                        </View>
                      )}
                    </View>
                    <Text className={s.mineTitle}>待收货</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.goToOrderListWithStatus(OrderStatusEnum.COMMENT)
                  }}
                  className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImageIcon}
                        resizeMode={'stretch'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/mine_daishouhuo%402x.png',
                        }}
                      />
                      {statistics.comment > 0 && (
                        <View className={s.mineDot}>
                          <Text
                            style={{
                              textAlign: 'center',
                              color: '#fff',
                            }}>
                            {statistics.comment}
                          </Text>
                        </View>
                      )}
                    </View>
                    <Text className={s.mineTitle}>待评价</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('AfterSaleList', {
                      orderType: OrderTypeEnum.ONLINE_EXPRESS,
                    })
                  }}
                  className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImageIcon}
                        resizeMode={'cover'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/mine_service%402x.png',
                        }}
                      />
                      {statistics.afterSale > 0 && (
                        <View className={s.mineDot}>
                          <Text
                            style={{
                              textAlign: 'center',
                              lineHeight: 20,
                              color: '#fff',
                            }}>
                            {statistics.afterSale}
                          </Text>
                        </View>
                      )}
                    </View>
                    <Text className={s.mineTitle}>退款售后</Text>
                  </View>
                </TouchableOpacity>
                {mineInfo.logisticsCompany && (
                  <View className={s.logisticsBox}>
                    <View className={s.logisticsInfo}>
                      <FastImage
                        className={s.logisticsIcon}
                        source={{
                          uri:
                            mineInfo.productImage ||
                            'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/after-sale-icon.png',
                        }}
                        resizeMode={FastImage.resizeMode.stretch}
                      />
                      <View className={s.logisticsDesc}>
                        <View className={s.header}>
                          <View className={s.status}>
                            <Text style={{fontSize: 12}}>{mineInfo.logisticsStatus}</Text>
                            <Text className={s.logisticsCompany}>{mineInfo.logisticsCompany}</Text>
                          </View>
                          <Text
                            style={{
                              color: '#888',
                              fontSize: 12,
                            }}>
                            {mineInfo.logisticsTime}
                          </Text>
                        </View>
                        <Text className={s.address}>{mineInfo.logisticsStation}</Text>
                      </View>
                    </View>
                  </View>
                )}
              </View>

              {/*{mineInfo.logisticsCompany && (*/}
              {/*  <View className={s.logisticsBox}>*/}
              {/*    <View className={s.logisticsInfo}>*/}
              {/*      <FastImage*/}
              {/*        className={s.logisticsIcon}*/}
              {/*        source={{*/}
              {/*          uri:*/}
              {/*            mineInfo.productImage ||*/}
              {/*            'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/fssd/after-sale-icon.png',*/}
              {/*        }}*/}
              {/*        resizeMode={FastImage.resizeMode.stretch}*/}
              {/*      />*/}
              {/*    </View>*/}
              {/*  </View>*/}
              {/*)}*/}
              {/*</Shadow>*/}
            </View>

            {!!isShop && !isManager && (
              <View className={s.orderMenuWrap}>
                {/*<Shadow shadowWidth={10} contentWidth={10} shadowOpacity={0.1} shadowRadius={20}>*/}
                <View className={s.cardHeader}>
                  <Text className={s.mineHeader}>分销员销售统计</Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigate('BusinessAdmin', {
                        unitType: UnitTypeEnum.SHOP,
                      })
                    }>
                    <Text className={s.menuPoint}>
                      管理后台
                      <Icon className={s.menuPoint} name="right" size={26} color="#666666" />
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className={s.mineList}>
                  <TouchableOpacity
                    onPress={() =>
                      navigate('Commission', {
                        unitType: UnitTypeEnum.SHOP,
                      })
                    }
                    className={s.mineItem}>
                    <View>
                      <View className={s.mineImageWrap}>
                        <Text className={s.count}>{orderStatistics.shopTodayCommission}</Text>
                      </View>
                      <Text className={s.mineTitle}>今日收益(元)</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigate('Commission', {
                        unitType: UnitTypeEnum.SHOP,
                      })
                    }
                    className={s.mineItem}>
                    <View>
                      <View className={s.mineImageWrap}>
                        <Text className={s.count}>{orderStatistics.shopMonthCommission}</Text>
                      </View>
                      <Text className={s.mineTitle}>本月收益(元)</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigate('BusinessOrderList', {
                        status: OrderListStatusEnum.TO_BE_SHIPPED,
                        unitType: UnitTypeEnum.SHOP,
                      })
                    }
                    className={s.mineItem}>
                    <View>
                      <View className={s.mineImageWrap}>
                        <Text className={s.count}>{orderStatistics.shopWaitDeliver}</Text>
                      </View>
                      <Text className={s.mineTitle}>待发货</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigate('BusinessOrderList', {
                        unitType: UnitTypeEnum.SHOP,
                      })
                    }
                    className={s.mineItem}>
                    <View>
                      <View className={s.mineImageWrap}>
                        <Text className={s.count}>{orderStatistics.shopTodayCount}</Text>
                      </View>
                      <Text className={s.mineTitle}>今日订单</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/*</Shadow>*/}
              </View>
            )}
            {!!isManager && (
              <View className={s.orderMenuWrap}>
                <View className={s.cardHeader}>
                  <Text className={s.mineHeader}>代理商销售统计</Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigate('BusinessAdmin', {
                        unitType: UnitTypeEnum.TENANT,
                      })
                    }>
                    <Text className={s.menuPoint}>
                      管理后台
                      <Icon className={s.menuPoint} name="right" size={26} color="#666666" />
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className={s.mineList}>
                  <TouchableOpacity
                    onPress={() =>
                      navigate('Commission', {
                        unitType: UnitTypeEnum.TENANT,
                      })
                    }
                    className={s.mineItem}>
                    <View>
                      <View className={s.mineImageWrap}>
                        <Text className={s.count}>{orderStatistics.tenantTodayCommission}</Text>
                      </View>
                      <Text className={s.mineTitle}>今日收益(元)</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigate('Commission', {
                        unitType: UnitTypeEnum.TENANT,
                      })
                    }
                    className={s.mineItem}>
                    <View>
                      <View className={s.mineImageWrap}>
                        <Text className={s.count}>{orderStatistics.tenantMonthCommission}</Text>
                      </View>
                      <Text className={s.mineTitle}>本月收益(元)</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigate('BusinessOrderList', {
                        status: OrderListStatusEnum.TO_BE_SHIPPED,
                        unitType: UnitTypeEnum.TENANT,
                      })
                    }
                    className={s.mineItem}>
                    <View>
                      <View className={s.mineImageWrap}>
                        <Text className={s.count}>{orderStatistics.tenantWaitDeliver}</Text>
                      </View>
                      <Text className={s.mineTitle}>待发货</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigate('BusinessOrderList', {
                        unitType: UnitTypeEnum.TENANT,
                      })
                    }
                    className={s.mineItem}>
                    <View>
                      <View className={s.mineImageWrap}>
                        <Text className={s.count}>{orderStatistics.tenantTodayCount}</Text>
                      </View>
                      <Text className={s.mineTitle}>今日订单</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/*</Shadow>*/}
              </View>
            )}
            <View className={s.orderMenuWrap}>
              {/*<Shadow shadowWidth={10} contentWidth={10} shadowOpacity={0.1} shadowRadius={20}>*/}
              <View className={s.cardHeader} />
              <View className={s.mineList}>
                <TouchableOpacity onPress={this.chatToPlatform} className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImage}
                        resizeMode={'stretch'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_service%402x.png',
                        }}
                      />
                    </View>
                    <Text className={s.mineTitle}>客服中心</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('CoinProductList')} className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImage}
                        resizeMode={'stretch'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_coinstore%402x.png',
                        }}
                      />
                    </View>
                    <Text className={s.mineTitle}>积分商城</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('Invite')} className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImage}
                        resizeMode={'stretch'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_sharestore%402x.png',
                        }}
                      />
                    </View>
                    <Text className={s.mineTitle}>分享邀请</Text>
                  </View>
                </TouchableOpacity>
                {!!isManager && (
                  <TouchableOpacity onPress={() => navigate('InviteShop')} className={s.mineItem}>
                    <View>
                      <View className={s.mineImageWrap}>
                        <FastImage
                          className={s.mineImage}
                          resizeMode={'stretch'}
                          source={{
                            uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_dianyuan%402x.png',
                          }}
                        />
                      </View>
                      <Text className={s.mineTitle}>邀请分销员</Text>
                    </View>
                  </TouchableOpacity>
                )}
                <TouchableOpacity onPress={() => navigate('Friend')} className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImage}
                        resizeMode={'cover'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_myfriends%402x.png',
                        }}
                      />
                    </View>
                    <Text className={s.mineTitle}>我的好友</Text>
                  </View>
                </TouchableOpacity>
                {!!isManager && (
                  <TouchableOpacity
                    onPress={() => {
                      navigate('BusinessAdmin', {
                        unitType: UnitTypeEnum.TENANT,
                      })
                    }}
                    className={s.mineItem}>
                    <View>
                      <View className={s.mineImageWrap}>
                        <FastImage
                          className={s.mineImage}
                          resizeMode={'stretch'}
                          source={{
                            uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_storelist%402x.png',
                          }}
                        />
                      </View>
                      <Text className={s.mineTitle}>代理商后台</Text>
                    </View>
                  </TouchableOpacity>
                )}
                {!!isShop && (
                  <TouchableOpacity
                    onPress={() =>
                      navigate('BusinessAdmin', {
                        unitType: UnitTypeEnum.SHOP,
                      })
                    }
                    className={s.mineItem}>
                    <View>
                      <View className={s.mineImageWrap}>
                        <FastImage
                          className={s.mineImage}
                          resizeMode={'stretch'}
                          source={{
                            uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_storelist%402x.png',
                          }}
                        />
                      </View>
                      <Text className={s.mineTitle}>分销员后台</Text>
                    </View>
                  </TouchableOpacity>
                )}

                <TouchableOpacity onPress={() => navigate('Card')} className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImage}
                        resizeMode={'stretch'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_jifen%402x.png',
                        }}
                      />
                    </View>
                    <Text className={s.mineTitle}>我的名片</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('Poster')} className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImage}
                        resizeMode={'stretch'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_boxgame%402x.png',
                        }}
                      />
                    </View>
                    <Text className={s.mineTitle}>推广海报</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('CoinFlow')} className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImage}
                        resizeMode={'stretch'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_mymoney%402x.png',
                        }}
                      />
                    </View>
                    <Text className={s.mineTitle}>积分流水</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('AddressList')} className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImage}
                        resizeMode={'cover'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_location%402x.png',
                        }}
                      />
                    </View>
                    <Text className={s.mineTitle}>收货地址</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('OnePost')} className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImage}
                        resizeMode={'stretch'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_scan%402x.png',
                        }}
                      />
                    </View>
                    <Text className={s.mineTitle}>一键发圈</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('NineLottery')} className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImage}
                        resizeMode={'stretch'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_zhuanpan%402x.png',
                        }}
                      />
                    </View>
                    <Text className={s.mineTitle}>抽奖</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('TenantApply')} className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImage}
                        resizeMode={'stretch'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_dianyuan%402x.png',
                        }}
                      />
                    </View>
                    <Text className={s.mineTitle}>代理商申请</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('AboutUs')} className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImage}
                        resizeMode={'stretch'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_gamehistory%402x.png',
                        }}
                      />
                    </View>
                    <Text className={s.mineTitle}>关于肤素</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('LearningCenter')} className={s.mineItem}>
                  <View>
                    <View className={s.mineImageWrap}>
                      <FastImage
                        className={s.mineImage}
                        resizeMode={'stretch'}
                        source={{
                          uri: 'https://fousu.oss-cn-hangzhou.aliyuncs.com/resource/tools_dianyuan%402x.png',
                        }}
                      />
                    </View>
                    <Text className={s.mineTitle}>商学院</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    )
  }

  // data
  constructor(props: any) {
    super(props)

    this.state = {
      bacImageHeight: 120,
      width: Dimensions.get('window').width,
      isSignInToady: false,
      visible: false,
      signInMap: [],
      signInCount: 0,
      mineInfo: {},
      orderStatistics: {
        shopYesterdaySum: 0,
        shopYesterdayCount: 0,
        shopTodaySum: 0,
        tenantYesterdaySum: 0,
        tenantYesterdayCount: 0,
        tenantTodaySum: 0,
        shopTodayCount: 0,
        tenantTodayCount: 0,
        shopWaitDeliver: 0,
        tenantWaitDeliver: 0,
        shopTodayCommission: 0,
        shopMonthCommission: 0,
        tenantTodayCommission: 0,
        tenantMonthCommission: 0,
      },
      statistics: {
        unpay: 0,
        paid: 0,
        done: 0,
        collection: 0,
        friendCount: 0,
        tracks: 0,
        point: 0,
        coupon: 0,
      },
    }
  }

  //methods
  goToHomePage = (type) => {
    this.props.navigation.navigate('HomePage', {type})
  }
  handleRefresh = () => {
    console.log('handleRefresh')
    api.getUserDetail().then((user) => {
      this.props.updateUserDetail(user)
      wx.showToast({icon: 'success', title: '刷新成功'})
    })
  }

  chatToPlatform = () => {
    // 判断是否有token
    storage
      .load({key: 'token'})
      .then((res) => {
        api.getPlatformMsgUser({msgUserId: this.props.user.detail.msgUserId}).then((item) => {
          if (item) {
            this.props.updateFriend({
              id: item.id,
              nickname: item.nickname,
              serviceName: item.serviceName,
              tenantId: item.tenantId,
              avatar: item.avatar,
              msgUserId: this.props.user.detail.msgUserId,
            })
            this.props.navigation.navigate('Chat')
          } else {
            wx.showModal({
              title: '提示',
              content: '当前还没有正在服务中的客服，请稍后再试',
              cancelColor: '#333333',
              confirmColor: '#f55622',
              showCancel: false,
              success: (res) => {},
            })
          }
        })
      })
      .catch((res) => {
        this.props.navigation.navigate('Login')
      })
  }
  goToUserCard = (superiorId) => {
    this.props.navigation.navigate('Card', {userId: superiorId})
  }
  imageLoad = (event) => {
    let scale = event.nativeEvent.width / event.nativeEvent.height
    this.setState({bacImageHeight: this.state.width / scale})
  }
  goToOrderListWithStatus = (status) => {
    this.props.navigation.navigate('OrderList', {status})
  }
  getDetail() {
    api.getMineStatistics().then((res) => {
      const {orderStatistics} = this.state
      res.unreadNum = res.unreadNum || 0
      console.log('res.unreadNum', res, res.unreadNum)
      res.unreadNumLabel = res.unreadNum >= 100 ? '99+' : res.unreadNum
      res.mineStatisticsVO.totalPoint = calc.add(res.mineStatisticsVO.point, res.mineStatisticsVO.freezeAmount || 0)
      Object.keys(orderStatistics).forEach((key) => {
        orderStatistics[key] = res[key] || 0
      })
      if (res.logisticsTrace) {
        const logisticsMap = {
          0: '无轨迹',
          1: '已揽收',
          2: '派送中',
          3: '已签收',
          4: '问题件',
        }
        const data = JSON.parse(res.logisticsTrace)

        if (data.Traces.length === 0) {
          res.logisticsStatus = '已发货'
          res.logisticsStation = '暂无物流信息'
          res.logisticsTime = dateformat.format(new Date(), 'MM-dd')
        } else {
          const steps = []
          for (let i = data.Traces.length - 1; i >= 0; i--) {
            steps.push({
              text: data.Traces[i].AcceptStation,
              time: data.Traces[i].AcceptTime.substr(5, 5),
            })
          }
          const step = steps[0]
          res.logisticsStatus = logisticsMap[data.State]
          res.logisticsStation = step.text
          res.logisticsTime = step.time
        }
      }
      this.setState({
        mineInfo: res,
        serverInfo: res.superior,
        statistics: res.mineStatisticsVO,
        orderStatistics,
      })
      if (res.signInList) {
        this.getThisMonthSignInRecord(res.signInList)
      }
    })
  }

  getThisMonthSignInRecord(res) {
    const {signInMap} = this.state
    const day = new Date().getDate()
    let isSignInToady = false
    res.forEach((item) => {
      signInMap[item.day] = true
      if (day === item.day) {
        isSignInToady = true
      }
    })
    this.setState({
      signInMap,
      isSignInToady,
      signInCount: res.length,
    })
  }

  getUserDetail() {
    storage.load({key: 'token'}).then((res) => {
      // 判断storage是否有用户信息
      api.getUserDetail().then((user) => {
        this.getDetail()
        this.props.updateUserDetail(user)
      })
    })
  }

  updateAvatar = () => {
    checkPermission().then((res) => {
      ImagePicker.openPicker({cropping: true, height: 750, width: 750})
        .then((image) => {
          let data = new FormData()
          data.append('file', {uri: image.path, type: 'multipart/form-data', name: 'avatar.png'})
          storage.load({key: 'token'}).then((token) => {
            fly.config.headers = {
              'Content-Type': 'multipart/form-data',
              accept: 'application/json',
              Authorization: `Bearer ${token}`,
            }
            const key = wx.showLoading({title: '图片上传中'})
            fly
              .post(config.updateImage, data)
              .then((res) => {
                api.updateAvatar({avatar: res.data.value}).then(() => {
                  api.getUserDetail().then((user) => {
                    this.props.updateUserDetail(user)
                  })
                })
                wx.hideLoading(key)
              })
              .catch((res) => {
                console.log('失败', res)
                wx.hideLoading(key)
              })
          })
        })
        .catch((e) => {
          console.log(e)
        })
    })
  }

  onPullDownRefresh = () => {
    storage.load({key: 'token'}).then((res) => {
      this.getUserDetail()
    })
  }

  // mounted
  componentDidMount(): void {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      if (this.props.app.refresh) {
        console.log('this._unsubscribe')
        this.setState(
          {
            mineInfo: {},
            serverInfo: {},
            statistics: {},
          },
          () => {
            storage.load({key: 'token'}).then((res) => {
              this.getUserDetail()
            })
            this.props.setRefresh(false)
          },
        )
      }
    })
    storage.load({key: 'token'}).then((res) => {
      this.getUserDetail()
    })
  }

  componentWillUnmount() {
    this._unsubscribe()
  }
}

const mapStateToProps = (state) => {
  const {friends, user, app} = state
  return {friends, user, app}
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateNextPath,
      addFriend,
      updateUserDetail,
      setRefresh,
      updateFriend,
    },
    dispatch,
  )
export default connect(mapStateToProps, mapDispatchToProps)(Mine)
