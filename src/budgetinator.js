/**
 * schema:
 *  { id, date: Year/Mo, adjustments: [{ account, amount }, ...], description, exempt } edit, save, add
 *  date | account-1 | account-2 | description | exempt / +spending | spending | difference
 *
 *  accounts: { id, code, description }
 *    todo: there should be a "LIAB" (liabilities) which is the sum of all negative accounts
 *
 *  todo: recurring payments, paycheck (coloration, +spending?), spending amounts
 */

function Row ({
// id,
  date,
  description,
  adjustments,
  spending,
  balances,
  reserve,
}) {
  return (
    <tr>
      <td>{ formatDate(date) }</td>
      { adjustmentColumns(adjustments) }
      <td>{ description }</td>
      { adjustmentColumns(balances) }
      <td>{ accountingFormat(spending) }</td>
      <td>{ accountingFormat(reserve) }</td>
    </tr>
  )
}

function accountingFormat (n) {
  const amount = Math.abs(n).toFixed(2);

  return n < 0
    ? `(${amount})`
    : amount
}

function adjustmentColumns (adjustments) {
  return adjustments
    .slice(0, 2)
    .map(({ amount, account }, idx, { length }) => (
      <td key={ idx } colSpan={ 2 / length }>{ accountingFormat(amount) } { account }</td>
    ))
}

const testData = {
  adjustments: [
    { // = { amount, ...accountInfo }
      amount: -100.00, // todo - filter for accounting style (100.00)
      account: 'AFFN', // from account types...
      priority: -1000, // from account types...
    },
    {
      amount: 100.00,
      account: 'CITI',
    },
  ],
  balances: [
    {
      amount: 900.00,
      account: 'AFFN', // matches adjustment accounts
      priority: -1000,
    },
    {
      amount: 0.00,
      account: 'CITI',
    },
  ],
  spending: 600.00,
  reserve: 300.00,
  priority: -1000, // for breaking ties
}

function App ({ onClick, transactions }) {
  // field for who spent? me, nay, both? (user)
  return (
    <div>
      <ul className={styles.breadcrumbs}>
        <li>2016</li>
        <li>Oct</li>
      </ul>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th colSpan="2">Adjustments</th>
            <th>Description</th>
            <th colSpan="2">Balances</th>
            <th>Spending</th>
            <th>Reserve</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10/1/2016</td>
            <td>1000.00 A</td>
            <td>(100.00) L</td>
            <td>Previous Balances</td>
            <td>1000.00 A</td>
            <td>(100.00) L</td>
            <td>600.00</td>
            <td>300.00</td>
          </tr>
          {transactions.map(transaction => <Row key={transaction.id} {...transaction}/>)}
        </tbody>
      </table>
      <div className={formStyles.html5Inputs}>
        <NumberSelector start={1} end={12} prop={toAdd.month} disabled="true" />
        <NumberSelector start={1} end={31} prop={toAdd.day} />
        <NumberSelector start={2016} end={2020} prop={toAdd.year} disabled="true" />
        <TextInput prop={toAdd.description} />
        <button className={buttonStyles.button} onClick={function () {
          onClick({
            date: {
              day: toAdd.day(),
              month: toAdd.month(),
              year: toAdd.year(),
            },
            description: toAdd.description(),
            ...testData
          })
        }}>Add</button>
      </div>
      <div>
        <div>date picker</div>
        <div>dollar input / account selector</div>
        <div>dollar input / account selector</div>
        <div>description editor</div>
        <div>icons: exempt, spending, clear, save</div>
        <div>recurrence</div>
        <div>Add year / Add quarter / month</div>
        <div>pull in recurring</div>
      </div>
      <div>
        Cog -> accounts
      </div>
    </div>
  )
}
