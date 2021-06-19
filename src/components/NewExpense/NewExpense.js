import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false)
  const expenseSaveHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onExpenseAdd(expenseData)
  }
  const toggleExpenseFormHandler = () => {
    setShowExpenseForm((old) => !old)
  }
  let newExpenseContent = (
    <button onClick={toggleExpenseFormHandler}>Add New Expense</button>
  )
  if (showExpenseForm) {
    newExpenseContent = (
      <ExpenseForm
        onExpenseFormCancel={toggleExpenseFormHandler}
        onExpenseSave={expenseSaveHandler}
      />
    )
  }
  return <div className="new-expense">{newExpenseContent}</div>
}

export default NewExpense
