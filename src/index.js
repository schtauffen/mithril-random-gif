/*
import m from 'mithril'
import Routes from 'components/routes'

m.route.prefix('')
m.route(document.getElementById('app'), '/', Routes)
/*/

import m from 'mithril/hyperscript'
import { render } from 'mithril/render'

render(document.querySelector('#app'), 'Hello World')
//*/
