const SearchBar = () => {
  return (
    <div className="relative">
      <input
        name="search"
        placeholder="Search"
        type="text"
        className="text-[#2B2E48] placeholder:text-[#7D7D7D] text-[14px] font-roboto border border-[#DCDCDD] rounded-[8px] pl-[38px] pr-[8px] py-[10px]"
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
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.0151 15.4043L17.9518 18.3334"
            stroke="#7D7D7D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
