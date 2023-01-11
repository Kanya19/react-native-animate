import {combineReducers} from 'redux'
import FriendsReducer from './friends-reducer'
import UserReducer from './user-reducer'
import AppReducer from './app-reducer'
import OrderReducer from './order-reducer'
import WsReducer from './ws-reducer'

export default combineReducers({
  friends: FriendsReducer,
  user: UserReducer,
  app: AppReducer,
  order: OrderReducer,
  ws: WsReducer,
})
