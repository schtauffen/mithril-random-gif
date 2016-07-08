import m from 'mithril'

const Link = {}

Link.view = (ctrl, props, children) =>
  m('a', { ...props, config: m.route }, children)

export default Link
