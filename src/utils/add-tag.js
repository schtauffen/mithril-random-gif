export const addTag = tag => action =>
  ({ ...action, tags: [].concat(tag).concat(action.tags) })
