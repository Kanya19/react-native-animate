import {
  ADD_SEARCH_HISTORY,
  APP_REFRESH,
  SHOPPING_CART_REFRESH,
  UPDATE_COMMENT_STATISTICS,
  UPDATE_HORIZONTAL,
  UPDATE_HOT_SEARCH_LIST,
  UPDATE_SEARCH_HISTORY,
  UPDATE_SELECT_ADDRESS,
  UPDATE_SELECT_INVOICE,
  UPDATE_TOURIST_LIST,
  UPDATE_NEXT_PATH,
  UPDATE_CATEGORY_LIST,
} from '../types'

const INITIAL_STATE = {
  // nextPath: {path: 'Home', params: {}},
  nextPath: {path: 'Store', params: {id: 1}},
  refresh: false,
  selectInvoice: {}, // 选择的开票账号
  selectAddress: {}, // 选择的地址
  touristList: [],
  commentStatistics: {},
  shoppingCartRefresh: false,
  searchHistory: [],
  categoryList: [],
  hotSearchList: [],
  horizontal: false,
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_REFRESH:
      state.refresh = action.payload
      break
    case UPDATE_NEXT_PATH:
      state.nextPath = action.payload
      break
    case UPDATE_CATEGORY_LIST:
      state.categoryList = action.payload
      break
    case UPDATE_SELECT_INVOICE:
      state.selectInvoice = action.payload
      break
    case UPDATE_SELECT_ADDRESS:
      state.selectAddress = action.payload
      break
    case UPDATE_TOURIST_LIST:
      state.touristList = action.payload
      break
    case UPDATE_COMMENT_STATISTICS:
      state.commentStatistics = action.payload
      break
    case SHOPPING_CART_REFRESH:
      state.shoppingCartRefresh = action.payload
      break
    case UPDATE_HOT_SEARCH_LIST:
      let hotSearch = []
      action.payload.split(',').forEach((item) => {
        hotSearch.push({content: item})
      })
      state.hotSearchList = hotSearch
      break
    case ADD_SEARCH_HISTORY:
      let list = []
      state.searchHistory.forEach((item) => {
        if (item.content !== action.payload.content) {
          list.push(item)
        }
      })
      list.unshift(action.payload)
      // 只保留最近20个
      if (list.length > 20) {
        list = list.slice(0, 20)
      }
      storage.save({
        key: 'searchHistory',
        data: list,
        expires: 1000 * 3600 * 24 * 14,
      })
      state.searchHistory = list
      break
    case UPDATE_SEARCH_HISTORY:
      state.searchHistory = action.payload
      break
    case UPDATE_HORIZONTAL:
      state.horizontal = !state.horizontal
      break
    default:
      return state
  }
  return {...state}
}

export default appReducer
