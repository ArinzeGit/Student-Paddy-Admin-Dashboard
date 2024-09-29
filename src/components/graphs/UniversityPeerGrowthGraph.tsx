"use client";
import React from "react";
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UniversityPeerGrowthGraph = () => {
  const data = {
    labels: [
      "Aug 2018",
      "Sep 2018",
      "Oct 2018",
      "Nov 2018",
      "Dec 2018",
      "Jan 2019",
      "Feb 2019",
      "Mar 2019",
      "Apr 2019",
      "May 2019",
    ],
    datasets: [
      {
        label: "Graduate",
        data: [1300, 1200, 1350, 1100, 1680, 1300, 1750, 1620, 1750, 1260],
        borderColor: "#E5E9F2",
        backgroundColor: "#E5E9F2",
        fill: false,
        tension: 0.4, // adds smooth curves
        borderWidth: 2,
        pointRadius: 2,
        pointBorderWidth: 1,
        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#4072EE",
        pointHoverRadius: 10,
        pointHoverBorderWidth: 4,
        pointStyle: "rectRounded",
        hitRadius: 20,
      },
      {
        label: "Undergraduate",
        data: [800, 1300, 950, 1750, 1400, 1745, 1270, 1700, 2040, 1450],
        borderColor: "#4072EE",
        backgroundColor: "#4072EE",
        fill: false,
        tension: 0.4, // adds smooth curves
        borderWidth: 2,
        pointRadius: 2,
        pointBorderWidth: 1,
        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#4072EE",
        pointHoverRadius: 10,
        pointHoverBorderWidth: 4,
        pointStyle: "rectRounded",
        hitRadius: 20,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#748AA1",
          font: {
            size: 14,
            weight: 400,
            family: "roboto",
          },
        },
      },

      y: {
        beginAtZero: true,
        grid: {
          color: "#EBEDF4",
          drawBorder: false,
        },
        ticks: {
          color: "#7D7D7D",
          font: {
            size: 14,
            weight: 400,
            family: "roboto",
          },
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        enabled: false, // Custom tooltip is being used
        mode: "nearest", // Each dataset shows its own tooltip
        intersect: true, // Tooltip shows only when directly over a point
        backgroundColor: "#5DAAEE", // Tooltip background color
        bodyColor: "#FFFFFF", // Tooltip text color
        padding: 4, // Padding inside the tooltip
        callbacks: {
          title: () => {
            return "";
          },
          label: (tooltipItem: TooltipItem<"line">) => {
            // Return the full number without abbreviation
            const value = tooltipItem.raw as number; // Explicit type assertion
            return value.toString(); // Converts the number to a string for display
          },
        },
        external: function (context) {
          // Tooltip Element
          let tooltipEl = document.getElementById("uni-peer-growth-tooltip");

          // Create element on first render
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "uni-peer-growth-tooltip";
            document.body.appendChild(tooltipEl);
          }

          // Hide if no tooltip
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = "0";
            return;
          }

          // Set Text
          if (tooltipModel.body) {
            const bodyLines = tooltipModel.body.map((item) =>
              item.lines.join("")
            );
            tooltipEl.innerHTML = bodyLines.join("<br>");
          }

          // Position the tooltip above the point and center it
          const position = context.chart.canvas.getBoundingClientRect();
          const tooltipPositionX = tooltipModel.caretX;
          const tooltipPositionY = tooltipModel.caretY;

          tooltipEl.style.opacity = "1";

          // Calculate the tooltip's width for proper centering
          const tooltipWidth = tooltipEl.offsetWidth;

          // Position it so that it is centered above the point
          tooltipEl.style.left =
            position.left +
            window.pageXOffset +
            tooltipPositionX -
            tooltipWidth / 2 +
            "px";
          tooltipEl.style.top =
            position.top + window.pageYOffset + tooltipPositionY - 80 + "px";
        },
      },
    },
  };

  return (
    <div className="w-[100%] p-[24px] bg-white rounded-[8px]">
      <div className="flex justify-between items-start mb-[12px]">
        <p className="text-[21px] text-[#31394D] font-roboto font-[500] leading-[1.37] tracking-1">
          University Peer Growth
        </p>
        <button className="bg-[#F1F3F4] rounded-[4px] px-[3px] py-[0]">
          <span className="text-[#2B2E48] text-[12px] font-roboto font-[400] leading[1.33] ml-[12px]">
            Month
          </span>
          <Image
            src={"/images/icon-month-dropdown.png"}
            alt="Month dropdown"
            width={16}
            height={16}
            className="inline-block ml-[4px]"
          />
        </button>
      </div>
      <div className=" flex items-center mb-[5px] gap-[8px]">
        <div className="w-[10px] h-[10px] rounded-xl bg-[#0F7863]"></div>
        <p className="text-[12px] text-[#2B2E48] font-roboto font-[400] leading-[1.37]">
          Number of active peers
        </p>
      </div>{" "}
      <Line data={data} options={options} />
    </div>
  );
};

export default UniversityPeerGrowthGraph;
