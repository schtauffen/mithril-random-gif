export const component = f => ({
  oninit (vnode) {
    vnode.state.view = f(vnode)
  },

  view (vnode) {
    return vnode.state.view(vnode)
  },
})
