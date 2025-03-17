"use client";
import UniversityPeerGrowthGraph from "@/components/graphs/UniversityPeerGrowthGraph";
import PeersLayout from "../PeersLayout";
import Table from "@/components/Table";
import { useEffect, useMemo, useState } from "react";
import ProfileDrawer from "@/components/ProfileDrawer";
export interface Profile {
  ID: string;
  Name: string;
  "Academic Status": string;
  Gender: string;
  Faculty: string;
  Department: string;
}

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
  //Memoize totalPeersData to prevent recreation on render because it is in dependency array of useEffect and will cause unnecessary re-render.
  const totalPeersData = useMemo(
    () => [
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
    ],
    []
  );

  const [isProfileDrawerVisible, setProfileDrawerVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile>({
    ID: "",
    Name: "",
    "Academic Status": "",
    Gender: "",
    Faculty: "",
    Department: "",
  });
  const [studentId, setStudentId] = useState<string | null>(null);

  const transformedTotalPeersData = totalPeersData.map((profile) => ({
    //Used to change the 'type' of the data to fit what the onRowClick of the table component expects.
    ID: profile.ID,
    Name: profile.Name,
    "Academic Status": profile["Academic Status"],
    Gender: profile.Gender,
    Faculty: profile.Faculty,
    Department: profile.Department,
  })) as Array<{ [key: string]: string | number }>;

  const handleRowClick = (rowData: { [key: string]: string | number }) => {
    setSelectedProfile(rowData as unknown as Profile); // convert clicked row's data from type ":{ [key: string]: string | number }" to type "Profile" and set it as selectedProfile to be used in the ProfileDrawer
    setProfileDrawerVisible(true); // Show the ProfileDrawer
  };

  const handleCloseProfileDrawer = () => {
    setProfileDrawerVisible(false); // Close the ProfileDrawer when necessary
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setStudentId(params.get("studentId"));
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
  }, [studentId, totalPeersData]); // Run this effect whenever studentId changes

  return (
    <PeersLayout>
      <div className="w-[100%]">
        <UniversityPeerGrowthGraph />
      </div>
      <div className="w-[100%] mt-[24px]">
        <Table
          title="Total Peers - 15,556"
          columns={totalPeersColumns}
          data={transformedTotalPeersData} // Use transformed data because onRowClick expects the generic ": { [key: string]: string | number }" type not the type "Profile"
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
