"use client"; // Required for client-side rendering in Next.js

import React, { useEffect } from "react";
import * as d3 from "d3";
import Link from "next/link";
import RevenueStreamIcon from "../icons/RevenueStreamIcon";

// Define the type for the data points
interface DataPoint {
  name: string;
  value: number;
  thickness: number; // Define thickness for segments
  color: string;
}

// Main component
const RevenueStreamGraph = () => {
  const RevenueStreamData = [
    { name: "Potential Earning", value: 55 },
    { name: "Total Paid", value: 45 },
  ];

  useEffect(() => {
    // Sample data with varying thicknesses
    const data: DataPoint[] = [
      {
        name: RevenueStreamData[0].name,
        value: RevenueStreamData[0].value,
        thickness: 63,
        color: "#0F7863",
      },
      {
        name: RevenueStreamData[1].name,
        value: RevenueStreamData[1].value,
        thickness: 50,
        color: "#FA0C00",
      },
    ];

    // Set dimensions for the SVG container
    const width = 256;
    const height = 256;

    // Select the DOM element by ID and remove any existing SVG elements
    const svgContainer = d3.select("#doughnutChart");
    svgContainer.selectAll("*").remove(); // Clear existing content

    // Create an SVG container with viewBox for responsiveness
    const svg = svgContainer
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`) // Set viewBox for responsiveness
      .attr("preserveAspectRatio", "xMidYMid meet") // Maintain aspect ratio
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`); // Center the chart

    // Define the arc generator with corner radius
    const arc = d3
      .arc<d3.DefaultArcObject>()
      .innerRadius(64) // Set the inner radius to create a doughnut effect
      .cornerRadius(5); // Set the corner radius for rounded corners

    // Define the pie layout
    const pie = d3
      .pie<DataPoint>()
      .value((d) => d.value) // Use the 'value' property of the data
      .startAngle(0) // Set starting angle
      .endAngle(Math.PI * 2); // Set ending angle

    // Bind the data to the arcs
    const arcs = svg
      .selectAll(".arc")
      .data(pie(data)) // Transform data into arcs
      .enter()
      .append("g")
      .attr("class", "arc");

    // Draw the arcs
    arcs
      .append("path")
      .attr("d", (d) => {
        // Set the outer radius for each arc based on its corresponding thickness
        const outerRadius = d.data.thickness + 64; // Adjust outer radius based on thickness

        // Create arcData with required properties
        const arcData = {
          innerRadius: 64, // Set inner radius for the arc (doughnut hole)
          outerRadius: outerRadius, // Set outer radius based on individual thickness
          startAngle: d.startAngle, // Use the startAngle provided by the pie layout
          endAngle: d.endAngle, // Use the endAngle provided by the pie layout
        };

        return arc(arcData); // Use the arc generator with arcData
      })
      .attr("fill", (d) => d.data.color); // Set fill color from the data

    // Optional: Add a label in the center
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("font-size", 25) // Change font size here
      .attr("fill", "#000000") // Change font color here (e.g., black)
      .attr("font-family", "roboto")
      .attr("font-weight", "500")
      .text("2024"); // Customize this as needed

    // Handle window resize for responsiveness
    const handleResize = () => {
      const svgWidth = parseInt(svgContainer.style("width"));
      const svgHeight = parseInt(svgContainer.style("height"));
      svg.attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full bg-white rounded-[8px] p-[24px] pb-[57px]">
      <p className="font-roboto font-[500] text-[21px] text-[#2B2E48] leading-[1.37] tracking-1">
        Sun Apr 14 2024, 4:21 PM
      </p>
      <div className="grid grid-cols-[4.4fr_1fr_4.7fr_1fr_5.4fr] mt-[24px] items-center">
        <div>
          <p className="font-roboto font-[500] text-[21px] text-[#2B2E48] leading-[1.37] tracking-1">
            Potential Earning:
          </p>
          <p className="font-roboto font-[500] text-[40px] text-[#0F7863] leading-[1.37] tracking-1 mt-[14px]">
            $345,543
          </p>
          <p className="font-roboto font-[500] text-[14px] text-[#2B2E48] leading-[1.37] tracking-1 mt-[4px]">
            Last updated 5 sec ago.
          </p>
          <p className="font-roboto font-[500] text-[21px] text-[#2B2E48] leading-[1.37] tracking-1 mt-[24px]">
            Total Paid:
          </p>
          <p className="font-roboto font-[500] text-[40px] text-[#FA0C00] leading-[1.37] tracking-1 mt-[14px]">
            $205,543
          </p>
        </div>
        <div className="h-[193px] border-l border-dotted border-[#98B0A9]" />
        <div id="doughnutChart" className="w-[80%]"></div>
        <div className="h-[193px] border-l border-dotted border-[#98B0A9]" />
        <div>
          <p className="font-roboto font-[500] text-[21px] text-[#2B2E48] leading-[1.37] tracking-1">
            Subscribed Peers:
          </p>
          <p className="font-roboto font-[500] text-[40px] text-[#2B2E48] leading-[1.37] tracking-1 mt-[14px]">
            10,000
          </p>
          <p className="font-roboto font-[500] text-[14px] text-[#2B2E48] leading-[1.37] tracking-1 mt-[4px]">
            Last updated 5 sec ago.
          </p>
          <p className="font-roboto font-[500] text-[21px] text-[#2B2E48] leading-[1.37] tracking-1 mt-[24px]">
            Total Peers:
          </p>
          <p className="font-roboto font-[500] text-[40px] text-[#2B2E48] leading-[1.37] tracking-1 mt-[14px]">
            40,000
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="flex items-center gap-[10px] absolute left-[44%] translate-x-[-50%] top-[10px]">
          <div className="w-[27px] h-[13px] rounded-xl bg-[#0F7863]"></div>
          <p className="text-[12px] text-[#000000] font-roboto font-[400] leading-[1.92] tracking-[0.5px]">
            {`${RevenueStreamData[0].name} ${RevenueStreamData[0].value}%`}
          </p>
          <div className="w-[27px] h-[13px] rounded-xl bg-[#FA0C00]"></div>
          <p className="text-[12px] text-[#000000] font-roboto font-[400] leading-[1.92] tracking-[0.5px]">
            {`${RevenueStreamData[1].name} ${RevenueStreamData[1].value}%`}
          </p>
        </div>
        <Link
          href={""}
          className="absolute right-[0] top-[0] laptop:top-[-15px] bg-[#0F7863] rounded-[30px] py-[12px] px-[19px] flex items-center gap-[11px] text-[14px] text-[#FFFFFF] font-roboto font-[800] leading-[1.37]"
        >
          <RevenueStreamIcon />
          <p>Withdraw</p>
        </Link>
      </div>
    </div>
  );
};

export default RevenueStreamGraph;
