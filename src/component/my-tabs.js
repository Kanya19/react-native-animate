import React from 'react'
import {ScrollView, Text, View} from 'react-native'
import s from '~/style/component/my-tabs'
import LinearGradient from 'react-native-linear-gradient'
import TouchableOpacity from '~/component/touchable-opacity'

class MyTabs extends React.Component {
  // template
  render() {
    const {list, active} = this.props
    return (
      <View className={s.myTab}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{marginTop: 16}}>
          {list.map((item, key) => {
            return (
              <TouchableOpacity key={key} onPress={() => this.onChange(item)}>
                <LinearGradient
                  className={s.tabBox}
                  end={{x: 1, y: 1}}
                  start={{x: 0, y: 1}}
                  colors={
                    active === item.value
                      ? ['rgba(251, 109, 109, 0.1)', 'rgba(251, 109, 109, 0.1)']
                      : ['#f9f9f9', '#f9f9f9']
                  }>
                  <Text className={active === item.value ? s.active : s.tab}>{item.label}</Text>
                </LinearGradient>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {
      disabledGradientStart: '#ffffff',
      disabledGradientEnd: '#ffffff',
      gradientStart: '#ffe8ed',
      gradientEnd: '#ffe8ed',
    }
  }

  // methods
  onChange = (item) => {
    this.props.onChange(item)
  }
}

export default MyTabs
