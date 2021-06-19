import ChartBar from "./ChartBar"

import "./Chart.css"

const Chart = (props) => {
  const { dataPoints } = props
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value)
  const maxValue = Math.max(...dataPointsValues)
  console.log(dataPoints)
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
