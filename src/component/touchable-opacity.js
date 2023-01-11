import React from 'react'
import {TouchableOpacity} from 'react-native'

class TouchableOpacityButton extends React.Component {
  render() {
    return <TouchableOpacity {...this.props} activeOpacity={1} />
  }
}
export default TouchableOpacityButton
