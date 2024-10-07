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
  ChartOptions,
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

  const options: ChartOptions<"line"> = {
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
      <div className="flex justify-between items-center mb-[16px]">
        <div className=" flex items-center gap-[20px]">
          <p className="text-[21px] text-[#31394D] font-roboto font-[500] leading-[1.37] tracking-1">
            University Peer Growth
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="w-[27px] h-[13px] rounded-xl bg-[#E5E9F2]"></div>
            <p className="text-[12px] text-[#000000] font-roboto font-[400] leading-[1.92]">
              {data.datasets[0].label}
            </p>
            <div className="w-[27px] h-[13px] rounded-xl bg-[#4072EE]"></div>
            <p className="text-[12px] text-[#000000] font-roboto font-[400] leading-[1.92]">
              {data.datasets[1].label}
            </p>
          </div>
        </div>
        <div>
          <span className="text-[#748AA1] text-[14px] font-roboto font-[400] leading[1.72] mr-[12px]">
            from
          </span>
          <button className="mr-[12px]">
            <span className="text-[#31394D] text-[14px] font-roboto font-[400] leading[1.72] mr-[12px]">
              August 2018
            </span>
            <Image
              src={"/images/icon-triangle-down.png"}
              alt="Dropdown"
              width={9.5}
              height={9.5}
              className="inline-block ml-[4px]"
            />
          </button>
          <span className="text-[#748AA1] text-[14px] font-roboto font-[400] leading[1.72] mr-[12px]">
            to
          </span>
          <button className="mr-[12px]">
            <span className="text-[#31394D] text-[14px] font-roboto font-[400] leading[1.72] mr-[12px]">
              May 2019
            </span>
            <Image
              src={"/images/icon-triangle-down.png"}
              alt="Dropdown"
              width={9.5}
              height={9.5}
              className="inline-block ml-[4px]"
            />
          </button>
        </div>
      </div>

      <Line data={data} options={options} />
    </div>
  );
};

export default UniversityPeerGrowthGraph;
