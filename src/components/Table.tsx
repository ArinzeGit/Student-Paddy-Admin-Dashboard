"use client";
import React from "react";
import MonthDropdown from "./MonthDropdown";
import SearchBar from "./SearchBar";

interface TableProps {
  title: string;
  columns: string[]; // Column headers
  data: { [key: string]: any }[]; // Array of objects representing rows
  withMonthToggle: boolean;
  withSearch: boolean;
  onRowClick?: (rowData: any) => void;
}

const Table: React.FC<TableProps> = ({
  title,
  columns,
  data,
  withMonthToggle,
  withSearch,
  onRowClick,
}) => {
  return (
    <div className="overflow-x-auto bg-white p-[24px] pt-[4px] rounded-[8px] w-[100%]">
      <div className="flex items-center justify-between">
        <h2 className="text-[21px] text-[#2B2E48] font-[500] font-roboto leading-[1.37] tracking-1 my-[20px]">
          {title}
        </h2>
        {withMonthToggle && <MonthDropdown label="March 2023" />}
        {withSearch && <SearchBar />}
      </div>

      <table className="min-w-[100%]">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="py-[15px] px-[14px] bg-[#F1F3F4] text-left text-[14px] text-[#7D7D7D] font-[400] font-roboto leading-[1.43]"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${onRowClick ? "cursor-pointer" : ""}`}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="p-[14px] border-b border-[#DCDCDD] text-[16px] text-[#2B2E48] font-[400] font-roboto leading-[1.37] tracking-1"
                >
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
