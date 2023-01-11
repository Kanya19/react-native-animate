import * as React from 'react'

import {Image} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '~/page/home/home'
import Mine from '~/page/mine/mine'
import Shop from '~/page/shop/shop'
import g from '~/style/global'
import Category from '~/page/category/category'
import Design from '~/page/design/index'
import tabsImg from './tabs-img'

const Tab = createBottomTabNavigator()

// 底部Tab导航菜单
export default function HomeTabs({route, navigation}) {
  let initialRouteName = 'Home'
  if (route.params && route.params.path) {
    initialRouteName = route.params.path
  }
  return (
    <Tab.Navigator
      allowFontScaling={false}
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarActiveTintColor: '#E73A32',
      }}>
      <Tab.Screen
        allowFontScaling={false}
        headerShown={false}
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: '首页',
          tabBarIcon: ({focused}) => (
            <Image className={g.tagImage} source={focused ? tabsImg.homeActive : tabsImg.home} />
          ),
        }}
      />
      <Tab.Screen
        allowFontScaling={false}
        name="Category"
        component={Category}
        options={{
          title: '',
          headerShown: false,
          tabBarLabel: '分类',
          tabBarIcon: ({focused}) => (
            <Image className={g.tagImage} source={focused ? tabsImg.categoryActive : tabsImg.category} />
          ),
        }}
      />
      <Tab.Screen
        allowFontScaling={false}
        name="Design"
        component={Design}
        options={{
          headerShown: false,
          tabBarLabel: '在线设计',
          tabBarIcon: ({focused}) => (
            <Image className={g.tagImage} source={focused ? tabsImg.recommendActive : tabsImg.recommend} />
          ),
        }}
      />
      <Tab.Screen
        allowFontScaling={false}
        name="Shop"
        component={Shop}
        options={{
          headerShown: false,
          tabBarLabel: '购物车',
          title: '购物车',
          tabBarIcon: ({focused}) => (
            <Image className={g.tagImage} source={focused ? tabsImg.shopActive : tabsImg.shop} />
          ),
        }}
      />
      <Tab.Screen
        name="Mine"
        allowFontScaling={false}
        component={Mine}
        options={{
          header: () => {},
          tabBarLabel: '我的',
          title: '我的',
          tabBarIcon: ({focused}) => (
            <Image className={g.tagImage} source={focused ? tabsImg.userActive : tabsImg.user} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
