import m from 'mithril'
import stream from 'mithril/stream'
import scan from 'mithril/stream/scan'

import { component, hasTag } from 'utils'

const Counter = ({ attrs }) => {
  const { update, active } = attrs
  const increment = update.map(hasTag('NEW_GIF'))
  const count = scan((c, e) => c + (active() && c >= 10 ? 2 : 1), 0, increment)

  return vnode =>
    m('div', count())
}

export default component(Counter)
