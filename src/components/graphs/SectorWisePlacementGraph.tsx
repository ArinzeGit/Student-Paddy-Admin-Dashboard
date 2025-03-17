"use client"; // Required for client-side rendering in Next.js

import React, { useEffect } from "react";
import * as d3 from "d3";
import YearDropdown from "../YearDropdown";

// Define the type for the data points
interface DataPoint {
  name: string;
  value: number;
  thickness: number; // Define thickness for segments
  color: string;
}

// Main component
const SectorWisePlacementGraph = () => {
  const SectorWisePlacementData = [
    { name: "Software & IT", value: 51 },
    { name: "Fianance", value: 18 },
    { name: "Health", value: 13 },
    { name: "Engineering", value: 8 },
    { name: "Media & Publishing", value: 5 },
    { name: "Law", value: 3 },
    { name: "Others", value: 2 },
  ];

  useEffect(() => {
    // Sample data with varying thicknesses
    const data: DataPoint[] = [
      {
        name: SectorWisePlacementData[0].name,
        value: SectorWisePlacementData[0].value,
        thickness: 60,
        color: "#50C099",
      },
      {
        name: SectorWisePlacementData[1].name,
        value: SectorWisePlacementData[1].value,
        thickness: 55,
        color: "#7B57E0",
      },
      {
        name: SectorWisePlacementData[2].name,
        value: SectorWisePlacementData[2].value,
        thickness: 50,
        color: "#5DAAEE",
      },
      {
        name: SectorWisePlacementData[3].name,
        value: SectorWisePlacementData[3].value,
        thickness: 45,
        color: "#FFC565",
      },
      {
        name: SectorWisePlacementData[4].name,
        value: SectorWisePlacementData[4].value,
        thickness: 40,
        color: "#F28768",
      },
      {
        name: SectorWisePlacementData[5].name,
        value: SectorWisePlacementData[5].value,
        thickness: 35,
        color: "#BEA6A1",
      },
      {
        name: SectorWisePlacementData[6].name,
        value: SectorWisePlacementData[6].value,
        thickness: 30,
        color: "#474747",
      },
    ];

    // Set dimensions for the SVG container
    const width = 250;
    const height = 250;

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
      .text("2022"); // Customize this as needed

    // Handle window resize for responsiveness
    const handleResize = () => {
      const svgWidth = parseInt(svgContainer.style("width"));
      const svgHeight = parseInt(svgContainer.style("height"));
      svg.attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [SectorWisePlacementData]);

  return (
    <div className="w-[100%] h-[100%] bg-white rounded-[8px] p-[24px] flex flex-col">
      <div className="flex justify-between items-start mb-[10px]">
        <p className="text-[21px] text-[#2B2E48] font-roboto font-[500] leading-[1.37] tracking-1">
          Sector wise placement
        </p>
        <YearDropdown />
      </div>
      <div className="text-[12px] text-[#2B2E48] font-roboto font-[400] leading-[1.37] tracking-[0.5px] flex flex-wrap gap-x-[10px] gap-y-[5px] mb-[7px]">
        <div className=" flex items-center mb-[5px] gap-[10px]">
          <div className="w-[27px] h-[13px] rounded-[20px] bg-[#50C099]" />
          <p>{`${SectorWisePlacementData[0].name} (${SectorWisePlacementData[0].value}%)`}</p>
        </div>
        <div className=" flex items-center mb-[5px] gap-[10px]">
          <div className="w-[27px] h-[13px] rounded-[20px] bg-[#7B57E0]" />
          <p>{`${SectorWisePlacementData[1].name} (${SectorWisePlacementData[1].value}%)`}</p>
        </div>
        <div className=" flex items-center mb-[5px] gap-[10px]">
          <div className="w-[27px] h-[13px] rounded-[20px] bg-[#5DAAEE]" />
          <p>{`${SectorWisePlacementData[2].name} (${SectorWisePlacementData[2].value}%)`}</p>
        </div>
        <div className=" flex items-center mb-[5px] gap-[10px]">
          <div className="w-[27px] h-[13px] rounded-[20px] bg-[#FFC565]" />
          <p>{`${SectorWisePlacementData[3].name} (${SectorWisePlacementData[3].value}%)`}</p>
        </div>
        <div className=" flex items-center mb-[5px] gap-[10px]">
          <div className="w-[27px] h-[13px] rounded-[20px] bg-[#F28768]" />
          <p>{`${SectorWisePlacementData[4].name} (${SectorWisePlacementData[4].value}%)`}</p>
        </div>
        <div className=" flex items-center mb-[5px] gap-[10px]">
          <div className="w-[27px] h-[13px] rounded-[20px] bg-[#BEA6A1]" />
          <p>{`${SectorWisePlacementData[5].name} (${SectorWisePlacementData[5].value}%)`}</p>
        </div>
        <div className=" flex items-center mb-[5px] gap-[10px]">
          <div className="w-[27px] h-[13px] rounded-[20px] bg-[#474747]" />
          <p>{`${SectorWisePlacementData[6].name} (${SectorWisePlacementData[6].value}%)`}</p>
        </div>
      </div>

      <div className=" grow flex">
        <div id="doughnutChart" className="w-[75%] mx-[auto] my-[auto]" />
      </div>
    </div>
  );
};

export default SectorWisePlacementGraph;
