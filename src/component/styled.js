import styled from 'styled-components/native'
import TouchableOpacity from '~/component/touchable-opacity'
import v from '~/style/varible'

const buttonColorMap = {
  primary: v.primary,
  info: v.info,
}
const Button = styled.Text`
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  border-radius: 6px;
  overflow: hidden;
  background: ${(props) => (props.disabled ? '#ececec' : buttonColorMap[props.type || 'primary'])};
  color: ${(props) => (props.disabled ? v.textLight : '#fff')};
  margin: 14px 0 0 14px;
  font-weight: bold;
`

export default Button
