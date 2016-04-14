import m from 'mithril'

const Link = {}
Link.controller = ({ path }) => ({ config: m.route, href: path })
Link.view = ({ config, href }, props, children) => m('a', { href, config }, children)

export default Link
