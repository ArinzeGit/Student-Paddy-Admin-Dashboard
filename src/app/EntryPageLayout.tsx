import SearchBar from "@/components/SearchBar";
import "./globals.css";
import Image from "next/image";

const EntryPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[97.4%] mx-[auto] h-screen flex flex-col">
      <div className="bg-white px-[24px] py-[20px] rounded-[8px] flex justify-between mb-[10px]">
        <SearchBar />
        <div className="flex items-center space-x-[24px]">
          <Image
            src={"/images/icon-notification-bell.png"}
            width={17}
            height={20}
            alt="Notification"
          />
          <div className="flex items-center space-x-[15px]">
            <Image
              src={"/images/logo-unilag.png"}
              width={40}
              height={40}
              alt="Unilag logo"
            />
            <div>
              <p className="font-roboto font-[500] text-[14px] text-[#2B2E48] leading-[1.37] mb-[2px]">
                University of Lagos
              </p>
              <p className="font-roboto font-[500] text-[10px] text-[#7D7D7D] leading-[1.37]">
                admin@unilag.edu.ng
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto pt-[14px] pb-[43px] no-scrollbar">
        {children}
      </div>
    </div>
  );
};

export default EntryPageLayout;
