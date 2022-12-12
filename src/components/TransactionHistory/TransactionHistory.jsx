import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types'; 

export const TransactionHistory = ({ transactions }) => {
    return <table className={css.transactionHistory} >
        <thead>
    <tr>
        <th className={css.contents}>Type</th>
        <th className={css.contents}>Amount</th>
        <th className={css.contents}>Currency</th>
    </tr>
  </thead>
    {transactions.map( ({ id, type, amount, currency }) => (
  <tbody key={id}>
    <tr>
        <td className={css.type}>{type}</td>
        <td className={css.amount}>{amount}</td>
        <td className={css.currency}>{currency}</td>
    </tr>
  </tbody>
))}
</table>
}

TransactionHistory.prototype = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.number.isRequired
}