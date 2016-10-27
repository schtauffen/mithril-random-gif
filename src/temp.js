import { createAction } from 'redux-actions'
import { uuid } from '../utilities'

const transducer = text => ({
  id: uuid(),
  text
})

export const addTodo = createAction('ADD_TODO', transducer)
addTodo.TYPE = addTodo.toString()



import { createAction } from 'redux-actions'

import * as api from '../api'
import { toPayload } from '../utilities'

export const receiveTodos = createAction('RECEIVE_TODOS', toPayload(['filter', 'response']))
receiveTodos.TYPE = receiveTodos.toString()

export const fetchTodos = filter =>
  api.fetchTodos(filter).then(response =>
    receiveTodos(filter, response))



import { uuid } from './utilities'

const fakeDatabase = {
  todos: [
    {
      id: uuid(),
      text: 'hey',
      completed: true,
    }, {
      id: uuid(),
      text: 'ho',
      completed: true,
    }, {
      id: uuid(),
      text: 'let\'s go',
      completed: false,
    },
  ]
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

const filterHash = {
  all       : () => fakeDatabase.todos,
  active    : () => fakeDatabase.todos.filter(t => !t.completed),
  completed : () => fakeDatabase.todos.filter(t => t.completed),
}

export const fetchTodos = (
  filter
) =>
  delay(500)
    .then(() => {
      const fn = filterHash[filter]
      if (typeof fn !== 'function')
        throw new Error(`Unkown filter: ${filter}`)
      return fn(filter)
    })
