import m from 'mithril'
import Provider, { connect } from 'malatium'

import store from './store'

m.mount(document.body, Provider(m, store, { view: () => m('div', 'lol') }))
