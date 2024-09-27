"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  LineElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ActivePeersGraph = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Arbitrary Data",
        data: [
          600, 800, 500, 9000, 1000, 900, 400, 28000, 20000, 42000, 7500, 30000,
        ],
        backgroundColor: (ctx: any) => {
          const chart = ctx.chart;
          const { ctx: chartCtx, chartArea } = chart;
          if (!chartArea) return null; // Wait until chart renders

          const gradient = chartCtx.createLinearGradient(
            0,
            0,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "#50C099");
          gradient.addColorStop(1, "rgba(80, 192, 153, 0)");
          return gradient;
        },
        borderColor: "#50C099",
        borderWidth: 1,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: "#7D7D7D",
          font: {
            size: 14,
            weight: 400,
            family: "roboto",
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#7D7D7D",
          font: {
            size: 14,
            weight: 400,
            family: "roboto",
          },
          callback: (value: string | number) => {
            if (typeof value === "number" && value >= 1000) {
              return value / 1000 + "k";
            }
            return value;
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ActivePeersGraph;
