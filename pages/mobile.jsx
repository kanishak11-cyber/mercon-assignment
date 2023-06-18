import IconLayout from "@/components/IconLayout";
import Layout from "@/components/Layout";
import ListLayout from "@/components/ListLayout";
import Mobileapp from "@/components/Mobileapp";
import React from "react";

const mobile = () => {
  return (
    <Layout>
      
        <div className="flex flex-col mx-4 max-w-full">
        {/* mobile toggle */}
        <Mobileapp />
        <IconLayout />
        <ListLayout/>
      </div>
      
    </Layout>
  );
};

export default mobile;
