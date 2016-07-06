import m from 'mithril'

class App {
  controller () {
  }

  view (ctrl, props, children) {
    return m('#app', children)
  }
}

export default new App()
