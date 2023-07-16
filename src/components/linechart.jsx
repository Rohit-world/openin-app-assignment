import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as chartjs } from "chart.js/auto";

const Linechart = ({chartdata}) => {



  const options={
    plugins:{
      legend:true,
    }
  }
  return <Line data={chartdata} options={options} />;
};

export default Linechart;
