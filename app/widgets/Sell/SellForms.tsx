"use client";
import SellFirstSlide from "@/components/Sell/SellFirstSlide";
import SellSecondSlide from "@/components/Sell/SellSecondSlide";
import SellThirdSlide from "@/components/Sell/SellThirdSlide";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/Ibadan-agent-logo.svg";
import { SellAgentType } from "@/app/lib/types/Request.type";
export default function SellForms() {
  const [sellAgent, setSellAgent] = useState<SellAgentType>({
    location: "",
    locationId: "",
    ownership: "",
    ownershipId: "",
    property: "",
    propertyId: "",
    subProperty: "",
    subPropertyId: "",
    document: "",
    documentId: "",
    landArea: "",
    budget: "",
    specificationDesc: "",
    firstName: "",
    lastName: "",
    whatsapContact: "",
    occupation: "",
    email: "",
    alternativeContact: "",
    isOwner: false,
  });
  const [currentForm, setCurrentForm] = useState<number>(1);

  const handleNextClick = () => {
    setCurrentForm((prevForm) => prevForm + 1);
  };

  const handlePrevClick = () => {
    setCurrentForm((prevForm) => prevForm - 1);
  };

  return (
    <div className="w-full md:w-[777px] p-10  h-auto relative bg-white rounded-[20px] shadow border border-neutral-200">
      <div className="flex items-center justify-between ">
        <div className="">
          <Image src={Logo} alt="" />
        </div>{" "}
        <div className="flex gap-2">
          <span
            className={`bg-${
              currentForm === 1 ? "[#128F40]" : "[#D9D9D9]"
            } w-[35px] h-[2px] rounded-[17px] bg-[#128F40]`}
          />
          <span
            className={`bg-${
              currentForm === 2 ? "[#128F40]" : "[#D9D9D9]"
            } w-[35px] h-[2px] rounded-[17px]`}
          />
          <span
            className={`bg-${
              currentForm === 3 ? "[#128F40]" : "[#D9D9D9]"
            } w-[35px] h-[2px] rounded-[17px]`}
          />
        </div>
      </div>
      <div className=" w-full ">
        {currentForm === 1 && (
          <SellFirstSlide
            handleNextClick={handleNextClick}
            sellAgent={sellAgent}
            setSellAgent={setSellAgent}
          />
        )}
        {currentForm === 2 && (
          <SellSecondSlide
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
            sellAgent={sellAgent}
            setSellAgent={setSellAgent}
          />
        )}
        {currentForm === 3 && (
          <SellThirdSlide
            handlePrevClick={handlePrevClick}
            sellAgent={sellAgent}
          />
        )}
      </div>
    </div>
  );
}
