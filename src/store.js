import { createStore, combineReducers, applyMiddleware } from 'redux'

import * as reducers from './reducer'

const logger = store => next => action => {
  const result = next(action)
  console.log(action, store.getState())
  return result
}

const store = createStore(
    combineReducers(reducers),
    applyMiddleware(logger)
)

export default store
