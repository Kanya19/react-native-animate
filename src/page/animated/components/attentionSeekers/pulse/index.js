import React, {useEffect, useState} from 'react'
// style
import {Animated} from 'react-native'

// props
const Pulse = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 50, 100]
  const scaleRange = [1, 1.05, 1]
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
                scale: ANIM.interpolate({
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
export default Pulse
