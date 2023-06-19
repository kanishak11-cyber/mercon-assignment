import { Inter } from "@next/font/google";
import Layout from "@/components/Layout";
import Mobileapp from "@/components/Mobileapp";
import IconLayout from "@/components/IconLayout";
import TaskBoard from "@/components/TaskBoard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <div className=" mx-4 my-2">
          <Mobileapp />
          <IconLayout />      
          <TaskBoard />
        </div>
      </Layout>
    </>
  );
}
