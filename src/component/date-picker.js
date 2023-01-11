import React from 'react'
import {Text, View} from 'react-native'
import TouchableOpacity from '~/component/touchable-opacity'
import s from '~/style/component/my-date-picker'
import Icon from 'react-native-vector-icons/AntDesign'
import {Picker} from '@ant-design/react-native'

const calc = require('yu.calculator')
const dateFormat = require('yu.date')

class MyDatePicker extends React.Component {
  // template
  render() {
    const {content} = this.state
    const date = this.props.date
    let dateShow = '选择时间'
    content.value = [new Date().getFullYear(), new Date().getMonth() + 1]
    if (date) {
      dateShow = `${date.getFullYear()}年${date.getMonth() + 1}月`
      content.value = [date.getFullYear(), date.getMonth() + 1]
    }

    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Picker
          cascade={false}
          itemStyle={{fontSize: 15, paddingTop: 10, paddingBottom: 10}}
          extra={content.label}
          data={content.columns}
          cols={2}
          value={content.value}
          onChange={(value) => {
            this.onPickChange(value)
          }}>
          <TouchableOpacity className={s.datePick} onPress={() => this.handleDatePick}>
            <Text style={{color: '#222', fontSize: 16}}>{dateShow}</Text>
            <Icon name="down" size={14} color="#222" />
          </TouchableOpacity>
        </Picker>
        <View>{this.props.children}</View>
      </View>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {
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
    this.props.onDateChange(value)
  }

  componentWillMount(): void {
    const dateNow = this.props.date || new Date()
    const content = {
      visible: true,
      columns: [],
      label: '日期选择',
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
    content.columns = [yearList, monthList]
    for (let i = 1; i <= 12; i++) {
      const month = i
      monthList.push({
        value: month,
        label: month + '月',
      })
    }
    this.setState({
      content,
    })
  }
}

export default MyDatePicker
