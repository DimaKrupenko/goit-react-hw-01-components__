import styles from './TransactionHistory.module.css'
import PropTypes from 'prop-types'; 

export const TransactionHistory = ({ transactions }) => {
    return <table className={styles.transactionHistory} >
        <thead>
    <tr>
        <th className={styles.contents}>Type</th>
        <th className={styles.contents}>Amount</th>
        <th className={styles.contents}>Currency</th>
    </tr>
  </thead>
    {transactions.map( ({ id, type, amount, currency }) => (
  <tbody key={id}>
    <tr>
        <td className={styles.type}>{type}</td>
        <td className={styles.amount}>{amount}</td>
        <td className={styles.currency}>{currency}</td>
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