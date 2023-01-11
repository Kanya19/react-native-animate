import React from 'react'
import {Dimensions} from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

export default function () {
  const width = Dimensions.get('window').width
  return (
    <SkeletonPlaceholder backgroundColor={'#eaeced'} highlightColor={'#f8f8f8'} speed={1000}>
      <SkeletonPlaceholder.Item height={40} borderRadius={20} margin={14} />
      <SkeletonPlaceholder.Item flexDirection="row" width={width} alignItems="flex-start">
        <SkeletonPlaceholder.Item width={width / 5 - 15} height={20} borderRadius={10} marginLeft={14} />
        <SkeletonPlaceholder.Item width={width / 5 - 15} height={20} borderRadius={10} marginLeft={10} />
        <SkeletonPlaceholder.Item width={width / 5 - 15} height={20} borderRadius={10} marginLeft={10} />
        <SkeletonPlaceholder.Item width={width / 5 - 15} height={20} borderRadius={10} marginLeft={10} />
        <SkeletonPlaceholder.Item width={width / 5 - 15} height={20} borderRadius={10} marginLeft={10} />
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item height={150} borderRadius={10} margin={14} />
      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginLeft={14}
        marginRight={14}>
        <SkeletonPlaceholder.Item margin={7} alignItems="center">
          <SkeletonPlaceholder.Item width={width / 5 - 25} height={50} borderRadius={25} />
          <SkeletonPlaceholder.Item marginTop={6} width={width / 5 - 20} height={20} borderRadius={4} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item margin={7} alignItems="center">
          <SkeletonPlaceholder.Item width={width / 5 - 25} height={50} borderRadius={25} />
          <SkeletonPlaceholder.Item marginTop={6} width={width / 5 - 20} height={20} borderRadius={4} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item margin={7} alignItems="center">
          <SkeletonPlaceholder.Item width={width / 5 - 25} height={50} borderRadius={25} />
          <SkeletonPlaceholder.Item marginTop={6} width={width / 5 - 20} height={20} borderRadius={4} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item margin={7} alignItems="center">
          <SkeletonPlaceholder.Item width={width / 5 - 25} height={50} borderRadius={25} />
          <SkeletonPlaceholder.Item marginTop={6} width={width / 5 - 20} height={20} borderRadius={4} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item margin={7} alignItems="center">
          <SkeletonPlaceholder.Item width={width / 5 - 25} height={50} borderRadius={25} />
          <SkeletonPlaceholder.Item marginTop={6} width={width / 5 - 20} height={20} borderRadius={4} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginLeft={14}
        marginRight={14}>
        <SkeletonPlaceholder.Item margin={7} alignItems="center">
          <SkeletonPlaceholder.Item width={width / 5 - 25} height={50} borderRadius={25} />
          <SkeletonPlaceholder.Item marginTop={6} width={width / 5 - 20} height={20} borderRadius={4} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item margin={7} alignItems="center">
          <SkeletonPlaceholder.Item width={width / 5 - 25} height={50} borderRadius={25} />
          <SkeletonPlaceholder.Item marginTop={6} width={width / 5 - 20} height={20} borderRadius={4} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item margin={7} alignItems="center">
          <SkeletonPlaceholder.Item width={width / 5 - 25} height={50} borderRadius={25} />
          <SkeletonPlaceholder.Item marginTop={6} width={width / 5 - 20} height={20} borderRadius={4} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item margin={7} alignItems="center">
          <SkeletonPlaceholder.Item width={width / 5 - 25} height={50} borderRadius={25} />
          <SkeletonPlaceholder.Item marginTop={6} width={width / 5 - 20} height={20} borderRadius={4} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item margin={7} alignItems="center">
          <SkeletonPlaceholder.Item width={width / 5 - 25} height={50} borderRadius={25} />
          <SkeletonPlaceholder.Item marginTop={6} width={width / 5 - 20} height={20} borderRadius={4} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>

      <SkeletonPlaceholder.Item height={100} borderRadius={10} margin={14} />

      <SkeletonPlaceholder.Item flexDirection="row">
        <SkeletonPlaceholder.Item width={width * 0.5 - 21} height={100} borderRadius={10} marginLeft={14} />
        <SkeletonPlaceholder.Item width={width * 0.5 - 21} height={100} borderRadius={10} marginLeft={14} />
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item flexDirection="row" marginTop={14}>
        <SkeletonPlaceholder.Item width={width * 0.5 - 21} height={100} borderRadius={10} marginLeft={14} />
        <SkeletonPlaceholder.Item width={width * 0.5 - 21} height={100} borderRadius={10} marginLeft={14} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}
