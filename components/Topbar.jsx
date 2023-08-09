import {
  Calendar2,
  MessageQuestion,
  Notification,
  SearchNormal1,
  ArrowDown2,
  HambergerMenu,
} from "iconsax-react";


export const Topbar = () => {
  
  return (
    <div className="md:pl-60 pl-40  h-20 border-b w-full fixed  justify-between px-5 items-center flex flex-col  lg:flex-row opacity-100  bg-white ">
      
      <div className=" flex flex-row rounded-lg bg-[#F5F5F5]   h-8 px-4 py-2  ml-5 w-full  lg:w-1/3 items-center align-middle gap-3  ">
         <div className=' md:hidden lg:hidden visible'>
          <button className="focus:outline-none"
          >
            <HambergerMenu size="20" color="#697689"/>
          </button>
      
      </div>
        
        <SearchNormal1 size="20" color="#697689" />
        <input
          type="text"
          placeholder="Search for anything..."
          className="bg-transparent "
        />
      </div>
      <div className="flex flex-row    justify-between  lg:gap-16 gap-4" >
        <div className="flex gap-5 items-center">
          <ul className="flex lg:gap-5 gap-1 md:gap-1 items-center ">
            <li><Calendar2 size="24" color="#697689" variant="TwoTone" /></li>
            <li><MessageQuestion size="24" color="#697689" variant="TwoTone" /></li>
            <li><div className="w-2 h-2 ml-4 -mb-2 rounded-full z-10 bg-[#D8727D] "></div>
          <Notification size="24" color="#697689" variant="TwoTone" className="-z-10"/></li>          
          </ul>

          
        </div>

        <div className='flex flex-row  gap-4 text-center items-center '>
          <div>
            <h1 className="md:text-md lg:text-md text-xs flex-col flex text-[#0D062D] font-bold ">
            Anima Agrawal
            <span className="text-[14px] text-[#787486]  font-normal text-right">
              U.P, India
            </span>
          </h1>
          </div>
              <img
            src='/asset/profile.png'
            height={60}
            width={60}
            className="rounded-full w-12 h-12 object-cover  "
          />
              <button>
            <ArrowDown2 size="28" color="#697689" />
          </button>

        </div>
      </div>
    </div>
  );
};
