"use client";
import Image from "next/image";
import { useState } from "react";

interface RevenueStreamCardProps {
  label: string;
}

const RevenueStreamCard = ({ label }: RevenueStreamCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-[8px] py-[23px] pl-[24px] pr-[39px] flex justify-between items-center">
      <div className="flex items-center gap-[10px] text-[#000000] text-[20px] font-roboto font-[500] leading-[1.37]">
        <Image
          src={"/images/icon-revenue-stream.png"}
          alt="Revenue icon"
          height={44}
          width={44}
        />
        <p>{label}</p>
      </div>
      <button
        onClick={toggleExpand}
        className="text-[#474747] text-[16px] font-roboto font-[500] leading-[1.37] flex items-center gap-[9px]"
      >
        {isExpanded ? "Hide" : "View"}
        <Image
          src={
            isExpanded
              ? "/images/icon-hide-up.png"
              : "/images/icon-view-down.png"
          }
          alt="Toggle view"
          height={7}
          width={12}
        />
      </button>
    </div>
  );
};

export default RevenueStreamCard;
