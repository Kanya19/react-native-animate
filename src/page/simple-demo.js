import React from 'react'
import {SafeAreaView, Text, View} from 'react-native'
import s from '~/style/demo'

class SimpleDemo extends React.Component {
  // template
  render() {
    const {data} = this.state
    return (
      <SafeAreaView>
        <Text className={s.demoText}>{data}</Text>
      </SafeAreaView>
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

export default SimpleDemo
