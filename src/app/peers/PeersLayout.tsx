import "@/app/globals.css";
import CustomLink from "@/components/CustomLink";
import PeersIcon from "@/components/icons/PeersIcon";
import Image from "next/image";

const PeersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-[#354B45] flex items-center justify-between">
        <span className="font-roboto font-[500] text-[20px] text-[#FFFFFF] leading-[1.37] flex gap-[10px] items-center ml-[25px]">
          <PeersIcon />
          Peers
        </span>
        <button className="w-[50px] h-[50px] flex items-center justify-center bg-[#21332E]">
          <Image
            src={"/images/icon-close.png"}
            width={21}
            height={21}
            alt="Close"
          />
        </button>
      </div>

      <div className="w-[97.4%] mx-[auto] mb-[14px] mt-[24px] flex gap-[14px]">
        <CustomLink href="/peers/total-peers" label="Total Peers" />
        <CustomLink href="/peers/top-peers" label="Top Peers" />
        <CustomLink href="/peers/inactive-peers" label="Inactive Peers" />
        <CustomLink href="/peers/active-peers" label="Active Peers" />
        <CustomLink href="/peers/recommended-peers" label="Recommended Peers" />
      </div>

      <div className="w-[97.4%] mx-[auto] overflow-y-auto pt-[10px] pb-[69px]  no-scrollbar">
        {children}
      </div>
    </div>
  );
};

export default PeersLayout;
