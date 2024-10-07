import NavLink from "./NavLink";
import Image from "next/image";
import DashboardIcon from "./icons/DashboardIcon";
import SkillLibraryIcon from "./icons/SkillLibraryIcon";
import PeersIcon from "./icons/PeersIcon";
import PlacementsIcon from "./icons/PlacementsIcon";
import EmployersIcon from "./icons/EmployersIcon";
import IntegrationsIcon from "./icons/IntegrationsIcon";
import SettingsIcon from "./icons/SettingsIcon";
import LogoutIcon from "./icons/LogoutIcon";
import RoomsIcon from "./icons/RoomsIcon";
const NavBar = () => {
  return (
    <div className="flex flex-col justify-between h-[100vh] overflow-y-auto no-scrollbar bg-[white] py-[25px]">
      <div className="space-y-[14px]">
        <Image
          src={"/images/logo-student-paddy.png"}
          width={156}
          height={44}
          alt="Student paddy"
          priority
          className="ml-[34px] mr-[60.77px] mb-[39.5px]"
        />
        <NavLink Icon={<DashboardIcon />} label="Dashboard" href="/dashboard" />
        <NavLink Icon={<PeersIcon />} label="Peers" href="/peers" />
        <NavLink Icon={<RoomsIcon />} label="Rooms" href="/rooms" />
        <NavLink
          Icon={<SkillLibraryIcon />}
          label="Skill Library"
          href="/skill-library"
        />
        <NavLink
          Icon={<PlacementsIcon />}
          label="Placements"
          href="/placements"
        />
        <NavLink Icon={<EmployersIcon />} label="Employers" href="/employers" />
        <NavLink
          Icon={<IntegrationsIcon />}
          label="Integrations"
          href="/integrations"
        />
      </div>
      <div className="space-y-[14px] mt-[14px]">
        <NavLink Icon={<SettingsIcon />} label="Settings" href="/settings" />
        <NavLink Icon={<LogoutIcon />} label="Logout" href="/logout" />
      </div>
    </div>
  );
};

export default NavBar;
