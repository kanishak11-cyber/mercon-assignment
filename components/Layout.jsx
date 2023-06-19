import { Nav } from "./Nav";
import { Topbar } from "./Topbar";

export default function Layout({ children }) {
  return (
    <div className="min-w-full min-h-screen no-scrollbar h-screen    ">
      <Nav />
      <Topbar />
      <div className="pl-60 pt-20 no-scrollbar ">{children}</div>
    </div>
  );
}
