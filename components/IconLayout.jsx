import { ArrowDown2, Calendar, Category, Profile2User } from "iconsax-react";
import React from "react";
import { BiFilterAlt } from "react-icons/bi";
const IconLayout = () => {
  return (
    <div className="flex flex-grow justify-between  my-2 ">
      <div className="flex  flex-col md:flex-row lg:flex-row gap-2">
        {/* text-xl  sm:text-xl md:text-3xl lg:text-5xl */}
        <button className="text-[#787486] flex flex-row  text-md  sm:text-xs md:text-lg lg:text-xl items-center text-center align-middle gap-1 border-[#787486] border-2 rounded-md p-1">
          <BiFilterAlt /> Filter{" "}
          <ArrowDown2 size="24" color="#787486" variant="Outline" />
        </button>

        <button className="text-[#787486] flex flex-row text-md  sm:text-xs md:text-lg lg:text-xl items-center text-center align-middle gap-1 border-[#787486] border-2 rounded-md p-1">
          <Calendar size="24" color="#787486" variant="Outline" /> Today{" "}
          <ArrowDown2 size="24" color="#787486" variant="Outline" />
        </button>
      </div>
      <div className="md:flex grid-cols-2 grid md:flex-row lg:flex-row  gap-2 items-center text-center">
        <button className="text-[#787486] flex flex-row  text-md  sm:text-xs md:text-lg lg:text-xl  items-center text-center align-middle gap-1 border-[#787486] border-2 rounded-md p-1">
          <Profile2User size="24" color="#787486" variant="Outline" /> Share{" "}
        </button>

        <div className="h-10 w-0 border-2 border-[#787486]"></div>
        <div>
          {" "}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="6" fill="#5030E5" />
            <path
              d="M25.925 21.125L14.075 21.125C12.95 21.125 12.5 21.6 12.5 22.8L12.5 25.825C12.5 27.025 12.95 27.5 14.075 27.5L25.925 27.5C27.05 27.5 27.5 27.025 27.5 25.825L27.5 22.8C27.5 21.6 27.05 21.125 25.925 21.125Z"
              fill="white"
            />
            <path
              d="M25.925 12.5L14.075 12.5C12.95 12.5 12.5 12.975 12.5 14.175L12.5 17.2C12.5 18.3917 12.95 18.875 14.075 18.875L25.925 18.875C27.05 18.875 27.5 18.4 27.5 17.2L27.5 14.175C27.5 12.975 27.05 12.5 25.925 12.5Z"
              fill="white"
            />
          </svg>
        </div>
        <Category size="32" color="#787486" />
      </div>
    </div>
  );
};

export default IconLayout;
