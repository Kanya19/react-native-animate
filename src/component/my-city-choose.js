import React from 'react'

import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import pinyin from 'pinyin'
import onlyProvince from '~/common/only-province'

let testData = onlyProvince.map((item) => {
  return {
    id: item.value,
    name: item.label,
  }
})
const selectedFieldName = 'id'

const isAndroid = Platform.OS === 'android'

class MyCityChoose extends React.Component {
  // template
  constructor(props) {
    super(props)
    this.state = {
      searchValue: null,
      dataList: testData,
      sections: [], //section数组
      // letterArr: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],      //首字母数组
      letterArr: [], //首字母数组
      activeLetterIndex: 0,
      selectedItemSet: new Set(),
      // 是否开启批量选择模式
      batchSelected: false,
      refreshCount: 0,
    }
  }

  componentWillMount = () => {
    // 将数据列表转化为拼音存储，以便于拼音搜索
    testData.forEach((item, index, arr) => {
      // 将Item的名称转为拼音数组
      let pinyinArr = pinyin(item.name, {style: pinyin.STYLE_NORMAL})
      item.pinyinArr = pinyinArr
      let pinyinArrStr = ''
      // 将拼音数组转化为一个字符串，以支持拼音搜索
      for (let i = 0; i < pinyinArr.length; i++) {
        for (let j = 0; j < pinyinArr[i].length; j++) {
          pinyinArrStr = pinyinArrStr + pinyinArr[i][j]
        }
      }
      item.pinyinArrStr = pinyinArrStr
    })
    this.transferToSectionsData(testData)
  }

  /**
   * 转化数据列表
   */
  transferToSectionsData = (dataList) => {
    //获取联系人列表
    let sections = [],
      letterArr = []
    // 右侧字母栏数据处理
    dataList.forEach((item, index, arr) => {
      let itemTemp = pinyin(item.name.substring(0, 1), {
        style: pinyin.STYLE_FIRST_LETTER,
      })[0][0].toUpperCase()
      letterArr.push(itemTemp)
    })
    letterArr = [...new Set(letterArr)].sort()
    this.setState({letterArr: letterArr})

    // 分组数据处理
    letterArr.forEach((item, index, arr) => {
      sections.push({
        title: item,
        data: [],
      })
    })

    dataList.forEach((item1, index1, arr1) => {
      let listItem = item1
      sections.forEach((item2, index2, arr2) => {
        let firstName = listItem.name.substring(0, 1)
        let firstLetter = pinyin(firstName, {style: pinyin.STYLE_FIRST_LETTER})[0][0].toUpperCase()
        let pinyinStrArr = pinyin(listItem.name, {style: pinyin.STYLE_NORMAL})
        if (item2.title === firstLetter) {
          item2.data.push({
            firstName: firstName,
            name: listItem.name,
            id: listItem.id,
          })
        }
      })
    })
    this.setState({sections: sections})
  }

  openBatchSelectedMode = (callback) => {
    this.setState(
      {
        batchSelected: true,
        selectedItemSet: new Set(),
      },
      () => {
        callback && callback()
      },
    )
  }

  closeBatchSelectedMode = () => {
    this.setState({
      batchSelected: false,
      selectedItemSet: new Set(),
    })
  }

  addOrDeleteSelectedItem = (item) => {
    const {batchSelected, selectedItemSet, refreshCount} = this.state
    if (!batchSelected) {
      return
    }
    if (item && item[selectedFieldName]) {
      if (selectedItemSet.has(item[selectedFieldName])) {
        selectedItemSet.delete(item[selectedFieldName])
      } else {
        selectedItemSet.add(item[selectedFieldName])
      }
      this.setState(
        {
          selectedItemSet: selectedItemSet,
          refreshCount: refreshCount + 1,
        },
        () => {},
      )
    }
  }

  /**
   * 重置选中的成员
   */
  clearSelectedItem = () => {
    const {batchSelected, selectedItemSet, refreshCount} = this.state
    selectedItemSet.clear()
    this.setState(
      {
        selectedItemSet: selectedItemSet,
        refreshCount: refreshCount + 1,
      },
      () => {},
    )
  }

