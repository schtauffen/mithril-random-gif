import m from 'mithril'
import { uuid } from 'utils'

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

const delay = (ms) => {
  const prop = m.prop()
  setTimeout(prop.bind(null, null), ms)
  return prop
}

const filterHash = {
  all       : () => fakeDatabase.todos,
  active    : () => fakeDatabase.todos.filter(t => !t.completed),
  completed : () => fakeDatabase.todos.filter(t => t.completed),
}

export const fetchTodos = (
  filter
) =>
  delay(1000)
    .map(() => {
      const fn = filterHash[filter]
      if (typeof fn !== 'function')
        throw new Error(`Unkown filter: ${filter}`)
      return fn(filter)
    })
