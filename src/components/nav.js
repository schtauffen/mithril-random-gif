import m from 'mithril'
import { connect } from 'malatium'

import Link from '~/components/link'

class Nav {
  view (ctrl, { navItems = [] }, children) {
    return m('div', [
      m('ul', navItems.map(({ href, text }) => m('li', m(Link, { href }, text)))),
      children
    ])
  }
}

const selector = ({ navItems }) => ({ navItems })
export default connect(selector)(new Nav())
