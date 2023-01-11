import {
  UPDATE_USER_DETAIL,
  UPDATE_ADMIN_DETAIL,
  UPDATE_CHAT_FRIEND,
  UPDATE_SHOP_ID,
  UPDATE_MAIN_ADDRESS,
} from '../types'
import {desensitization} from '~/common/index'

const INITIAL_STATE = {
  // token:'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODc2NzA2MDgwMCIsImNyZWF0ZWQiOjE2MzgyNjEzOTAzMzEsImF1dGhvcml0eSI6W10sImV4cCI6MTYzODg2NjE5MH0.JAcGBb4ivUvL5CYbRpZJb07z_gR2Ti6kegG2g54waDi8wdfr4a9IRhbSFXVmrbzUNlOH_Gfni2Fvi0r-c05n8g',
  token: '',
  detail: {
    coin: 0,
    chatToken: '',
    point: 0,
  },
  adminDetail: {},
  userInfo: {},
  location: {},
  inviteCode: '', // 他人的邀请码
  messageEventList: [], // 已经收到过的消息弹窗事件
  registerForm: {},
  chatFriend: {},
  mainAddress: {},
  isShop: false,
  isClerk: false,
  roleList: [],
  permission: {},
  permissionArray: [],
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_USER_DETAIL:
      if (action.payload.username) {
        action.payload.phone = desensitization(action.payload.username, 4, -3)
      } else {
        action.payload.phone = ''
      }
      storage.save({
        key: 'userDetail',
        data: action.payload,
        expires: 1000 * 3600 * 24 * 7,
      })
      state.detail = action.payload
      state.isShop = action.payload.roles
        ? action.payload.roles.map((item) => item.name).indexOf('ROLE_SHOP') > -1
        : false
      state.isClerk = action.payload.roles
        ? action.payload.roles.map((item) => item.name).indexOf('ROLE_CLERK') > -1
        : false
      break
    case UPDATE_ADMIN_DETAIL:
      state.adminDetail = action.payload
      const permissionList = action.payload.adminPermissions
      let permissionArray = []
      let permission = {}

      // 如果有绑定客服，再注入websocket
      if (action.payload.msgUserId) {
        // 注入权限
        // permissionList.push({permission: 'service.session'})
        // permissionList.push({permission: 'session'})
        // permissionList.push({permission: 'service.customer'})
      }
      permissionList.map((item) => {
        permissionArray.push(item.permission)
        permission[item.permission] = true
      })
      state.permission = permission
      state.permissionArray = permissionArray

      break
    case UPDATE_CHAT_FRIEND:
      state.chatFriend = action.payload
      break
    case UPDATE_MAIN_ADDRESS:
      state.chatFriend = action.payload
      break
    case UPDATE_SHOP_ID:
      state.detail.shopId = action.payload
      break
    default:
      return state
  }
  return {...state}
}

export default userReducer
