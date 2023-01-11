import React from 'react'
import {Dimensions, Text, View} from 'react-native'
import p from '~/style/component/product-three-column'
import {push} from '~/route/navigation'
import FastImage from 'react-native-fast-image'
import Price from '~/component/price'
import TouchableOpacity from '~/component/touchable-opacity'

class ProductThreeColumn extends React.Component {
  constructor(props: any) {
    super(props)
  }

  render() {
    const width = 88
    let {productList} = this.props
    return (
      <View style={{flex: 1, paddingTop: 15, flexDirection: 'row', flexWrap: 'wrap'}}>
        {productList.map((item, index) => {
          return (
            <TouchableOpacity
              className={p.item}
              key={index}
              style={{flexDirection: 'column', alignItems: 'center'}}
              onPress={() => {
                push('ProductDetail', {spuId: item.id})
              }}>
              <View className={p.inner}>
                <FastImage
                  style={{width, height: width}}
                  source={{uri: item.mainImage}}
                  resizeMode={FastImage.resizeMode.cover}
                />
                <View className={p.content}>
                  <Text numberOfLines={2} className={p.title}>
                    {item.name}
                  </Text>
                  <View className={p.bottom}>
                    <Price price={item.minPrice} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}

export default ProductThreeColumn
