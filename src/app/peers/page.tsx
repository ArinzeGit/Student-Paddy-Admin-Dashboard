import Card1 from "@/components/Card1";
import EntryPageLayout from "../EntryPageLayout";
import Card2 from "@/components/Card2";
import ActivePeersGraph from "@/components/graphs/ActivePeersGraph";
import UniversityPeerGrowthGraph from "@/components/graphs/UniversityPeerGrowthGraph";
import Table from "@/components/Table";
import Link from "next/link";
import Image from "next/image";
import TopPeerByActivityCard from "@/components/TopPeerByActivityCard";

const Peers = () => {
  const topPeersColumns = [
    "Rank",
    "ID",
    "Name",
    "Badges",
    "Up-skilling time",
    "Portfolio",
    "Recommended by",
  ];
  const topPeersData = [
    {
      Rank: 1,
      ID: "160408006",
      Name: "Nnaemeka Ifeakor",
      Badges: 8,
      "Up-skilling time": "423 hrs",
      Portfolio: "500 uploads",
      "Recommended by": "100 peers",
    },
    {
      Rank: 2,
      ID: "170901992",
      Name: "Krutarth Shah",
      Badges: 7,
      "Up-skilling time": "367 hrs",
      Portfolio: "350 uploads",
      "Recommended by": "70 peers",
    },
    {
      Rank: 3,
      ID: "201233233",
      Name: "Thiel Matthias",
      Badges: 5,
      "Up-skilling time": "298 hrs",
      Portfolio: "200 uploads",
      "Recommended by": "44 peers",
    },
    {
      Rank: 4,
      ID: "160403343",
      Name: "Josh Jonathan",
      Badges: 5,
      "Up-skilling time": "167 hrs",
      Portfolio: "150 uploads",
      "Recommended by": "33 peers",
    },
    {
      Rank: 5,
      ID: "122345345",
      Name: "Alaye Shalaye",
      Badges: 4,
      "Up-skilling time": "156 hrs",
      Portfolio: "100 uploads",
      "Recommended by": "22 peers",
    },
    {
      Rank: 6,
      ID: "235354353",
      Name: "Far awayui",
      Badges: 3,
      "Up-skilling time": "108 hrs",
      Portfolio: "50 uploads",
      "Recommended by": "11 peers",
    },
    {
      Rank: 7,
      ID: "235354353",
      Name: "Far awayui",
      Badges: 3,
      "Up-skilling time": "108 hrs",
      Portfolio: "50 uploads",
      "Recommended by": "11 peers",
    },
    {
      Rank: 8,
      ID: "235354353",
      Name: "Far awayui",
      Badges: 3,
      "Up-skilling time": "108 hrs",
      Portfolio: "50 uploads",
      "Recommended by": "11 peers",
    },
    {
      Rank: 9,
      ID: "235354353",
      Name: "Far awayui",
      Badges: 3,
      "Up-skilling time": "108 hrs",
      Portfolio: "50 uploads",
      "Recommended by": "11 peers",
    },
    {
      Rank: 10,
      ID: "235354353",
      Name: "Far awayui",
      Badges: 3,
      "Up-skilling time": "108 hrs",
      Portfolio: "50 uploads",
      "Recommended by": "11 peers",
    },
    {
      Rank: 11,
      ID: "235354353",
      Name: "Far awayui",
      Badges: 3,
      "Up-skilling time": "108 hrs",
      Portfolio: "50 uploads",
      "Recommended by": "11 peers",
    },
    {
      Rank: 12,
      ID: "235354353",
      Name: "Far awayui",
      Badges: 3,
      "Up-skilling time": "108 hrs",
      Portfolio: "50 uploads",
      "Recommended by": "11 peers",
    },
    {
      Rank: 13,
      ID: "235354353",
      Name: "Far awayui",
      Badges: 3,
      "Up-skilling time": "108 hrs",
      Portfolio: "50 uploads",
      "Recommended by": "11 peers",
    },
    {
      Rank: 14,
      ID: "235354353",
      Name: "Far awayui",
      Badges: 3,
      "Up-skilling time": "108 hrs",
      Portfolio: "50 uploads",
      "Recommended by": "11 peers",
    },
    {
      Rank: 15,
      ID: "235354353",
      Name: "Far awayui",
      Badges: 3,
      "Up-skilling time": "108 hrs",
      Portfolio: "50 uploads",
      "Recommended by": "11 peers",
    },
  ];

  function getTop6(data: { [key: string]: number | string }[]) {
    return data.slice(0, 6); // Get the first 6 items
  }

  const top6PeersData = getTop6(topPeersData);

  return (
    <EntryPageLayout>
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

      <div className="w-[100%] mt-[24px]">
        <UniversityPeerGrowthGraph />
      </div>

      <div className="mt-[24px] flex gap-[2.1%]">
        <div className="flex-1 min-w-[375px]">
          <ActivePeersGraph />
        </div>
        <TopPeerByActivityCard />
      </div>

      <div className="w-[100%] mt-[24px] pb-[27px] bg-white rounded-[8px] relative">
        <Table
          title="Top Peers"
          columns={topPeersColumns}
          data={top6PeersData}
          withMonthToggle
        />
        <Link
          href={"/peers/top-peers"}
          className="absolute bottom-[16px] left-[50%] translate-x-[-50%]"
        >
          <span className="text-[#0F7863] font-roboto font-[400] text-[14px] leading-[1.43]">
            See full table
          </span>
          <Image
            src={"/images/icon-view-all.png"}
            alt="View all"
            width={16}
            height={16}
            className="inline-block ml-[5px]"
          />
        </Link>
      </div>
    </EntryPageLayout>
  );
};

export default Peers;
