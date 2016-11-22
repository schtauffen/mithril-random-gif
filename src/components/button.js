import m from 'mithril'
import stream from 'mithril/stream'
import scan from 'mithril/stream/scan'
import classNames from 'classnames'

import { component, createAction } from 'utils'
import styles from 'components/button.styl'

const Button = ({ attrs }) => {
  const { update, active } = attrs
  const toggle = createAction('TOGGLE')
  const onclick = stream()

  onclick
    .map(toggle)
    .map(update)

  const classes = active.map(a => classNames({
    [styles.button]: !a,
    [styles.button_active]: a,
  }))

  return vnode =>
    m('button', { onclick, class: classes() }, 'Toggle')
}

export default component(Button)
