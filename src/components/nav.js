import m from 'mithril'
import { connect } from 'malatium'

import Link from '~/components/link'

function navLinks ({ href, text }) {
  return m('li', m(Link, { href }, text))
}

const Nav = {}

Nav.view = (ctrl, { state = [] }, children) =>
  m('#app', [
    m('ul', state.map(navLinks)),
    children,
  ])

export default connect('nav.items')(Nav)
