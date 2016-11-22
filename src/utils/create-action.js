export const createAction = tag => data =>
  ({ tags: [].concat(tag), data })
