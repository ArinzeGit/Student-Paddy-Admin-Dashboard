import SkillLlibraryLayout from "../SkillLibraryLayout";
import Table from "@/components/Table";

const TopVideos = () => {
  const topVideosColumns = [
    "Name of video",
    "Competency",
    "Channel provider",
    "Views",
    "Likes",
  ];
  const topVideosData = [
    {
      "Name of video": "Basics of word and written communication",
      Competency: "Professional Communication",
      "Channel provider": "Packt",
      Views: "20,000 views",
      Likes: "15,000 likes",
    },
    {
      "Name of video": "Getting ahead of the emotional",
      Competency: "Emotional Intelligence",
      "Channel provider": "Ted X",
      Views: "10,000 views",
      Likes: "2,000 likes",
    },
    {
      "Name of video": "Taking ownership of work",
      Competency: "Leadership",
      "Channel provider": "BBC",
      Views: "9,000 views",
      Likes: "1,500 likes",
    },
    {
      "Name of video": "Having the digital mindset",
      Competency: "Digital Skills",
      "Channel provider": "John Harpman",
      Views: "7,500 views",
      Likes: "400 likes",
    },
    {
      "Name of video": "Best statistical tools for analysis",
      Competency: "Data Analysis",
      "Channel provider": "The Brigadier show",
      Views: "6,000 views",
      Likes: "250 likes",
    },
    {
      "Name of video": "Getting faster turnout for work",
      Competency: "Process Improvement",
      "Channel provider": "Meladi Knowledge",
      Views: "5,000 views",
      Likes: "100 likes",
    },
    {
      "Name of video": "Having the digital mindset",
      Competency: "Digital Skills",
      "Channel provider": "John Harpman",
      Views: "7,500 views",
      Likes: "400 likes",
    },
    {
      "Name of video": "Best statistical tools for analysis",
      Competency: "Data Analysis",
      "Channel provider": "The Brigadier show",
      Views: "6,000 views",
      Likes: "250 likes",
    },
    {
      "Name of video": "Getting faster turnout for work",
      Competency: "Process Improvement",
      "Channel provider": "Meladi Knowledge",
      Views: "5,000 views",
      Likes: "100 likes",
    },
    {
      "Name of video": "Having the digital mindset",
      Competency: "Digital Skills",
      "Channel provider": "John Harpman",
      Views: "7,500 views",
      Likes: "400 likes",
    },
    {
      "Name of video": "Best statistical tools for analysis",
      Competency: "Data Analysis",
      "Channel provider": "The Brigadier show",
      Views: "6,000 views",
      Likes: "250 likes",
    },
    {
      "Name of video": "Getting faster turnout for work",
      Competency: "Process Improvement",
      "Channel provider": "Meladi Knowledge",
      Views: "5,000 views",
      Likes: "100 likes",
    },
  ];

  return (
    <SkillLlibraryLayout>
      <div className="w-[100%]">
        <Table
          title="Top Videos - 20"
          columns={topVideosColumns}
          data={topVideosData}
        />
      </div>
    </SkillLlibraryLayout>
  );
};

export default TopVideos;
