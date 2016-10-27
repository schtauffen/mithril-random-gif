const stateStream = stream => J => {
  J.state$ = stream()

  return next => action => {
    next(action)
    J.state$(J.state())
  }
}

export { stateStream }
