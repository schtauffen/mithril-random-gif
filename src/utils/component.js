const view = v => v()

export const component = controller => ({
  controller,
  view,
})
