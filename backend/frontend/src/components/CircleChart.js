import React, { useState, useEffect } from "react";
// import { Chart as ChartJS, BarElement, CategoryScale } from "chart.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BarChart = (props) => {
  const data = {
    labels: props.chart?.map((coin) => coin.name),
    datasets: [
      {
        label: "Market Cap domination",
        data: props.chart?.map((coin) => coin.quote.USD.market_cap_dominance),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(255, 99, 232)",
          "rgb(54, 262, 235)",
          "rgb(155, 205, 86)",
          "rgb(20, 99, 132)",
          "rgb(54, 145, 235)",
          "rgb(255, 205, 186)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} height={400} options={options} />
    </div>
  );
};

export default BarChart;
