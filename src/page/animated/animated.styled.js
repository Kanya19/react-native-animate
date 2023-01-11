import styled from 'styled-components/native'
import {TouchableOpacity} from 'react-native'
const StyledLabel = styled.Text`
  margin-top: 100px;
  margin-bottom: 100px;
  font-size: 30px;
  text-align: center;
`
const StyledText = styled.Text`
  font-size: 14px;
  text-align: center;
`

const StyledTouchableOpacity = styled(TouchableOpacity)`
  font-size: 30px;
  width: 25%;
  border: 1px solid #aaa;
  text-align: center;
  padding: 14px 0;
`
const StyledBox = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`
export {StyledLabel, StyledTouchableOpacity, StyledText, StyledBox}
