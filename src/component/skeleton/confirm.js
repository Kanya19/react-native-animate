import React from 'react'
import {Dimensions, View} from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

export default function () {
  const width = Dimensions.get('window').width
  return (
    <SkeletonPlaceholder backgroundColor={'#eaeced'} highlightColor={'#f8f8f8'} speed={800}>
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          margin={14}
          borderRadius={10}
          height={80}>
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item margin={14} marginTop={50} borderRadius={4} flexDirection="row" height={140} >
          <SkeletonPlaceholder.Item width={100} borderRadius={4} height={100} />
          <SkeletonPlaceholder.Item width={100} paddingLeft={10} borderRadius={4} height={100}>
            <SkeletonPlaceholder.Item width={250} borderRadius={4} height={60} />
            <SkeletonPlaceholder.Item width={250} marginTop={10} borderRadius={4} height={20} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item margin={14} marginTop={5} borderRadius={4} flexDirection="row" height={140}>
          <SkeletonPlaceholder.Item width={100} borderRadius={4} height={100} />
          <SkeletonPlaceholder.Item width={100} paddingLeft={10} borderRadius={4} height={100}>
            <SkeletonPlaceholder.Item width={250} borderRadius={4} height={60} />
            <SkeletonPlaceholder.Item width={250} marginTop={10} borderRadius={4} height={20} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item margin={28} marginTop={30} borderRadius={25} height={50} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}
