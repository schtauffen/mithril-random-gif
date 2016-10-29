import m from 'mithril'

import Routes from 'components/routes'

m.route.prefix('')
m.route(document.getElementById('app'), '/', Routes)
