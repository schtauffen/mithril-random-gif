import m from 'mithril'
import stream from 'mithril/stream'

import RandomGifPair from 'components/random-gif-pair'
import { component, addTag } from 'utils'

const RandomGifPairPair = ({ attrs }) => {
  const { update } = attrs
  const updatePair1 = stream()
  const updatePair2 = stream()

  updatePair1
    .map(addTag(['GIF_PAIR_PAIR', 'GIF_PAIR_PAIR_1']))
    .map(update)

  updatePair2
    .map(addTag(['GIF_PAIR_PAIR', 'GIF_PAIR_PAIR_2']))
    .map(update)

  return vnode =>
    m('div', [
      m(RandomGifPair, { update: updatePair1 }),
      m(RandomGifPair, { update: updatePair2 })
    ])
}

export default component(RandomGifPairPair)
