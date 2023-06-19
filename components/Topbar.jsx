import Image from "next/image";
import Profile from "@/asset/profile.png";
import {
  Calendar2,
  MessageQuestion,
  Notification,
  SearchNormal1,
  ArrowDown2,
} from "iconsax-react";

export const Topbar = () => {
  return (
    <div className="pl-60 h-16 border-b w-full fixed mt-2 justify-between pr-5 items-center flex ">
      <div className=" flex flex-row rounded-lg bg-[#F5F5F5]   h-8 px-4 py-2  ml-5 w-1/3 items-center align-middle gap-3  ">
        <SearchNormal1 size="20" color="#697689" />
        <input
          type="text"
          placeholder="Search for anything..."
          className="bg-transparent "
        />
      </div>
      <div className="flex justify-between gap-16" >
        <div className="flex gap-5 items-center">
          <Calendar2 size="32" color="#697689" variant="TwoTone" />
          <MessageQuestion size="32" color="#697689" variant="TwoTone" />
          <Notification size="32" color="#697689" variant="TwoTone" />
        </div>
        <div className='flex flex-row  gap-4 text-center items-center justify-end'>
          <h1 className="text-[16px] flex-col flex text-[#0D062D] font-bold ">
            Anima Agrawal
            <span className="text-[14px] text-[#787486]  font-normal text-right">
              U.P, India
            </span>
          </h1>
          <Image
            src={Profile}
            height={60}
            width={60}
            className="rounded-full"
          />
          <button>
            <ArrowDown2 size="28" color="#697689" />
          </button>
        </div>
      </div>
    </div>
  );
};
