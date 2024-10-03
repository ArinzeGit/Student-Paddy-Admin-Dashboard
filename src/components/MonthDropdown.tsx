import Image from "next/image";

interface MOnthDropdownProps {
  label: string;
}

const MonthDropdown = ({ label }: MOnthDropdownProps) => {
  return (
    <button className="bg-[#F1F3F4] rounded-[4px] pl-[12px] pr-[4px] py-[4px] flex items-center gap-[4px]">
      <span className="text-[#2B2E48] text-[12px] font-roboto font-[400] leading[1.37]">
        {label}
      </span>
      <Image
        src={"/images/icon-month-dropdown.png"}
        alt="Month dropdown"
        width={16}
        height={16}
      />
    </button>
  );
};

export default MonthDropdown;
