import React from 'react'
import {Dimensions, View} from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import v from '~/style/varible'

export default function () {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <SkeletonPlaceholder backgroundColor={'#eaeced'} highlightColor={'#f8f8f8'} speed={1000}>
        <SkeletonPlaceholder.Item height={400} />
        <SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item padding={14} flexDirection="row" alignItems="center" justifyContent="space-between">
            <SkeletonPlaceholder.Item width={60} borderRadius={4} height={20}></SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item width={40} borderRadius={4} height={20}></SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item height={14} borderRadius={10} margin={14} marginBottom={0} />
          <SkeletonPlaceholder.Item width={200} height={14} borderRadius={10} margin={14} marginBottom={0} />
          <SkeletonPlaceholder.Item marginBottom={1} marginTop={10} height={30} />
          <SkeletonPlaceholder.Item height={30} marginBottom={0} />
          <SkeletonPlaceholder.Item marginTop={10} borderRadius={10} height={100} marginBottom={0} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  )
}
