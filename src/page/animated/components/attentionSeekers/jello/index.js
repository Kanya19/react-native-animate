import React, {useEffect, useState} from 'react'
// style
import {Animated, Dimensions} from 'react-native'

// props
const Jello = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 11.1, 22.2, 33.3, 44.4, 55.5, 66.6, 77.7, 88.8, 100]
  const skewX = [
    '0deg',
    '0deg',
    '-12.5deg',
    '6.25deg',
    '-3.125deg',
    '1.5625deg',
    '-0.78125deg',
    '0.390625deg',
    '-0.1953125deg',
    '0deg',
  ]
  const skewY = [
    '0deg',
    '0deg',
    '-12.5deg',
    '6.25deg',
    '-3.125deg',
    '1.5625deg',
    '-0.78125deg',
    '0.390625deg',
    '-0.1953125deg',
    '0deg',
  ]
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
                skewX: ANIM.interpolate({
                  inputRange,
                  outputRange: skewX,
                }),
              },
              {
                skewY: ANIM.interpolate({
                  inputRange,
                  outputRange: skewY,
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
export default Jello
