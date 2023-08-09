import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import TaskBoard from "@/components/TaskBoard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    
      <main className=" mx-4 my-2">
        <TaskBoard />
      </main>
    
  );
}
