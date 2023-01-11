import * as React from 'react'
import {DefaultTheme, NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import v from '~/style/varible'
import {navigate} from '~/route/navigation'

import HomeTabs from './tabs'
import Login from '~/views/auth/login'
import ThirdPartyLogin from '~/views/auth/third-party-login'
import Verification from '~/views/auth/verification'
import ConfirmOrder from '~/views/home/confirm-order'
import ForgetPassword from '~/views/auth/forget-password'
import Register from '~/views/auth/register'
import CoinOrderList from '~/views/coin/coin-order-list'
import CoinProductDetail from '~/views/coin/coin-product-detail'
import CoinProductList from '~/views/coin/coin-product-list'
import {isReadyRef, navigationRef} from './navigation'
import CouponList from '~/views/home/coupon-list'
import CustomPage from '~/views/home/custom-page'
import LotteryList from '~/views/pageOne/lottery-list'
import NineLottery from '~/views/pageOne/nine-lottery'
import CloseUser from '~/views/pageOne/close-user'
import TenantStore from '~/views/pageOne/tenant-store'
import FlashSale from '~/views/home/flash-sale'
import Bargain from '~/views/home/bargain'
import BargainList from '~/views/home/bargain-list'
import BargainHome from '~/views/home/bargain-home'
import CreateCard from '~/views/home/create-card'
import ProductDetail from '~/views/home/product-detail'
import ProductList from '~/views/home/product-list'
import AfterSale from '~/views/mine/after-sale'
import AfterSaleList from '~/views/mine/after-sale-list'
import AfterSaleSelect from '~/views/mine/after-sale-select'
import Article from '~/views/mine/article'
import Stock from '~/views/mine/stock'
import StockDetail from '~/views/mine/stock-detail'
import Privacy from '~/views/mine/privacy'
import Poster from '~/views/mine/poster'
import OnePost from '~/views/mine/one-post'
import OrderRemark from '~/views/pageThree/order-remark'
import BusinessIncomeDetail from '~/views/pageThree/business-income-detail'
import BusinessOrderDetail from '~/views/pageThree/business-order-detail'
import LotteryOrder from '~/views/pageOne/lottery-order'
import TenantApply from '~/views/pageOne/tenant-apply'
import IndicatorDetails from '~/views/pageThree/indicator-details'
import EmptyPage from '~/views/pageThree/empty-page'
import BusinessOrderList from '~/views/pageThree/business-order-list'
import PayPassword from '~/views/pageThree/pay-password'
import CouponDetail from '~/views/mine/coupon-detail'
import Detail from '~/views/pageFour/detail'
import ChangeList from '~/views/pageFour/change-list'
import CustomerEdit from '~/views/pageThree/customer-edit'
import StoreList from '~/views/pageThree/store-list'
import ActivityList from '~/views/pageThree/activity-list'
import StoreSettings from '~/views/pageThree/store-settings'
import BusinessActivities from '~/views/pageThree/business-activities'
import CustomerClassification from '~/views/pageThree/customer-classification'
import CustomerList from '~/views/pageThree/customer-list'
// TODO：react-native-permissions 未引用
import Chat from '~/views/mine/chat'
import Collection from '~/views/mine/collection'
import Comment from '~/views/mine/comment'
import CommentList from '~/views/mine/comment-list'
import Config from '~/views/mine/config'
import AboutUs from '~/views/mine/about-us'
import LearningCenter from '~/views/mine/learning-center'
import LearningDetail from '~/views/mine/learning-detail'
import IdCode from '~/views/mine/id-code'
import Coupon from '~/views/mine/coupon'
import Friend from '~/views/mine/friend'
import History from '~/views/mine/history'
import NoticeSys from '~/views/mine/notice-sys'
import IdCard from '~/views/mine/id-card'
import LogisticsTrace from '~/views/mine/logistics-trace'
import Logistics from '~/views/mine/logistics'
import OrderDetail from '~/views/mine/order-detail'
import OrderList from '~/views/mine/order-list'
import Track from '~/views/mine/track'
import SignIn from '~/views/mine/signIn'
import Category from '~/views/category/category'
import StoreData from '~/views/home/store-data'
import Invite from '~/views/mine/invite'
import InviteShop from '~/views/mine/inviteShop'
import Wallet from '~/views/pageTwo/wallet'
import TenantWallet from '~/views/pageTwo/tenant-wallet'
import BillInfo from '~/views/pageTwo/bill-info'
import Appointment from '~/views/pageTwo/appointment'
import BankCard from '~/views/mine/bank-card'
import CoinFlow from '~/views/mine/coin-flow'
import Commission from '~/views/pageTwo/commission'
import Bill from '~/views/pageTwo/bill'
import Balance from '~/views/pageTwo/balance'
import IncomeDetail from '~/views/pageTwo/income-details'
import Zone from '~/views/pageTwo/zone'
import Address from '~/views/mine/edit/address'
import AddressList from '~/views/mine/edit/address-list'
import InvoiceApply from '~/views/mine/invoice-apply'
import InvoiceAccountList from '~/views/mine/invoice-account-list'
import InvoiceAccountEdit from '~/views/mine/invoice-account-edit'
import ProductSearch from '~/views/home/product-search'
import StoreLevel from '~/views/pageTwo/store-level'
import SalesVolume from '~/views/pageTwo/sales-volume'
// import AgentDetail from '~/views/pageTwo/agent-detail'

import BrowseDetail from '~/views/pageFour/browse-detail'
import BrowsePut from '~/views/pageFour/browse-put'
import BrowseReport from '~/views/pageFour/browse-report'
import BrowseTag from '~/views/pageFour/browse-tag'
// import CommodityWindow from '~/page/live/commodity-window'
import Nickname from '~/views/mine/edit/nickname'
import Phone from '~/views/mine/edit/phone'
import Help from '~/views/mine/edit/help'
import Camera from '~/views/home/camera'
import SelectAddress from '~/views/home/select-address'
import ActivitySpuDetail from '~/views/home/activity-spu-detail'
import ShopOrderDetail from '~/views/mine/shop-order-detail'
import LotteryOpportunityList from '~/views/pageOne/lottery-opportunity-list'
import Card from '~/views/mine/card'
import VideoUpload from '~/views/home/video-upload'
import BasicInformation from '~/views/pageTwo/basic-information'
import BusinessAdmin from '~/views/pageThree/business-admin'
import ShoppingFund from '~/views/pageThree/shopping-fund'
import InviteAttention from '~/views/pageThree/invite-attention'
import HomePage from '~/views/pageFour/home-page'

// 管理后台路由

const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#333333',
    background: 'rgb(255, 255, 255)',
  },
}

