import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";



const Chart = (props)=>{
    console.log(props.dataPoints);
    const expenseValue = props.dataPoints.map((value)=>{
        console.log(value.value);
        return value.value;
    });
    console.log(expenseValue);
    const maxValue = Math.max(...expenseValue);
    console.log(maxValue);
    

    return (
        <div className="chart">
            {
                props.dataPoints.map((dataPoint)=>{
                    return <ChartBar
                    key={dataPoint.label} 
                    value={dataPoint.value}
                    maxValue= {maxValue}
                    label={dataPoint.label}>
                    </ChartBar>
                }
            )}
        </div>
    );

}


export default Chart;