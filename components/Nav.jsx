import Image from "next/image";
import Logo from "@/asset/logo.png";
import { Inter } from "@next/font/google";
import {
  AddSquare,
  ArrowLeft2,
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
  const inactiveLink =
    "flex gap-2 w-full my-2 align-middle text-center items-center  px-4 py-2  rounded-lg";
  const activeLink =
    inactiveLink + " bg-slate-100 text-[5030E5] font-bold rounded-xl ";
  return (
    <div
      className={` fixed inset-y-0 left-0 bg-white border-r w-72 ${inter.className}  `}
    >
      <div className="h-20 items-center align-center ">
        <div className="h-12 flex gap-2 items-center align-center  mt-5 mx-4">
          <Image src={Logo} height={40} width={40} />
          <span className="text-[#0D062D] font-bold text-3xl align-middle flex items-center ">
            Project M.
            <HiChevronDoubleLeft className="text-[#697689]" />
          </span>
        </div>
      </div>

      <ul className="gap-1 px-4 mx-2 border-b text-[#787486] flex flex-col">
        <li className="flex items-center my-2">
          <Category size="32" color="#787486" padding="2px" />
          <span className="text-2xl px-2 py-1">Home</span>
        </li>

        <li className="flex items-center my-2 ">
          <Message size="32" color="#787486" />
          <span className="text-2xl px-2 py-1">Messages</span>
        </li>

        <li className="flex items-center my-2 ">
          <TaskSquare size="32" color="#787486" />
          <span className="text-2xl px-2 py-1">Task</span>
        </li>

        <li className="flex items-center my-2 ">
          <Profile2User size="32" color="#787486" />
          <span className="text-2xl px-2 py-1">Members</span>
        </li>
        <li className="flex items-center my-2 ">
          <Setting2 size="32" color="#787486" />
          <span className="text-2xl px-2 py-1">Setting</span>
        </li>
      </ul>

      <div className="flex flex-row text-[#697689] text-xl font-bold px-2 py-1 justify-between">
        <div>MY PROJECTS</div>
        <div>
          <AddSquare size="24" color="#787486" className="mr-4 mx-4" />
        </div>
      </div>

      <ul className="border-b">
        <li className={activeLink}>
          <div className="w-2 h-2 bg-[#7AC555] rounded-full"></div>

          <span className="text-[16px]">Mobile App</span>
        </li>
        <li className={inactiveLink}>
          <div className="w-2 h-2 bg-[#FFA500] rounded-full"></div>
          <span className="text-[16px]">Website Redesign</span>
        </li>
        <li className={inactiveLink}>
          <div className="w-2 h-2 bg-[#E4CCFD] rounded-full"></div>

          <span className="text-[16px]">Design System</span>
        </li>
        <li className={inactiveLink}>
          <div className="w-2 h-2 bg-[#76A5EA] rounded-full"></div>

          <span className="text-[16px]">Wireframe</span>
        </li>
      </ul>

      <div className=" relative mt-20 rounded-2xl bg-[#5030E514] mx-5  ">
        <div className=" absolute inset-x-0 -top-12 flex items-center justify-center ">
          <div className=" flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 backdrop-blur-xl ">
            <div className=" bg-[#FCD64AB2] rounded-full w-10 h-10 ">
              <div className=" absolute flex justify-center items-center backdrop-blur-md w-16 h-16 top-0 right-0 left-0 rounded-full ">
                <LampOn variant="Bulk" size="34" color="#FBCB18" />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center space-y-5 px-10 lg:px-5 py-5 mb-20 ">
          <p className=" mt-3 font-medium text-black ">Thoughts Time</p>
          <p className=" text-center text-xs text-grayColor ">
            We don't have any notice for you, till then you can share your
            thoughts with your peers.
          </p>

          <input
            className=" rounded m-2 p-2 bg-white px-6 lg:px-3 py-3 text-center text-sm font-medium text-black"
            placeholder="Write a message"
          />
        </div>
      </div>
    </div>
  );
};
