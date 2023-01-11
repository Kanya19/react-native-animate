import React, {useEffect, useState} from 'react'
// style
import {Animated} from 'react-native'

// props
const Tada = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const scale = [1, 0.9, 0.9, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1]
  const rotate = ['0deg', '3deg', '3deg', '3deg', '-3deg', '3deg', '-3deg', '3deg', '-3deg', '3deg', '0deg']
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
                  outputRange: scale,
                }),
              },
              {
                rotate: ANIM.interpolate({
                  inputRange,
                  outputRange: rotate,
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
export default Tada
