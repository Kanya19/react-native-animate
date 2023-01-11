import React, {useEffect, useState} from 'react'
// style
import {Animated, Dimensions} from 'react-native'

// props
const width = Dimensions.get('window').width
const BackOutRight = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 20, 100]
  const translateX = [0, 0, width]
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
export default BackOutRight
