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
      <ExpensesFilter onChangeYearFilter={changeYearFilterHandler} />
      <Card className="expenses">
        <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={items[3].title}
          amount={items[3].amount}
          date={items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  )
}

export default Expenses
