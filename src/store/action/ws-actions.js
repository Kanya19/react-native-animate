import {
  UPDATE_FRIEND,
  RESET_RECEIVE_MESSAGE,
  ADD_RECEIVE_MESSAGE,
  UPDATE_WEBSOCKET,
  SET_TIMER,
  CLEAR_TIMER,
} from '../types'

export const updateFriend = (value) => ({
  type: UPDATE_FRIEND,
  payload: value,
})

export const resetReceiveMessage = (value) => ({
  type: RESET_RECEIVE_MESSAGE,
  payload: value,
})

export const addReceiveMessage = (value) => ({
  type: ADD_RECEIVE_MESSAGE,
  payload: value,
})

export const updateWebsocket = (value) => ({
  type: UPDATE_WEBSOCKET,
  payload: value,
})

export const setTimer = () => ({
  type: SET_TIMER,
})

export const clearTimer = () => ({
  type: CLEAR_TIMER,
})
