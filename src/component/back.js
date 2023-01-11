import React from 'react'
import g from '~/style/global'
import Icon from 'react-native-vector-icons/FontAwesome'
import {goBack} from '~/route/navigation'
import TouchableOpacity from '~/component/touchable-opacity'

class Back extends React.Component {
  static defaultProps = {
    disabledGradientStart: '#FB8F2E',
    disabledGradientEnd: '#F55622',
    gradientStart: '#FB8F2E',
    gradientEnd: '#F55622',
  }
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          goBack()
        }}
        className={g.back}>
        <Icon name="angle-left" size={26} color={'#eeeeee'} fontWeight={'bold'} />
      </TouchableOpacity>
    )
  }
}

export default Back
