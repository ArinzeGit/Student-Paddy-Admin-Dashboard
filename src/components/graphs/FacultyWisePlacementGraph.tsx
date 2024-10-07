"use client";
import { Bar } from "react-chartjs-2";
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
import YearDropdown from "../YearDropdown";

// Register the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FacultyWisePlacementGraph = () => {
  // Data for the chart
  const data = {
    labels: [
      "eng",
      "Sos",
      "art",
      "sci",
      "law",
      "env",
      "bus",
      "mbbs",
      "nurs",
      "pharm",
      "edu",
      "rad",
    ],
    datasets: [
      {
        label: "Shortlist",
        data: [205, 160, 80, 141, 90, 105, 133, 178, 116, 156, 58, 59],
        backgroundColor: "#BEA6A1", // Bar color
        borderRadius: 13,
        borderSkipped: false,
        barPercentage: 0.9,
        categoryPercentage: 0.7,
      },
      {
        label: "Placements",
        data: [105, 72, 40, 72, 55, 55, 80, 133, 72, 105, 29, 29],
        backgroundColor: "#FFC565", // Bar color
        borderRadius: 13,
        borderSkipped: false,
        barPercentage: 0.9,
        categoryPercentage: 0.7,
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
      <div className="flex justify-between items-start mb-[8px]">
        <p className="text-[21px] text-[#2B2E48] font-roboto font-[500] leading-[1.37] tracking-1">
          Faculty wise placement
        </p>

        <div>
          <YearDropdown />
        </div>
      </div>
      <div className=" flex items-center mb-[8px] gap-[10px] text-[12px] text-[#2B2E48] font-roboto font-[400] leading-[1.9] tracking-[0.5px]">
        <div className="w-[27px] h-[13px] rounded-xl bg-[#BEA6A1]"></div>
        <p>Shortlist</p>
        <div className="w-[27px] h-[13px] rounded-xl bg-[#FFC565]"></div>
        <p>Placements</p>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default FacultyWisePlacementGraph;
