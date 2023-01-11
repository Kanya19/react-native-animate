import React, {useEffect, useState} from 'react'
// style
import {Animated} from 'react-native'

// props
const ShakeX = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const translateXRange = [0, -10, 10, -10, 10, -10, 10, -10, 10, -10, 0]
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
                  outputRange: translateXRange,
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
export default ShakeX
