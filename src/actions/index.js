import { createAction } from '@jackalope/core'
import { uuid } from 'utils'

// counter
export const add = createAction('ADD')
export const sub = createAction('SUB')
export const set = createAction('SET')

// Todos
export const addTodo = createAction('ADD_TODO', text => ({
  text,
  completed: false,
  id: uuid(),
}))

export const toggleTodo = createAction('TOGGLE_TODO')

export const removeTodo = createAction('REMOVE_TODO')

export const receiveTodos = createAction('RECEIVE_TODOS')
