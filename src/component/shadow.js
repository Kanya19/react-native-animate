import React from 'react'
import {Platform, View} from 'react-native'
import {BoxShadow} from 'react-native-shadow'

class Shadow extends React.Component {
  static defaultProps = {
    shadowWidth: 6,
    shadowRadius: 2,
    shadowOpacity: 0.1,
  }

  // box-shadow: inset -1px -1px 3px 0px rgba(255, 255, 255, 0.24), inset 1px 1px 3px 0px rgba(255, 255, 255, 0.31);
  // template
  render() {
    // 动态计算宽高
    if (!this.state.showShadow) {
      return (
        <View
          onLayout={(e) => {
            const layout = e.nativeEvent.layout || {}
            this.setState({
              contentWidth: layout.width,
              contentHeight: layout.height,
              showShadow: true,
            })
          }}>
          {this.props.children}
        </View>
      )
    }

    return Platform.OS === 'android' ? (
      <BoxShadow
        setting={{
          width: this.state.contentWidth || 0,
          height: this.state.contentHeight || 0,
          color: this.props.shadowColor || '#000000',
          border: this.props.shadowWidth,
          radius: this.props.shadowRadius,
          opacity: this.props.shadowOpacity,
          style: {marginVertical: 0, justifyContent: 'center', ...this.props.style},
        }}>
        {this.props.children}
      </BoxShadow>
    ) : (
      <View
        style={{
          backgroundColor: 'white',
          shadowColor: this.props.shadowColor || '#000000',
          shadowOffset: {h: this.props.shadowWidth, w: this.props.shadowWidth},
          shadowRadius: this.props.shadowRadius,
          shadowOpacity: this.props.shadowOpacity,
          borderRadius: 10,
          ...this.props.style,
        }}>
        {this.props.children}
      </View>
    )
  }

  constructor(props) {
    super(props)
    this.state = {
      contentHeight: 0,
      contentWidth: 0,
      showShadow: false,
    }
  }
}

export default Shadow
