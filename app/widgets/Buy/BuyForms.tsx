"use client";
import BuyFirstSlide from "@/components/Buy/BuyFirstSlide";
import BuySecondSlide from "@/components/Buy/BuySecondSlide";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/Ibadan-agent-logo.svg";
import { TUserPage } from "@/app/lib/types/Request.type";

export default function BuyForms() {
  const [currentForm, setCurrentForm] = useState<number>(1);
  const [buyRequestFormData, setBuyRequestFormData] = useState<TUserPage>({
    locationId: "",
    otherLocationId: "",
    propertyId: "",
    subPropertyId: "",
    selectedroomNumber: "",
    selectedBudgetRange: "",
    specificationDesc: "",
    location: "",
    property: "",
    otherLocation: "",
    subProperty: "",
    selectedroomNumberId: "",
  });

  const handleNextClick = (inputValues: TUserPage) => {
    setCurrentForm((prevForm) => prevForm + 1);
    setBuyRequestFormData(inputValues);
  };

  const handlePrevClick = () => {
    setCurrentForm((prevForm) => prevForm - 1);
  };

  return (
    <div className="w-[100%] lg:w-[777px] h-auto p-10  relative bg-white rounded-[20px] shadow border border-neutral-200">
      <div className="flex items-center justify-between    ">
        <div className="">
          <Image src={Logo} alt="" />
        </div>
        <div className="flex gap-2">
          <span
            className={`${
              currentForm === 1 ? "bg-[#128F40]" : "bg-[#D9D9D9]"
            } w-[35px] h-[2px] rounded-[17px] bg-[#128F40]`}
          />
          <span
            className={`${
              currentForm === 2 ? "bg-[#128F40]" : "bg-[#D9D9D9]"
            } w-[35px] h-[2px] rounded-[17px]`}
          />
        </div>
      </div>
      <div className=" w-full h-auto">
        {currentForm === 1 && (
          <BuyFirstSlide handleNextClick={handleNextClick} />
        )}
        {currentForm === 2 && (
          <BuySecondSlide
            handlePrevClick={handlePrevClick}
            buyRequestFirstPageFormData={buyRequestFormData}
          />
        )}
      </div>
    </div>
  );
}
