import m from 'mithril'
import Provider, { flattenRoutes } from 'malatium'

import store from '~/store'
import App from '~/components/app'

const routes = {
  '$container': Provider(m, store, App),
  '/': { view: () => m('div', 'HOME') },
  '/loader': { view: () => m('.loader', 'Loading...') },
  '$default': { view: () => m('div', '404:Not Found') },
}

export default flattenRoutes(routes)
