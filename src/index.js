import m from 'mithril'
import Malatium from 'malatium'
import store from './store'
import routes from './routes'

// testing
import { debug } from './actions'
store.dispatch(debug('test', 1, 2, 3))

Malatium
  .init(m, store)
  .route(document.body, '/', routes, 'pathname')
