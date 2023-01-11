import React from 'react'
import g from '~/style/global'
import v from '~/style/varible'

import {Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import TouchableOpacity from '~/component/touchable-opacity'

class Button extends React.Component {
  static defaultProps = {
    disabledGradientStart: '#FB8F2E',
    disabledGradientEnd: '#F55622',
    gradientStart: v.gradientStart,
    gradientEnd: v.gradientEnd,
  }
  constructor(props: any) {
    super(props)
  }
  render() {
    const {
      text,
      style,
      onPress,
      textStyle,
      disabled,
      disabledGradientStart,
      disabledGradientEnd,
      gradientStart,
      gradientEnd,
    } = this.props
    return (
      <LinearGradient
        end={{x: 1, y: 1}}
        start={{x: 0, y: 1}}
        colors={disabled ? [disabledGradientStart, disabledGradientEnd] : [gradientStart, gradientEnd]}
        className={g.button}
        style={style}>
        <TouchableOpacity onPress={disabled === true ? null : onPress}>
          <Text className={g.buttonText} style={{fontWeight: 'bold', ...textStyle}}>
            {text}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    )
  }
}

export default Button
