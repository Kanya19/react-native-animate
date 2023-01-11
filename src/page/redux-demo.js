import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import s from '~/style/demo'
// redux
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {updateUserDetail} from '~/store/action/user-actions'

class ReduxDemo extends React.Component {
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
      data: 'Redux示例页面',
    }
  }

  // methods
  getDetail() {}

  // mounted
  componentDidMount(): void {
    this.props.user
    this.getDetail()
  }
}

const mapStateToProps = (state) => {
  const {user} = state
  return {user}
}
const mapDispatchToProps = (dispatch) => bindActionCreators({updateUserDetail}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo)
