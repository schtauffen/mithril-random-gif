import m from 'mithril'

import J from 'jack'
import Link from 'components/link'
import { fetchTodos } from 'api'

const TodoApp = {
  oninit ({ attrs }) {
    this.filter = m.prop()
    this.fetch(attrs.filter)
  },

  onupdate ({ attrs }) {
    this.fetch(attrs.filter)
  },

  onbeforeupdate ({ attrs }, prev) {
    return true
  },

  fetch (filter = 'all') {
    if (filter === this.filter()) return

    this.filter(filter)

    fetchTodos(filter)
      ['fantasy-land/map'](J.actions.receiveTodos)
      .catch(console::console.error)
  },

  view ({ attrs }) {
    return m('div', [
      m(Link, { href: '/' }, 'Home'),
      m(Link, { href: '/foo' }, 'Bar'),
    ])
  }
}

export default TodoApp
