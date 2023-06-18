import React from "react";
import { TbPencil } from "react-icons/tb";
import { FiLink2 } from "react-icons/fi";
import Image from "next/image";
import Group from "@/asset/group.png"
import { AddSquare } from "iconsax-react";

const Mobileapp = () => {
  return (
    <div className='flex flex-grow justify-between w-[80vw]'>
      <div className="text-[46px] text-[ #0D062D] font-bold flex flex-row items-center text-center gap-3">
        Mobile App 
        <button>
            <TbPencil className='text-[#5030E5] text-[32px] bg-[#dcd6fa] rounded-xl p-1' />
        </button>
        <button>
            <FiLink2 className='text-[#5030E5] text-[32px] bg-[#dcd6fa] rounded-xl p-1' />
        </button>
         
      </div>
      <div className="flex flex-row gap-3 my-4">
        <button className="text-[#5030E5] text-[16px] font-normal flex flex-row gap-2 items-center text-center ">
        <AddSquare size="28" color="#5030E5" variant="Outline" backgroundColor='#dcd6fa'/>
            Invite
        </button>
        <Image 
         src={Group}
         width={120}
         height={50}
        />
      </div>
    </div>
  );
};

export default Mobileapp;
