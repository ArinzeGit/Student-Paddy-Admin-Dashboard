import PeersLayout from "../PeersLayout";
import Table from "@/components/Table";

const ActivePeers = () => {
  const activePeersColumns = [
    "Rank",
    "ID",
    "Name",
    "Academic Status",
    "Up-skilling time",
    "Date Joined",
    "Last seen",
  ];

  const activePeersData = [
    {
      Rank: 1,
      ID: "160408006",
      Name: "Nnaemeka Ifeakor",
      "Academic Status": "Graduate",
      "Up-skilling time": "423 hrs",
      "Date Joined": "12/01/2023",
      "Last seen": "Last month",
    },
    {
      Rank: 2,
      ID: "170901992",
      Name: "Krutarth Shah",
      "Academic Status": "Undergraduate",
      "Up-skilling time": "367 hrs",
      "Date Joined": "11/11/2022",
      "Last seen": "2 months ago",
    },
    {
      Rank: 3,
      ID: "201232323",
      Name: "Thiel Matthias",
      "Academic Status": "Undergraduate",
      "Up-skilling time": "298 hrs",
      "Date Joined": "10/12/2023",
      "Last seen": "2 months ago",
    },
    {
      Rank: 4,
      ID: "160403343",
      Name: "Josh Jonathan",
      "Academic Status": "Graduate",
      "Up-skilling time": "167 hrs",
      "Date Joined": "12/01/2023",
      "Last seen": "2 months ago",
    },
    {
      Rank: 5,
      ID: "123243545",
      Name: "Alaye Shalaye",
      "Academic Status": "Graduate",
      "Up-skilling time": "156 hrs",
      "Date Joined": "11/11/2022",
      "Last seen": "Last month",
    },
    {
      Rank: 6,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      "Up-skilling time": "108 hrs",
      "Date Joined": "10/12/2023",
      "Last seen": "Last month",
    },
    {
      Rank: 7,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Graduate",
      "Up-skilling time": "108 hrs",
      "Date Joined": "12/01/2023",
      "Last seen": "Last month",
    },
    {
      Rank: 8,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Graduate",
      "Up-skilling time": "108 hrs",
      "Date Joined": "11/11/2022",
      "Last seen": "2 months ago",
    },
    {
      Rank: 9,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      "Up-skilling time": "108 hrs",
      "Date Joined": "10/12/2023",
      "Last seen": "2 months ago",
    },
    {
      Rank: 10,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      "Up-skilling time": "108 hrs",
      "Date Joined": "12/01/2023",
      "Last seen": "2 months ago",
    },
    {
      Rank: 11,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      "Up-skilling time": "108 hrs",
      "Date Joined": "11/11/2022",
      "Last seen": "2 months ago",
    },
    {
      Rank: 12,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      "Up-skilling time": "108 hrs",
      "Date Joined": "10/12/2023",
      "Last seen": "2 months ago",
    },
    {
      Rank: 13,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Graduate",
      "Up-skilling time": "108 hrs",
      "Date Joined": "12/01/2023",
      "Last seen": "2 months ago",
    },
    {
      Rank: 14,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Graduate",
      "Up-skilling time": "108 hrs",
      "Date Joined": "11/11/2022",
      "Last seen": "2 months ago",
    },
    {
      Rank: 15,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      "Up-skilling time": "108 hrs",
      "Date Joined": "10/12/2023",
      "Last seen": "2 months ago",
    },
  ];

  return (
    <PeersLayout>
      <div className="w-[100%]">
        <Table
          title="Active Peers - 12,000"
          columns={activePeersColumns}
          data={activePeersData}
          withMonthToggle
        />
      </div>
    </PeersLayout>
  );
};

export default ActivePeers;
