import ExpenseItem from "./ExpenseItem"

import Card from "../UI/Card"

import "./Expenses.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import { useState } from "react"

const Expenses = ({ items }) => {
  const [yearFilter, setYearFilter] = useState(null)
  const changeYearFilterHandler = (year) => {
    setYearFilter(yearFilter)
  }
  return (
    <div>
      <ExpensesFilter
        selected={yearFilter}
        onChangeYearFilter={changeYearFilterHandler}
      />
      <Card className="expenses">
        {items.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
