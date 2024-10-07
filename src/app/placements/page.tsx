import Card1 from "@/components/Card1";
import EntryPageLayout from "../EntryPageLayout";
import Card2 from "@/components/Card2";
import FacultyWisePlacementGraph from "@/components/graphs/FacultyWisePlacementGraph";
import PlacementTrendGraph from "@/components/graphs/PlacementTrendGraph";
import SectorWisePlacementGraph from "@/components/graphs/SectorWisePlacementGraph";

const Placements = () => {
  return (
    <EntryPageLayout>
      <div className="grid grid-cols-2 laptop:grid-cols-4 gap-x-[2.1%] gap-y-[24px]">
        <Card1
          label={"Total employers"}
          value={"789"}
          iconSrc={"/images/icon-total-employers.png"}
          url={""}
          percentage={10}
        />
        <Card1
          label={"Job openings"}
          value={"456"}
          iconSrc={"/images/icon-job-openings.png"}
          url={""}
          percentage={10}
        />
        <Card2
          label={"Total offers"}
          value={"1,100"}
          iconSrc={"/images/icon-total-offers.png"}
          url={""}
        />
        <Card2
          label={"Total placements"}
          value={"1,100"}
          iconSrc={"/images/icon-total-placements.png"}
          url={""}
        />
        <Card1
          label={"Total applications"}
          value={"1,600"}
          iconSrc={"/images/icon-total-applications.png"}
          url={""}
          percentage={10}
        />
        <Card1
          label={"Total shortlists"}
          value={"789"}
          iconSrc={"/images/icon-total-shortlists.png"}
          url={""}
          percentage={10}
        />
        <Card2
          label={"Internship placements"}
          value={"700"}
          iconSrc={"/images/icon-internship-placements.png"}
          url={""}
        />
        <Card2
          label={"Full-time placements"}
          value={"300"}
          iconSrc={"/images/icon-full-time-placements.png"}
          url={""}
        />
      </div>

      <div className="mt-[24px] flex justify-between">
        <div className="w-[66%]">
          <PlacementTrendGraph />
        </div>
        <div className="w-[32%]">
          <SectorWisePlacementGraph />
        </div>
      </div>

      <div className="w-[100%] mt-[24px]">
        <FacultyWisePlacementGraph />
      </div>
    </EntryPageLayout>
  );
};

export default Placements;
