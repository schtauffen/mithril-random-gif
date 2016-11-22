import m from 'mithril'
import stream from 'mithril/stream'

import { component, createAction, addTag } from 'utils'
import styles from './random-gif.styl'

const url = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'
const loadingSrc = 'loading.gif'

export default component(({ attrs }) => {
  const { update } = attrs

  const src = stream()
  const tag = stream()
  const clicks = stream()
  const newGifAction = createAction('NEW_GIF')

  const getImage = () => {
    src(loadingSrc)
    m.request(url + (tag() ? `&tag=${tag()}` : ''))
      .then(response => response.data.image_url)
      .then(src)
      .then(newGifAction)
      .then(update)
  }

  return vnode =>
    m('div', [
      src()
        ? m('img', { class: styles.image, src: src() })
        : m('div', { class: styles.image }),
      m('div', [
        m('input[type=text][placeholder=tag]', {
          onchange: m.withAttr('value', tag),
          value: tag(),
        }),
        m('button', { onclick: getImage }, 'Get')
      ])
    ])
})
