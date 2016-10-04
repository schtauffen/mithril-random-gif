import { ping, pong } from '~/actions'

export function pingEpic (action$) {
  return action$
    .ofType(ping.toString())
    .delay(1000)
    .mapTo(pong())
}
