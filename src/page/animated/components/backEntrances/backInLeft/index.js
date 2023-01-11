import React, {useEffect, useState} from 'react'
// style
import {Animated, Dimensions} from 'react-native'

// props
const width = Dimensions.get('window').width
const BackInLeft = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 80, 100]
  const translateX = [-width, 0, 0]
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
                translateX: ANIM.interpolate({
                  inputRange,
                  outputRange: translateX,
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
export default BackInLeft
