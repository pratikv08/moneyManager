// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachTransaction, deleteTransaction} = props
  const {title, amount, typeOfAmount, id} = eachTransaction

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="each-history">
      <p className="each-history-para">{title}</p>
      <p className="each-history-para">Rs {amount}</p>
      <p className="each-history-para">{typeOfAmount}</p>
      <button
        className="btn"
        data-testid="delete"
        type="button"
        onClick={onDeleteTransaction}
      >
        <img
          className="delete"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}
export default TransactionItem
