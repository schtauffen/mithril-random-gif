import m from 'mithril'
import classNames from 'classnames'

export default {
  oninit (vnode) {
    this.activeClass = vnode.attrs.activeClass || 'active'

    this.getClassNames = () => ({
      className: classNames({
        [this.activeClass]: vnode.attrs.href === m.route.get()
      })
    })
  },

  oncreate: m.route.link,

  view (vnode) {
    return m('a', { ...this.getClassNames() }, vnode.children)
  },
}
