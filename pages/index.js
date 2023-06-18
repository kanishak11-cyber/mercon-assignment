import { Inter } from "@next/font/google";
import Layout from "@/components/Layout";
import Mobileapp from "@/components/Mobileapp";
import IconLayout from "@/components/IconLayout";
import ListLayout from "@/components/ListLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col mx-4 max-w-full">
          <Mobileapp />
          <IconLayout />
          <ListLayout />
        </div>
      </Layout>
    </>
  );
}
