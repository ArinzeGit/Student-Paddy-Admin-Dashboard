import SkillLlibraryLayout from "../SkillLibraryLayout";
import Table from "@/components/Table";

const TotalVideos = () => {
  const totalVideosColumns = [
    "Name of video",
    "Competency",
    "Channel provider",
    "Source",
    "Video Length",
  ];

  const totalVideosData = [
    {
      "Name of video": "Basics of word and written communication",
      Competency: "Professional Communication",
      "Channel provider": "Packt",
      Source: "Youtube",
      "Video Length": "30mins",
    },
    {
      "Name of video": "Getting ahead of the emotional",
      Competency: "Emotional Intelligence",
      "Channel provider": "Ted X",
      Source: "Youtube",
      "Video Length": "1hr 2mins",
    },
    {
      "Name of video": "Taking ownership of work",
      Competency: "Leadership",
      "Channel provider": "BBC",
      Source: "Youtube",
      "Video Length": "24mins",
    },
    {
      "Name of video": "Having the digital mindset",
      Competency: "Digital Skills",
      "Channel provider": "John Harpman",
      Source: "Youtube",
      "Video Length": "30mins",
    },
    {
      "Name of video": "Best statistical tools for analysis",
      Competency: "Data Analysis",
      "Channel provider": "The Brigadier show",
      Source: "Youtube",
      "Video Length": "11mins",
    },
    {
      "Name of video": "Getting faster turnout for work",
      Competency: "Process Improvement",
      "Channel provider": "Meladi Knowledge",
      Source: "Youtube",
      "Video Length": "1hr",
    },
    {
      "Name of video": "Having the digital mindset",
      Competency: "Digital Skills",
      "Channel provider": "John Harpman",
      Source: "Youtube",
      "Video Length": "30mins",
    },
    {
      "Name of video": "Best statistical tools for analysis",
      Competency: "Data Analysis",
      "Channel provider": "The Brigadier show",
      Source: "Youtube",
      "Video Length": "11mins",
    },
    {
      "Name of video": "Getting faster turnout for work",
      Competency: "Process Improvement",
      "Channel provider": "Meladi Knowledge",
      Source: "Youtube",
      "Video Length": "1hr",
    },
    {
      "Name of video": "Having the digital mindset",
      Competency: "Digital Skills",
      "Channel provider": "John Harpman",
      Source: "Youtube",
      "Video Length": "30mins",
    },
    {
      "Name of video": "Best statistical tools for analysis",
      Competency: "Data Analysis",
      "Channel provider": "The Brigadier show",
      Source: "Youtube",
      "Video Length": "11mins",
    },
    {
      "Name of video": "Getting faster turnout for work",
      Competency: "Process Improvement",
      "Channel provider": "Meladi Knowledge",
      Source: "Youtube",
      "Video Length": "1hr",
    },
  ];

  return (
    <SkillLlibraryLayout>
      <div className="w-[100%]">
        <Table
          title="Total Videos - 2,000"
          columns={totalVideosColumns}
          data={totalVideosData}
          withSearch
        />
      </div>
    </SkillLlibraryLayout>
  );
};

export default TotalVideos;
