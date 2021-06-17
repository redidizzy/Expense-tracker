import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"

import "./ExpenseItem.css"

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div class="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
