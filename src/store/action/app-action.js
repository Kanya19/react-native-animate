import {
  ADD_SEARCH_HISTORY,
  APP_REFRESH,
  SHOPPING_CART_REFRESH,
  UPDATE_COMMENT_STATISTICS,
  UPDATE_HORIZONTAL,
  UPDATE_HOT_SEARCH_LIST,
  UPDATE_SEARCH_HISTORY,
  UPDATE_SELECT_INVOICE,
  UPDATE_NEXT_PATH,
  UPDATE_CATEGORY_LIST,
} from '../types'

export const setRefresh = (value) => ({
  type: APP_REFRESH,
  payload: value,
})
export const updateNextPath = (value) => ({
  type: UPDATE_NEXT_PATH,
  payload: value,
})
export const updateSelectInvoice = (value) => ({
  type: UPDATE_SELECT_INVOICE,
  payload: value,
})
export const updateCommentStatistics = (value) => ({
  type: UPDATE_COMMENT_STATISTICS,
  payload: value,
})

export const updateShoppingCartRefresh = (value) => ({
  type: SHOPPING_CART_REFRESH,
  payload: value,
})
export const updateHotSearchList = (value) => ({
  type: UPDATE_HOT_SEARCH_LIST,
  payload: value,
})
export const updateCategoryList = (value) => ({
  type: UPDATE_CATEGORY_LIST,
  payload: value,
})
export const addSearchHistory = (value) => ({
  type: ADD_SEARCH_HISTORY,
  payload: value,
})
export const updateSearchHistory = (value) => ({
  type: UPDATE_SEARCH_HISTORY,
  payload: value,
})
export const updateHorizontal = (value) => ({
  type: UPDATE_HORIZONTAL,
  payload: value,
})
