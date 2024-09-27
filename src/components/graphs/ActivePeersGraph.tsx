"use client";
import Image from "next/image";
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
  ChartOptions,
  TooltipItem,
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
        label: "Line graph",
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
        pointRadius: 0,
        pointHoverRadius: 5,
        hitRadius: 20,
        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#5DAAEE",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
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
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        enabled: true, // Enable or disable the tooltip
        mode: "index", // Determines how tooltips are displayed (e.g., 'index', 'nearest', etc.)
        intersect: false, // Show tooltips even if not directly on a point
        backgroundColor: "#5DAAEE", // Background color of the tooltip
        bodyColor: "#FFFFFF", // Body text color
        padding: 4, // Padding inside the tooltip
        callbacks: {
          title: () => {
            return "";
          },

          label: (tooltipItem: TooltipItem<"line">) => {
            // Use TooltipItem from Chart.js
            const value = tooltipItem.raw as unknown as number; // Use type assertion to number
            return value >= 1000 ? value / 1000 + "k" : value.toString();
          },
        },
      },
    },
  };

  return (
    <div className="w-[100%] p-[24px] bg-white rounded-[8px]">
      <div className="flex justify-between items-start mb-[12px]">
        <p className="text-[21px] text-[#2B2E48] font-roboto font-[500] leading-[1.37] tracking-1">
          Active peers
        </p>
        <button className="bg-[#F1F3F4] rounded-[4px] px-[3px]">
          <span className="text-[#2B2E48] text-[12px] leading[1.37] ml-[8px]">
            Month
          </span>
          <Image
            src={"/images/icon-month-dropdown.png"}
            alt="Month dropdown"
            width={16}
            height={16}
            className="inline-block ml-[2px]"
          />
        </button>
      </div>
      <div className=" w-[76px] flex justify-between items-center mb-[22px]">
        <div className="w-[10px] h-[10px] rounded-xl bg-[#0F7863]"></div>
        <p className="text-[12px] text-[#2B2E48] font-roboto font-[400] leading-[1.37]">
          Line graph
        </p>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ActivePeersGraph;
