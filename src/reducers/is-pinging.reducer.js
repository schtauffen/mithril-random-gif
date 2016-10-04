import { handleActions } from 'redux-actions'

import { ping, pong } from '~/actions'

const actions = {}

actions[ping.toString()] = () => true
actions[pong.toString()] = () => false

export const isPinging = handleActions(actions, false)
