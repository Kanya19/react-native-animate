import React from 'react'
import {Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import s from '~/style/component/my-menu'
import TouchableOpacity from '~/component/touchable-opacity'
import config from '~/imports/config'
import {navigate} from '~/route/navigation'

class MyMenu extends React.Component {
  // template
  render() {
    const {menuActive, hideMenu} = this.props
    return (
      <View className={s.menuBox}>
        <TouchableOpacity className={s.menuItem1} onPress={() => this.handleMenu('default')}>
          <Text className={menuActive.name === 'default' && s.active}>热门</Text>
        </TouchableOpacity>
        <TouchableOpacity className={s.menuItem1} onPress={() => this.handleMenu('min_price')}>
          <Text className={`${menuActive.name === 'min_price' && s.active}`}>价格</Text>
          <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 4}}>
            <Icon
              size={12}
              name="up"
              color={menuActive.name === 'min_price' && menuActive.flag === false ? '#FF2A41' : '#898989'}
              style={{
                marginBottom: -5,
              }}
            />
            <Icon
              size={12}
              color={menuActive.name === 'min_price' && menuActive.flag === true ? '#FF2A41' : '#898989'}
              name="down"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className={s.menuItem1} onPress={() => this.handleMenu('sales')}>
          <Text className={`${menuActive.name === 'sales' && s.active}`}>销量</Text>
          <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 4}}>
            <Icon
              size={12}
              name="up"
              color={menuActive.name === 'sales' && menuActive.flag === false ? '#FF2A41' : '#898989'}
              style={{
                marginBottom: -5,
              }}
            />
            <Icon
              size={12}
              color={menuActive.name === 'sales' && menuActive.flag === true ? '#FF2A41' : '#898989'}
              name="down"
            />
          </View>
        </TouchableOpacity>
        {hideMenu ? (
          <TouchableOpacity className={s.menuItem1} onPress={this.goToGoodsCustom}>
            <Text className={`${menuActive.name === 'sales' && s.active}`}>好物系列</Text>
            <Icon
              size={12}
              color={menuActive.name === 'sales' && menuActive.flag === true ? '#FF2A41' : '#898989'}
              name="down"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => this.handleMenu('filter')} className={s.menuItem1}>
            <Text className={`${menuActive.name === 'filter' && s.active}`}>全部分类</Text>
            <Icon style={{marginLeft: 4}} size={10} name="down" />
          </TouchableOpacity>
        )}
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
  goToGoodsCustom = () => {
    navigate('CustomPage', {id: config.goodsCustom})
  }
  handleMenu(name) {
    const {menuActive} = this.state
    if (name === 'filter') {
      menuActive.name = name
      menuActive.flag = true
    } else if (name === 'default') {
      menuActive.name = name
      menuActive.flag = true
    } else if (menuActive.name === name) {
      if (menuActive.name !== 'default' && menuActive.name !== 'filter') {
        menuActive.flag = !menuActive.flag
      } else {
        menuActive.name = null
      }
    } else {
      menuActive.name = name
      menuActive.flag = true
    }
    this.setState({
      menuActive,
    })
    this.props.handleMenu && this.props.handleMenu(menuActive)
  }
  componentWillMount(): void {
    this.setState({
      defaultActive: this.props.active,
    })
  }
}

export default MyMenu
