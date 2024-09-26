"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";
import NavLinkPointer from "./icons/NavLinkPointer";

interface NavLinkProps {
  label: string;
  Icon: ReactElement;
  href: string;
}

const NavLink = ({ label, Icon, href }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`flex items-center space-x-[33px] ${isActive ? "active" : ""}`}
    >
      <div className="nav-link-pointer">
        <NavLinkPointer />
      </div>
      <div
        className={`${
          isActive ? "text-[#0F7863] font-[900]" : "text-[#474747] font-[500]"
        } text-[16px] font-roboto leading-[1.37] flex items-center space-x-[10px] transition-colors duration-300 ease-in-out`}
      >
        {Icon}
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default NavLink;
