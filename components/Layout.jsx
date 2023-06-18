import { Nav } from "./Nav";
import { Topbar } from "./Topbar";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen ">
      <Nav />
      <div >
        <Topbar />
      <div className='flex flex-row'>
        {children}
      </div>
      </div>
      
      
    </div>
  );
}