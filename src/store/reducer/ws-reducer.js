import {
  ADD_RECEIVE_MESSAGE,
  CLEAR_TIMER,
  RESET_RECEIVE_MESSAGE,
  SET_TIMER,
  UPDATE_FRIEND,
  UPDATE_WEBSOCKET,
} from '../types'
import BackgroundTimer from 'react-native-background-timer'

const INITIAL_STATE = {
  receiveMessageList: [],
  friend: {},
  websocket: null,
  timeoutObj: null,
  serverTimeoutObj: null,
}

const wsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_FRIEND:
      state.friend = action.payload
      break
    case RESET_RECEIVE_MESSAGE:
      state.receiveMessageList = []
      state.friend = {}
      break
    case ADD_RECEIVE_MESSAGE:
      state.receiveMessageList.push(action.payload)
      break
    case UPDATE_WEBSOCKET:
      state.websocket = action.payload
      break
    case SET_TIMER:
      state.serverTimeoutObj = BackgroundTimer.setTimeout(() => {
        // 如果超过一定时间还没重置，说明后端主动断开了
        console.log('主动关闭')
        state.websocket.close() // 如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
      }, 600000) // 10 分钟
      //

      state.timeoutObj = BackgroundTimer.setTimeout(() => {
        // 这里发送一个心跳，后端收到后，返回一个心跳消息，
        // onmessage拿到返回的心跳就说明连接正常
        console.log('ping')
        state.websocket.send('ping')
      }, 30000) // 30秒

      break
    case CLEAR_TIMER:
      BackgroundTimer.clearTimeout(state.timeoutObj)
      BackgroundTimer.clearTimeout(state.serverTimeoutObj)
      break
    default:
      return state
  }
  return {...state}
}

export default wsReducer
