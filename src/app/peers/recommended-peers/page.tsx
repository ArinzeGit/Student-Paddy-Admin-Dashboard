import PeersLayout from "../PeersLayout";
import Table from "@/components/Table";

const RecommendedPeers = () => {
  const recommendedPeersColumns = [
    "Rank",
    "ID",
    "Name",
    "Academic Status",
    "Faculty",
    "Department",
    "Recommended by",
  ];

  const recommendedPeersData = [
    {
      Rank: 1,
      ID: "160408006",
      Name: "Nnaemeka Ifeakor",
      "Academic Status": "Graduate",
      Faculty: "ENGINEERING",
      Department: "Electrical Engineering",
      "Recommended by": "100 peers",
    },
    {
      Rank: 2,
      ID: "170901992",
      Name: "Krutarth Shah",
      "Academic Status": "Undergraduate",
      Faculty: "SCIENCE",
      Department: "Computer Science",
      "Recommended by": "70 peers",
    },
    {
      Rank: 3,
      ID: "201232323",
      Name: "Thiel Matthias",
      "Academic Status": "Undergraduate",
      Faculty: "ENGINEERING",
      Department: "Mechanical Engineering",
      "Recommended by": "44 peers",
    },
    {
      Rank: 4,
      ID: "160403343",
      Name: "Josh Jonathan",
      "Academic Status": "Graduate",
      Faculty: "MGMT SCIENCE",
      Department: "Business Administration",
      "Recommended by": "33 peers",
    },
    {
      Rank: 5,
      ID: "123243545",
      Name: "Alaye Shalaye",
      "Academic Status": "Graduate",
      Faculty: "ENGINEERING",
      Department: "Civil Engineering",
      "Recommended by": "22 peers",
    },
    {
      Rank: 6,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      Faculty: "SCIENCE",
      Department: "Physics",
      "Recommended by": "11 peers",
    },
    {
      Rank: 7,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Graduate",
      Faculty: "ENGINEERING",
      Department: "Chemical Engineering",
      "Recommended by": "11 peers",
    },
    {
      Rank: 8,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Graduate",
      Faculty: "MGMT SCIENCE",
      Department: "Marketing",
      "Recommended by": "11 peers",
    },
    {
      Rank: 9,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      Faculty: "ENGINEERING",
      Department: "Electrical Engineering",
      "Recommended by": "11 peers",
    },
    {
      Rank: 10,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      Faculty: "SCIENCE",
      Department: "Biology",
      "Recommended by": "11 peers",
    },
    {
      Rank: 11,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      Faculty: "MGMT SCIENCE",
      Department: "Finance",
      "Recommended by": "11 peers",
    },
    {
      Rank: 12,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Graduate",
      Faculty: "SCIENCE",
      Department: "Chemistry",
      "Recommended by": "11 peers",
    },
    {
      Rank: 13,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Graduate",
      Faculty: "ENGINEERING",
      Department: "Mechanical Engineering",
      "Recommended by": "11 peers",
    },
    {
      Rank: 14,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      Faculty: "MGMT SCIENCE",
      Department: "Accounting",
      "Recommended by": "11 peers",
    },
    {
      Rank: 15,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      Faculty: "SCIENCE",
      Department: "Mathematics",
      "Recommended by": "11 peers",
    },
  ];

  return (
    <PeersLayout>
      <div className="w-[100%]">
        <Table
          title="Recommended Peers - 2,000"
          columns={recommendedPeersColumns}
          data={recommendedPeersData}
          withMonthToggle
          withSearch={false}
        />
      </div>
    </PeersLayout>
  );
};

export default RecommendedPeers;
