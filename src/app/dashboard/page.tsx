import Card1 from "@/components/Card1";
import HeaderLayout from "../HeaderLayout";
import Card2 from "@/components/Card2";
import Image from "next/image";
import ActivePeersGraph from "@/components/graphs/ActivePeersGraph";

const Dashboard = () => {
  return (
    <HeaderLayout>
      <div className="grid grid-cols-2 laptop:grid-cols-4 gap-x-[2.1%] gap-y-[24px]">
        <Card1
          label={"Total peers"}
          value={"5,234"}
          iconSrc={"/images/icon-total-peers.png"}
          url={"/peers/total-peers"}
          percentage={10}
        />
        <Card1
          label={"Revenue stream"}
          value={"$734,234"}
          iconSrc={"/images/icon-revenue-stream.png"}
          url={"/dashboard/revenue-stream"}
          percentage={10}
        />
        <Card2
          label={"Up-skilling time"}
          value={"11,096 hrs"}
          iconSrc={"/images/icon-up-skilling-time.png"}
          url={"/skill-library/up-skilling-time"}
        />
        <Card2
          label={"Earned badges"}
          value={"1,100"}
          iconSrc={"/images/icon-earned-badges.png"}
          url={"/skill-library/earned-badges"}
        />
      </div>
      <div className="w-[66%] p-[24px] bg-white rounded-[8px] mt-[24px]">
        <p className="text-[21px] text-[#2B2E48] font-roboto font-[500] leading-[1.37] tracking-1">
          Active peers
        </p>
        <button className="bg-[#F1F3F4] rounded-[4px] px-[3px]">
          <span className="text-[#2B2E48] text-[12px] leading[1.37] ml-[8px]">
            Month
          </span>
          <Image
            src={"/images/icon-month-dropdown.png"}
            alt="Month dropdown"
            width={16}
            height={16}
            className="inline-block ml-[2px]"
          />
        </button>
        <ActivePeersGraph />
      </div>
    </HeaderLayout>
  );
};

export default Dashboard;
