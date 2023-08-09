import { Inter } from "@next/font/google";
import {
  AddSquare,
  Category,
  LampOn,
  Message,
  Profile2User,
  Setting2,
  TaskSquare,
} from "iconsax-react";
import { HiChevronDoubleLeft } from "react-icons/hi";


const inter = Inter({ subsets: ["latin"] });
export const Nav = () => {

  const dot =[
    {
      "icon": <Category size="24" />,
      "title": "Home",
    },
    {
      "icon": <Message size="24"  />,
      "title": "Messages",
    },
    {
      "icon": <TaskSquare size="24"  />,
      "title": "Task",
    },
    {
      "icon": <Profile2User size="24"  />,
      "title": "Members",
    },
    {
      "icon": <Setting2 size="24"   />,
      "title": "Setting",
    },
  ]

  const inactiveLink =
    "flex gap-2 w-full my-2 align-middle text-center items-center  px-4 py-2  rounded-lg";
  const activeLink =
    inactiveLink + " bg-slate-100 text-[5030E5] font-bold rounded-xl ";

  

  return (
    <div
      className={` fixed inset-y-0 left-0 bg-white z-10 border-r mt-2 lg:w-60 w-40 ${inter.className}  overflow-y-scroll no-scrollbar`}
    >
      <div className=" h-20 items-center align-center   ">
        <div className="h-20 flex gap-2 items-center align-center border-b mt-4 px-4">
          <img src='/asset/logo.png' height={40} width={40} className="w-4 h-4 lg:w-10 lg:h-10" />
          <span className="text-[#0D062D] font-bold lg:text-xl text-sm align-middle flex items-center ">
            Project M.
            <h1 >
              <HiChevronDoubleLeft className="text-[#697689]" />
            </h1>
          </span>
        </div>
      </div>

      <div className="gap-1 px-4 mx-2 border-b text-[#787486] flex flex-col lg:text-md text-xs">
  {dot.length > 0 && dot.map((dap, index) => (
    <div key={index}>
      <li className="flex items-center my-2 gap-2">
        {dap.icon}
        {dap.title}
      </li>
    </div>
  ))}
</div>


      <div className="flex flex-row text-[#697689] lg:text-md text-xs my-1 mx-2 font-bold lg:px-2 px-0 py-1 justify-between">
        <div>MY PROJECTS</div>
        <div>
          <AddSquare size="20" color="#787486" className="lg:mr-4 lg:mx-4 mx-1 mr-1" />
        </div>
      </div>

      <ul className="border-b my-1 mx-2">
        <li className={`${activeLink} `}>
          <div className="w-2 h-2 bg-[#7AC555] rounded-full"></div>
          
          <div className="flex lg:gap-16 gap-2"> <div className="lg:text-[16px] text-[10px]">Mobile App</div>
          <div className="">...</div></div>
        </li>
        <li className={inactiveLink}>
          <div className="w-2 h-2 bg-[#FFA500] rounded-full"></div>
          <span className="lg:text-[16px] text-[10px]">Website Redesign</span>
        </li>
        <li className={inactiveLink}>
          <div className="w-2 h-2 bg-[#E4CCFD] rounded-full"></div>

          <span className="lg:text-[16px] text-[10px]">Design System</span>
        </li>
        <li className={inactiveLink}>
          <div className="w-2 h-2 bg-[#76A5EA] rounded-full"></div>

          <span className="lg:text-[16px] text-[10px]">Wireframe</span>
        </li>
      </ul>

      <div className=" relative mt-20 rounded-2xl bg-[#5030E514] mx-5  ">
        <div className=" absolute inset-x-0 -top-12 flex items-center justify-center ">
          <div className=" flex h-16  w-16  items-center justify-center rounded-full bg-gray-100 backdrop-blur-xl ">
            <div className=" bg-[#FCD64AB2] rounded-full w-10 h-10  ">
              <div className=" absolute flex justify-center items-center backdrop-blur-md w-16  h-16 top-0 right-0 left-0 rounded-full ">
                <LampOn variant="Bulk" size="34" color="#FBCB18" />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center space-y-5 lg:px-10 px-4 py-5 mb-20 ">
          <p className=" mt-3 font-medium text-black text-[10px] lg:text-[16px]">Thoughts Time</p>
          <p className=" lg:text-center text-justify text-[8px] lg:text-[16px] text-grayColor ">
            We don't have any notice for you, till then you can share your
            thoughts with your peers.
          </p>

          <input
            className=" rounded-xl  bg-white px-1 lg:px-6 py-1 m-1 lg:m-3 text-center text-[10px] lg:text-[16px] font-medium text-black"
            placeholder="Write a message"
          />
        </div>
      </div>
    </div>
  );
};
