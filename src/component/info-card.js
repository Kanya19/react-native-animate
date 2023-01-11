import React, {Component} from 'react'
import {Text, View} from 'react-native'
import FastImage from 'react-native-fast-image'
import g from '~/style/global'

class InfoCard extends Component {
  static defaultProps = {
    img: '',
    name: '',
    spec: '',
    imgSize: 100,
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const {name, spec, imgSize, img} = this.props
    return (
      <View style={{backgroundColor: '', flexDirection: 'row', padding: 10}}>
        <FastImage
          style={{height: imgSize, width: imgSize, borderRadius: 8, marginRight: 14}}
          source={{
            uri: img,
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
        <View>
          <Text numberOfLines={2} style={{paddingTop: 10, fontSize: 16, paddingRight: imgSize * 1.5}}>
            {name}
          </Text>
          <Text className={g.spec}>{spec}</Text>
        </View>
      </View>
    )
  }

  //data
}

export default InfoCard
