import Image from "next/image";
import Link from "next/link";
interface Card1Props {
  label: string;
  value: string;
  iconSrc: string;
  url: string;
  percentage: number;
}

const Card1 = ({ label, value, iconSrc, url, percentage }: Card1Props) => {
  return (
    <div className="min-h-[150px] bg-[white] rounded-[8px] p-[24px] font-roboto flex flex-col justify-between">
      <div className="flex items-start gap-[14px]">
        <Image src={iconSrc} alt="Card Icon" width={44} height={44} />
        <div className=" font-[500]">
          <p className="text-[16px] leading-[1.37] mb-[5px] tracking-1">
            {label}
          </p>
          <p className=" text-[24px] leading-[1.37]">{value}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Link href={url}>
          <span className="text-[#0F7863] font-[400] text-[14px] leading-[1.43]">
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
        <div className="bg-[rgba(11,138,0,0.15)] rounded-[50px] py-[3px] px-[5px]">
          <Image
            src={"/images/icon-trending-up.png"}
            alt="Trending up"
            width={14}
            height={14}
            className="inline-block mr-[4px]"
          />
          <span className="text-[#0B8A00] font-[400] text-[14px] leading-[1.43]">{`${percentage.toFixed(
            1
          )}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default Card1;
