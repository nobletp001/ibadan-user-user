import React from "react";
import MapImage from "./MapImage";
import Form from "./Form";
import Image from "next/image";
import Logo from "@/public/Ibadan-agent-logo.svg";

const MainHome = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-h-screen items-center justify-between">
      {/* On mobile, order is reversed */}
      <div className="w-full lg:w-[70%] h-auto bg-white rounded-[20px] shadow border border-neutral-200 md:order-2">
        <div className="p-6">
          <Image src={Logo} alt="" />
        </div>
        <div className="w-full h-auto flex items-center justify-center flex-col">
          <Form />
        </div>
      </div>

      <div className="w-full lg:w-[30%] h-screen lg:justify-center lg:items-end flex mt-7 mb-1 md:order-1">
        <MapImage />
      </div>
    </div>
  );
};

export default MainHome;
