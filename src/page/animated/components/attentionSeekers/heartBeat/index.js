import React, {useEffect, useState} from 'react'
// style
import {Animated} from 'react-native'

// props
const HeartBeat = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 14, 28, 42, 70]
  const scale = [1, 1.3, 1, 1.3, 1]
  // template
  useEffect(() => {
    Animated.timing(ANIM, {
      toValue: 70,
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
                  outputRange: scale,
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
export default HeartBeat
