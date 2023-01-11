import React, {useEffect, useState} from 'react'
// style
import {Animated} from 'react-native'

// props
const Bounce = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 6.5, 18.5, 31, 43.5, 50]
  const translateX = [0, -6, 5, -3, 2, 0]
  const rotateY = ['0deg', '-9deg', '7deg', '-5deg', '3deg', '0deg']
  // template
  useEffect(() => {
    Animated.timing(ANIM, {
      toValue: 50,
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
                  outputRange: translateX,
                }),
              },
              {
                rotateY: ANIM.interpolate({
                  inputRange,
                  outputRange: rotateY,
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
