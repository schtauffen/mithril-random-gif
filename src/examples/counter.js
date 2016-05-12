import { Observable } from 'rx'
import Cycle from '@cycle/core'
import { h, makeDOMDriver } from '@cycle/dom'

// sources
function intent ({ DOM }) {
  const addClicks$ = DOM.select('.plus')
    .events('click')
  const subtractClicks$ = DOM.select('.minus')
    .events('click')

  return {
    addClicks$,
    subtractClicks$,
  }
}

function model ({
  addClicks$,
  subtractClicks$,
}) {
  const adds$ = addClicks$.map(e => +1)
  const subtracts$ = subtractClicks$.map(e => -1)

  return Observable.of(0)
    .merge(adds$)
    .merge(subtracts$)
    .scan((prev, curr) => prev + curr)
}

function view (state$) {
  return state$.map(n =>
    h('div', [
      h('button.minus', '-'),
      h('span', n.toString()),
      h('button.plus', '+'),
    ])
  )
}

function main (sources) {
  // could also:
  // change$s = intent(sources)
  // state$ = model(change$s)
  // vtree$ = view(state$)

  return {
    DOM: view(model(intent(sources))),
  }
}

const drivers = {
  DOM: makeDOMDriver('body'),
}

Cycle.run(main, drivers)
