import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const newExpense = (props) => {
  const expenseSaveHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onExpenseAdd(expenseData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseSave={expenseSaveHandler} />
    </div>
  )
}

export default newExpense
