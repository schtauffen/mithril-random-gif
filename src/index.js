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
  return () =>
    m('tr', [
      m('td', 1),
      m('td', 2),
      m('td', 3),
      m('td', 4),
      m('td', 5),
      m('td', 6),
      m('td', 7),
			m('td', 8),
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
