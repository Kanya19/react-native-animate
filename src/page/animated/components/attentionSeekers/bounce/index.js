import React, {useEffect, useState} from 'react'
// style
import {Animated} from 'react-native'

// props
const Bounce = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 20, 40, 43, 53, 70, 80, 90, 100]
  const outputRange = [0, 0, -30, -30, 0, -15, 0, -4, 0]
  const scaleRange = [1, 1, 1.1, 1.1, 1, 1.05, 0.95, 1.02, 1]
  // template
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
                  outputRange,
                }),
              },
              {
                scaleY: ANIM.interpolate({
                  inputRange,
                  outputRange: scaleRange,
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
export default Bounce
