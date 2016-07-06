import m from 'mithril'

import routes from './routes'

m.route.mode = 'pathname'
m.route(document.body, '/', routes)
