import React from 'react'
import {Dimensions, FlatList, Text, View, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import s from '~/style/component/my-category'
import TouchableOpacity from '~/component/touchable-opacity'
import LinearGradient from 'react-native-linear-gradient'
import FastImage from 'react-native-fast-image'
import VideoPlayer from 'react-native-video-controls'
import v from '~/style/varible'
import empty from './empty'

class MyMenu extends React.Component {
  // template
  render() {
    const {firstCategory, thirdCategoryMap, list, activeKey, selectFirstCategory} = this.props
    return (
      <View className={s.mainContainer}>
        <FlatList
          style={{
            height: Dimensions.get('window').height - 300,
            width: 100,
            backgroundColor: '#f9f9f9',
          }}
          contentContainerStyle={{paddingBottom: 150}}
          onEndReachedThreshold={0.5}
          data={firstCategory}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => this.props.getTargetList(item.id)}>
              <View
                className={s.sidebarItem}
                style={{
                  backgroundColor: index === activeKey ? '#ffffff' : '#F6F7F8',
                }}>
                {index === activeKey && <View className={s.selectLine} />}
                <Text
                  className={s.sidebarTitle}
                  style={{
                    color: index === activeKey ? '#333333' : '#898989',
                    fontSize: index === activeKey ? 15 : 14,
                  }}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />

        {/*二级、三级类目列表*/}
        <ScrollView
          style={{
            width: Dimensions.get('window').width - 100,
            height: Dimensions.get('window').height - 300,
            paddingBottom: 170,
            paddingTop: 14,
            paddingLeft: 14,
            paddingRight: 14,
          }}>
          {empty(list.length !== 0)}
          {selectFirstCategory && (
            <View className={s.listTitle}>
              <LinearGradient
                className={s.lineLeft}
                end={{x: 1, y: 1}}
                start={{x: 0, y: 1}}
                colors={['#FFFFFF', '#A4A6A6']}
              />
              <Text className={s.selectTitle}>{selectFirstCategory.title}</Text>
              <LinearGradient
                className={s.lineRight}
                end={{x: 1, y: 1}}
                start={{x: 0, y: 1}}
                colors={['#A4A6A6', '#FFFFFF']}
              />
            </View>
          )}
          {list.map((each) => {
            const {height} = this.props
            return (
              <View key={each.id}>
                <View>
                  {each.videoUrl ? (
                    <VideoPlayer
                      onError={(err) => console.log('err', err)}
                      disableBack
                      disableVolume
                      resizeMode={'contain'}
                      source={{uri: each.videoUrl}}
                      controls={false}
                      muted
                      repeat
                      style={{width: '100%', height: 200, marginTop: 20, backgroundColor: '#000'}}
                    />
                  ) : null}
                  {!each.videoUrl && each.image ? (
                    <FastImage
                      onLoad={(event) => {
                        this.imageLoad(event)
                      }}
                      style={{height: height}}
                      className={s.itemImage}
                      source={{uri: each.image}}
                      resizeMode={FastImage.resizeMode.stretch}
                    />
                  ) : null}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 20,
                      borderBottomWidth: 1,
                      paddingBottom: 6,
                      borderBottomColor: '#f1f1f1',
                    }}>
                    <Text className={s.eachSectionTitle}>{each.title}</Text>
                    <TouchableOpacity
                      onPress={() => this.props.goToMore(each)}
                      style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={{fontSize: 12, color: '#898989B3'}}>更多</Text>
                      <Icon name="right" size={8} color="#898989B3" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  {thirdCategoryMap[each.id] &&
                    thirdCategoryMap[each.id].map((item) => {
                      return (
                        <TouchableOpacity
                          className={s.eachBox}
                          onPress={() => this.props.goToProductList(item)}
                          key={item.id}>
                          <View>
                            <FastImage
                              className={s.eachImage}
                              source={{uri: item.image}}
                              resizeMode={FastImage.resizeMode.stretch}
                            />
                            <Text numberOfLines={1} className={s.eachTitle}>
                              {item.title}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      )
                    })}
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {
      menuActive: {
        name: null,
        flag: true,
      },
    }
  }

  // methods
  imageLoad = (event) => {
    let scale = event.nativeEvent.width / event.nativeEvent.height
    const height = (Dimensions.get('window').width - 128) / scale
    this.setState({height})
  }
  componentWillMount(): void {
    this.setState({
      defaultActive: this.props.active,
    })
  }
}

export default MyMenu
