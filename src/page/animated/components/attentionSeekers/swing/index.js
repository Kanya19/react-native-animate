import React, {useEffect, useState} from 'react'
// style
import {Animated} from 'react-native'

// props
const Swing = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 20, 40, 60, 80, 100]
  const rotateZ = ['0deg', '15deg', '-10deg', '5deg', '-5deg', '0deg']
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
                rotateZ: ANIM.interpolate({
                  inputRange,
                  outputRange: rotateZ,
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
export default Swing
