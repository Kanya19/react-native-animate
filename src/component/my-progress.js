import React from 'react'
import {SafeAreaView, Text, View} from 'react-native'
import s from '~/style/demo'

class MyProgress extends React.Component {
  // template
  render() {
    const {progress, boxStyle, itemStyle} = this.props
    const handleBoxStyle = {
      backgroundColor: '#fff',
      borderRadius: 10,
      height: 10,
      position: 'relative',
      overflow: 'hidden',
      ...boxStyle,
    }

    const handleItemStyle = {
      position: 'absolute',
      height: 10,
      left: 0,
      backgroundColor: 'red',
      ...itemStyle,
    }
    return (
      <View style={handleBoxStyle}>
        <View style={{...handleItemStyle, width: `${progress || 0}%`}} />
      </View>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {
      data: '示例页面',
    }
  }

  // methods
  getDetail() {}

  // mounted
  componentDidMount(): void {
    this.getDetail()
  }
}

export default MyProgress
