import React from 'react'
import {Dimensions} from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

export default function () {
  const width = Dimensions.get('window').width
  return (
    <SkeletonPlaceholder backgroundColor={'#eaeced'} highlightColor={'#f8f8f8'} speed={1000}>
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          padding={14}
          paddingTop={50}
          marginTop={150}
          flexDirection="row"
          alignItems="center"
          borderRadius={10}
          height={80}
        />
        <SkeletonPlaceholder.Item
          width={150}
          padding={14}
          marginTop={15}
          flexDirection="row"
          alignItems="center"
          borderRadius={10}
          height={10}
        />

        <SkeletonPlaceholder.Item margin={14} marginTop={50} borderRadius={4} flexDirection="row" height={140}>
          <SkeletonPlaceholder.Item width={100} borderRadius={4} height={100} />
          <SkeletonPlaceholder.Item width={100} paddingLeft={10} borderRadius={4} height={100}>
            <SkeletonPlaceholder.Item width={250} borderRadius={4} height={60} />
            <SkeletonPlaceholder.Item width={250} marginTop={10} borderRadius={4} height={20} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item margin={14} marginTop={0} borderRadius={4} flexDirection="row" height={140}>
          <SkeletonPlaceholder.Item width={100} borderRadius={4} height={100} />
          <SkeletonPlaceholder.Item width={100} paddingLeft={10} borderRadius={4} height={100}>
            <SkeletonPlaceholder.Item width={250} borderRadius={4} height={60} />
            <SkeletonPlaceholder.Item width={250} marginTop={10} borderRadius={4} height={20} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item margin={14} marginTop={150} borderRadius={4} flexDirection="row-reverse" height={140}>
          <SkeletonPlaceholder.Item width={100} height={20} margin={8} borderRadius={15} />
          <SkeletonPlaceholder.Item width={100} height={20} margin={8} borderRadius={15} />
          <SkeletonPlaceholder.Item width={100} height={20} margin={8} borderRadius={15} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}
