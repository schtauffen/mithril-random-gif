import m from 'mithril'
import stream from 'mithril/stream'

import RandomGif from 'components/random-gif'
import { component, addTag } from 'utils'
import styles from 'components/random-gif.styl'

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
      m('div', { class: styles.half },
        m(RandomGif, { update: updateGif1 })),
      m('div', { class: styles.half },
        m(RandomGif, { update: updateGif2 })),
    ])
}

export default component(RandomGifPair)
