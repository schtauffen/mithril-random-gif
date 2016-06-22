import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createAction, handleActions } from 'redux-actions'

const logger = store => next => action {
  const result = next(action)
  console.log(action, store.getState())
  return result
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const counter = handleActions((function (actions) {
  actions[INCREMENT] = (state, action) => state + action.payload

  actions[DECREMENT] = (state, action) => state - action.payload

  return actions
})({}), 0)

const store = createStore(
    combineReducers({ counter }),
    applyMiddleware(logger)
)

export default store
