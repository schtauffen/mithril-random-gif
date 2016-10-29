import Jackalope from '@jackalope/core'

const ifNumber = fn => n => {
  if (typeof n === 'number') fn(n)
}

const model = {
  count: 0,
  todos: [],
}

model.present = Jackalope.handleActions({
  ADD: ifNumber(n => model.count += n),
  SUB: ifNumber(n => model.count -= n),
  SET: ifNumber(n => model.count = n),
  RECEIVE_TODOS: todos => model.todos = todos, // normalize?
})

export default model
