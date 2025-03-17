import Card1 from "@/components/Card1";
import EntryPageLayout from "../EntryPageLayout";
import Card2 from "@/components/Card2";
import SkillsContentConsumptionGraph from "@/components/graphs/SkillsContentConsumptionGraph";
import Table from "@/components/Table";
import Link from "next/link";
import Image from "next/image";
import UploadVideoLink from "@/components/UploadVideoLink";

const SkillLibrary = () => {
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

  function getTop6Videos(data: { [key: string]: number | string }[]) {
    return data.slice(0, 6); // Get the first 6 items
  }

  const top6VideosData = getTop6Videos(topVideosData);

  return (
    <EntryPageLayout>
      <div className="grid grid-cols-2 laptop:grid-cols-4 gap-x-[2.1%] gap-y-[24px]">
        <Card1
          label={"Total videos"}
          value={"1,600"}
          iconSrc={"/images/icon-total-videos.png"}
          url={"/skill-library/total-videos"}
          percentage={10}
        />
        <Card1
          label={"Total competencies"}
          value={"456"}
          iconSrc={"/images/icon-total-competencies.png"}
          url={"/skill-library/total-competencies"}
          percentage={10}
        />
        <Card2
          label={"Up-skilling time"}
          value={"11,096 hrs"}
          iconSrc={"/images/icon-up-skilling-time.png"}
          url={"/skill-library/up-skilling-time"}
        />
        <Card2
          label={"Earned badges"}
          value={"1,100"}
          iconSrc={"/images/icon-earned-badges.png"}
          url={"/skill-library/earned-badges"}
        />
      </div>

      <div className="w-[100%] mt-[24px]">
        <SkillsContentConsumptionGraph />
      </div>

      <div className="w-[100%] mt-[24px] pb-[27px] bg-white rounded-[8px] relative">
        <Table
          title="Top Videos"
          columns={topVideosColumns}
          data={top6VideosData}
        />
        <Link
          href={"/skill-library/top-videos"}
          className="absolute bottom-[16px] left-[50%] translate-x-[-50%]"
        >
          <span className="text-[#0F7863] font-roboto font-[400] text-[14px] leading-[1.43]">
            See full table
          </span>
          <Image
            src={"/images/icon-view-all.png"}
            alt="View all"
            width={16}
            height={16}
            className="inline-block ml-[5px]"
          />
        </Link>
        <div className="absolute top-[17px] right-[24px]">
          <UploadVideoLink />
        </div>
      </div>
    </EntryPageLayout>
  );
};

export default SkillLibrary;
