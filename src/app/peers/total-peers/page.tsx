import UniversityPeerGrowthGraph from "@/components/graphs/UniversityPeerGrowthGraph";
import PeersLayout from "../PeersLayout";
import Table from "@/components/Table";

const TotalPeers = () => {
  //sample data
  const totalPeersColumns = [
    "ID",
    "Name",
    "Academic Status",
    "Gender",
    "Faculty",
    "Department",
  ];
  const totalPeersData = [
    {
      ID: "160408006",
      Name: "Daniel Bolatosun",
      "Academic Status": "Graduate",
      Gender: "M",
      Faculty: "ENGINEERING",
      Department: "Met & Mat Engineering",
    },
    {
      ID: "160408006",
      Name: "Phillip Mediloa",
      "Academic Status": "Undergraduate",
      Gender: "M",
      Faculty: "SCIENCE",
      Department: "Computer Engineering",
    },
    {
      ID: "160408006",
      Name: "Phillip Mediloa",
      "Academic Status": "Undergraduate",
      Gender: "M",
      Faculty: "MGMT SCIENCE",
      Department: "Computer Engineering",
    },
    {
      ID: "160408006",
      Name: "Michael Durojaye",
      "Academic Status": "Graduate",
      Gender: "F",
      Faculty: "ENGINEERING",
      Department: "Computer Engineering",
    },
    {
      ID: "160408006",
      Name: "Michael Durojaye",
      "Academic Status": "Graduate",
      Gender: "F",
      Faculty: "SCIENCE",
      Department: "Met & Mat Engineering",
    },
    {
      ID: "160408006",
      Name: "Michael Durojaye",
      "Academic Status": "Undergraduate",
      Gender: "M",
      Faculty: "MGMT SCIENCE",
      Department: "Met & Mat Engineering",
    },
    {
      ID: "160408006",
      Name: "Deliaj Hadeio",
      "Academic Status": "Graduate",
      Gender: "F",
      Faculty: "ENGINEERING",
      Department: "Met & Mat Engineering",
    },
    {
      ID: "160403343",
      Name: "Deliaj Hadeio",
      "Academic Status": "Graduate",
      Gender: "F",
      Faculty: "SCIENCE",
      Department: "Mechanical Engineering",
    },
    {
      ID: "122345345",
      Name: "Deliaj Hadeio",
      "Academic Status": "Undergraduate",
      Gender: "F",
      Faculty: "MGMT SCIENCE",
      Department: "Mechanical Engineering",
    },
    {
      ID: "122345345",
      Name: "Deliaj Hadeio",
      "Academic Status": "Undergraduate",
      Gender: "F",
      Faculty: "ENGINEERING",
      Department: "Mechanical Engineering",
    },
    {
      ID: "122345345",
      Name: "Deliaj Hadeio",
      "Academic Status": "Undergraduate",
      Gender: "F",
      Faculty: "SCIENCE",
      Department: "Computer Engineering",
    },
    {
      ID: "122345345",
      Name: "Phillip Mediloa",
      "Academic Status": "Undergraduate",
      Gender: "M",
      Faculty: "MGMT SCIENCE",
      Department: "Computer Engineering",
    },
    {
      ID: "233545353",
      Name: "Deliaj Hadeio",
      "Academic Status": "Graduate",
      Gender: "F",
      Faculty: "ENGINEERING",
      Department: "Computer Engineering",
    },
    {
      ID: "233545353",
      Name: "Phillip Mediloa",
      "Academic Status": "Undergraduate",
      Gender: "M",
      Faculty: "SCIENCE",
      Department: "Met & Mat Engineering",
    },
    {
      ID: "233545353",
      Name: "Phillip Mediloa",
      "Academic Status": "Undergraduate",
      Gender: "M",
      Faculty: "MGMT SCIENCE",
      Department: "Met & Mat Engineering",
    },
    {
      ID: "233545353",
      Name: "Phillip Mediloa",
      "Academic Status": "Graduate",
      Gender: "M",
      Faculty: "ENGINEERING",
      Department: "Met & Mat Engineering",
    },
  ];

  return (
    <PeersLayout>
      <div className="w-[100%]">
        <UniversityPeerGrowthGraph />
      </div>
      <div className="w-[100%] mt-[24px]">
        <Table
          title="Total Peers - 15,556"
          columns={totalPeersColumns}
          data={totalPeersData}
          withMonthToggle={false}
        />
      </div>
    </PeersLayout>
  );
};

export default TotalPeers;
