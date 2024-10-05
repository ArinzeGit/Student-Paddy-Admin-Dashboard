"use client";
import UniversityPeerGrowthGraph from "@/components/graphs/UniversityPeerGrowthGraph";
import PeersLayout from "../PeersLayout";
import Table from "@/components/Table";
import { useEffect, useState } from "react";
import ProfileDrawer from "@/components/ProfileDrawer";
import { useSearchParams } from "next/navigation";
interface Profile {
  ID: string;
  Name: string;
  "Academic Status": string;
  Gender: string;
  Faculty: string;
  Department: string;
}

const TotalPeers = () => {
  const searchParams = useSearchParams();
  const studentId = searchParams.get("studentId"); // Get the studentId query parameter
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
      ID: "160803446",
      Name: "Evelyn Johnson",
      "Academic Status": "Graduate",
      Gender: "F",
      Faculty: "EDUCATION",
      Department: "Human Kinetic Studies",
    },
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

  const [isProfileDrawerVisible, setProfileDrawerVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  const handleRowClick = (rowData: any) => {
    setSelectedProfile(rowData); // Set the clicked row's data to be used in the ProfileDrawer
    setProfileDrawerVisible(true); // Show the ProfileDrawer
  };

  const handleCloseProfileDrawer = () => {
    setProfileDrawerVisible(false); // Close the ProfileDrawer when necessary
  };

  useEffect(() => {
    if (studentId) {
      // Find the student from the data
      const studentProfile = totalPeersData.find(
        (student) => student.ID === studentId
      );
      if (studentProfile) {
        setSelectedProfile(studentProfile); // Set the profile data for the sidebar
        setProfileDrawerVisible(true); // Open the sidebar
      }
    }
  }, [studentId]); // Run this effect whenever studentId changes

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
          withSearch
          onRowClick={handleRowClick}
        />
      </div>
      <ProfileDrawer
        isVisible={isProfileDrawerVisible}
        onClose={handleCloseProfileDrawer}
        profileData={selectedProfile}
      />
    </PeersLayout>
  );
};

export default TotalPeers;
