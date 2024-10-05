import Image from "next/image";
import Link from "next/link";

const UploadVideoLink = () => {
  return (
    <Link
      href={""}
      className="text-[#FFFFFF] text-[14px] font-roboto font-[900] leading-[1.37] bg-[#5D4C80] rounded-[30px] px-[19px] py-[12px] flex gap-[11px] items-center"
    >
      <Image src={"/images/icon-addition.png"} alt="Add" height={9} width={9} />
      Upload video
    </Link>
  );
};

export default UploadVideoLink;
