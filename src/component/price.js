import React from 'react'
import {Text, View} from 'react-native'
import v from '~/style/varible'

const sizeMap = {
  normal: {
    label: 14,
    unit: 10,
    main: 16,
    cent: 12,
    labelMargin: 0,
    unitMargin: 2,
    mainMargin: -1,
    centMargin: 0,
  },
  large: {
    label: 18,
    unit: 16,
    main: 20,
    cent: 16,
    labelMargin: 0,
    unitMargin: 3,
    mainMargin: 0,
    centMargin: 0,
  },
  small: {
    label: 12,
    unit: 10,
    main: 14,
    cent: 10,
    labelMargin: 0,
    unitMargin: 1,
    mainMargin: -2,
    centMargin: 0,
  },
}

class Price extends React.Component {
  static defaultProps = {
    negative: false,
    price: 0,
    main: 0,
    cent: 0,
    size: 'normal',
    color: v.priceColor,
    type: 'short',
  }

  constructor(props: any) {
    super(props)
  }

  render() {
    const {price, negative, size, color, type} = this.props
    let main = this.main(price)
    let cent = this.cent(price, type)
    const sizeResult = sizeMap[size]
    return (
      <Text style={{flexDirection: 'row', alignItems: 'flex-end', lineHeight: sizeResult.main}}>
        {negative && price !== 0 && (
          <Text style={{fontSize: sizeResult.label, color, fontWeight: 'bold', marginBottom: sizeResult.labelMargin}}>
            -
          </Text>
        )}
        <Text style={{fontSize: sizeResult.main, color, fontWeight: 'bold', marginBottom: sizeResult.mainMargin}}>
          {main}
        </Text>
        <Text style={{fontSize: sizeResult.cent, color, fontWeight: 'bold', marginBottom: sizeResult.centMargin}}>
          {cent + ' '}
        </Text>
        <Text style={{fontSize: sizeResult.unit, color, fontWeight: 'bold', marginBottom: sizeResult.unitMargin}}>
          积分
        </Text>
      </Text>
    )
  }

  main(price) {
    if (price === null) {
      return '0'
    }
    const priceStr = price.toString()
    return priceStr.split('.')[0]
  }

  cent(price, type) {
    if (price === null) {
      return type === 'long' ? '.00' : ''
    }
    const priceStr = price.toString()
    if (priceStr.indexOf('.') === -1) {
      return type === 'long' ? '.00' : ''
    }
    const cent = priceStr.split('.')[1]
    return type === 'long' && cent.length === 1 ? `.${cent}0` : `.${cent}`
  }
}

export default Price
