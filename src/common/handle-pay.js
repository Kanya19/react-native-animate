import api from '~/api'
import {OrderTypeEnum, PayTypeEnum} from '~/common/constant'
import wx from '~/common/wx'

export const handlePay = (orderItem) => {
  return new Promise((resolve, reject) => {
    if (!orderItem.skuId) {
      getSkuId(orderItem.spuId)
        .then((res) => {
          const orderItemObj = {
            spuId: orderItem.spuId,
            skuId: res,
            count: 1,
            orderType: orderItem.orderType,
          }
          getConfirmOrderDetail(orderItemObj).then((res) => {
            resolve(res)
          })
        })
        .catch((err) => {
          wx.showToast({
            title: '该商品已下架',
          })
          reject()
        })
    } else {
      const orderItem = {
        spuId: orderItem.spuId,
        skuId: orderItem.skuId,
        count: 1,
        orderType: orderItem.orderType,
      }
      getConfirmOrderDetail(orderItem)
        .then((res) => {
          resolve(res)
        })
        .catch(() => {
          reject()
        })
    }
  })
}
function getConfirmOrderDetail(orderItem) {
  return new Promise((resolve) => {
    api.getConfirmOrderDetail([orderItem]).then((res) => {
      let userAddress = {}
      if (res.address && res.address.id) {
        userAddress = {...res.address}
        userAddress.feature = userAddress.feature || '{}'
      } else {
        console.log('没有地址的情况')
      }
      api
        .createWechatPayOrder({
          orderItemDTOList: [
            {
              count: 1,
              skuId: orderItem.skuId,
            },
          ],
          userAddressId: userAddress.id || null,
          orderType: orderItem.orderType,
          payType: PayTypeEnum.APP_WECHAT,
        })
        .then((res) => {
          resolve(res)
        })
    })
  })
}
function getSkuId(spuId) {
  return new Promise((resolve, reject) => {
    api
      .getSkuList({spuId})
      .then((res) => {
        console.log('res1', res)
        res = res || []
        if (res.length) {
          resolve(res[0].id)
        } else {
          reject()
        }
      })
      .catch((err) => {
        reject()
      })
  })
}