  // 字母关联分组跳转
  _onSectionselect = (key) => {
    this.setState(
      {
        activeLetterIndex: key,
      },
      () => {},
    )
    this.refs._sectionList.scrollToLocation({
      itemIndex: 0,
      sectionIndex: key,
      viewOffset: 20,
    })
  }

  // 分组列表的头部
  _renderSectionHeader(sectionItem) {
    const {section} = sectionItem
    return (
      <View
        style={{
          height: 20,
          backgroundColor: '#e7f0f9',
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16}}>{section.title.toUpperCase()}</Text>
      </View>
    )
  }

  renderItemSelectedIcon = (item) => {
    if (!item) {
      return
    }
    const {batchSelected, selectedItemSet} = this.state
    if (batchSelected) {
      let isActive = selectedItemSet.has(item[selectedFieldName])
      return (
        <Image
          style={{
            width: 18,
            height: 18,
            marginRight: 10,
          }}
          source={{
            uri: isActive
              ? 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/detail-collected.png'
              : 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/detail-collect.png',
          }}
        />
      )
    } else {
      return null
    }
  }

  _renderItem(item, index) {
    const {batchSelected} = this.state
    console.log('batchSelected', batchSelected, item)
    return (
      <TouchableOpacity
        style={{
          paddingLeft: 20,
          paddingRight: 30,
          height: 50,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#efefef',
        }}
        activeOpacity={0.75}
        onLongPress={() => {
          if (!batchSelected) {
            this.openBatchSelectedMode(() => {
              this.addOrDeleteSelectedItem(item)
            })
          }
        }}
        onPress={() => {
          this.addOrDeleteSelectedItem(item)
        }}>
        {this.renderItemSelectedIcon(item)}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'space-between',
            flexGrow: 1,
          }}>
          <View
            style={{
              // padding: 10,
              height: 30,
              width: 30,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2988FF',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
              }}>
              {item.firstName}
            </Text>
          </View>
          <View
            style={{
              marginLeft: 10,
            }}>
            <Text style={{}}>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderBatchSelectedHeader = () => {
    const {batchSelected, selectedItemSet} = this.state
    if (!batchSelected) {
      return (
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#efefef',
          }}>
          <TouchableOpacity
            style={{
              padding: 10,
            }}
            onPress={() => {
              this.openBatchSelectedMode()
            }}>
            <Text>批量选择</Text>
          </TouchableOpacity>
        </View>
      )
    }
    return (
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            padding: 10,
          }}
          onPress={() => {
            this.closeBatchSelectedMode()
          }}>
          <Text>取消</Text>
        </TouchableOpacity>
        <View style={{}}>
          <Text>已选择{selectedItemSet.size}条记录</Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
          }}
          onPress={() => {
            this.closeBatchSelectedMode()
          }}>
          <Text>确定</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render = () => {
    const {letterArr, sections, activeLetterIndex, batchSelected} = this.state
    //偏移量 = （设备高度 - 字母索引高度 - 底部导航栏 - 顶部标题栏 - 24）/ 2
    let top_offset = (Dimensions.get('window').height - letterArr.length * 16 - 52 - 44 - 24) / 2
    if (isAndroid) {
      top_offset = top_offset + StatusBar.currentHeight + 45
    }
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        {/*{this.renderSearchBar()}*/}
        {/*  搜索*/}
        {/*{this.renderBatchSelectedHeader()}*/}
        {/*  批量选择*/}
        <SectionList
          ref="_sectionList"
          renderItem={({item, index}) => this._renderItem(item, index)}
          renderSectionHeader={this._renderSectionHeader.bind(this)}
          sections={sections}
          keyExtractor={(item, index) => item + index}
          ItemSeparatorComponent={() => <View />}
        />

        {/*右侧字母栏*/}
        <View style={{position: 'absolute', width: 26, right: 0, top: 0}}>
          {/*top_offset}}*/}
          <FlatList
            data={letterArr}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              let isActive = index === activeLetterIndex
              // let textStyle = isActive ? styles.activeIndicatorText : styles.inactiveIndicatorText;
              // let containerStyle = isActive ? styles.activeIndicatorContainer : styles.inactiveIndicatorContainer;
              let textStyle = styles.inactiveIndicatorText
              let containerStyle = styles.inactiveIndicatorContainer
              return (
                <TouchableOpacity
                  style={[
                    {
                      marginVertical: 2,
                      height: 16,
                      width: 16,
                      borderRadius: 8,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                    containerStyle,
                  ]}
                  onPress={() => {
                    this._onSectionselect(index)
                  }}>
                  <Text
                    style={[
                      {
                        fontSize: 12,
                      },
                      textStyle,
                    ]}>
                    {item.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </SafeAreaView>
    )
  }

  setSearchValue = (searchValue, callback) => {
    this.setState(
      {
        searchValue: searchValue,
      },
      () => {
        callback && callback()
      },
    )
  }

  search = () => {
    // alert('搜索');
    const {dataList, searchValue} = this.state
    if (searchValue && searchValue.trim()) {
      let searchValueTemp = searchValue.toLocaleLowerCase()
      const resultList = []
      dataList.forEach((item, index, arr) => {
        if (item.name) {
          if (
            item.name.toLocaleLowerCase().indexOf(searchValueTemp) >= 0 ||
            this.pinyinSingleLetterIndexSearch(searchValueTemp, item.pinyinArr) >= 0 ||
            item.pinyinArrStr.toLocaleLowerCase().indexOf(searchValueTemp) >= 0
          ) {
            resultList.push(item)
          }
        }
      })
      this.transferToSectionsData(resultList)
    } else {
      this.transferToSectionsData(dataList)
    }
  }

  /**
   * 在拼音数组中搜索单个拼音，如果匹配，则返回等于大于0的值，否则返回-1
   * @param keyword
   * @param pinyinArr
   * @returns {number}
   */
  pinyinSingleLetterIndexSearch = (keyword, pinyinArr) => {
    let result = -1
    if (keyword && pinyinArr) {
      for (let i = 0; i < pinyinArr.length; i++) {
        for (let j = 0; j < pinyinArr[i].length; j++) {
          let singleLetterIndex = pinyinArr[i][j].toLocaleLowerCase().indexOf(keyword)
          if (singleLetterIndex >= 0) {
            return singleLetterIndex
          }
        }
      }
    }
    return result
  }

  renderSearchBar = () => {
    const {searchValue} = this.state
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderBottomColor: '#efefef',
        }}>
        <TouchableOpacity
          style={{
            paddingLeft: 15,
            paddingRight: 15,
          }}
          onPress={() => {}}>
          <Image source={{uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/detail-collect.png'}} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              height: 30,
              backgroundColor: '#F0F0F0',
              borderRadius: 30,
              paddingLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={{uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/detail-collect.png'}}
              style={{width: 15, height: 15}}
            />
            <TextInput
              placeholder="输入查询内容..."
              maxLength={100}
              style={{
                flex: 1,
                marginLeft: 5,
                marginRight: 5,
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 5,
                // backgroundColor: 'pink',
              }}
              autoFocus={false}
              value={searchValue}
              onChangeText={(text) => {
                this.setSearchValue(text, () => {
                  this.search()
                })
              }}
              onSubmitEditing={() => {}}
            />
            {searchValue ? (
              <TouchableOpacity
                style={{
                  marginRight: 10,
                }}
                onPress={() => {
                  this.setSearchValue(null, () => {
                    this.search()
                  })
                }}>
                <Image
                  source={{uri: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/detail-collect.png'}}
                  style={{
                    width: 17,
                    height: 17,
                  }}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        <TouchableOpacity
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            this.search()
          }}>
          <Text
            style={{
              color: '#2988FF',
              fontSize: 16,
            }}>
            搜索
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  taskNodeTitleText: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  inactiveIndicatorContainer: {},
  activeIndicatorContainer: {
    backgroundColor: '#2988FF',
  },
  inactiveIndicatorText: {
    color: '#666666',
  },
  activeIndicatorText: {
    color: '#fff',
  },
})

export default MyCityChoose
