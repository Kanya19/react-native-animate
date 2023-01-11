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
          marginTop={50}
          flexDirection="row"
          alignItems="center"
          borderRadius={10}
          height={200}
        />

        <SkeletonPlaceholder.Item
          flexDirection={'row'}
          marginTop={0}
          padding={10}
          justifyContent={'space-between'}
          height={250}>
          <SkeletonPlaceholder.Item
            padding={14}
            margin={10}
            flex={1}
            paddingTop={50}
            marginTop={50}
            flexDirection="row"
            alignItems="center"
            width={180}
            borderRadius={10}
            height={200}
          />
          <SkeletonPlaceholder.Item
            padding={14}
            margin={10}
            flex={1}
            paddingTop={50}
            marginTop={50}
            flexDirection="row"
            alignItems="center"
            width={180}
            borderRadius={10}
            height={200}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          flexDirection={'row'}
          marginTop={0}
          padding={10}
          justifyContent={'space-between'}
          height={220}>
          <SkeletonPlaceholder.Item
            padding={14}
            margin={10}
            flex={1}
            paddingTop={50}
            marginTop={10}
            flexDirection="row"
            alignItems="center"
            width={180}
            borderRadius={10}
          />
          <SkeletonPlaceholder.Item
            padding={14}
            margin={10}
            flex={1}
            paddingTop={50}
            marginTop={10}
            flexDirection="row"
            alignItems="center"
            width={180}
            borderRadius={10}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}
