import "./ChartBar.css"

const ChartBar = (props) => {
  const { value, max, label } = props
  let barFillHeight = "0%"

  if (max > 0) {
    barFillHeight = Math.round((value / max) * 100) + "%"
    console.log(label, value, max, barFillHeight)
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  )
}

export default ChartBar
