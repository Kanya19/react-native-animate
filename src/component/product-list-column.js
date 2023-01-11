import React from 'react'
import {FlatList, RefreshControl, Text, View} from 'react-native'
import TouchableOpacity from '~/component/touchable-opacity'
import v from '~/style/varible'
import g from '~/style/global'
import p from '~/style/component/product-list-column'
import Spinner from 'react-native-spinkit'
import {push} from '~/route/navigation'
import FastImage from 'react-native-fast-image'
import Price from '~/component/price'
import empty from './empty'

class ProductList extends React.Component {
  static defaultProps = {
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

  onRefresh = () => {
    this.props.onRefresh()
  }

  onEndReached = () => {
    this.props.onEndReached()
  }

  ProductItem = ({item, index}) => {
    return (
      <TouchableOpacity className={p.item} key={item.id} onPress={() => push('ProductDetail', {spuId: item.id})}>
        <View className={p.inner}>
          <FastImage
            style={{flex: 1}}
            className={p.image}
            source={{
              uri: item.mainImage,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.stretch}
          />
          <View className={p.content} style={{flex: 2}}>
            <Text numberOfLines={2} className={p.title}>
              {item.name}
            </Text>
            <View className={p.bottom}>
              <Price price={item.minPrice} />
            </View>
            <View style={{flexDirection: 'row', marginTop: 4, flexWrap: 'wrap'}}>{this.renderTag(item)}</View>
            <View className={p.footer}>
              {item.commentTotal > 0 ? (
                <Text className={p.comment}>
                  {item.commentTotalLabel}条评价 {item.commentGoodRate}好评
                </Text>
              ) : (
                <Text className={p.comment}>暂无评价</Text>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderTag = (item) => {
    if (item.tagList.length === 0) {
      return
    }
    const res = []

    item.tagList.forEach((item, index) => {
      res.push(
        <Text
          style={{
            borderWidth: 1,
            borderColor: v.primary,
            paddingLeft: 4,
            paddingRight: 4,
            marginRight: 4,
            color: v.primary,
            fontSize: 12,
            marginBottom: 4,
          }}
          key={index}>
          {item}
        </Text>,
      )
    })
    return res
  }
  DropRefresh = () => {
    const {refreshing} = this.state
    return (
      <RefreshControl
        title={'下拉刷新'}
        refreshing={refreshing}
        colors={['rgb(255, 176, 0)', '#ffb100']}
        onRefresh={this.onRefresh}
      />
    )
  }

  Loading = () => {
    const {loading} = this.props
    return (
      <View className={g.center}>
        <Spinner isVisible={loading} type="ThreeBounce" color={v.textLighter} />
      </View>
    )
  }

  render() {
    let {productList, contentContainerStyle} = this.props
    const {header} = this.props
    return (
      <FlatList
        contentContainerStyle={contentContainerStyle}
        ListEmptyComponent={empty(this.props.loading)}
        ListHeaderComponent={header}
        keyExtractor={(item) => item.id.toString()}
        className={p.productList}
        data={productList}
        refreshControl={this.DropRefresh()}
        renderItem={this.ProductItem}
        ListFooterComponent={this.Loading()}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.5}
      />
    )
  }
}

export default ProductList
