import {
  UPDATE_APPOINTMENT_ITEM,
  UPDATE_COUPON_DTO,
  UPDATE_IS_CREATE_FIRST_ADDRESS,
  UPDATE_ORDER_ADDRESS,
  UPDATE_ORDER_ITEM_LIST,
  UPDATE_ORDER_SKU,
  UPDATE_SELECT_ADDRESS,
  UPDATE_SELECT_COUPON,
  UPDATE_ZHAOSHANG_PAY,
  UPDATE_TEMP_ORDER_INFO,
} from '../types'

const INITIAL_STATE = {
  orderItemList: [],
  appointmentItem: {},
  orderSku: {},
  orderAddress: {},
  tempOrderInfo: {},
  selectAddress: {},
  isCreateFirstAddress: false,
  zhaoshangPay: '',
  couponDto: {
    priceAmount: 0,
    spuPayAmountMap: {},
  },
  selectCoupon: {},
}

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_ORDER_ITEM_LIST:
      state.orderItemList = action.payload
      break
    case UPDATE_TEMP_ORDER_INFO:
      state.tempOrderInfo = action.payload
      break
    case UPDATE_APPOINTMENT_ITEM:
      state.appointmentItem = action.payload
      break
    case UPDATE_ORDER_SKU:
      state.orderSku = action.payload
      break
    case UPDATE_ORDER_ADDRESS:
      state.orderAddress = action.payload
      break
    case UPDATE_IS_CREATE_FIRST_ADDRESS:
      state.isCreateFirstAddress = action.payload
      break
    case UPDATE_SELECT_ADDRESS:
      state.selectAddress = action.payload
      break
    case UPDATE_COUPON_DTO:
      state.couponDto = action.payload
      break
    case UPDATE_SELECT_COUPON:
      state.selectCoupon = action.payload
      break
    case UPDATE_ZHAOSHANG_PAY:
      state.zhaoshangPay = action.payload
      break
    default:
      return state
  }
  return {...state}
}

export default orderReducer
