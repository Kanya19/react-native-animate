import React, {useEffect, useState} from 'react'
// style
import {Animated, Dimensions} from 'react-native'

// props
const height = Dimensions.get('window').height
const BackInDown = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 80, 100]
  const translateY = [-height, 0, 0]
  const scale = [0.7, 0.7, 1]
  const opacity = [0.7, 0.7, 1]
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
export default BackInDown
