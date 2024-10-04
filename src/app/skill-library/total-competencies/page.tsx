import SkillLlibraryLayout from "../SkillLibraryLayout";
import Table from "@/components/Table";

const TotalCompetencies = () => {
  const totalCompetenciesColumns = [
    "Competency",
    "Num of Channels",
    "Num of Videos",
    "Num of Sources",
    "Views",
    "Likes",
    "Total Hours",
  ];

  const totalCompetenciesData = [
    {
      Competency: "Professional Communication",
      "Num of Channels": 5,
      "Num of Videos": "10,000",
      "Num of Sources": 1,
      Views: "20,000 views",
      Likes: "15,000 likes",
      "Total Hours": "12,000hrs",
    },
    {
      Competency: "Emotional Intelligence",
      "Num of Channels": 6,
      "Num of Videos": "21,222",
      "Num of Sources": 1,
      Views: "10,000 views",
      Likes: "2,000 likes",
      "Total Hours": "12,000hrs",
    },
    {
      Competency: "Leadership",
      "Num of Channels": 8,
      "Num of Videos": "13,433",
      "Num of Sources": 1,
      Views: "9,000 views",
      Likes: "1,500 likes",
      "Total Hours": "1,000hrs",
    },
    {
      Competency: "Digital Skills",
      "Num of Channels": 10,
      "Num of Videos": "100",
      "Num of Sources": 1,
      Views: "7,500 views",
      Likes: "400 likes",
      "Total Hours": "30,000hrs",
    },
    {
      Competency: "Data Analysis",
      "Num of Channels": 2,
      "Num of Videos": "2,000",
      "Num of Sources": 1,
      Views: "6,000 views",
      Likes: "250 likes",
      "Total Hours": "11mins",
    },
    {
      Competency: "Process Improvement",
      "Num of Channels": 3,
      "Num of Videos": "1,345",
      "Num of Sources": 3,
      Views: "5,000 views",
      Likes: "100 likes",
      "Total Hours": "1hr",
    },
    {
      Competency: "Digital Skills",
      "Num of Channels": 12,
      "Num of Videos": "2,345",
      "Num of Sources": 3,
      Views: "7,500 views",
      Likes: "400 likes",
      "Total Hours": "30mins",
    },
    {
      Competency: "Data Analysis",
      "Num of Channels": 12,
      "Num of Videos": "13,876",
      "Num of Sources": 3,
      Views: "6,000 views",
      Likes: "250 likes",
      "Total Hours": "11mins",
    },
    {
      Competency: "Process Improvement",
      "Num of Channels": 2,
      "Num of Videos": "100",
      "Num of Sources": 1,
      Views: "5,000 views",
      Likes: "100 likes",
      "Total Hours": "1hr",
    },
    {
      Competency: "Digital Skills",
      "Num of Channels": 2,
      "Num of Videos": "200",
      "Num of Sources": 2,
      Views: "7,500 views",
      Likes: "400 likes",
      "Total Hours": "30mins",
    },
    {
      Competency: "Data Analysis",
      "Num of Channels": 13,
      "Num of Videos": "6,000",
      "Num of Sources": 2,
      Views: "6,000 views",
      Likes: "250 likes",
      "Total Hours": "11mins",
    },
    {
      Competency: "Process Improvement",
      "Num of Channels": 22,
      "Num of Videos": "200",
      "Num of Sources": 1,
      Views: "5,000 views",
      Likes: "100 likes",
      "Total Hours": "1hr",
    },
  ];

  return (
    <SkillLlibraryLayout>
      <div className="w-[100%]">
        <Table
          title="Total Competencies - 33"
          columns={totalCompetenciesColumns}
          data={totalCompetenciesData}
          withMonthToggle={false}
          withSearch
        />
      </div>
    </SkillLlibraryLayout>
  );
};

export default TotalCompetencies;
