// Table.tsx
import React from "react";

interface TableProps {
  title: string;
  columns: string[]; // Column headers
  data: { [key: string]: any }[]; // Array of objects representing rows
}

const Table: React.FC<TableProps> = ({ title, columns, data }) => {
  return (
    <div className="overflow-x-auto bg-white p-[24px] rounded-[8px] w-[100%]">
      <h2 className="text-[21px] text-[#2B2E48] font-[500] font-roboto leading-[1.37] tracking-1 mb-[20px]">
        {title}
      </h2>
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
            <tr key={rowIndex}>
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
