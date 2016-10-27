import m from 'mithril'
import Jackalope from '@jackalope/core'

import { logger, stateStream, afterUpdate } from './middleware'

import state from './state'
import * as actions from './actions'
import model from './model'

const middleware = [
  J => next => action => {
    next(action)
    if (action.payload && action.payload.redraw) {
      m.redraw()
    }
  },
  stateStream(m.prop),
  logger
];

export default Jackalope({ state, actions, model }, middleware)
