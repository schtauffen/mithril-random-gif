import m from 'mithril'
import stream from 'mithril/stream'
import scan from 'mithril/stream/scan'

import { component, hasTag } from 'utils'
import Counter from 'components/counter'
import Button from 'components/button'
import RandomGifTop from 'components/random-gif-top'
import RandomGifPair from 'components/random-gif-pair'
import RandomGifPairPair from 'components/random-gif-pair-pair'

const Root = component(vnode => {
  const update = stream()
  const toggle = update.map(hasTag('TOGGLE'))
  const active = scan(seed => !seed, false, toggle)

  toggle.map(log)
  update.map(a => a.tags).map(log)

  return vnode =>
    m('div', [
      m(Counter, { update, active }),
      m(Button, { update, active }),
      m(RandomGifTop, { update }),
      m(RandomGifPair, { update }),
      m(RandomGifPairPair, { update }),
    ])
})

m.mount(document.getElementById('app'), Root)
