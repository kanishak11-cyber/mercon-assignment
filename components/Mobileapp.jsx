
import { TbPencil } from "react-icons/tb";
import { FiLink2 } from "react-icons/fi";
import { AddSquare } from "iconsax-react";

const Mobileapp = () => {
  return (
    <div className='md:flex md:flex-grow  justify-between flex-row w-full'>
      <div className="text-2xl md:text-3xl lg:text-5xl text-[ #0D062D] font-bold flex  items-center text-center gap-3">
        Mobile App 
        
        <div>
            <TbPencil className='text-[#5030E5] md:text-[32px]  text-md bg-[#dcd6fa] rounded-xl p-1' />
        </div>
        <div>
            <FiLink2 className='text-[#5030E5] md:text-[32px] text-md bg-[#dcd6fa] rounded-xl p-1' />
        </div>
         
      </div>
      <div className="flex flex-row  gap-3 my-4">
        <div className="text-[#5030E5] text-[16px] font-normal flex flex-row gap-2 items-center text-center ">
        <AddSquare size="28" color="#5030E5" variant="Outline" backgroundcolor='#dcd6fa'/>
            Invite
        </div>
        <img
         src='/asset/group.png'
         width={120}
         height={50}
        />
      </div>
    </div>
  );
};

export default Mobileapp;
