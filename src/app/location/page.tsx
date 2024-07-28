import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex text-[32px] w-screen justify-center items-center h-[30vh]">
        Location Page will come here
      </div>
      <div className="flex absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default page;
