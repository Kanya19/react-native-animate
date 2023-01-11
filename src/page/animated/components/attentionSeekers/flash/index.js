import React, {useEffect, useState} from 'react'
// style
import {Animated} from 'react-native'

// props
const Flash = ({children}) => {
  const [ANIM] = useState(new Animated.Value(0))

  const inputRange = [0, 25, 50, 75, 100]
  const outputRange = [1, 0, 1, 0, 1]
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
              outputRange,
            }),
          },
        ]}>
        {children}
      </Animated.View>
    </>
  )
}
export default Flash
