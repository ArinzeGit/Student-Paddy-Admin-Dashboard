import Image from "next/image";
import Link from "next/link";
// Import Open Sans using next/font/google
import { Open_Sans } from "next/font/google";

// Set font configuration
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"], // You can choose different weights
});

const TopPeerByActivityCard = () => {
  return (
    <div className="bg-white rounded-[8px] min-h-[450px] min-w-[364px] p-[24px]">
      <h2 className="text-[#2B2E48] text-[21px] font-roboto font-[500] leading-[1.37] tracking-1 ">
        Top peer by activity
      </h2>
      <div className="flex justify-between items-center mt-[6px]">
        <div>
          <span className="text-[#7D7D7D] text-[14px] font-roboto font-[400] leading-[1.43]">
            Aug 10, Mon
          </span>
          <span className="bg-[#2B2E48] px-[7px] py-[3px] ml-[3px] rounded-[300px] text-[#FFFFFF] text-[10px] font-roboto font-[500] leading-[1.37]">
            TODAY
          </span>
        </div>
        <div>
          <button>
            <Image
              src={"/images/icon-arrow-left.png"}
              alt="Arrow left"
              width={24}
              height={24}
              className="inline-block"
            />
          </button>
          <button>
            <Image
              src={"/images/icon-arrow-right.png"}
              alt="Arrow right"
              width={24}
              height={24}
              className="inline-block ml-[7px]"
            />
          </button>
        </div>
      </div>
      <div className="flex gap-[20px] items-center mt-[12px] screen2:mt-[36px]">
        <Link
          href={"/peers/total-peers"}
          className="h-[90px] w-[90px] screen1:h-[124px] screen1:w-[124px] rounded-[50%] overflow-hidden relative"
        >
          <Image
            src={"/images/picture-evelyn-johnson.png"}
            alt="Profile picture"
            fill
            className="object-cover"
            sizes="(max-width: 750px) 100vw, 750px"
          />
        </Link>
        <div>
          <Link href={"/peers/total-peers"}>
            <h2
              className={`${openSans.className} text-[#000000] text-[20px] font-[600] leading-[1.36] ml-[2px]`}
            >
              Evelyn Johnson
            </h2>
          </Link>
          <div className="flex items-center gap-[12px] mt-[13px]">
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
              Recommend
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[163fr_153fr] screen3:grid-cols-[1fr] gap-y-[12px] screen2:gap-y-[20px] screen3:gap-y-[12px] screen4:gap-y-[25px] mt-[13px] screen2:mt-[36px] text-[#2B2E48] text-[12px] font-roboto font-[400] leading-[1.37]">
        <div className="flex gap-[10px] items-center">
          <Image
            src={"/images/icon-recommendations.png"}
            height={24}
            width={24}
            alt="Recommendations"
          />
          15 recommendations
        </div>
        <div className="flex gap-[10px] items-center">
          <Image
            src={"/images/icon-up-skilling-time.png"}
            height={22}
            width={22}
            alt="Up-skilling time"
          />
          10 hrs upskilling
        </div>
        <div className="flex gap-[10px] items-center">
          <Image
            src={"/images/icon-portfolio-uploads.png"}
            height={24}
            width={24}
            alt="Portfolio uploads"
          />
          100 portfolio uploads
        </div>
        <div className="flex gap-[10px] items-center">
          <Image
            src={"/images/icon-earned-badges.png"}
            height={24}
            width={24}
            alt="Earned badges"
          />
          30 badges
        </div>
      </div>
      <h2 className="text-[#000000] text-[16px] font-roboto font-[800] leading-[1.37] mt-[13px] screen2:mt-[30px] screen3:mt-[20px] screen4:mt-[40px]">
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
          University of Lagos
        </div>
        <div className="flex gap-[10px] items-center">
          <Image
            src={"/images/icon-department.png"}
            height={22}
            width={22}
            alt="Department"
          />
          Department of Human Kinetic Studies
        </div>
      </div>
    </div>
  );
};

export default TopPeerByActivityCard;
