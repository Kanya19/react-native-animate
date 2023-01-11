import React, {useState} from 'react'
// style
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native'
import {ANIMATE_NAMES_TO_COMPONENT} from './components/animate.constants'
import {ANIMATE_ID} from './components/constants'
import {StyledLabel, StyledTouchableOpacity, StyledText, StyledBox} from './animated.styled'

// props
const Demo = () => {
  const [NAME, SET_NAME] = useState('')
  const AnimateComponent = ANIMATE_NAMES_TO_COMPONENT[NAME]
  const arr = Object.values(ANIMATE_ID)
  // template
  return (
    <SafeAreaView>
      {AnimateComponent && (
        <AnimateComponent>
          <StyledLabel>Animate</StyledLabel>
        </AnimateComponent>
      )}

      <StyledBox>
        {arr.map((item, key) => {
          return (
            <StyledTouchableOpacity
              onPress={() => {
                SET_NAME(item)
              }}
              key={key}>
              <StyledText>{item}</StyledText>
            </StyledTouchableOpacity>
          )
        })}
      </StyledBox>
    </SafeAreaView>
  )
}
export default Demo
