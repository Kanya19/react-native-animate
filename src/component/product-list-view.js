import React from 'react'
import {Dimensions, Text, View} from 'react-native'
import p from '~/style/component/product-list'
import {push} from '~/route/navigation'
import FastImage from 'react-native-fast-image'
import Price from '~/component/price'
import TouchableOpacity from '~/component/touchable-opacity'

const screenWidth = Dimensions.get('window').width
const imageWidth = screenWidth / 2 - 16

class ProductList extends React.Component {
  static defaultProps = {
    showComment: false,
    contentContainerStyle: {},
  }

  constructor(props: any) {
    super(props)
    this.state = {
      refreshing: false,
      loading: true,
      searchValue: '',
    }
  }

  render() {
    let {productList} = this.props
    return (
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {productList.map((item, index) => {
          return (
            <TouchableOpacity
              className={p.item}
              key={item.id}
              onPress={() => {
                push('ProductDetail', {spuId: item.id})
              }}
              style={{
                paddingLeft: index % 2 ? 5 : 10,
                paddingRight: index % 2 ? 10 : 5,
              }}>
              <View className={p.inner}>
                <FastImage
                  className={p.image}
                  style={{width: imageWidth, height: imageWidth}}
                  source={{
                    uri: item.mainImage,
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.stretch}
                />
                <View className={p.content}>
                  <Text numberOfLines={2} className={p.title}>
                    {item.name}
                  </Text>
                  <View className={p.bottom}>
                    <Price price={item.minPrice} />
                  </View>
                  {this.props.showComment && (
                    <View className={p.footer}>
                      {item.commentTotal > 0 ? (
                        <Text className={p.comment}>
                          {item.commentTotalLabel}条评价 {item.commentGoodRate}好评
                        </Text>
                      ) : (
                        <Text className={p.comment}>暂无评价</Text>
                      )}
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}

export default ProductList
