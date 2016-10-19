import 'main.styl'
import m from 'mithril'
import f from 'flyd'

import { component } from 'utils'

// TODO - see about a new "component" workhorse for mithril 1.0.0
let Example = ({ initialCount = 0 } = {}) => {
  const container = f.stream()
  const count = f.stream(initialCount)
  const checked = f.stream(false)

  const computedStyle = container.map(getComputedStyle)
  computedStyle.map(console.log.bind(console, 'computed style:'))

  return () =>
    m('div', { config: container }, [
      m('input[type=number]', {
        value: count(),
        onchange: m.withAttr('value', count),
      }),
      m('p', `The number is: ${count()}`),
      m('input[type=checkbox]', {
        checked: checked(),
        onchange: m.withAttr('checked', checked),
      }),
      m('p', `The checkbox is: ${checked() ? 'checked' : 'not checked'}`),
    ])
}
// component can be our workhorse: injection, connect, etc
// thanks to: https://james-forbes.com/?/posts/how-i-use-mithril
Example = component(Example)

let SubviewsExample = () => {
  const count = f.stream(0)
  const checked = f.stream(false)

  const p = count.map(n => m('p', `The number is: ${n}`))

  const numberInput = count.map(n => m('input[type=number]', {
    onchange: m.withAttr('value', count),
    value: n,
  }))

  const checkbox = checked.map(val => m('input[type=checkbox]', {
    checked: val,
    onchange: m.withAttr('checked', checked),
  }))

  return f.combine(() => m('div', [
    numberInput(),
    p(),
    checkbox(),
  ]), [
    checkbox,
    numberInput,
    p
  ])
}
SubviewsExample = component(SubviewsExample)

m.mount(document.getElementById('app'), Example)
