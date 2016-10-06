import 'rxjs'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

import * as epics from '~/epics'
import * as reducers from '~/reducers'

const epicsList = Object.keys(epics).map(key => epics[key])
const epicMiddleware = createEpicMiddleware(combineEpics(...epicsList))

export default function store () {
  return createStore(
    combineReducers(reducers),
    applyMiddleware(epicMiddleware)
  )
}
