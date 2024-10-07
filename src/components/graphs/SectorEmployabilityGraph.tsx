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

const SectorEmployabilityGraph = () => {
  // Data for the chart
  const data = {
    labels: [
      "Software & IT",
      "Finance",
      "Health",
      "Engineering",
      "Media & pub",
      "Law",
      "Others",
    ],
    datasets: [
      {
        label: "Interviews",
        data: [195, 85, 75, 195, 85, 70, 40],
        backgroundColor: "#F28768", // Bar color
        borderRadius: 13,
        borderSkipped: false,
        barPercentage: 0.9,
        categoryPercentage: 0.4,
      },
      {
        label: "Offers",
        data: [105, 45, 35, 105, 50, 35, 20],
        backgroundColor: "#5DAAEE", // Bar color
        borderRadius: 13,
        borderSkipped: false,
        barPercentage: 0.9,
        categoryPercentage: 0.4,
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
          Sector employability
        </p>

        <div>
          <YearDropdown />
        </div>
      </div>
      <div className=" flex items-center mb-[8px] gap-[10px] text-[12px] text-[#2B2E48] font-roboto font-[400] leading-[1.9] tracking-[0.5px]">
        <div className="w-[27px] h-[13px] rounded-xl bg-[#F28768]"></div>
        <p>{data.datasets[0].label}</p>
        <div className="w-[27px] h-[13px] rounded-xl bg-[#5DAAEE]"></div>
        <p>{data.datasets[1].label}</p>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SectorEmployabilityGraph;
