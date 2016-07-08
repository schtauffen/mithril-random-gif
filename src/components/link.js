import m from 'mithril'

class Link {
  view (ctrl, props, children) {
    return m('a', { ...props, config: m.route }, children)
  }
}

export default new Link()
