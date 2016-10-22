import 'main.styl'
import m from 'mithril'

import { scan, scanMerge, component } from 'utils'

let Example = () => {
  const inc = m.prop(null)
  const dec = m.prop(null)

  const count = scanMerge([
    [inc, (total, x) => total + 1],
    [dec, (total, x) => total - 1],
  ], 0)

  count.run(console::console.log)

  return () =>
    m('div', [
      m('button', { onclick: dec }, '-'),
      m('span', count()),
      m('button', { onclick: inc }, '+'),
    ])
}
Example = component()(Example)

m.mount(document.getElementById('app'), Example)
