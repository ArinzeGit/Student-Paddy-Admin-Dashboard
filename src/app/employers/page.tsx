import Card1 from "@/components/Card1";
import EntryPageLayout from "../EntryPageLayout";
import Card2 from "@/components/Card2";
import Table from "@/components/Table";
import Link from "next/link";
import Image from "next/image";
import SectorEmployabilityGraph from "@/components/graphs/SectorEmployabilityGraph";

const Employers = () => {
  const topEmployersByOffersColumns = [
    "Rank",
    "Companies",
    "Date joined",
    "Offers",
  ];
  const topEmployersByOffersData = [
    {
      Rank: 1,
      Companies: "United Bank for Africa",
      "Date joined": "05-04-2021",
      Offers: 40,
    },
    {
      Rank: 2,
      Companies: "Honeywell Industries",
      "Date joined": "04-04-2022",
      Offers: 30,
    },
    {
      Rank: 3,
      Companies: "Student Paddy Inc.",
      "Date joined": "03-04-2020",
      Offers: 21,
    },
    {
      Rank: 4,
      Companies: "Microsoft Inc.",
      "Date joined": "05-04-2021",
      Offers: 18,
    },
    {
      Rank: 5,
      Companies: "Access Bank",
      "Date joined": "04-04-2020",
      Offers: 13,
    },
    {
      Rank: 6,
      Companies: "Reliance Industries",
      "Date joined": "03-04-2022",
      Offers: 10,
    },
    {
      Rank: 7,
      Companies: "Access Bank",
      "Date joined": "04-04-2020",
      Offers: 9,
    },
    {
      Rank: 8,
      Companies: "Reliance Industries",
      "Date joined": "03-04-2022",
      Offers: 6,
    },
  ];

  const topEmployersBySalariesColumns = ["Rank", "Companies", "Salary"];

  const topEmployersBySalariesData = [
    {
      Rank: 1,
      Companies: "United Bank for Africa",
      Salary: "$70,000 - $83,000",
    },
    {
      Rank: 2,
      Companies: "Honeywell Industries",
      Salary: "$65,000 - $70,000",
    },
    {
      Rank: 3,
      Companies: "Student Paddy Inc.",
      Salary: "$63,000 - $68,000",
    },
    {
      Rank: 4,
      Companies: "Microsoft Inc.",
      Salary: "$45,000 - $56,000",
    },
    {
      Rank: 5,
      Companies: "Access Bank",
      Salary: "$32,000 - $35,000",
    },
    {
      Rank: 6,
      Companies: "Reliance Industries",
      Salary: "$30,000 - $31,000",
    },
    {
      Rank: 7,
      Companies: "Access Bank",
      Salary: "$20,000 - $25,000",
    },
    {
      Rank: 8,
      Companies: "Reliance Industries",
      Salary: "$15,000 - $20,000",
    },
  ];

  function getTop6(data: { [key: string]: number | string }[]) {
    return data.slice(0, 6); // Get the first 6 items
  }

  const top6EmployersByOffersData = getTop6(topEmployersByOffersData);
  const top6EmployersBySalariesData = getTop6(topEmployersBySalariesData);

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
          label={"Total value stream"}
          value={"$734,234"}
          iconSrc={"/images/icon-total-value-stream.png"}
          url={""}
          percentage={10}
        />
        <Card2
          label={"Total interviews"}
          value={"1,200"}
          iconSrc={"/images/icon-total-interviews.png"}
          url={""}
        />
        <Card2
          label={"Total offers"}
          value={"1,100"}
          iconSrc={"/images/icon-total-offers.png"}
          url={""}
        />
        <Card1
          label={"Inactive employers"}
          value={"178"}
          iconSrc={"/images/icon-inactive-employers.png"}
          url={""}
          percentage={10}
        />
        <Card2
          label={"Active employers"}
          value={"316"}
          iconSrc={"/images/icon-active-employers.png"}
          url={""}
        />
        <Card2
          label={"Total invite"}
          value={"19,291"}
          iconSrc={"/images/icon-total-invite.png"}
          url={""}
        />
        <Card2
          label={"Total response"}
          value={"2,200"}
          iconSrc={"/images/icon-total-response.png"}
          url={""}
        />
      </div>
      <div className="flex gap-[2.1%] mt-[24px]">
        <div className="w-[100%] pb-[27px] bg-white rounded-[8px] relative">
          <Table
            title="Top employers by offers"
            columns={topEmployersByOffersColumns}
            data={top6EmployersByOffersData}
            withYearToggle
          />
          <Link
            href={""}
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
        </div>
        <div className="w-[100%] pb-[27px] bg-white rounded-[8px] relative">
          <Table
            title="Top employers by salaries"
            columns={topEmployersBySalariesColumns}
            data={top6EmployersBySalariesData}
            withYearToggle
          />
          <Link
            href={""}
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
        </div>
      </div>
      <div className="w-[100%] mt-[24px]">
        <SectorEmployabilityGraph />
      </div>
    </EntryPageLayout>
  );
};

export default Employers;
