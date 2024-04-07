import React, { ChangeEvent, useState } from "react";
import ArrowLeftWithBg from "../../public/arrowWithBg.svg";
import Image from "next/image";
import { SellAgentType } from "@/app/lib/types/Request.type";

type BuySecondSlideProps = {
  handlePrevClick: () => void;
  handleNextClick: () => void;
  sellAgent: SellAgentType;
  setSellAgent: React.Dispatch<React.SetStateAction<SellAgentType>>;
};

const BuySecondSlide = ({
  handlePrevClick,
  handleNextClick,
  sellAgent,
  setSellAgent,
}: BuySecondSlideProps) => {
  const [errors, seterrors] = useState({
    firstName: "",
    lastName: "",
    whatsapContact: "",
    occupation: "",
    email: "",
    alternativeContact: "",
  });
  const handleChangeInput = (val: string, name: string) => {
    seterrors({ ...errors, [name]: "" });
    setSellAgent({ ...sellAgent, [name]: val });
  };
  const handleAvailabilityCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setSellAgent({
      ...sellAgent,
      isOwner: e.target.checked,
    });
  };

  const phoneNumberRegex = /^(\+?234|\+?0)?(\d{10})$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression
  const handleNextPageButton = () => {
    if (sellAgent.firstName === "") {
      seterrors({ ...errors, firstName: "First name is required" });
    } else if (sellAgent.lastName === "") {
      seterrors({ ...errors, lastName: "Last name is required" });
    } else if (sellAgent.whatsapContact === "") {
      seterrors({ ...errors, whatsapContact: "Whatsapp contact is required" });
    } else if (!phoneNumberRegex.test(sellAgent.whatsapContact)) {
      seterrors({ ...errors, whatsapContact: "Invalid phone number format" });
    } else if (sellAgent.occupation === "") {
      seterrors({ ...errors, occupation: "Occupation is required" });
    } else if (sellAgent.email === "") {
      seterrors({ ...errors, email: "Email is required" });
    } else if (!emailRegex.test(sellAgent.email)) {
      seterrors({ ...errors, email: "Invalid email format" });
    } else {
      handleNextClick();
    }
  };
  return (
    <div className="relative ">
      <div className="">
        <h1 className="text-black text-[38px]  font-bold text-center md:text-start leading-[56px]">
          Just a sec,
        </h1>
        <h4 className="text-neutral-700 text-[16px] md:text-xs font-medium md:mt-1 mt-6 leading-[24px] md:leading-normal text-center md:text-start">
          Kindly fill in some details so we can reach out to you
        </h4>
      </div>
      <div className="mt-[67px] md:mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-0 gap-4">
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              First Name
            </label>
            <input
              value={sellAgent.firstName}
              onChange={(e) => handleChangeInput(e.target.value, "firstName")}
              type="text"
              className={`w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border ${
                errors.firstName ? "border-red-400" : "border-emerald-200"
              } justify-start items-center inline-flex`}
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="text-[10px] text-red-400 font-normal pl-5">
                {errors.firstName}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              Last Name
            </label>
            <input
              value={sellAgent.lastName}
              onChange={(e) => handleChangeInput(e.target.value, "lastName")}
              type="text"
              className={`w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border ${
                errors.lastName ? "border-red-400" : "border-emerald-200"
              } justify-start items-center inline-flex`}
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="text-[10px] text-red-400 font-normal pl-5">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-[32px] md:mt-[20px] md:gap-0 gap-4">
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              Whatsapp Contact
            </label>
            <input
              value={sellAgent.whatsapContact}
              onChange={(e) =>
                handleChangeInput(e.target.value, "whatsapContact")
              }
              type="text"
              className={`w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border ${
                errors.whatsapContact ? "border-red-400" : "border-emerald-200"
              } justify-start items-center inline-flex`}
            />
            {errors.whatsapContact && (
              <p className="text-[10px] text-red-400 font-normal pl-5">
                {errors.whatsapContact}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              Occupation
            </label>
            <input
              value={sellAgent.occupation}
              onChange={(e) => handleChangeInput(e.target.value, "occupation")}
              type="text"
              className={`w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border ${
                errors.occupation ? "border-red-400" : "border-emerald-200"
              } justify-start items-center inline-flex`}
              placeholder="occupation"
            />
            {errors.occupation && (
              <p className="text-[10px] text-red-400 font-normal pl-5">
                {errors.occupation}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-[32px] md:mt-[20px] md:gap-0 gap-4">
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              Email Address
            </label>
            <input
              value={sellAgent.email}
              onChange={(e) => handleChangeInput(e.target.value, "email")}
              type="text"
              className={`w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border ${
                errors.email ? "border-red-400" : "border-emerald-200"
              } justify-start items-center inline-flex`}
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-[10px] text-red-400 font-normal pl-5">
                {errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              Alternative contact
            </label>
            <input
              value={sellAgent.alternativeContact}
              onChange={(e) =>
                handleChangeInput(e.target.value, "alternativeContact")
              }
              type="text"
              className="w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border border-emerald-200 justify-start items-center inline-flex"
              placeholder="Phone or email"
            />
          </div>
        </div>
        <div className="mt-8 md:mt-4">
          <input
            checked={sellAgent.isOwner}
            onChange={handleAvailabilityCheck}
            type="checkbox"
          />
          <span className="w-[281px] text-zinc-800 text-xs ml-2 font-medium leading-normal">
            Are you ownership?
          </span>
        </div>
      </div>
      <div className="mt-8 gap-4 md:gap-0 flex flex-col-reverse md:flex-row md:items-start md:justify-start items-center">
        <div onClick={handlePrevClick} style={{ cursor: "pointer" }}>
          <Image src={ArrowLeftWithBg} alt="" />
        </div>
        <button
          onClick={handleNextPageButton}
          className="w-[250px] h-[52px] pl-[31px] pr-[32.58px] py-3.5 ml-4 bg-[#52ADA2] rounded-[44px] justify-center items-center inline-flex"
        >
          <span className="text-center text-white text-sm font-semibold leading-tight">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default BuySecondSlide;
