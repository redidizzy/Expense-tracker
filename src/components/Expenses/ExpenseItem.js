import { useState } from "react"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"

import "./ExpenseItem.css"

const ExpenseItem = (props) => {
  const { title, date, amount } = props

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
