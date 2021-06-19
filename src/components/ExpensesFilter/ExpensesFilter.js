import "./ExpensesFilter.css"

const ExpensesFilter = (props) => {
  const { selected } = props
  const changeYearFilterHandler = (event) => {
    const chosenYear = event.target.value
    console.log(chosenYear)
    props.onChangeYearFilter(chosenYear)
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={changeYearFilterHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
