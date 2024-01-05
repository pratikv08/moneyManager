// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expenseAmount} = props

  return (
    <>
      <li className="eachDetails mr">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="money-details-img"
          alt="balance"
        />
        <div className="balance-money-container">
          <p className="balance-para">Your Balance</p>
          <p className="balance" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </li>
      <li className="eachDetails mr ml skyblue">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="money-details-img"
          alt="income"
        />
        <div className="balance-money-container">
          <p className="balance-para">Your Income</p>
          <p className="balance" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </li>
      <li className="eachDetails ml purple">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="money-details-img"
          alt="expenses"
        />
        <div className="balance-money-container">
          <p className="balance-para">Your Expenses</p>
          <p className="balance" data-testid="expensesAmount">
            Rs {expenseAmount}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
