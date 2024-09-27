import Card1 from "@/components/Card1";
import HeaderLayout from "../HeaderLayout";
import Card2 from "@/components/Card2";
import ActivePeersGraph from "@/components/graphs/ActivePeersGraph";

const Peers = () => {
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
        <Card2
          label={"Inactive peers"}
          value={"1,600"}
          iconSrc={"/images/icon-inactive-peers.png"}
          url={"/peers/inactive-peers"}
        />
        <Card2
          label={"Active peers"}
          value={"3,300"}
          iconSrc={"/images/icon-active-peers.png"}
          url={"/peers/active-peers"}
        />
        <Card2
          label={"Recommended peers"}
          value={"1,000"}
          iconSrc={"/images/icon-recommended-peers.png"}
          url={"/peers/recommended-peers"}
        />
      </div>
      <div className="w-[66%] mt-[24px]">
        <ActivePeersGraph />
      </div>
    </HeaderLayout>
  );
};

export default Peers;
