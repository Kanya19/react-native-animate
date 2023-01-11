import React from 'react'
import {ScrollView, Text, View} from 'react-native'
import s from '~/style/component/home-nav'
import TouchableOpacity from '~/component/touchable-opacity'

const calc = require('yu.calculator')

class SimpleDemo extends React.Component {
  // template
  render() {
    const {defaultActive} = this.state
    const {list, active} = this.props
    return (
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {list.map((item, key) => {
          return (
            <View style={{paddingTop: 10, paddingBottom: 10}} key={key}>
              <TouchableOpacity
                onPress={this.onChange.bind(this, item)}
                className={key === list.length - 1 ? s.tabItem : s.tabBorderRight}>
                <Text className={defaultActive === item.value ? s.active : s.tab}>{item.label}</Text>
              </TouchableOpacity>
              {defaultActive === item.value && <View className={s.navLine} />}
            </View>
          )
        })}
      </ScrollView>
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
  componentWillMount(): void {
    this.setState({
      defaultActive: this.props.active,
    })
  }
}

export default SimpleDemo
