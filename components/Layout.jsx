import { Nav } from "./Nav";
import { Topbar } from "./Topbar";

export default function Layout({ children }) {
  return (
    <div className="min-w-full min-h-screen  h-screen overflow-hidden">
      <Nav />
      <Topbar />
     
        
      <div className='pl-72 pt-20'>
        {children}
      </div>
      
      
      
    </div>
  );
}
