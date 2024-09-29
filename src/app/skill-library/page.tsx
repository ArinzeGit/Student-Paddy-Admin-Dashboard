import Card1 from "@/components/Card1";
import EntryPageLayout from "../EntryPageLayout";
import Card2 from "@/components/Card2";
import SkillsContentConsumptionGraph from "@/components/graphs/SkillsContentConsumptionGraph";

const SkillLibrary = () => {
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
    </EntryPageLayout>
  );
};

export default SkillLibrary;
