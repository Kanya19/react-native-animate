import React from 'react'
import {FlatList, RefreshControl, Text, View} from 'react-native'
import TouchableOpacity from '~/component/touchable-opacity'
import v from '~/style/varible'
import g from '~/style/global'
import p from '~/style/component/package-list'
import Spinner from 'react-native-spinkit'
import {push} from '~/route/navigation'
import FastImage from 'react-native-fast-image'
import Price from '~/component/price'

class ProductList extends React.Component {
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
      <TouchableOpacity className={p.item} key={item.id} onPress={() => push('PackageDetail', {id: item.id})}>
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
            <Text numberOfLines={1} className={p.description}>
              {item.description}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text className={p.saveText}>立省{item.saveMoney}元</Text>
            </View>

            <View className={p.bottom}>
              <Price price={item.packagePrice} />
              <Text className={p.originalPrice}>￥{item.originalPrice}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
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
      <View className={g.center} style={{padding: loading ? 20 : 0}}>
        <Spinner isVisible={loading} type="ThreeBounce" color={v.textLighter} />
      </View>
    )
  }

  render() {
    let {productList} = this.props
    const {header} = this.props
    return (
      <FlatList
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
