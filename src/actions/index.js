import { createAction } from 'redux-actions'

export const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

const defaultOne = (x = 1) => x

export const actions = {
  increment: createAction(types.INCREMENT, defaultOne),
  decrement: createAction(types.DECREMENT, defaultOne),
}
