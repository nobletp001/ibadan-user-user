"use client";

import RentFirstSlide from "@/components/Rent/RentFirstSlide";
import RentSecondSlide from "@/components/Rent/RentSecondSlide";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/Ibadan-agent-logo.svg";
import { TUserPage } from "@/app/lib/types/Request.type";
export default function RentForms() {
  const [rentRequestFormData, setRentRequestFormData] = useState<TUserPage>({
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

  const [currentForm, setCurrentForm] = useState<number>(1);

  const handleNextClick = (inputValues: TUserPage) => {
    setCurrentForm((prevForm) => prevForm + 1);
    setRentRequestFormData(inputValues);
  };

  const handlePrevClick = () => {
    setCurrentForm((prevForm) => prevForm - 1);
  };

  return (
    <div className="w-full md:w-[777px] h-auto md:h-[700px] p-10 relative bg-white rounded-[20px] shadow border border-neutral-200">
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
        </div>
      </div>
      <div className="w-full h-full">
        {currentForm === 1 && (
          <RentFirstSlide handleNextClick={handleNextClick} />
        )}
        {currentForm === 2 && (
          <RentSecondSlide
            handlePrevClick={handlePrevClick}
            rentRequestFirstPageFormData={rentRequestFormData}
          />
        )}
      </div>
    </div>
  );
}
