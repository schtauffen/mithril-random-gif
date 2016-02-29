import m from "mithril"

import Nav from "./nav"

const NavLayout = {}
NavLayout.view = (ctrl, props, children) =>
  m("#app", [
    Nav,
    children
  ])

export default NavLayout
