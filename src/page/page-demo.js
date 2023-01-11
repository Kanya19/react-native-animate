import React from 'react'
import {SafeAreaView, Text, View} from 'react-native'
import s from '~/style/demo'
import api from '~/api'
import {SearchBar} from '@ant-design/react-native'
import {searchPageBarStyle2} from '~/style/ant-style'
import YuList from '~/component/yu-list'

class PageDemo extends React.Component {
  render() {
    const {list, search, loading} = this.state
    return (
      <SafeAreaView>
        <YuList
          hasMore={this.state.hasMore}
          header={
            <View className={s.input}>
              <SearchBar
                value={search}
                showCancelButton={false}
                styles={searchPageBarStyle2}
                placeholder="请输入搜索关键词"
                placeholderTextColor="#929395"
                onChange={this.onSearchChange}
                onSubmit={(value) => this.onSearchSubmit(value)}
              />
            </View>
          }
          list={list}
          loading={loading}
          renderItem={({item, index}) => <Text className={s.listItem}>{item.name}</Text>}
          onRefresh={this.onPullDownRefresh}
          onEndReached={this.onReachBottom}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {
      loading: false,
      list: [],
      total: 0,
      form: {
        pageNo: 1,
        pageSize: 10,
      },
      search: '',
      hasMore: false,
    }
  }

  //methods
  onSearchChange = (search) => {
    this.setState({
      search,
    })
  }
  onSearchSubmit(value) {
    this.setState(
      {
        list: [],
        total: 0,
        form: {
          name: value,
          pageNo: 1,
          pageSize: 10,
        },
      },
      this.getList,
    )
  }

  getList = () => {
    const {form, loading} = this.state
    if (!loading) {
      this.setState({loading: true}, () => {
        api.getSpuPage(form).then((result) => {
          this.setState({
            list: this.state.list.concat(result.data),
            total: result.total,
            loading: false,
            hasMore: form.pageNo * form.pageSize < result.total,
          })
        })
      })
    }
  }

  onPullDownRefresh = () => {
    this.setState(
      {
        list: [],
        total: 0,
        form: {
          pageNo: 1,
          pageSize: 10,
        },
      },
      this.getList,
    )
  }

  onReachBottom = () => {
    const {form, hasMore, loading} = this.state
    if (!hasMore || loading) {
      return
    }
    form.pageNo = form.pageNo + 1
    this.setState({form}, this.getList)
  }

  // mounted
  componentDidMount(): void {
    this.getList()
  }
}

export default PageDemo
