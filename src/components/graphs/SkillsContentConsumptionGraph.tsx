"use client";
import { Bar } from "react-chartjs-2";
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import MonthDropdown from "../MonthDropdown";

// Register the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SkillsContentConsumptionGraph = () => {
  // Data for the chart
  const data = {
    labels: [
      "Data analysis",
      "Financial literacy",
      "Critical thinking",
      "Nursing",
      "Content creation",
      "Negotiation",
      "Graphic design",
    ],
    datasets: [
      {
        label: "Total Earned Badges",
        data: [200, 80, 70, 190, 90, 80, 40],
        backgroundColor: "#FFC565", // Bar color
        borderRadius: 13,
        borderSkipped: false,
      },
    ],
  };

  // Chart options
  const options: ChartOptions<"bar"> = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "#DCE3EB",
        },
        ticks: {
          padding: 6,
          color: "#7D7D7D",
          font: {
            size: 14,
            weight: 400,
            family: "roboto",
          },
          // Adjusted callback for tick labels
          callback: function (tickValue: string | number, index: number) {
            const label = data.labels[index].toUpperCase();
            // Split the label into two lines if it's more than one word
            return label.includes(" ") ? label.split(" ") : [label];
          },
        },
        border: {
          color: "#DCE3EB",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawTicks: false,
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
          color: "#FFFFFF",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-[100%] p-[24px] bg-white rounded-[8px]">
      <div className="flex justify-between items-start mb-[12px]">
        <p className="text-[21px] text-[#2B2E48] font-roboto font-[500] leading-[1.37] tracking-1">
          Skills content consumption
        </p>
        <div className="flex items-center">
          <button>
            <Image
              src={"/images/icon-arrow-left.png"}
              alt="Arrow left"
              width={24}
              height={24}
            />
          </button>
          <button>
            <Image
              src={"/images/icon-arrow-right.png"}
              alt="Arrow right"
              width={24}
              height={24}
              className="ml-[7px]"
            />
          </button>
          <div className="ml-[16px]">
            <MonthDropdown label="March 2023" />
          </div>
        </div>
      </div>
      <div className=" flex items-center mb-[5px] gap-[8px]">
        <div className="w-[27px] h-[13px] rounded-xl bg-[#FFC565]"></div>
        <p className="text-[12px] text-[#2B2E48] font-roboto font-[400] leading-[1.37]">
          Total Earned Badges
        </p>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SkillsContentConsumptionGraph;
