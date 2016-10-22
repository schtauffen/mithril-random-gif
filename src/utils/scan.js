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

/**
 *  Example:
 *
 *    const add = m.prop(0)
 *    const sub = m.prop(0)
 *    const mult = m.prop(1)
 *
 *    const res = scanMerge([
 *      [add, (sum, n) => sum + n],
 *      [sub, (sum, n) => sum - n],
 *      [mult, (sum, n) => sum * n],
 *    ], 0)
 */
export const scanMerge = (pairs, seed) => {
  const streams = pairs.map(p => p[0])

  return m.prop.combine((...args) => {
    const changed = args.pop()

    pairs.forEach((pair, p) => {
      const idx = changed.indexOf(pair[0])
      if (idx !== -1) {
        seed = pair[1](seed, changed[idx]())
      }
    })

    return seed
  }, streams)
}
