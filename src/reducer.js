import { handleActions } from 'redux-actions'
import { types } from './actions'

export const counter = handleActions((function (actions) {
  actions[types.INCREMENT] = (state, action) => state + action.payload

  actions[types.DECREMENT] = (state, action) => state - action.payload

  return actions
})({}), 0)
