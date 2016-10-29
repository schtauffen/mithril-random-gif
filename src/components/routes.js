import TodoApp from 'components/todo-app'

export default {
  '/': TodoApp,
  '/:filter': TodoApp,
}
