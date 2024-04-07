"use client";

import MapImage from "@/components/MapImage";
import React from "react";
import BuyForms from "../widgets/Buy/BuyForms";
import RentForms from "../widgets/Rent/RentForms";

const RentProperty = () => {
  return (
    <div className="flex flex-col md:flex-row w-full my-4 min-h-screen items-center justify-between">
      <div className="w-full lg:w-[30%]   order-2 lg:order-1 h-auto lg:justify-center lg:items-end flex mt-7 mb-1">
        <MapImage />
      </div>

      <div className=" w-full lg:h-full h-auto lg:w-[70%] order-1 lg:order-2 ">
        <RentForms />
      </div>
    </div>
  );
};

export default RentProperty;
