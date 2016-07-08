import m from 'mithril'
import Provider, { flattenRoutes } from 'malatium'

import store from '~/store'
import Nav from '~/components/nav'

const routes = {
  '$container': Provider(m, store, Nav),
  '/': { view: () => m('div', 'Home') },
  '/loader': { view: () => m('.loader', 'Loading...') },
  '$default': { view: () => m('div', '404:Not Found') },
}

export default flattenRoutes(routes)
