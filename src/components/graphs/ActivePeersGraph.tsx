"use client";
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
import MonthDropdown from "../MonthDropdown";

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
        label: "Number of active peers",
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
        pointRadius: 2,
        hitRadius: 20,
        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#5DAAEE",
        pointHoverRadius: 4.5,
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    scales: {
      x: {
        grid: {
          drawTicks: false, // Disable tick marks for y-axis
          color: "#DCE3EB",
        },
        ticks: {
          padding: 15,
          color: "#7D7D7D",
          font: {
            size: 14,
            weight: 400,
            family: "roboto",
          },
        },
        border: {
          color: "#DCE3EB",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawTicks: false, // Disable tick marks for y-axis
          color: "#DCE3EB",
        },
        ticks: {
          padding: 15,
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
        border: {
          color: "#DCE3EB",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        enabled: false, // original tooltip made invisible because I have a custom tooltop created in global.css
        mode: "index", // Determines how tooltips are displayed (e.g., 'index', 'nearest', etc.)
        intersect: true, // Show tooltips even if not directly on a point
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
        external: function (context) {
          // Tooltip Element
          let tooltipEl = document.getElementById("active-peers-tooltip");

          // Create element on first render
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "active-peers-tooltip";
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
            const bodyLines = tooltipModel.body.map((item) => item.lines);
            tooltipEl.innerHTML = bodyLines.join("<br>"); // Join array elements with line breaks
          }

          // Position the tooltip above the point and center it
          const position = context.chart.canvas.getBoundingClientRect();
          const tooltipPositionX = tooltipModel.caretX; // X position of the tooltip
          const tooltipPositionY = tooltipModel.caretY; // Y position of the tooltip

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
            position.top + window.pageYOffset + tooltipPositionY - 38 + "px"; // Move up from point by 25px (tooltip height) + 13px (gap)
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
        <MonthDropdown />
      </div>
      <div className=" flex items-center mb-[5px] gap-[8px]">
        <div className="w-[10px] h-[10px] rounded-xl bg-[#0F7863]" />
        <p className="text-[12px] text-[#2B2E48] font-roboto font-[400] leading-[1.37]">
          {data.datasets[0].label}
        </p>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ActivePeersGraph;
