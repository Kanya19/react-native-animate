import React from 'react'
import {Text, View} from 'react-native'
import TouchableOpacity from '~/component/touchable-opacity'
import s from '~/style/component/my-date-picker'
import v from '~/style/varible'
import TabView from '~/component/tab-view'
import Icon from 'react-native-vector-icons/AntDesign'
import {Picker} from '@ant-design/react-native'
import {DetailEnum} from '~/common/constant'

const calc = require('yu.calculator')
const dateFormat = require('yu.date')

class MyDatePicker extends React.Component {
  // template
  render() {
    const {active, dateShow, content} = this.state
    return (
      <>
        {content.visible && (
          <View className={s.myTab}>
            <View className={s.dateBox}>
              <Picker
                itemStyle={{fontSize: 15, paddingTop: 10, paddingBottom: 10}}
                cascade={false}
                extra={content.label}
                data={content.columns}
                cols={3}
                value={content.value}
                onChange={(value) => {
                  this.onPickChange(value)
                }}
                onPickerChange={(value, index, ss) => {
                  this.onPickerChange(value)
                }}>
                <TouchableOpacity className={s.datePick} onPress={() => this.handleDatePick}>
                  <Text style={{color: v.text}}>{dateShow}</Text>
                  <Icon name="down" size={14} color="#222" />
                </TouchableOpacity>
              </Picker>
              <View>{this.props.children}</View>
            </View>

            <View className={s.tabBox}>
              <TabView
                focusedColor={v.text}
                indicatorColor={v.primaryText}
                style={{backgroundColor: 'transparent'}}
                tabs={DetailEnum}
                onIndexChange={this.onIndexChange}
                index={active}
              />
            </View>
          </View>
        )}
      </>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    const value = new Date()
    this.state = {
      dateShow: `${value.getFullYear()}年${value.getMonth() + 1}月${value.getDate()}日`,
      active: 0,
      content: {
        visible: false,
        columns: [],
        label: '日期选择',
        value: [],
      },
    }
  }

  // methods
  onPickChange = (value) => {
    const dateShow = `${value[0]}年${value[1]}月${value[2]}日`
    this.setState({
      dateShow,
    })
    this.props.onDateChange(value)
  }
  onPickerChange = (pickerValue) => {
    const {content} = this.state
    if (content.value[2] === pickerValue[2]) {
      content.columns[2] = this.setDate(pickerValue)
      content.value = pickerValue
      content.value[2] = 1
    } else {
      content.value = pickerValue
    }
    this.setState({
      content,
    })
  }
  onIndexChange = (index, value) => {
    this.setState({
      active: index,
    })
    this.props.menuChange(index, value)
  }
  setDate = (value) => {
    const dateList = []
    const values = value[0] + '-' + (value[1] + 1) + '-' + '0'

    const days = new Date(dateFormat.parse(values, 'yyyy-MM-dd')).getDate()
    for (let i = 1; i <= days; i++) {
      dateList.push({
        value: i,
        label: i + '日',
      })
    }
    return dateList
  }

  componentWillMount(): void {
    const dateNow = this.props.date
    const active = this.props.active
    const content = {
      visible: true,
      columns: [],
      label: '日期选择',
      value: [dateNow.getFullYear(), dateNow.getMonth() + 1, dateNow.getDate()],
    }
    const yearList = []
    const monthList = []
    const count = dateNow.getFullYear() - 2011
    for (let i = 0; i <= count; i++) {
      const year = calc.add(2011, i)
      yearList.push({
        value: year,
        label: year + '年',
      })
    }
    content.columns = [yearList, monthList, this.setDate(content.value)]
    for (let i = 1; i <= 12; i++) {
      const month = i
      monthList.push({
        value: month,
        label: month + '月',
      })
    }
    this.setState({
      active,
      content,
    })
  }
}

export default MyDatePicker
