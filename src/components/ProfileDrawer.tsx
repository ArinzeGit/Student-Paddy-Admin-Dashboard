import Image from "next/image";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import { useState } from "react";

// Set font configuration
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"], // You can choose different weights
});

interface ProfileDrawerProps {
  isVisible: boolean;
  onClose: () => void;
  profileData: any; // Adjust the type according to your profile data structure
}

const ProfileDrawer = ({
  isVisible,
  onClose,
  profileData,
}: ProfileDrawerProps) => {
  const [drawerState, setDrawerState] = useState("peerInfo");

  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 flex">
      {/* Overlay */}
      <div
        className="flex-grow bg-[#000000] opacity-40"
        onClick={onClose}
      ></div>

      {/* Actual profile drawer */}
      <div className="w-[375px] bg-white overflow-y-auto no-scrollbar">
        <div className="h-[133px] bg-[url('/images/background-profile-drawer.png')] bg-cover relative">
          <div
            className="h-[90px] w-[90px] shadow-[0_1px_1px_0_rgba(0,0,0,0.25)] border-[2px] rounded-[50%] overflow-hidden absolute bottom-[0] translate-y-[50%] left-[18px]
          "
          >
            <Image
              src={"/images/picture-evelyn-johnson.png"}
              alt="Profile picture"
              fill
              className="object-cover"
              sizes="(max-width: 750px) 100vw, 750px"
            />
          </div>
          <Link href={""}>
            <Image
              src={"/images/icon-upload.png"}
              height={18}
              width={18}
              alt="Upload"
              className="absolute top-[50%] translate-y-[-50%] right-[17px]"
            />
          </Link>
        </div>
        <div className="px-[17px] pt-[19px] pb-[27px]">
          <div className="flex items-center gap-[8px] justify-end">
            <button>
              <Image
                src={"/images/icon-more.png"}
                height={31}
                width={31}
                alt="More"
              />
            </button>
            <Link href={""}>
              <Image
                src={"/images/icon-message.png"}
                height={31}
                width={31}
                alt="Message"
              />
            </Link>
            <button className="bg-[#0F7863] px-[23px] py-[8px] rounded-[200px] text-[#FFFFFF] text-[11px] font-roboto font-[900] leading-[1.37]">
              Add Peer
            </button>
          </div>
          <h2
            className={`${openSans.className} text-[#000000] text-[20px] font-[600] leading-[1.36] mt-[24px]`}
          >
            {profileData.Name}
          </h2>
          <p className="text-[#000000] text-[12px] font-roboto font-[400] leading-[1.37] mt-[10px]">
            Making a change at a very early stage in my life and trying to win.
            Love God, probably hope to win big one day.
          </p>
          <div className="flex gap-[8px] items-center pl-[3px] mt-[7px]">
            <Image
              src={"/images/icon-location.png"}
              alt="Location"
              width={10}
              height={14}
            />
            <p className="text-[#000000] text-[12px] font-roboto font-[900] leading-[1.37]">
              Africa, Nigeria
            </p>
          </div>
          <Link href={""} className="flex gap-[6px] items-center mt-[7px]">
            <Image
              src={"/images/icon-website.png"}
              alt="Website"
              width={15}
              height={15}
            />
            <p className="text-[#0F7863] text-[12px] font-roboto font-[500] leading-[1.37]">
              gpc.studentpaddy.com
            </p>
          </Link>
        </div>
        <div className="border-t-[0.8px] border-[#98B0A9] flex">
          <button
            onClick={() => setDrawerState("peerInfo")}
            className={`flex-1 py-[11px] rounded-br-[4px] text-[13px] font-roboto leading-[1.37] ${
              drawerState === "peerInfo" && "bg-[#98B0A9]"
            } ${
              drawerState === "peerInfo" ? "text-[#354B45]" : "text-[#000000]"
            } ${drawerState === "peerInfo" ? "font-[900]" : "font-[400]"}`}
          >
            Peer Information
          </button>
          <button
            onClick={() => setDrawerState("keyActs")}
            className={`flex-1 py-[11px] rounded-bl-[4px] text-[13px] font-roboto leading-[1.37] ${
              drawerState === "keyActs" && "bg-[#98B0A9]"
            } ${
              drawerState === "keyActs" ? "text-[#354B45]" : "text-[#000000]"
            } ${drawerState === "keyActs" ? "font-[900]" : "font-[400]"}`}
          >
            Key Activities
          </button>
        </div>
        <div className="px-[17px] pt-[21px] pb-[28px]">
          {drawerState === "peerInfo" ? (
            <>
              <h2 className="text-[#000000] text-[16px] font-roboto font-[800] leading-[1.37]">
                Interests
              </h2>
              <div className="flex flex-wrap gap-[7px] mt-[12px]">
                <Link
                  href={""}
                  className="text-[#5D4C80] text-[14px] font-roboto font-[900] leading-[1.37]"
                >
                  #Business
                </Link>
                <Link
                  href={""}
                  className="text-[#5D4C80] text-[14px] font-roboto font-[900] leading-[1.37]"
                >
                  #Media
                </Link>
                <Link
                  href={""}
                  className="text-[#5D4C80] text-[14px] font-roboto font-[900] leading-[1.37]"
                >
                  #Manufacturing
                </Link>
                <Link
                  href={""}
                  className="text-[#5D4C80] text-[14px] font-roboto font-[900] leading-[1.37]"
                >
                  #Mentorship
                </Link>
                <Link
                  href={""}
                  className="text-[#5D4C80] text-[14px] font-roboto font-[900] leading-[1.37]"
                >
                  #Technology
                </Link>
              </div>
              <h2 className="text-[#000000] text-[16px] font-roboto font-[800] leading-[1.37] mt-[32px]">
                Academic Status
              </h2>
              <div className="flex flex-col gap-[14px] mt-[10px] text-[#474747] text-[14px] font-roboto font-[500] leading-[1.37]">
                <div className="flex gap-[10px] items-center">
                  <Image
                    src={"/images/icon-alumni.png"}
                    height={22}
                    width={22}
                    alt="Alumni"
                  />
                  Alumni
                </div>
                <div className="flex gap-[10px] items-center">
                  <Image
                    src={"/images/icon-graduated.png"}
                    height={22}
                    width={22}
                    alt="Graduated"
                  />
                  Graduated 2016
                </div>
                <div className="flex gap-[10px] items-center">
                  <Image
                    src={"/images/icon-university.png"}
                    height={22}
                    width={22}
                    alt="University"
                  />
                  Havard Business School
                  <Image
                    src={"/images/icon-green-tick.png"}
                    height={16}
                    width={16}
                    alt="University"
                    className="ml-[9px]"
                  />
                </div>
                <div className="flex gap-[10px] items-center">
                  <Image
                    src={"/images/icon-department.png"}
                    height={22}
                    width={22}
                    alt="Department"
                  />
                  Department of {profileData.Department}
                </div>
              </div>
            </>
          ) : (
            <div className="h-[273.1px] text-[#474747] text-[16px] font-roboto font-[400] leading-[1.37] flex items-center">
              Get started by participating in our programs, and your activities
              will appear here!
            </div>
          )}
        </div>
        <div className="border-t-[0.8px] border-[#98B0A9] px-[17px] pt-[21px] pb-[20px]">
          <h2 className="text-[#000000] text-[16px] font-roboto font-[800] leading-[1.37]">
            Room membership
          </h2>
          <div className="flex gap-[10px] overflow-x-auto horizontal-scrollbar pb-[17px] pt-[10px]">
            <div className="h-[146px] w-[165px] shrink-0 bg-[#F0F1F1] shadow-[0_1px_1px_0_rgba(0,0,0,0.25)] rounded-[20px] p-[18px] flex flex-col justify-between">
              <Image
                src={"/images/icon-hashtag.png"}
                alt="Hashtag"
                height={44}
                width={44}
              />
              <Link
                href={""}
                className="text-[#FFFFFF] text-[14px] font-roboto font-[900] leading-[1.37] bg-[#5D4C80] rounded-[30px] py-[7px] flex gap-[11px] justify-center items-center"
              >
                <Image
                  src={"/images/icon-addition.png"}
                  alt="Add"
                  height={12}
                  width={12}
                />
                Create room
              </Link>
            </div>
            <div className="h-[146px] w-[165px] shrink-0 bg-[#F0F1F1] shadow-[0_1px_1px_0_rgba(0,0,0,0.25)] rounded-[20px] p-[18px] flex flex-col justify-between">
              <div>
                <Image
                  src={"/images/picture-room-sample.png"}
                  alt="Room"
                  height={35}
                  width={35}
                  className="rounded-full"
                />
                <h2 className="text-[#000000] text-[16px] font-roboto font-[900] leading-[1.37] mt-[7px]">
                  Room #54A
                </h2>
              </div>
              <div>
                <div className="flex gap-[10px] items-center text-[#000000] text-[12px] font-roboto font-[400] leading-[1.37]">
                  <Image
                    src={"/images/icon-online.png"}
                    height={11}
                    width={11}
                    alt="Alumni"
                  />
                  20 online
                </div>
                <div className="flex gap-[10px] items-center text-[#000000] text-[12px] font-roboto font-[400] leading-[1.37]">
                  <Image
                    src={"/images/icon-members.png"}
                    height={17}
                    width={17}
                    alt="Members"
                  />
                  30 members
                </div>
              </div>
            </div>
            <div className="h-[146px] w-[165px] shrink-0 bg-[#F0F1F1] shadow-[0_1px_1px_0_rgba(0,0,0,0.25)] rounded-[20px] p-[18px] flex flex-col justify-between">
              <div>
                <Image
                  src={"/images/picture-room-sample.png"}
                  alt="Room"
                  height={35}
                  width={35}
                  className="rounded-full"
                />
                <h2 className="text-[#000000] text-[16px] font-roboto font-[900] leading-[1.37] mt-[7px]">
                  Room #54A
                </h2>
              </div>
              <div>
                <div className="flex gap-[10px] items-center text-[#000000] text-[12px] font-roboto font-[400] leading-[1.37]">
                  <Image
                    src={"/images/icon-online.png"}
                    height={11}
                    width={11}
                    alt="Alumni"
                  />
                  20 online
                </div>
                <div className="flex gap-[10px] items-center text-[#000000] text-[12px] font-roboto font-[400] leading-[1.37]">
                  <Image
                    src={"/images/icon-members.png"}
                    height={17}
                    width={17}
                    alt="Members"
                  />
                  30 members
                </div>
              </div>
            </div>
            <div className="h-[146px] w-[165px] shrink-0 bg-[#F0F1F1] shadow-[0_1px_1px_0_rgba(0,0,0,0.25)] rounded-[20px] p-[18px] flex flex-col justify-between">
              <div>
                <Image
                  src={"/images/picture-room-sample.png"}
                  alt="Room"
                  height={35}
                  width={35}
                  className="rounded-full"
                />
                <h2 className="text-[#000000] text-[16px] font-roboto font-[900] leading-[1.37] mt-[7px]">
                  Room #54A
                </h2>
              </div>
              <div>
                <div className="flex gap-[10px] items-center text-[#000000] text-[12px] font-roboto font-[400] leading-[1.37]">
                  <Image
                    src={"/images/icon-online.png"}
                    height={11}
                    width={11}
                    alt="Alumni"
                  />
                  20 online
                </div>
                <div className="flex gap-[10px] items-center text-[#000000] text-[12px] font-roboto font-[400] leading-[1.37]">
                  <Image
                    src={"/images/icon-members.png"}
                    height={17}
                    width={17}
                    alt="Members"
                  />
                  30 members
                </div>
              </div>
            </div>
            <div className="h-[146px] w-[165px] shrink-0 bg-[#F0F1F1] shadow-[0_1px_1px_0_rgba(0,0,0,0.25)] rounded-[20px] p-[18px] flex flex-col justify-between">
              <div>
                <Image
                  src={"/images/picture-room-sample.png"}
                  alt="Room"
                  height={35}
                  width={35}
                  className="rounded-full"
                />
                <h2 className="text-[#000000] text-[16px] font-roboto font-[900] leading-[1.37] mt-[7px]">
                  Room #54A
                </h2>
              </div>
              <div>
                <div className="flex gap-[10px] items-center text-[#000000] text-[12px] font-roboto font-[400] leading-[1.37]">
                  <Image
                    src={"/images/icon-online.png"}
                    height={11}
                    width={11}
                    alt="Alumni"
                  />
                  20 online
                </div>
                <div className="flex gap-[10px] items-center text-[#000000] text-[12px] font-roboto font-[400] leading-[1.37]">
                  <Image
                    src={"/images/icon-members.png"}
                    height={17}
                    width={17}
                    alt="Members"
                  />
                  30 members
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[0.8px] border-[#98B0A9] px-[17px] pt-[21px] pb-[20px]">
          <div className="flex items-center justify-between">
            <h2 className="text-[#000000] text-[16px] font-roboto font-[800] leading-[1.37]">
              Recommendations
            </h2>
            <Link
              href={""}
              className="text-[#474747] text-[16px] font-roboto font-[500] leading-[1.37] flex items-center gap-[12px]"
            >
              View all
              <Image
                src={"/images/icon-view-down.png"}
                alt="view all"
                height={7}
                width={12}
                className="-rotate-90"
              />
            </Link>
          </div>
          <div className="flex gap-[15px] items-center text-[#000000] text-[12px] font-roboto font-[400] leading-[1.37] mt-[12px]">
            <Image
              src={"/images/picture-medina-foster.png"}
              height={26}
              width={26}
              alt="Recommender"
            />
            <p className="relative">
              Recommended by <span className="font-[900]">Medina Foster</span>
              <span className="absolute bottom-[-16px] left-0 text-[10px] opacity-[60%]">
                9hr ago
              </span>
            </p>
          </div>
          <div className="flex gap-[15px] items-center text-[#000000] text-[12px] font-roboto font-[400] leading-[1.37] mt-[17px]">
            <Image
              src={"/images/icon-recommendations.png"}
              height={26}
              width={26}
              alt="Recommender"
            />
            15 recommendations
          </div>
          <div className="flex gap-[12.5px] mt-[25px] items-center">
            <button className="bg-[#0F7863] px-[23px] py-[8px] rounded-[200px] text-[#FFFFFF] text-[11px] font-roboto font-[900] leading-[1.37]">
              Recommend
            </button>
            <button>
              <Image
                src={"/images/icon-info.png"}
                height={26}
                width={26}
                alt="Recommender"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDrawer;
