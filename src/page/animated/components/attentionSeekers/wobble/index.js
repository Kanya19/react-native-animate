import React, {useEffect, useState} from 'react'
// style
import {Animated, Dimensions} from 'react-native'
const width = Dimensions.get('window').width * 0.5

// props
const Wobble = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 15, 30, 45, 60, 75, 100]
  const translate = [0, -0.25 * width, 0.2 * width, -0.15 * width, 0.1 * width, -0.05 * width, 0]
  const rotateZ = ['0deg', '-5deg', '3deg', '-3deg', '2deg', '-1deg', '0deg']
  useEffect(() => {
    Animated.timing(ANIM, {
      toValue: 100,
      duration: 1000,
    }).start()
  }, [])
  return (
    <>
      <Animated.View
        style={[
          {
            transform: [
              {
                translateX: ANIM.interpolate({
                  inputRange,
                  outputRange: translate,
                }),
              },
              {
                rotateZ: ANIM.interpolate({
                  inputRange,
                  outputRange: rotateZ,
                }),
              },
            ],
          },
        ]}>
        {children}
      </Animated.View>
    </>
  )
}
export default Wobble
