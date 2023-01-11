import React from 'react'
import v from '~/style/varible'
import {Tabs as ATabs} from '@ant-design/react-native'
import {Text, View} from 'react-native'

class Tabs extends React.Component {
  constructor(props: any) {
    super(props)
  }

  static renderTab(item) {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    )
  }

  render() {
    const {tabs} = this.props
    const tabsWidth = {
      2: {width: '', marginLeft: ''},
      3: {width: '', marginLeft: ''},
      4: {width: '3%', marginLeft: '7.5%'},
    }
    const {width, marginLeft} = tabsWidth[tabs ? tabs.length : 4]
    return (
      <ATabs
        tabs={tabs}
        styles={{topTabBarSplitLine: {borderBottomWidth: 0}}}
        renderTab={this.renderTab}
        onTabClick={this.props.onTabClick}
        tabBarUnderlineStyle={{
          backgroundColor: v.primary,
          width,
          marginLeft,
        }}
      />
    )
  }
}

export default Tabs
