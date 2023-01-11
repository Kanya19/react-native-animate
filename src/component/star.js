import React from 'react'
import {Text, View} from 'react-native'
import v from '~/style/varible'
import Icon from 'react-native-vector-icons/AntDesign'

class Star extends React.Component {
  static defaultProps = {
    star: 0,
    max: 5,
    size: 14,
  }

  constructor(props: any) {
    super(props)
  }

  render() {
    const {star, max, size, onPress} = this.props
    const Stars = []
    for (let i = 0; i < max; i++) {
      if (i < star) {
        Stars.push(
          <Icon key={i} name="star" size={size} color={v.starPrimary} onPress={() => onPress && onPress(i + 1)} />,
        )
      } else {
        Stars.push(
          <Icon key={i} name="staro" size={size} color={v.textLighter} onPress={() => onPress && onPress(i + 1)} />,
        )
      }
    }
    return <View style={{flexDirection: 'row'}}>{Stars}</View>
  }
}

export default Star
