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

      <div className="w-[66%] mt-[24px]">
        <ActivePeersGraph />
      </div>
    </HeaderLayout>
  );
};

export default Dashboard;
