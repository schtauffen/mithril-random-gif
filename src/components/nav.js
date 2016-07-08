import m from 'mithril'
import { connect } from 'malatium'

import Link from '~/components/link'

const Nav = {}

Nav.view = (ctrl, { navItems = [] }, children) =>
  m('#app', [
    m('ul', navItems.map(({ href, text }) => m('li', m(Link, { href }, text)))),
    children,
  ])

export default connect('navItems')(Nav)
