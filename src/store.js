import { createStore, combineReducers, applyMiddleware } from 'redux'
import { handleActions } from 'redux-actions'
import { types, actions } from './actions'

const logger = store => next => action => {
  const result = next(action)
  console.log(action, store.getState())
  return result
}

const counter = handleActions((function (actions) {
  actions[types.INCREMENT] = (state, action) => state + action.payload

  actions[types.DECREMENT] = (state, action) => state - action.payload

  return actions
})({}), 0)

const store = createStore(
    combineReducers({ counter }),
    applyMiddleware(logger)
)

export default store