const Stack = createStackNavigator()
export default function MainContainer() {
  return (
    <NavigationContainer
      theme={MyTheme}
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true
      }}>
      <Stack.Navigator
      // 全局定义页面跳转过渡从右往左
      // screenOptions={() => ({
      //   ...TransitionPresets.SlideFromRightIOS,
      // })}
      >
        <Stack.Screen
          options={() => ({headerShown: false, headerBackTitle: ' ', title: ''})}
          name="Index"
          component={HomeTabs}
        />
        <Stack.Screen
          options={() => ({headerShown: false, headerBackTitle: ' ', title: ''})}
          name="VideoUpload"
          component={VideoUpload}
        />
        <Stack.Screen options={() => ({headerBackTitle: ' ', title: '我的明细'})} name="Detail" component={Detail} />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '兑换商品列表'})}
          name="ChangeList"
          component={ChangeList}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '销售额'})}
          name="SalesVolume"
          component={SalesVolume}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '店铺等级'})}
          name="StoreLevel"
          component={StoreLevel}
        />
        <Stack.Screen
          name="BrowseDetail"
          component={BrowseDetail}
          options={() => ({headerBackTitle: ' ', title: ''})}
        />
        <Stack.Screen name="BrowsePut" component={BrowsePut} options={() => ({headerBackTitle: ' ', title: '发布'})} />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={() => ({
            headerBackTitle: ' ',
            title: '个人主页',
          })}
        />
        <Stack.Screen
          name="BrowseReport"
          component={BrowseReport}
          options={() => ({headerBackTitle: ' ', title: ''})}
        />
        <Stack.Screen
          name="BrowseTag"
          component={BrowseTag}
          options={() => ({headerBackTitle: ' ', title: '添加标签'})}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '基本信息'})}
          name="BasicInformation"
          component={BasicInformation}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '客户分类'})}
          name="CustomerClassification"
          component={CustomerClassification}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '活动报名信息'})}
          name="BusinessActivities"
          component={BusinessActivities}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '补贴券详情'})}
          name="CouponDetail"
          component={CouponDetail}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '编辑客户'})}
          name="CustomerEdit"
          component={CustomerEdit}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '预约设置'})}
          name="StoreList"
          component={StoreList}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '预约设置'})}
          name="StoreSettings"
          component={StoreSettings}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '活动列表'})}
          name="ActivityList"
          component={ActivityList}
        />
        <Stack.Screen
          name="BusinessAdmin"
          component={BusinessAdmin}
          options={() => ({
            headerBackTitle: ' ',
            title: '',
          })}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '购物金明细'})}
          name="ShoppingFund"
          component={ShoppingFund}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '分销员列表'})}
          name="InviteAttention"
          component={InviteAttention}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '抽奖记录'})}
          name="LotteryList"
          component={LotteryList}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '奖品订单详情'})}
          name="LotteryOrder"
          component={LotteryOrder}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '代理商申请'})}
          name="TenantApply"
          component={TenantApply}
        />
        <Stack.Screen
          name="CustomerList"
          component={CustomerList}
          options={() => ({headerBackTitle: ' ', title: '客户列表'})}
        />
        <Stack.Screen
          name="BusinessIncomeDetail"
          component={BusinessIncomeDetail}
          options={() => ({headerBackTitle: ' ', title: '提现明细'})}
        />
        <Stack.Screen
          name="BusinessOrderDetail"
          component={BusinessOrderDetail}
          options={() => ({headerBackTitle: ' ', title: '订单详情'})}
        />
        <Stack.Screen
          name="IndicatorDetails"
          component={IndicatorDetails}
          options={() => ({headerBackTitle: ' ', title: '指标详情'})}
        />
        <Stack.Screen
          name="EmptyPage"
          component={EmptyPage}
          options={() => ({headerShown: false, headerBackTitle: ' '})}
        />
        <Stack.Screen
          name="NineLottery"
          component={NineLottery}
          options={() => ({headerBackTitle: ' ', title: '幸运抽奖'})}
        />
        <Stack.Screen
          name="CloseUser"
          component={CloseUser}
          options={() => ({headerBackTitle: ' ', title: '账号注销'})}
        />
        <Stack.Screen
          name="TenantStore"
          component={TenantStore}
          options={() => ({
            headerBackTitle: ' ',
            title: '',
            headerTintColor: '#fff',
            headerStyle: {
              // 导航栏样式相关配置
              backgroundColor: 'rgba(22,40,61,.8)', // 导航栏背景颜色
              shadowColor: 'transparent', // 去除导航底部border
            },
          })}
        />
        <Stack.Screen
          name="BusinessOrderList"
          component={BusinessOrderList}
          options={() => ({
            headerBackTitle: ' ',
            title: '',
          })}
        />
        <Stack.Screen
          name="PayPassword"
          component={PayPassword}
          options={() => ({
            headerBackTitle: ' ',
            title: '设置安全密码',
            headerStyle: {
              // 导航栏样式相关配置
              backgroundColor: v.bgColor, // 导航栏背景颜色
            },
          })}
        />
        <Stack.Screen name="Card" component={Card} options={() => ({headerBackTitle: ' ', title: '名片'})} />
        <Stack.Screen
          name="ActivitySpuDetail"
          component={ActivitySpuDetail}
          options={() => ({headerShown: false, headerBackTitle: ' ', title: ''})}
        />
        <Stack.Screen
          name="SelectAddress"
          component={SelectAddress}
          options={() => ({headerBackTitle: ' ', title: '选择位置'})}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={() => ({headerShown: false, headerBackTitle: ' ', title: ''})}
        />
        <Stack.Screen
          name="Nickname"
          component={Nickname}
          options={() => ({headerBackTitle: ' ', title: '修改昵称'})}
        />
        <Stack.Screen name="Phone" component={Phone} options={() => ({headerBackTitle: ' ', title: '修改手机号'})} />
        <Stack.Screen name="Login" component={Login} options={() => ({headerBackTitle: ' ', title: '登录'})} />
        <Stack.Screen
          name="ThirdPartyLogin"
          component={ThirdPartyLogin}
          options={() => ({headerBackTitle: ' ', title: '绑定手机号'})}
        />
        <Stack.Screen
          name="CoinOrderList"
          component={CoinOrderList}
          options={() => ({headerBackTitle: ' ', title: '积分订单列表'})}
        />
        <Stack.Screen
          name="CoinProductList"
          component={CoinProductList}
          options={() => ({headerBackTitle: ' ', title: '积分商品列表'})}
        />
        <Stack.Screen
          name="CoinProductDetail"
          component={CoinProductDetail}
          options={() => ({headerBackTitle: ' ', headerShown: false, title: '积分商品详情'})}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={() => ({headerBackTitle: ' ', title: '修改密码'})}
        />
        <Stack.Screen name="Help" component={Help} options={() => ({headerBackTitle: ' ', title: '帮助'})} />
        <Stack.Screen
          name="ConfirmOrder"
          component={ConfirmOrder}
          options={() => ({headerBackTitle: ' ', title: '确认订单'})}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={() => ({headerBackTitle: ' ', title: '注册账号'})}
        />
        <Stack.Screen
          name="OrderRemark"
          component={OrderRemark}
          options={() => ({headerBackTitle: ' ', title: '订单备注'})}
        />
        <Stack.Screen
          name="CouponList"
          component={CouponList}
          options={() => ({headerBackTitle: ' ', title: '优惠券'})}
        />
        <Stack.Screen
          name="CustomPage"
          component={CustomPage}
          options={() => ({headerShown: false, headerBackTitle: ' ', title: ''})}
        />
        <Stack.Screen
          name="FlashSale"
          component={FlashSale}
          options={() => ({
            headerBackTitle: ' ',
            title: '限时秒杀',
            headerBackTitleStyle: {
              color: '#fff',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerStyle: {
              // 导航栏样式相关配置
              backgroundColor: '#FF4A4A', // 导航栏背景颜色
            },
          })}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={() => ({
            headerBackTitle: ' ',
            title: '',
            // headerBackTitle: ' ',
            // title: '',
            // headerShown: false,
          })}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={() => ({headerBackTitle: ' ', title: '商品列表'})}
        />
        <Stack.Screen
          name="ProductSearch"
          component={ProductSearch}
          options={() => ({headerBackTitle: ' ', headerShown: false, title: ''})}
        />
        <Stack.Screen
          name="AfterSale"
          component={AfterSale}
          options={() => ({headerBackTitle: ' ', title: '售后详情'})}
        />
        <Stack.Screen
          name="AfterSaleList"
          component={AfterSaleList}
          options={() => ({headerBackTitle: ' ', title: '退款售后'})}
        />
        <Stack.Screen
          name="AfterSaleSelect"
          component={AfterSaleSelect}
          options={() => ({headerBackTitle: ' ', title: '售后选择'})}
        />
        <Stack.Screen name="Article" component={Article} options={() => ({headerBackTitle: ' ', title: ''})} />
        <Stack.Screen name="Stock" component={Stock} options={() => ({headerBackTitle: ' ', title: '云仓库存'})} />
        <Stack.Screen
          name="StockDetail"
          component={StockDetail}
          options={() => ({headerBackTitle: ' ', title: '库存明细'})}
        />
        <Stack.Screen name="Privacy" component={Privacy} options={() => ({headerBackTitle: ' ', title: '隐私协议'})} />
        <Stack.Screen name="Poster" component={Poster} options={() => ({headerBackTitle: ' ', title: '推广海报'})} />
        <Stack.Screen name="OnePost" component={OnePost} options={() => ({headerBackTitle: ' ', title: '一键发圈'})} />
        <Stack.Screen name="Chat" component={Chat} options={() => ({headerBackTitle: ' '})} />
        <Stack.Screen
          name="Collection"
          component={Collection}
          options={() => ({headerBackTitle: ' ', title: '我的收藏'})}
        />
        <Stack.Screen name="Comment" component={Comment} options={() => ({headerBackTitle: ' ', title: '商品评价'})} />
        <Stack.Screen
          name="CommentList"
          component={CommentList}
          options={() => ({headerBackTitle: ' ', title: '评价列表'})}
        />
        <Stack.Screen
          name="Config"
          component={Config}
          options={() => ({
            headerBackTitle: ' ',
            title: '我的设置',
            headerStyle: {
              // 导航栏样式相关配置
              backgroundColor: v.bgColor, // 导航栏背景颜色
            },
          })}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={() => ({
            headerBackTitle: ' ',
            title: '关于肤素时代',
          })}
        />
        <Stack.Screen
          name="LearningCenter"
          component={LearningCenter}
          options={() => ({
            headerBackTitle: ' ',
            title: '商学院',
          })}
        />
        <Stack.Screen
          name="LearningDetail"
          component={LearningDetail}
          options={() => ({
            headerBackTitle: ' ',
            title: '课程学习',
          })}
        />
        <Stack.Screen name="Coupon" component={Coupon} options={() => ({headerBackTitle: ' ', title: '我的优惠券'})} />
        <Stack.Screen name="Friend" component={Friend} options={() => ({headerBackTitle: ' ', title: '好友列表'})} />
        <Stack.Screen name="History" component={History} options={() => ({headerBackTitle: ' ', title: '消息'})} />
        <Stack.Screen
          name="NoticeSys"
          component={NoticeSys}
          options={() => ({headerBackTitle: ' ', title: '系统通知'})}
        />
        <Stack.Screen name="IdCard" component={IdCard} options={() => ({headerBackTitle: ' ', title: '实名认证'})} />
        <Stack.Screen
          name="InvoiceAccountList"
          component={InvoiceAccountList}
          options={() => ({headerBackTitle: ' ', title: '开票帐号列表'})}
        />
        <Stack.Screen
          name="StoreData"
          component={StoreData}
          options={() => ({headerBackTitle: ' ', title: '店铺资料'})}
        />
        <Stack.Screen
          name="InvoiceAccountEdit"
          component={InvoiceAccountEdit}
          options={() => ({headerBackTitle: ' ', title: '编辑开票帐号'})}
        />
        <Stack.Screen
          name="InvoiceApply"
          component={InvoiceApply}
          options={() => ({headerBackTitle: ' ', title: '发票申请'})}
        />
        <Stack.Screen
          name="LogisticsTrace"
          component={LogisticsTrace}
          options={() => ({headerBackTitle: ' ', title: '物流'})}
        />
        <Stack.Screen
          name="Logistics"
          component={Logistics}
          options={() => ({headerBackTitle: ' ', title: '填写退货物流'})}
        />
        <Stack.Screen
          name="OrderDetail"
          component={OrderDetail}
          options={() => ({headerBackTitle: ' ', title: '订单详情'})}
        />
        <Stack.Screen
          name="OrderList"
          component={OrderList}
          options={() => ({
            headerBackTitle: ' ',
            title: '订单列表',
            // headerStyle: {
            //   // 导航栏样式相关配置
            //   backgroundColor: v.bgColor, // 导航栏背景颜色
            // },
          })}
        />
        <Stack.Screen name="Category" component={Category} options={() => ({headerBackTitle: ' ', title: '分类'})} />
        <Stack.Screen name="Track" component={Track} options={() => ({headerBackTitle: ' ', title: '我的足迹'})} />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={() => ({
            headerBackTitle: ' ',
            title: '签到',
            headerTitleStyle: {
              color: '#000',
            },
            headerTintColor: {
              color: '#000',
            },
          })}
        />
        <Stack.Screen name="Bargain" component={Bargain} options={() => ({headerBackTitle: ' ', title: '砍价活动'})} />
        <Stack.Screen
          name="BargainList"
          component={BargainList}
          options={() => ({headerBackTitle: ' ', title: '我的砍价'})}
        />
        <Stack.Screen
          name="BargainHome"
          component={BargainHome}
          options={() => ({
            headerBackTitle: ' ',
            title: '砍价活动',
            headerTransparent: true, // 导航背景透明
            headerTitleStyle: {
              color: '#fff',
            },
            headerTintColor: {
              color: '#fff',
            },
          })}
        />
        <Stack.Screen
          name="Invite"
          component={Invite}
          options={() => ({headerBackTitle: ' ', title: '分享邀请海报'})}
        />
        <Stack.Screen
          name="InviteShop"
          component={InviteShop}
          options={() => ({headerBackTitle: ' ', title: '邀请分销员'})}
        />
        <Stack.Screen name="Wallet" component={Wallet} options={() => ({headerBackTitle: ' ', title: '我的钱包'})} />
        <Stack.Screen
          name="TenantWallet"
          component={TenantWallet}
          options={() => ({headerBackTitle: ' ', title: '代理商帐户'})}
        />
        <Stack.Screen
          name="Appointment"
          component={Appointment}
          options={() => ({
            headerBackTitle: ' ',
            title: '我的预约列表',
            headerStyle: {
              // 导航栏样式相关配置
              backgroundColor: v.bgColor, // 导航栏背景颜色
            },
          })}
        />
        <Stack.Screen
          name="BillInfo"
          component={BillInfo}
          options={() => ({
            headerBackTitle: ' ',
            title: '账单详情',
            headerStyle: {
              // 导航栏样式相关配置
              backgroundColor: v.bgColor, // 导航栏背景颜色
            },
          })}
        />
        <Stack.Screen
          name="BankCard"
          component={BankCard}
          options={() => ({headerBackTitle: ' ', title: '编辑银行卡'})}
        />
        <Stack.Screen
          name="CoinFlow"
          component={CoinFlow}
          options={() => ({headerBackTitle: ' ', title: '积分流水'})}
        />
        <Stack.Screen
          name="LotteryOpportunityList"
          component={LotteryOpportunityList}
          options={() => ({headerBackTitle: ' ', title: '抽奖机会记录'})}
        />
        <Stack.Screen
          name="Commission"
          component={Commission}
          options={() => ({
            headerBackTitle: ' ',
            title: '佣金明细',
            headerTransparent: false, // 导航背景透明
            headerTitleStyle: {
              color: '#000',
            },
            headerTintColor: {
              color: '#000',
            },
          })}
        />
        <Stack.Screen
          name="Bill"
          component={Bill}
          options={() => ({
            headerBackTitle: ' ',
            title: '资金明细',
            headerStyle: {
              // 导航栏样式相关配置
              backgroundColor: '#EEEEEE', // 导航栏背景颜色
            },
          })}
        />
        <Stack.Screen
          name="Balance"
          component={Balance}
          options={() => ({
            headerBackTitle: ' ',
            title: '兑换余额明细',
            headerStyle: {
              // 导航栏样式相关配置
              backgroundColor: '#EEEEEE', // 导航栏背景颜色
            },
          })}
        />
        <Stack.Screen
          name="IncomeDetail"
          component={IncomeDetail}
          options={() => ({
            headerBackTitle: ' ',
            title: '提现明细',
            headerStyle: {
              // 导航栏样式相关配置
              backgroundColor: v.bgColor, // 导航栏背景颜色
            },
          })}
        />
        <Stack.Screen
          name="AddressList"
          component={AddressList}
          options={() => ({
            headerBackTitle: ' ',
            title: '收货地址',
          })}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={() => ({
            headerBackTitle: ' ',
            title: '验证码',
          })}
        />
        <Stack.Screen
          name="Zone"
          component={Zone}
          options={() => ({headerBackTitle: ' ', headerShown: false, title: ''})}
        />
        {/*<Stack.Screen*/}
        {/*  name="Address"*/}
        {/*  component={Address}*/}
        {/*  options={() => ({*/}
        {/*    headerBackTitle: ' ',*/}
        {/*    title: '编辑收货地址',*/}
        {/*    headerStyle: {*/}
        {/*      // 导航栏样式相关配置*/}
        {/*      backgroundColor: v.bgColor, // 导航栏背景颜色*/}
        {/*    },*/}
        {/*  })}*/}
        {/*/>*/}
        <Stack.Screen
          name="Address"
          component={Address}
          options={() => ({
            headerBackTitle: ' ',
            title: '编辑收货地址',
          })}
        />
        <Stack.Screen
          name="IdCode"
          component={IdCode}
          options={() => ({
            title: '我的身份码',
            headerBackTitle: ' ',
            // title: '商圈合作',
          })}
        />
        <Stack.Screen
          name="ShopOrderDetail"
          component={ShopOrderDetail}
          options={() => ({
            headerBackTitle: ' ',
            title: '商家订单详情',
          })}
        />
        <Stack.Screen
          name="CreateCard"
          component={CreateCard}
          options={() => ({
            headerStyle: {
              // 导航栏样式相关配置
              backgroundColor: v.bgColor, // 导航栏背景颜色
            },
            headerBackTitle: ' ',
            title: '编辑名片',
          })}
        />
        {/* 管理后台相关路由 */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
