import m from "mithril"
import Link from "./link"

// TODO - link paths to redux
const Nav = {}
Nav.controller = () => ({ paths: [
    {
      path: "/",
      text: "Home"
    },
    {
      path: "/loader",
      text: "Loader"
    }
  ]
})
Nav.view = ({ paths }) =>
  m("nav", paths.map(({ path, text }, idx) => m.component(Link, { path }, text)))

export default Nav
