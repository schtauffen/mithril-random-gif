import NavLayout from './containers/nav-layout'
import Home from './containers/home'
import Loader from './containers/loader'

export default {
  '$container': NavLayout,
  '/': Home,
  '/loader': Loader
}
