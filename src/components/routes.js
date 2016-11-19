import m from 'mithril'
import scan from 'mithril/stream/scan'
import scanMerge from 'mithril/stream/scan-merge'

import TodoApp from 'components/todo-app'

const ScanMerge = {
  oninit () {
    this.increment = m.prop()
    this.decrement = m.prop()

    this.count = scanMerge([
      [this.increment, (sum, e) => sum + 1],
      [this.decrement, (sum, e) => sum - 1],
    ], 0)

    window.count = this.count
  },

  view () {
    return m('div', [
      m('button', { onclick: this.decrement }, '-'),
      m('span', this.count()),
      m('button', { onclick: this.increment }, '+'),
    ])
  },
}

const Scan = {
  oninit () {
    this.increment = m.prop()

    this.count = scan((sum, e) => sum + 1, 0, this.increment)
  },

  view () {
    return m('button', { onclick: this.increment }, this.count())
  },
}

export default {
  '/': TodoApp,
  '/scan-merge': {
    view () { return m('div', [ m(ScanMerge), m(Scan) ]) } },
  '/:filter': TodoApp,
}
