"use client";

import AgentFirstSlide from "@/components/Become-an-agent/AgentFirstSlide";
import AgentSecondSlide from "@/components/Become-an-agent/AgentSecondSlide";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/Ibadan-agent-logo.svg";
import { AgentTpe } from "@/app/lib/types/Request.type";

export default function AgentForms() {
  const [currentForm, setCurrentForm] = useState<number>(1);
  const [agent, setAgent] = useState<AgentTpe>({
    locationId: "",
    otherLocationId: [],
    location: "",
    property: [],
    whatsappContact: "",
    occupation: "",
    services:[],
    isAvailabilityChecked: false,
  });
  const handleNextClick = () => {
    setCurrentForm((prevForm) => prevForm + 1);
  };

  const handlePrevClick = () => {
    setCurrentForm((prevForm) => prevForm - 1);
  };

  return (
    <div className="w-full md:w-[777px] h-auto p-10 relative bg-white rounded-[20px] shadow border border-neutral-200">
      <div className="flex items-center justify-between">
        <div className="">
          <Image src={Logo} alt="" />
        </div>
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
      <div className=" w-full">
        {currentForm === 1 && (
          <AgentFirstSlide handleNextClick={handleNextClick} agent={agent} setAgent={setAgent} />
        )}
        {currentForm === 2 && (
          <AgentSecondSlide handlePrevClick={handlePrevClick} agent={agent} />
        )}
      </div>
    </div>
  );
}
