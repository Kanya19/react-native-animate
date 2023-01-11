import React, {useEffect, useState} from 'react'
// style
import {Animated, Dimensions} from 'react-native'

// props
const height = Dimensions.get('window').height
const BackOutDown = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 20, 100]
  const translateY = [0, 0, height]
  const scale = [1, 0.7, 0.7]
  const opacity = [1, 0.7, 0.7]
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
            opacity: ANIM.interpolate({
              inputRange,
              outputRange: opacity,
            }),
          },
          {
            transform: [
              {
                translateY: ANIM.interpolate({
                  inputRange,
                  outputRange: translateY,
                }),
              },
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
export default BackOutDown
