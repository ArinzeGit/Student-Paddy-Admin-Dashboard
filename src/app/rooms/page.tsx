import Card1 from "@/components/Card1";
import EntryPageLayout from "../EntryPageLayout";
import Card2 from "@/components/Card2";
import Table from "@/components/Table";
import Link from "next/link";
import Image from "next/image";

const Rooms = () => {
  const topSessionsColumns = ["Rank", "Session name", "Attendees", "Host"];
  const topSessionsData = [
    {
      Rank: 1,
      "Session name": "Understanding Product..",
      Attendees: 40,
      Host: "Krutarth Shah, Hillary Odiakose",
    },
    {
      Rank: 2,
      "Session name": "Career webinar session..",
      Attendees: 30,
      Host: "University of Lagos, Phillip Oka +2 others",
    },
    {
      Rank: 3,
      "Session name": "Student Paddy Inc.",
      Attendees: 21,
      Host: "Telime Hasede, Majese Oklae",
    },
    {
      Rank: 4,
      "Session name": "Graduate trainee info se..",
      Attendees: 40,
      Host: "Phill Foden, Shanjar Rekali",
    },
    {
      Rank: 5,
      "Session name": "Career webinar session..",
      Attendees: 30,
      Host: "University of Lagos, Phillip Oka +2 others",
    },
    {
      Rank: 6,
      "Session name": "Student Paddy Inc.",
      Attendees: 20,
      Host: "University of Lagos",
    },
  ];

  const topRoomsColumns = [
    "Rank",
    "Number",
    "Room name",
    "Administrator",
    "Total session time",
    "Total messages",
    "Members",
  ];
  const topRoomsData = [
    {
      Rank: 1,
      Number: "#44D",
      "Room name": "Hash-greed Lifestyle",
      Administrator: "Nandinele Phatopia",
      "Total session time": "1000 hrs",
      "Total messages": 1000,
      Members: "100 peers",
    },
    {
      Rank: 2,
      Number: "#212C",
      "Room name": "AISEC club group",
      Administrator: "Shamatela Heorsd",
      "Total session time": "123 hrs",
      "Total messages": 123,
      Members: "70 peers",
    },
    {
      Rank: 3,
      Number: "#123A",
      "Room name": "Nike outreach and Pride",
      Administrator: "Ideslo Ikeoad",
      "Total session time": "80 hrs",
      "Total messages": 80,
      Members: "44 peers",
    },
    {
      Rank: 4,
      Number: "#22D",
      "Room name": "Hash-greed Lifestyle",
      Administrator: "Sharey Uiawuy",
      "Total session time": "1000 hrs",
      "Total messages": 1000,
      Members: "100 peers",
    },
    {
      Rank: 5,
      Number: "#11C",
      "Room name": "AISEC club group",
      Administrator: "Idesk Iepwkas",
      "Total session time": "123 hrs",
      "Total messages": 123,
      Members: "70 peers",
    },
    {
      Rank: 6,
      Number: "#143A",
      "Room name": "Nike outreach and Pride",
      Administrator: "Laner Iedhjee",
      "Total session time": "80 hrs",
      "Total messages": 80,
      Members: "44 peers",
    },
    {
      Rank: 7,
      Number: "#22D",
      "Room name": "Hash-greed Lifestyle",
      Administrator: "Sharey Uiawuy",
      "Total session time": "1000 hrs",
      "Total messages": 1000,
      Members: "100 peers",
    },
  ];

  function getTop5(data: { [key: string]: any }[]) {
    return data.slice(0, 5); // Get the first 5 items
  }

  function getTop6(data: { [key: string]: any }[]) {
    return data.slice(0, 6); // Get the first 6 items
  }

  const top5SessionsData = getTop5(topSessionsData);
  const top6RoomsData = getTop6(topRoomsData);

  return (
    <EntryPageLayout>
      <div className="grid grid-cols-2 laptop:grid-cols-4 gap-x-[2.1%] gap-y-[24px]">
        <Card1
          label={"Total rooms"}
          value={"2,215"}
          iconSrc={"/images/icon-total-rooms.png"}
          url={""}
          percentage={10}
        />
        <Card1
          label={"Total sessions"}
          value={"789"}
          iconSrc={"/images/icon-total-sessions.png"}
          url={""}
          percentage={10}
        />
        <Card2
          label={"Average session time"}
          value={"20 mins"}
          iconSrc={"/images/icon-average-session-time.png"}
          url={""}
        />
        <Card2
          label={"Total session time"}
          value={"1,000 hrs"}
          iconSrc={"/images/icon-total-session-time.png"}
          url={""}
        />
        <Card1
          label={"Total discussions"}
          value={"1,600"}
          iconSrc={"/images/icon-total-discussions.png"}
          url={""}
          percentage={10}
        />
        <Card1
          label={"Total messages"}
          value={"1,009,098"}
          iconSrc={"/images/icon-total-messages.png"}
          url={""}
          percentage={10}
        />
        <Card2
          label={"Links & files shared"}
          value={"700"}
          iconSrc={"/images/icon-links-files-shared.png"}
          url={""}
        />
        <Card2
          label={"Total storage used"}
          value={"1,000 MB"}
          iconSrc={"/images/icon-total-storage-used.png"}
          url={""}
        />
      </div>

      <div className="w-[66%] mt-[24px] pb-[27px] bg-white rounded-[8px] relative">
        <Table
          title="Top sessions"
          columns={topSessionsColumns}
          data={top5SessionsData}
          withMonthToggle
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

      <div className="w-[100%] mt-[24px] pb-[27px] bg-white rounded-[8px] relative">
        <Table
          title="Top rooms"
          columns={topRoomsColumns}
          data={top6RoomsData}
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
    </EntryPageLayout>
  );
};

export default Rooms;
