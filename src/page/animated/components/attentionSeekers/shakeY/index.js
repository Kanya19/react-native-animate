import React, {useEffect, useState} from 'react'
// style
import {Animated} from 'react-native'

// props
const ShakeY = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const translateYRange = [0, -10, 10, -10, 10, -10, 10, -10, 10, -10, 0]
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
                translateY: ANIM.interpolate({
                  inputRange,
                  outputRange: translateYRange,
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
export default ShakeY
