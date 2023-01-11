import {
  UPDATE_COUPON_DTO,
  UPDATE_IS_CREATE_FIRST_ADDRESS,
  UPDATE_ORDER_ADDRESS,
  UPDATE_ORDER_ITEM_LIST,
  UPDATE_ORDER_SKU,
  UPDATE_SELECT_ADDRESS,
  UPDATE_SELECT_COUPON,
  UPDATE_APPOINTMENT_ITEM,
  UPDATE_ZHAOSHANG_PAY,
  UPDATE_TEMP_ORDER_INFO,
} from '../types'

export const updateOrderItemList = (value) => ({
  type: UPDATE_ORDER_ITEM_LIST,
  payload: value,
})
export const updateAppointmentItemList = (value) => ({
  type: UPDATE_APPOINTMENT_ITEM,
  payload: value,
})
export const updateTempOrderInfo = (value) => ({
  type: UPDATE_TEMP_ORDER_INFO,
  payload: value,
})
export const updateOrderSku = (value) => ({
  type: UPDATE_ORDER_SKU,
  payload: value,
})
export const updateOrderAddress = (value) => ({
  type: UPDATE_ORDER_ADDRESS,
  payload: value,
})
export const updateIsCreateFirstAddress = (value) => ({
  type: UPDATE_IS_CREATE_FIRST_ADDRESS,
  payload: value,
})
export const updateSelectAddress = (value) => ({
  type: UPDATE_SELECT_ADDRESS,
  payload: value,
})
export const updateCouponDto = (value) => ({
  type: UPDATE_COUPON_DTO,
  payload: value,
})

export const updateSelectCoupon = (value) => ({
  type: UPDATE_SELECT_COUPON,
  payload: value,
})

export const updateZhaoshangPay = (value) => ({
  type: UPDATE_ZHAOSHANG_PAY,
  payload: value,
})
