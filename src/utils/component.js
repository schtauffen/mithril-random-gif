export const component = (hooks = {}) => f => Object.assign(Object.create(hooks), {
  oninit (vnode) {
    const { attrs, children } = vnode

    if (hooks.oninit) {
      hooks.oninit(vnode)
    }

    vnode.state.view = f({ ...attrs, children, vnode })
  },

  view (vnode) {
    return vnode.state.view()
  },
})
