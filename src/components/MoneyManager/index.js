import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    typeOfAmount: 'INCOME',
    balanceAmount: 0,
    incomeAmount: 0,
    expenseAmount: 0,
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const filteredTransactionList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    const selectedTransaction = transactionList.filter(
      eachTransaction => eachTransaction.id === id,
    )
    const {amount, typeOfAmount} = selectedTransaction[0]

    if (typeOfAmount === 'INCOME') {
      this.setState(prevState => ({
        balanceAmount: parseInt(prevState.balanceAmount) - parseInt(amount),
        incomeAmount: parseInt(prevState.incomeAmount) - parseInt(amount),
      }))
    } else if (typeOfAmount === 'EXPENSES') {
      this.setState(prevState => ({
        balanceAmount: parseInt(prevState.balanceAmount) + parseInt(amount),
        expenseAmount: parseInt(prevState.expenseAmount) - parseInt(amount),
      }))
    }

    this.setState({
      transactionList: filteredTransactionList,
    })
  }

  onAddAmount = event => {
    event.preventDefault()
    const {title, amount, typeOfAmount, transactionList} = this.state

    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      typeOfAmount,
    }
    this.setState({
      transactionList: [...transactionList, newTransaction],
      title: '',
      amount: '',
      typeOfAmount: 'INCOME',
    })

    if (typeOfAmount === 'INCOME') {
      this.setState(prevState => ({
        balanceAmount: parseInt(prevState.balanceAmount) + parseInt(amount),
        incomeAmount: parseInt(prevState.incomeAmount) + parseInt(amount),
      }))
    } else if (typeOfAmount === 'EXPENSES') {
      this.setState(prevState => ({
        balanceAmount: parseInt(prevState.balanceAmount) - parseInt(amount),
        expenseAmount: parseInt(prevState.expenseAmount) + parseInt(amount),
      }))
    }
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  onChangingType = event => {
    this.setState({
      typeOfAmount: event.target.value,
    })
  }

  render() {
    const {
      title,
      amount,
      balanceAmount,
      incomeAmount,
      expenseAmount,
      typeOfAmount,
      transactionList,
    } = this.state

    return (
      <div className="bg-container">
        <div className="top-section">
          <h1 className="top-greeting-name">Hi, Richard</h1>
          <p className="top-para">
            Welcome back to your{' '}
            <span className="span-text">Money Manager</span>
          </p>
        </div>
        <ul>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expenseAmount={expenseAmount}
          />
        </ul>
        <div className="bottom-section">
          <form
            className="transaction-addition-container1"
            onSubmit={this.onAddAmount}
          >
            <h1 className="add-heading">Add Transaction</h1>
            <div className="label-input-container">
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                placeholder="TITLE"
                onChange={this.onChangeTitle}
                value={title}
              />
            </div>
            <div className="label-input-container">
              <label htmlFor="amount">AMOUNT</label>
              <input
                id="amount"
                placeholder="AMOUNT"
                onChange={this.onChangeAmount}
                value={amount}
              />
            </div>
            <div className="label-input-container">
              <label htmlFor="transactionType">TYPE</label>
              <select
                id="transactionType"
                onChange={this.onChangingType}
                value={typeOfAmount}
              >
                <option
                  className="option-income"
                  value={transactionTypeOptions[0].optionId}
                >
                  {transactionTypeOptions[0].displayText}
                </option>
                <option
                  className="option-expense"
                  value={transactionTypeOptions[1].optionId}
                >
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
            </div>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <div className="transaction-addition-container2">
            <h1 className="add-heading">History</h1>
            <div className="history-paras-container">
              <p className="history-paras">Title</p>
              <p className="history-paras">Amount</p>
              <p className="history-paras">Type</p>
              <p className="history-paras"> </p>
            </div>
            <ul className="history-container">
              {transactionList.map(eachTransaction => (
                <TransactionItem
                  eachTransaction={eachTransaction}
                  key={eachTransaction.id}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
