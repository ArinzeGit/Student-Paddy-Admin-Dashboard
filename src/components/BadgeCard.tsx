"use client";
import { useState } from "react";
import Image from "next/image";
import PeersIcon from "./icons/PeersIcon";

interface BadgeCardProps {
  iconSrc: string;
  label: string;
  badgeSrc: string;
}

const BadgeCard = ({ iconSrc, label, badgeSrc }: BadgeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="bg-white rounded-[8px] py-[23px] pl-[24px] pr-[36px] flex justify-between items-center">
        <div className="flex items-center gap-[10px] text-[#000000] text-[20px] font-roboto font-[500] leading-[1.37]">
          <Image src={iconSrc} alt="Badge icon" height={44} width={44} />
          <p>{label}</p>
        </div>
        <button
          onClick={toggleExpand}
          className="text-[#474747] text-[16px] font-roboto font-[500] leading-[1.37] flex items-center gap-[9px]"
        >
          {isExpanded ? "Hide" : "View"}
          <Image
            src={"/images/icon-view-down.png"}
            alt="Toggle view"
            height={7}
            width={12}
            className={isExpanded ? "rotate-180" : ""}
          />
        </button>
      </div>
      {isExpanded && (
        <div className="bg-[#FFFFFF] rounded-[8px] mt-[15px] py-[14px] px-[24px] flex justify-center gap-[40px] items-center relative">
          <div>
            <Image src={badgeSrc} alt={"Badge"} height={258} width={258} />
            <p className="flex gap-[4px] justify-center items-center mt-[16px] mb-[19px] text-[#474747] text-[15px] font-roboto font-[500] leading-[1.37]">
              <PeersIcon />
              100 peers
            </p>
          </div>
          <div className="h-[193px] border-l border-dotted border-[#98B0A9]" />
          <div>
            <Image src={badgeSrc} alt={"Badge"} height={258} width={258} />
            <p className="flex gap-[4px] justify-center items-center mt-[16px] mb-[19px] text-[#474747] text-[15px] font-roboto font-[500] leading-[1.37]">
              <PeersIcon />
              200 peers
            </p>
          </div>
          <div className="h-[193px] border-l border-dotted border-[#98B0A9]" />
          <div>
            <Image src={badgeSrc} alt={"Badge"} height={258} width={258} />
            <p className="flex gap-[4px] justify-center items-center mt-[16px] mb-[19px] text-[#474747] text-[15px] font-roboto font-[500] leading-[1.37]">
              <PeersIcon />
              1,100 peers
            </p>
          </div>
          <button className="absolute left-[24px] top-[50%] translate-y-[-50%]">
            <Image
              src={"/images/icon-arrow-left.png"}
              alt="Arrow left"
              height={24}
              width={24}
            />
          </button>
          <button className="absolute right-[24px] top-[50%] translate-y-[-50%]">
            <Image
              src={"/images/icon-arrow-right.png"}
              alt="Arrow right"
              height={24}
              width={24}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default BadgeCard;
