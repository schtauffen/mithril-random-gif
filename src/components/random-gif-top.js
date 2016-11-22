import m from 'mithril'
import stream from 'mithril/stream'

import RandomGif from 'components/random-gif'
import { component, addTag } from 'utils'

const RandomGifTop = ({ attrs }) => {
  const { update } = attrs
  const updateGif = stream()

  updateGif
    .map(addTag(['GIF_TOP']))
    .map(update)

  return vnode =>
    m(RandomGif, { update: updateGif })
}

export default component(RandomGifTop)
