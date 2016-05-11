import 'babel-polyfill'
import csp from 'js-csp'
window.csp = csp

function noop () {}

// el || selector (type === string)
function firehose (el, eventName) {
  const ch = csp.chan(csp.buffers.dropping(1))
  el.addEventListener(eventName, e => {
    csp.putAsync(ch, e, noop)
  })
  return ch
}

/*
const moves = firehose(document.body, 'mousemove')
let s = 0
function showLocation ({ x, y }) {
  show(`${x}:${y} - ${++s}`)
}

csp.go(function * () {
  for (;;) {
    // on start
    const finishRender = csp.chan()
    let event = yield csp.take(moves)
    showLocation(event)

    for (;;) {
      // ticks
      const { value } = yield csp.alts([moves, csp.timeout(50)])

      if (value === csp.CLOSED) {
        show('STOP')
        break
      }
      event = value
      showLocation(event)

      // block future ticks until raf timeout
      window.requestAnimationFrame(() => csp.putAsync(finishRender, {}))
      yield csp.take(finishRender)
    }
  }
})
/*/
// const { pub, sub, unsub } = csp.operations

function addButton (text) {
  let button = document.createElement('button')
  button.className = text
  button.textContent = text.toUpperCase()
  document.body.appendChild(button)
}
addButton('a')
addButton('b')

const textarea = document.createElement('textarea')
document.body.appendChild(textarea)

const change = firehose(textarea, 'change')
// const clicks = firehose(document.body, 'click')

csp.go(function * () {
  for (;;) {
    const event = yield csp.take(change)
    console.log(event)
  }
})
//* /
