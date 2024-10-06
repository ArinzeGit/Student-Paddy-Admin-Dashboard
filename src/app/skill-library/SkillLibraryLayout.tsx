import "@/app/globals.css";
import CustomLink from "@/components/CustomLink";
import SkillLibraryIcon from "@/components/icons/SkillLibraryIcon";
import UploadVideoLink from "@/components/UploadVideoLink";
import Image from "next/image";
import Link from "next/link";

const SkillLlibraryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed inset-0 bg-[#000000] opacity-40" />
      {/*relative to overlap fixed div and bg since <body> background is covered by fixed div*/}
      <div className="h-screen flex flex-col bg-[#F1F3F4] relative">
        <div className="bg-[#354B45] flex items-center justify-between">
          <span className="font-roboto font-[500] text-[20px] text-[#FFFFFF] leading-[1.37] flex gap-[10px] items-center ml-[25px]">
            <SkillLibraryIcon />
            Skill Library
          </span>
          <Link
            href={"/skill-library"}
            className="w-[50px] h-[50px] flex items-center justify-center bg-[#21332E]"
          >
            <Image
              src={"/images/icon-close.png"}
              width={21}
              height={21}
              alt="Close"
            />
          </Link>
        </div>

        <div className=" w-[97.4%] mx-[auto] mb-[14px] mt-[24px] flex justify-between  items-center">
          <div className="  flex gap-[14px]">
            <CustomLink
              href="/skill-library/total-videos"
              label="Total Videos"
            />
            <CustomLink href="/skill-library/top-videos" label="Top Videos" />
            <CustomLink
              href="/skill-library/total-competencies"
              label="Total Competencies"
            />
            <CustomLink
              href="/skill-library/up-skilling-time"
              label="Up-skilling Time"
            />
            <CustomLink
              href="/skill-library/earned-badges"
              label="Earned Badges"
            />
          </div>
          <UploadVideoLink />
        </div>

        <div className="w-[97.4%] mx-[auto] overflow-y-auto pt-[10px] pb-[69px]  no-scrollbar">
          {children}
        </div>
      </div>
    </>
  );
};

export default SkillLlibraryLayout;
