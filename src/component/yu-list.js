import React from 'react'
import {FlatList, Text, RefreshControl, View} from 'react-native'
import v from '~/style/varible'
import g from '~/style/global'
import Spinner from 'react-native-spinkit'
import empty from './empty'

class YuList extends React.Component {
  static defaultProps = {
    numColumns: 1,
    list: [],
    contentContainerStyle: {},
    backgroundColor: 'none',
    wrapStyle: {},
  }

  constructor(props: any) {
    super(props)
    this.state = {
      refreshing: false,
    }
  }

  onRefresh = () => {
    this.props.onRefresh()
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
    const {loading, list, hasMore, marginBottom} = this.props
    return (
      <View className={g.center} style={!list.length && {height: 200}}>
        <Spinner isVisible={loading} type="ThreeBounce" color={v.textLighter} />
        {list.length !== 0 && !loading && !hasMore && (
          <Text style={{color: v.textLight, paddingTop: 56, paddingBottom: 28}}>没有更多了</Text>
        )}
        {!!marginBottom && <View style={{height: marginBottom || 0}} />}
      </View>
    )
  }

  render() {
    const {
      list,
      header,
      numColumns,
      renderItem,
      onEndReached,
      keyExtractor,
      contentContainerStyle,
      showsVerticalScrollIndicator,
      paddingBottom,
      wrapStyle,
    } = this.props
    let bottom = 40

    if (typeof paddingBottom === 'number') {
      bottom = paddingBottom
    }
    const emptyInfo = {
      image: this.props.emptyImage,
      text: this.props.emptyText,
    }
    return (
      <View style={{paddingBottom: bottom, ...wrapStyle}}>
        <FlatList
          style={{minHeight: '100%'}}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          contentContainerStyle={contentContainerStyle}
          ListEmptyComponent={empty(this.props.loading, emptyInfo)}
          ListHeaderComponent={header}
          numColumns={numColumns || 1}
          keyExtractor={keyExtractor}
          data={list}
          refreshControl={this.DropRefresh()}
          renderItem={renderItem}
          ListFooterComponent={this.Loading()}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
        />
      </View>
    )
  }
}

export default YuList
