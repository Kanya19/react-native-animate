import React from 'react'
import TouchableOpacity from '~/component/touchable-opacity'
import {Dimensions, FlatList, RefreshControl, Text, View} from 'react-native'
import v from '~/style/varible'
import g from '~/style/global'
import p from '~/style/component/product-list'
import Spinner from 'react-native-spinkit'
import {push} from '~/route/navigation'
import FastImage from 'react-native-fast-image'
import Price from '~/component/price'
import empty from './empty'

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

  onRefresh = () => {
    this.props.onRefresh()
  }

  onEndReached = () => {
    if (Object.prototype.toString.call(this.props.onEndReached) !== '[object Function]') {
      return
    }
    this.props.onEndReached()
  }

  ProductItem = ({item, index}) => {
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
        <View
          className={p.inner}
          style={{
            borderWidth: 1,
            borderColor: '#eee',
          }}>
          <FastImage
            className={p.image}
            style={{width: imageWidth - 1, height: imageWidth - 1}}
            source={{
              uri: item.mainImage,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.stretch}
          />
          <View className={p.content}>
            <View className={p.bottom}>
              <Price color={'#222'} price={item.minPrice || item.price} />
              {!!item.originalPrice && <Text className={p.originalPrice}>￥{item.originalPrice}</Text>}
            </View>
            {/*TODO 暂时删除标签*/}
            {/*<View style={{flexDirection: 'row', alignItems: 'center'}}>*/}
            {/*  {!!item.tagList &&*/}
            {/*    item.tagList.map((item, key) => (*/}
            {/*      <Text key={key} numberOfLines={1} className={p.tag}>*/}
            {/*        {item}*/}
            {/*      </Text>*/}
            {/*    ))}*/}
            {/*</View>*/}
            {!!item.advertise && <Text className={p.desc}>{item.advertise}</Text>}
            <Text numberOfLines={1} className={p.title}>
              {item.name}
            </Text>
            {!!item.sales && (
              <Text numberOfLines={1} className={p.sales}>
                已售:{item.sales}
              </Text>
            )}
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
      <View className={g.center}>
        <Spinner isVisible={loading} type="ThreeBounce" color={v.textLighter} />
      </View>
    )
  }

  onScroll = (event) => {
    this.props.onScroll && this.props.onScroll(event)
  }

  render() {
    let {productList, contentContainerStyle, hideFooterList} = this.props
    const {header} = this.props
    return (
      <FlatList
        onScroll={this.onScroll}
        contentContainerStyle={contentContainerStyle}
        ListEmptyComponent={!hideFooterList && empty(this.props.loading)}
        ListHeaderComponent={header}
        numColumns={2}
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
