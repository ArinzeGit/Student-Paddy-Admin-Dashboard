import PeersLayout from "../PeersLayout";
import Table from "@/components/Table";

const TopPeers = () => {
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

  return (
    <PeersLayout>
      <div className="w-[100%]">
        <Table
          title="Top Peers - 20"
          columns={topPeersColumns}
          data={topPeersData}
        />
      </div>
    </PeersLayout>
  );
};

export default TopPeers;
