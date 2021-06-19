import Card from "../UI/Card"

import "./Expenses.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import { useState } from "react"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

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
      <ExpensesChart expenses={filteredExpenses} />
      <Card className="expenses">
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
