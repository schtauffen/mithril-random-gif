import m from 'mithril'
import stream from 'mithril/stream'

import RandomGif from 'components/random-gif'
import { component, addTag } from 'utils'

const RandomGifPair = ({ attrs }) => {
  const { update } = attrs
  const updateGif1 = stream()
  const updateGif2 = stream()

  updateGif1
    .map(addTag(['GIF_PAIR', 'GIF_PAIR_1']))
    .map(update)

  updateGif2
    .map(addTag(['GIF_PAIR', 'GIF_PAIR_2']))
    .map(update)

  return vnode =>
    m('div', [
      m(RandomGif, { update: updateGif1 }),
      m(RandomGif, { update: updateGif2 })
    ])
}

export default component(RandomGifPair)
