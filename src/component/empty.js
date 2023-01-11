import React from 'react'
import {Text, View} from 'react-native'
import v from '~/style/varible'
import FastImage from 'react-native-fast-image'

const EmptyImageDefault = require('~/asset/img/9clci1_empty-image-default.png')

function Empty(isEmpty, emptyInfo) {
  const emptyImage = emptyInfo && emptyInfo.image ? {uri: emptyInfo.image} : EmptyImageDefault
  const emptyText = (emptyInfo && emptyInfo.text) || '暂无数据'
  return (
    !isEmpty && (
      <View style={{alignItems: 'center'}}>
        <FastImage
          style={{width: 200, height: 200, marginTop: 100}}
          source={emptyImage}
          resizeMode={FastImage.resizeMode.stretch}
        />
        <Text style={{color: v.textLighter}}>{emptyText}</Text>
      </View>
    )
  )
}

export default Empty
