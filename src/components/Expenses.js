import ExpenseItem from "./ExpenseItem"

import "./Expenses.css"

function Expenses({ items }) {
  return (
    <div class="expenses">
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
    </div>
  )
}

export default Expenses
