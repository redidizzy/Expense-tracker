import ExpenseItem from "./ExpenseItem"

import Card from "../UI/Card"

import "./Expenses.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import { useState } from "react"

const Expenses = ({ items }) => {
  const [yearFilter, setYearFilter] = useState("2020")
  const changeYearFilterHandler = (year) => {
    setYearFilter(year)
  }
  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear() === parseInt(yearFilter)
  )
  return (
    <div>
      <ExpensesFilter
        selected={yearFilter}
        onChangeYearFilter={changeYearFilterHandler}
      />
      <Card className="expenses">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
