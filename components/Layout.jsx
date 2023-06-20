import { Nav } from "./Nav";
import { Topbar } from "./Topbar";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";
import { HambergerMenu } from "iconsax-react";

export default function Layout({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`min-w-full min-h-screen no-scrollbar h-screen  overflow-scrollbar ${inter.className} `}
    >
      <div>
        {open ? (

          <button 
          
          onClick={() =>setOpen(false)}>
<Nav  />
          </button>
          
        ) : (
          <HambergerMenu
            size="24"
            color="#787486"
            onClick={() => setOpen(true)}
            className="w-10 h-10 fixed top-4 left-4 z-10"
          />
        )}

        {/* <Nav /> */}
        <Topbar />
      </div>
      {open? (
        <div className="lg:pl-60 pl-40 pt-20  no-scrollbar ">{children}</div>
      ):(
        <div className="pl-0  pt-20  no-scrollbar ">{children}</div>
      )}

      
    </div>
  );
}
