import Image from "next/image";
import Link from "next/link";
import MonthDropdown from "./MonthDropdown";
interface Card2Props {
  label: string;
  value: string;
  iconSrc: string;
  url: string;
}

const Card2 = ({ label, value, iconSrc, url }: Card2Props) => {
  return (
    <div className="min-h-[150px] bg-[white] rounded-[8px] p-[24px] font-roboto flex flex-col justify-between">
      <div className="flex items-start gap-[14px]">
        <Image src={iconSrc} alt="Card Icon" width={44} height={44} />
        <div className=" font-[500] text-black">
          <p className="text-[16px] leading-[1.37] mb-[5px] tracking-1">
            {label}
          </p>
          <p className=" text-[24px] leading-[1.37]">{value}</p>
        </div>
      </div>
      <div className="flex justify-between items-center font-[400] ">
        <Link href={url}>
          <span className="text-[#0F7863] text-[14px] leading-[1.43]">
            View All
          </span>
          <Image
            src={"/images/icon-view-all.png"}
            alt="View all"
            width={16}
            height={16}
            className="inline-block ml-[5px]"
          />
        </Link>
        <MonthDropdown />
      </div>
    </div>
  );
};

export default Card2;
