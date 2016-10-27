const logger = J => next => action => {
  console.group(action.type)
  console.log('%cpayload:', 'color:blue', action.payload)
  next(action)
  console.log('%cafter:', 'color:green', J.state())
  console.groupEnd(action.type)
}

export { logger }
