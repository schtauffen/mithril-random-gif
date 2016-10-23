import m from 'mithril'

/**
 *  Example:
 *
 *    const add = m.prop(0)
 *    const sum = scan((sum, n) => sum + n, 0, add)
 */
export const scan = (reducer, seed, stream) => m.prop.combine((s) => {
  seed = reducer(seed, s())
  return seed
}, [stream])

