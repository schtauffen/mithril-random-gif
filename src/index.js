import styles from 'main.styl'
import m from 'mithril'

import { scan, scanMerge, component } from 'utils'

let BudgetTableHeader = () => {
  return () =>
    m('tr', [
      m('th', 'Date'),
      m('th', { colspan: 2 }, 'Adjustments'),
      m('th', 'Description'),
      m('th', { colspan: 2 }, 'Balances'),
      m('th', 'Spending'),
      m('th', 'Reserve'),
    ])
}
BudgetTableHeader = component()(BudgetTableHeader)

let BudgetRow = () => {
  const transactionDate = m.prop('10/22/2016')
  const adjustments = m.prop([
    { amount: 1000, account: 'A' },
    { amount: -100, account: 'L' },
  ])
  const description = m.prop('Previous Balances')
  const balances = m.prop([
    { amount: 1000, account: 'A' },
    { amount: -100, account: 'L' },
  ])
  const spending = m.prop(600)
  const reserve = m.prop(300)

  return () =>
    m('tr', [
      m('td', transactionDate()),
      m('td', 2),
      m('td', 3),
      m('td', description()),
      m('td', 5),
      m('td', 6),
      m('td', formatAccounting(spending())),
			m('td', formatAccounting(reserve())),
	])
}
BudgetRow = component()(BudgetRow)

let BudgetTable = () => {
  return () =>
    m('table', { class: styles.table }, [
      m('thead', m(BudgetTableHeader)),
      m('tbody', m(BudgetRow)),
    ])
}
BudgetTable = component()(BudgetTable)

m.mount(document.getElementById('app'), BudgetTable)

function formatAccounting (amount) {
  const str = amount.toFixed(2)

  return amount < 0
    ? `(${ str })`
    : str
}
