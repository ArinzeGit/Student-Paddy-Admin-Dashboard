import SkillLlibraryLayout from "../SkillLibraryLayout";
import Table from "@/components/Table";

const UpskillingTime = () => {
  const upskillingTimeColumns = [
    "Rank",
    "ID",
    "Name",
    "Academic Status",
    "Faculty",
    "Department",
    "Up-skilling Time",
  ];

  const upskillingTimeData = [
    {
      Rank: 1,
      ID: "160408006",
      Name: "Nnaemeka Ifeakor",
      "Academic Status": "Undergraduate",
      Faculty: "SCIENCE",
      Department: "Computer Science",
      "Up-skilling Time": "423 hrs",
    },
    {
      Rank: 2,
      ID: "170901992",
      Name: "Krutarth Shah",
      "Academic Status": "Graduate",
      Faculty: "MGMT SCIENCE",
      Department: "Marketing",
      "Up-skilling Time": "367 hrs",
    },
    {
      Rank: 3,
      ID: "201232323",
      Name: "Thiel Matthias",
      "Academic Status": "Undergraduate",
      Faculty: "ENGINEERING",
      Department: "Mechanical Engineering",
      "Up-skilling Time": "298 hrs",
    },
    {
      Rank: 4,
      ID: "160403343",
      Name: "Josh Jonathan",
      "Academic Status": "Graduate",
      Faculty: "MGMT SCIENCE",
      Department: "Business Administration",
      "Up-skilling Time": "167 hrs",
    },
    {
      Rank: 5,
      ID: "123243545",
      Name: "Alaye Shalaye",
      "Academic Status": "Graduate",
      Faculty: "ENGINEERING",
      Department: "Civil Engineering",
      "Up-skilling Time": "156 hrs",
    },
    {
      Rank: 6,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Graduate",
      Faculty: "ENGINEERING",
      Department: "Chemical Engineering",
      "Up-skilling Time": "108 hrs",
    },
    {
      Rank: 7,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      Faculty: "SCIENCE",
      Department: "Physics",
      "Up-skilling Time": "108 hrs",
    },
    {
      Rank: 8,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      Faculty: "SCIENCE",
      Department: "Biology",
      "Up-skilling Time": "108 hrs",
    },
    {
      Rank: 9,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Graduate",
      Faculty: "ENGINEERING",
      Department: "Mechanical Engineering",
      "Up-skilling Time": "108 hrs",
    },
    {
      Rank: 10,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      Faculty: "MGMT SCIENCE",
      Department: "Accounting",
      "Up-skilling Time": "108 hrs",
    },
    {
      Rank: 11,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Graduate",
      Faculty: "SCIENCE",
      Department: "Chemistry",
      "Up-skilling Time": "108 hrs",
    },
    {
      Rank: 12,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Graduate",
      Faculty: "ENGINEERING",
      Department: "Electrical Engineering",
      "Up-skilling Time": "108 hrs",
    },
    {
      Rank: 13,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      Faculty: "MGMT SCIENCE",
      Department: "Finance",
      "Up-skilling Time": "108 hrs",
    },
    {
      Rank: 14,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      Faculty: "SCIENCE",
      Department: "Mathematics",
      "Up-skilling Time": "108 hrs",
    },
    {
      Rank: 15,
      ID: "235354353",
      Name: "Far awayui",
      "Academic Status": "Undergraduate",
      Faculty: "MGMT SCIENCE",
      Department: "Finance",
      "Up-skilling Time": "108 hrs",
    },
  ];

  return (
    <SkillLlibraryLayout>
      <div className="w-[100%]">
        <Table
          title="Up-skilling Time - 12,343,343hrs"
          columns={upskillingTimeColumns}
          data={upskillingTimeData}
        />
      </div>
    </SkillLlibraryLayout>
  );
};

export default UpskillingTime;
