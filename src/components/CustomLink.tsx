"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CustomLinkProps {
  label: string;

  href: string;
}

const CustomLink = ({ label, href }: CustomLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "bg-[#0F7863]  text-[#FFFFFF] "
          : "bg-[#FFFFFF]  text-[#2B2E48] "
      } text-[16px] font-[500] font-roboto leading-[1.37] tracking-1 px-[25px] py-[9.5px] rounded-[8px] block`}
    >
      {label}
    </Link>
  );
};

export default CustomLink;
