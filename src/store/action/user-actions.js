import {
  UPDATE_USER_DETAIL,
  UPDATE_CHAT_FRIEND,
  UPDATE_SHOP_ID,
  UPDATE_ADMIN_DETAIL,
  UPDATE_MAIN_ADDRESS,
} from '../types'

export const updateUserDetail = (user) => ({
  type: UPDATE_USER_DETAIL,
  payload: user,
})
export const updateAdminDetail = (user) => ({
  type: UPDATE_ADMIN_DETAIL,
  payload: user,
})

export const updateChatFriend = (friend) => ({
  type: UPDATE_CHAT_FRIEND,
  payload: friend,
})

export const updateShopId = (value) => ({
  type: UPDATE_SHOP_ID,
  payload: value,
})

export const updateMainAddress = (value) => ({
  type: UPDATE_MAIN_ADDRESS,
  payload: value,
})
