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
// TODO???react-native-permissions ?????????
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

// ??????????????????

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
      // ??????????????????????????????????????????
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
        <Stack.Screen options={() => ({headerBackTitle: ' ', title: '????????????'})} name="Detail" component={Detail} />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '??????????????????'})}
          name="ChangeList"
          component={ChangeList}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '?????????'})}
          name="SalesVolume"
          component={SalesVolume}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
          name="StoreLevel"
          component={StoreLevel}
        />
        <Stack.Screen
          name="BrowseDetail"
          component={BrowseDetail}
          options={() => ({headerBackTitle: ' ', title: ''})}
        />
        <Stack.Screen name="BrowsePut" component={BrowsePut} options={() => ({headerBackTitle: ' ', title: '??????'})} />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={() => ({
            headerBackTitle: ' ',
            title: '????????????',
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
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
          name="BasicInformation"
          component={BasicInformation}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
          name="CustomerClassification"
          component={CustomerClassification}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '??????????????????'})}
          name="BusinessActivities"
          component={BusinessActivities}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '???????????????'})}
          name="CouponDetail"
          component={CouponDetail}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
          name="CustomerEdit"
          component={CustomerEdit}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
          name="StoreList"
          component={StoreList}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
          name="StoreSettings"
          component={StoreSettings}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
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
          options={() => ({headerBackTitle: ' ', title: '???????????????'})}
          name="ShoppingFund"
          component={ShoppingFund}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '???????????????'})}
          name="InviteAttention"
          component={InviteAttention}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
          name="LotteryList"
          component={LotteryList}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '??????????????????'})}
          name="LotteryOrder"
          component={LotteryOrder}
        />
        <Stack.Screen
          options={() => ({headerBackTitle: ' ', title: '???????????????'})}
          name="TenantApply"
          component={TenantApply}
        />
        <Stack.Screen
          name="CustomerList"
          component={CustomerList}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="BusinessIncomeDetail"
          component={BusinessIncomeDetail}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="BusinessOrderDetail"
          component={BusinessOrderDetail}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="IndicatorDetails"
          component={IndicatorDetails}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="EmptyPage"
          component={EmptyPage}
          options={() => ({headerShown: false, headerBackTitle: ' '})}
        />
        <Stack.Screen
          name="NineLottery"
          component={NineLottery}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="CloseUser"
          component={CloseUser}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="TenantStore"
          component={TenantStore}
          options={() => ({
            headerBackTitle: ' ',
            title: '',
            headerTintColor: '#fff',
            headerStyle: {
              // ???????????????????????????
              backgroundColor: 'rgba(22,40,61,.8)', // ?????????????????????
              shadowColor: 'transparent', // ??????????????????border
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
            title: '??????????????????',
            headerStyle: {
              // ???????????????????????????
              backgroundColor: v.bgColor, // ?????????????????????
            },
          })}
        />
        <Stack.Screen name="Card" component={Card} options={() => ({headerBackTitle: ' ', title: '??????'})} />
        <Stack.Screen
          name="ActivitySpuDetail"
          component={ActivitySpuDetail}
          options={() => ({headerShown: false, headerBackTitle: ' ', title: ''})}
        />
        <Stack.Screen
          name="SelectAddress"
          component={SelectAddress}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={() => ({headerShown: false, headerBackTitle: ' ', title: ''})}
        />
        <Stack.Screen
          name="Nickname"
          component={Nickname}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen name="Phone" component={Phone} options={() => ({headerBackTitle: ' ', title: '???????????????'})} />
        <Stack.Screen name="Login" component={Login} options={() => ({headerBackTitle: ' ', title: '??????'})} />
        <Stack.Screen
          name="ThirdPartyLogin"
          component={ThirdPartyLogin}
          options={() => ({headerBackTitle: ' ', title: '???????????????'})}
        />
        <Stack.Screen
          name="CoinOrderList"
          component={CoinOrderList}
          options={() => ({headerBackTitle: ' ', title: '??????????????????'})}
        />
        <Stack.Screen
          name="CoinProductList"
          component={CoinProductList}
          options={() => ({headerBackTitle: ' ', title: '??????????????????'})}
        />
        <Stack.Screen
          name="CoinProductDetail"
          component={CoinProductDetail}
          options={() => ({headerBackTitle: ' ', headerShown: false, title: '??????????????????'})}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen name="Help" component={Help} options={() => ({headerBackTitle: ' ', title: '??????'})} />
        <Stack.Screen
          name="ConfirmOrder"
          component={ConfirmOrder}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="OrderRemark"
          component={OrderRemark}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="CouponList"
          component={CouponList}
          options={() => ({headerBackTitle: ' ', title: '?????????'})}
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
            title: '????????????',
            headerBackTitleStyle: {
              color: '#fff',
            },
            headerTitleStyle: {
              color: '#fff',
            },
            headerStyle: {
              // ???????????????????????????
              backgroundColor: '#FF4A4A', // ?????????????????????
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
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="ProductSearch"
          component={ProductSearch}
          options={() => ({headerBackTitle: ' ', headerShown: false, title: ''})}
        />
        <Stack.Screen
          name="AfterSale"
          component={AfterSale}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="AfterSaleList"
          component={AfterSaleList}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="AfterSaleSelect"
          component={AfterSaleSelect}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen name="Article" component={Article} options={() => ({headerBackTitle: ' ', title: ''})} />
        <Stack.Screen name="Stock" component={Stock} options={() => ({headerBackTitle: ' ', title: '????????????'})} />
        <Stack.Screen
          name="StockDetail"
          component={StockDetail}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen name="Privacy" component={Privacy} options={() => ({headerBackTitle: ' ', title: '????????????'})} />
        <Stack.Screen name="Poster" component={Poster} options={() => ({headerBackTitle: ' ', title: '????????????'})} />
        <Stack.Screen name="OnePost" component={OnePost} options={() => ({headerBackTitle: ' ', title: '????????????'})} />
        <Stack.Screen name="Chat" component={Chat} options={() => ({headerBackTitle: ' '})} />
        <Stack.Screen
          name="Collection"
          component={Collection}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen name="Comment" component={Comment} options={() => ({headerBackTitle: ' ', title: '????????????'})} />
        <Stack.Screen
          name="CommentList"
          component={CommentList}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="Config"
          component={Config}
          options={() => ({
            headerBackTitle: ' ',
            title: '????????????',
            headerStyle: {
              // ???????????????????????????
              backgroundColor: v.bgColor, // ?????????????????????
            },
          })}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={() => ({
            headerBackTitle: ' ',
            title: '??????????????????',
          })}
        />
        <Stack.Screen
          name="LearningCenter"
          component={LearningCenter}
          options={() => ({
            headerBackTitle: ' ',
            title: '?????????',
          })}
        />
        <Stack.Screen
          name="LearningDetail"
          component={LearningDetail}
          options={() => ({
            headerBackTitle: ' ',
            title: '????????????',
          })}
        />
        <Stack.Screen name="Coupon" component={Coupon} options={() => ({headerBackTitle: ' ', title: '???????????????'})} />
        <Stack.Screen name="Friend" component={Friend} options={() => ({headerBackTitle: ' ', title: '????????????'})} />
        <Stack.Screen name="History" component={History} options={() => ({headerBackTitle: ' ', title: '??????'})} />
        <Stack.Screen
          name="NoticeSys"
          component={NoticeSys}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen name="IdCard" component={IdCard} options={() => ({headerBackTitle: ' ', title: '????????????'})} />
        <Stack.Screen
          name="InvoiceAccountList"
          component={InvoiceAccountList}
          options={() => ({headerBackTitle: ' ', title: '??????????????????'})}
        />
        <Stack.Screen
          name="StoreData"
          component={StoreData}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="InvoiceAccountEdit"
          component={InvoiceAccountEdit}
          options={() => ({headerBackTitle: ' ', title: '??????????????????'})}
        />
        <Stack.Screen
          name="InvoiceApply"
          component={InvoiceApply}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="LogisticsTrace"
          component={LogisticsTrace}
          options={() => ({headerBackTitle: ' ', title: '??????'})}
        />
        <Stack.Screen
          name="Logistics"
          component={Logistics}
          options={() => ({headerBackTitle: ' ', title: '??????????????????'})}
        />
        <Stack.Screen
          name="OrderDetail"
          component={OrderDetail}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="OrderList"
          component={OrderList}
          options={() => ({
            headerBackTitle: ' ',
            title: '????????????',
            // headerStyle: {
            //   // ???????????????????????????
            //   backgroundColor: v.bgColor, // ?????????????????????
            // },
          })}
        />
        <Stack.Screen name="Category" component={Category} options={() => ({headerBackTitle: ' ', title: '??????'})} />
        <Stack.Screen name="Track" component={Track} options={() => ({headerBackTitle: ' ', title: '????????????'})} />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={() => ({
            headerBackTitle: ' ',
            title: '??????',
            headerTitleStyle: {
              color: '#000',
            },
            headerTintColor: {
              color: '#000',
            },
          })}
        />
        <Stack.Screen name="Bargain" component={Bargain} options={() => ({headerBackTitle: ' ', title: '????????????'})} />
        <Stack.Screen
          name="BargainList"
          component={BargainList}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="BargainHome"
          component={BargainHome}
          options={() => ({
            headerBackTitle: ' ',
            title: '????????????',
            headerTransparent: true, // ??????????????????
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
          options={() => ({headerBackTitle: ' ', title: '??????????????????'})}
        />
        <Stack.Screen
          name="InviteShop"
          component={InviteShop}
          options={() => ({headerBackTitle: ' ', title: '???????????????'})}
        />
        <Stack.Screen name="Wallet" component={Wallet} options={() => ({headerBackTitle: ' ', title: '????????????'})} />
        <Stack.Screen
          name="TenantWallet"
          component={TenantWallet}
          options={() => ({headerBackTitle: ' ', title: '???????????????'})}
        />
        <Stack.Screen
          name="Appointment"
          component={Appointment}
          options={() => ({
            headerBackTitle: ' ',
            title: '??????????????????',
            headerStyle: {
              // ???????????????????????????
              backgroundColor: v.bgColor, // ?????????????????????
            },
          })}
        />
        <Stack.Screen
          name="BillInfo"
          component={BillInfo}
          options={() => ({
            headerBackTitle: ' ',
            title: '????????????',
            headerStyle: {
              // ???????????????????????????
              backgroundColor: v.bgColor, // ?????????????????????
            },
          })}
        />
        <Stack.Screen
          name="BankCard"
          component={BankCard}
          options={() => ({headerBackTitle: ' ', title: '???????????????'})}
        />
        <Stack.Screen
          name="CoinFlow"
          component={CoinFlow}
          options={() => ({headerBackTitle: ' ', title: '????????????'})}
        />
        <Stack.Screen
          name="LotteryOpportunityList"
          component={LotteryOpportunityList}
          options={() => ({headerBackTitle: ' ', title: '??????????????????'})}
        />
        <Stack.Screen
          name="Commission"
          component={Commission}
          options={() => ({
            headerBackTitle: ' ',
            title: '????????????',
            headerTransparent: false, // ??????????????????
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
            title: '????????????',
            headerStyle: {
              // ???????????????????????????
              backgroundColor: '#EEEEEE', // ?????????????????????
            },
          })}
        />
        <Stack.Screen
          name="Balance"
          component={Balance}
          options={() => ({
            headerBackTitle: ' ',
            title: '??????????????????',
            headerStyle: {
              // ???????????????????????????
              backgroundColor: '#EEEEEE', // ?????????????????????
            },
          })}
        />
        <Stack.Screen
          name="IncomeDetail"
          component={IncomeDetail}
          options={() => ({
            headerBackTitle: ' ',
            title: '????????????',
            headerStyle: {
              // ???????????????????????????
              backgroundColor: v.bgColor, // ?????????????????????
            },
          })}
        />
        <Stack.Screen
          name="AddressList"
          component={AddressList}
          options={() => ({
            headerBackTitle: ' ',
            title: '????????????',
          })}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={() => ({
            headerBackTitle: ' ',
            title: '?????????',
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
        {/*    title: '??????????????????',*/}
        {/*    headerStyle: {*/}
        {/*      // ???????????????????????????*/}
        {/*      backgroundColor: v.bgColor, // ?????????????????????*/}
        {/*    },*/}
        {/*  })}*/}
        {/*/>*/}
        <Stack.Screen
          name="Address"
          component={Address}
          options={() => ({
            headerBackTitle: ' ',
            title: '??????????????????',
          })}
        />
        <Stack.Screen
          name="IdCode"
          component={IdCode}
          options={() => ({
            title: '???????????????',
            headerBackTitle: ' ',
            // title: '????????????',
          })}
        />
        <Stack.Screen
          name="ShopOrderDetail"
          component={ShopOrderDetail}
          options={() => ({
            headerBackTitle: ' ',
            title: '??????????????????',
          })}
        />
        <Stack.Screen
          name="CreateCard"
          component={CreateCard}
          options={() => ({
            headerStyle: {
              // ???????????????????????????
              backgroundColor: v.bgColor, // ?????????????????????
            },
            headerBackTitle: ' ',
            title: '????????????',
          })}
        />
        {/* ???????????????????????? */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
