import "./globals.css";
import Image from "next/image";

export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[97.4%] mx-[auto] h-screen flex flex-col">
      <div className="bg-white px-[24px] py-[20px] rounded-[8px] flex justify-between mb-[12px]">
        <div className="relative">
          <input
            placeholder="Search"
            type="text"
            className="text-[#2B2E48] placeholder:text-[#7D7D7D] text-[14px] font-montserrat border border-[#DCDCDD] rounded-[8px] pl-[38px] pr-[8px] py-[10px]"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-[10px] pointer-events-none">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9.80541"
                cy="9.80541"
                r="7.49047"
                stroke="#7D7D7D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.0151 15.4043L17.9518 18.3334"
                stroke="#7D7D7D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
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
              <p className="font-montserrat font-[500] text-[14px] text-[#2B2E48] leading-[1.37] mb-[2px]">
                University of Lagos
              </p>
              <p className="font-montserrat font-[500] text-[10px] text-[#7D7D7D] leading-[1.37]">
                admin@unilag.edu.ng
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pt-[12px] pb-[43px] no-scrollbar">
        {children}
      </div>
    </div>
  );
}
