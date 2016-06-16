import m from 'mithril'
import R from 'ramda'
import { createStore, applyMiddleware, bindActionCreators, combineReducers } from 'redux'
import { createAction, handleActions } from 'redux-actions'
import Provider, { connect } from 'malatium'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const defaultOne = (x = 1) => x
const increment = createAction(INCREMENT, defaultOne)
const decrement = createAction(DECREMENT, defaultOne)

const counter = (function (actions) {
	actions[INCREMENT] = (state, action) => state + action.payload
	actions[DECREMENT] = (state, action) => state - action.payload
	return handleActions(actions, 0)
})({})

const logger = store => next => action => {
	const { getState } = store
	const oldState = getState()
	const result = next(action)
	const newState = getState()
	console.log(action, oldState, newState)
	return result
}

const reducer = combineReducers({ counter })

const store = createStore(
	reducer,
	reducer(undefined, {}),
	applyMiddleware(logger)
)

class Counter {
	view (ctrl, props, children) {
		const { counter, increment, decrement } = props
		return m('div', [
			m('button', { onclick: decrement(1) }, '-'),
			m('span', String(counter)),
			m('button', { onclick: increment(1) }, '+')
		])
	}
}
const actions = { increment, decrement }
const component = connect('counter', actions)(new Counter)

m.mount(document.body, Provider(m, store, component))
