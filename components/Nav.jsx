import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "@/asset/logo.png";
import { Inter } from "@next/font/google";
import {
  AddSquare,
  ArrowLeft2,
  Category,
  Message,
  Profile2User,
  Setting2,
  TaskSquare,
} from "iconsax-react";
import {HiChevronDoubleLeft} from 'react-icons/hi'
const inter = Inter({ subsets: ["latin"] });
export const Nav = () => {
  const router = useRouter();
  const inactiveLink =
    "flex gap-2 w-full my-2 align-middle text-center items-center  px-4 py-2  rounded-lg";
  const activeLink = inactiveLink + " bg-slate-100 text-[5030E5] font-bold rounded-xl ";
  const { pathname } = router;
  return (
    <aside className=" p-4 pr-0  border-r my-4  ">
      <Link href="/" className="flex gap-1 my-4 border-b  mr-4">
        <div className="flex flex-row gap-2 ">
          <Image src={Logo} height={40} width={40} />
        <span className="text-[#0D062D] font-bold text-[20px] align-middle flex items-center gap-x-4">
          Project M.
          <HiChevronDoubleLeft className="text-[#697689]"/>
        </span>
        
        </div>
        
      </Link>

      <nav className="flex flex-col gap-2 text-[#787486]">
        <Link href="" className="flex gap-2 ">
          <Category size="32" color="#787486" />
          <span>Home</span>
        </Link>

        <Link href="" className="flex gap-1 ">
          <Message size="32" color="#787486" />
          <span>Messages</span>
        </Link>

        <Link href="" className="flex gap-1 ">
          <TaskSquare size="32" color="#787486" />
          <span>task</span>
        </Link>

        <Link href="" className="flex gap-1 ">
          <Profile2User size="32" color="#787486" />
          <span>Members</span>
        </Link>

        <Link href="" className="flex gap-1 ">
          <Setting2 size="32" color="#787486" />
          <span>Setting</span>
        </Link>
        <hr className=" mx-1 py-2" />
      </nav>

      <div className="font-bold flex flex-col gap-2 text-[12px] text-[#787486]">
        <span className="flex flex-row">
          MY PROJECTS
          <AddSquare size="24" color="#787486" className="mr-4 mx-4" />
        </span>
      </div>
      <Link
        href="/mobile"
        className={pathname === "/mobile" || pathname === '/' ? activeLink : inactiveLink}
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#7AC555" />
        </svg>
        <h1 className="text-[16px]">Mobile App</h1>
      </Link>
      <Link
        href="/website"
        className={pathname.includes("/website") ? activeLink : inactiveLink}
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#FFA500" />
        </svg>
        <span className="text-[16px]">Website Redesign</span>
      </Link>
      <Link
        href="/design"
        className={pathname.includes("/design") ? activeLink : inactiveLink}
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#E4CCFD" />
        </svg>
        <span className="text-[16px]">Design System</span>
      </Link>

      <Link
        href="/wireframe"
        className={pathname.includes("/wireframe") ? activeLink : inactiveLink}
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#76A5EA" />
        </svg>
        <span className="text-[16px]">Wireframe</span>
      </Link>
    </aside>
  );
};
