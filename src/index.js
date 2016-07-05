import m from 'mithril'
import Provider, { connect } from 'malatium'

import store from './store'
console.log(123)

m.mount(document.body, Provider(m, store, { view: () => m('div', 'lol') }))
