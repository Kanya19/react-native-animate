import React from 'react'
import {Dimensions, Platform, Text, View} from 'react-native'
import v from '~/style/varible'
import {TabBar, TabView} from 'react-native-tab-view'

const initialLayout = {width: Dimensions.get('window').width}

class Tabs extends React.Component {
  static defaultProps = {
    index: 0,
  }

  constructor(props: any) {
    super(props)
  }

  renderTabBar = (props, marginLeft, tabWidth) => {
    return (
      <TabBar
        {...props}
        pressColor={'transparent'}
        renderLabel={({route, focused, color}) => {
          const style = {
            color: route.disabled
              ? v.textLight
              : focused
              ? props.focusedColor || v.primary
              : props.disFocusedColor || v.textLight,
            fontSize: 16,
            fontWeight: focused ? '500' : '400',
            height: Platform.OS === 'ios' ? 20 : 20,
            textAlign: 'center',
            ...props.labelStyle,
          }
          if (!props.scrollEnabled) {
            style.width = tabWidth
          }
          return (
            <View>
              <Text style={style}>{route.title}</Text>
              {route.label >= 0 && <Text style={{...style, fontSize: 12}}>{route.label}</Text>}
            </View>
          )
        }}
        indicatorStyle={{
          backgroundColor: props.indicatorColor || v.primary,
          height: 3,
          width: props.scrollEnabled ? 0.4 : 20,
          borderRadius: 2,
          marginLeft: marginLeft,
          ...props.indicatorStyle,
        }}
        style={{backgroundColor: 'transparent'}}
      />
    )
  }

  render() {
    const {
      tabs,
      index,
      scrollEnabled,
      tabStyle,
      disFocusedColor,
      focusedColor,
      indicatorColor,
      indicatorStyle,
      labelStyle,
    } = this.props
    let marginLeft = scrollEnabled ? 0 : Dimensions.get('window').width / (tabs.length * 2) - 10
    let tabWidth = scrollEnabled ? 60 : Dimensions.get('window').width / tabs.length
    return (
      <TabView
        style={{backgroundColor: 'transparent'}}
        navigationState={{index: index, routes: tabs}}
        renderScene={() => {}}
        renderTabBar={(props) => {
          props.scrollEnabled = scrollEnabled || false
          props.tabStyle = tabStyle || {}
          props.disFocusedColor = disFocusedColor || {}
          props.focusedColor = focusedColor
          props.indicatorStyle = indicatorStyle
          props.labelStyle = labelStyle || {}
          props.indicatorColor = indicatorColor || focusedColor
          // 新添加disabled 功能，可禁用相关tab
          const jumpTo = props.jumpTo
          props.jumpTo = (key) => {
            if (tabs[key] && !tabs[key].disabled) {
              jumpTo(key)
            }
          }
          return this.renderTabBar(props, marginLeft, tabWidth)
        }}
        onIndexChange={(index) => {
          this.props.onIndexChange(index, tabs[index])
        }}
        initialLayout={initialLayout}
      />
    )
  }
}

export default Tabs
