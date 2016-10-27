const afterUpdate = f => J => next => action => {
  next(action)
  f(J.state())
}

export { afterUpdate }
