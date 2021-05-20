import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxValue = Math.max(...valueArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            label={dataPoint.label}
            key={dataPoint.label}
            maxValue={totalMaxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
