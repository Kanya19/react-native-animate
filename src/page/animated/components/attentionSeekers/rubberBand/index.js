import React, {useEffect, useState} from 'react'
// style
import {Animated} from 'react-native'

// props
const RubberBand = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 30, 40, 50, 65, 75, 100]
  const scaleXRange = [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1]
  const scaleYRange = [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1]
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
                scaleX: ANIM.interpolate({
                  inputRange,
                  outputRange: scaleXRange,
                }),
              },
              {
                scaleY: ANIM.interpolate({
                  inputRange,
                  outputRange: scaleYRange,
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
export default RubberBand
