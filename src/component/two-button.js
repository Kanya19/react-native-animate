import React from 'react'
import g from '~/style/global'

import {Text, View} from 'react-native'
import TouchableOpacity from '~/component/touchable-opacity'
import LinearGradient from 'react-native-linear-gradient'
import v from '~/style/varible'

class Button extends React.Component {
  static defaultProps = {}
  constructor(props: any) {
    super(props)
  }
  render() {
    const {left, right} = this.props
    const leftButton = {
      disabled: false,
      activeColor: ['#ffffff', '#ffffff'],
      inactiveColor: [],
      text: '',
      onPress: null,
      style: {},
      textStyle: {color: v.gradientEnd, lineHeight: 42},
      ...left,
    }
    const rightButton = {
      disabled: false,
      activeColor: [v.gradientStart, v.gradientEnd],
      inactiveColor: [],
      text: '',
      onPress: null,
      style: {},
      textStyle: {color: '#ffffff'},
      ...right,
    }
    return (
      <View style={{flex: 1, flexDirection: 'row', width: 220}}>
        <TouchableOpacity
          onPress={leftButton.disabled === true ? null : leftButton.onPress}
          style={{
            width: '50%',
            height: 44,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: v.gradientStart,
            marginRight: 5,
            ...leftButton.style,
          }}>
          <Text className={g.buttonText} style={leftButton.textStyle}>
            {leftButton.text}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={rightButton.disabled === true ? null : rightButton.onPress} style={{width: '50%'}}>
          <LinearGradient
            end={{x: 1, y: 1}}
            start={{x: 0, y: 1}}
            colors={rightButton.disabled ? rightButton.inactiveColor : rightButton.activeColor}
            style={{
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
              padding: 1,
              height: 44,
              borderWidth: 1,
              borderColor: 'transparent',
              borderRadius: 30,
              ...rightButton.style,
            }}>
            <Text className={g.buttonText} style={rightButton.textStyle}>
              {rightButton.text}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Button
