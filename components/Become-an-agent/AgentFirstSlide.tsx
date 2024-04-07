import React, { ChangeEvent, useState } from "react";
import CustomSelect from "../CustomSelect";
import Image from "next/image";
import ArrowLeftWithBg from "../../public/arrowWithBg.svg";
import Link from "next/link";
import { useFetchLocations } from "@/app/lib/hooks/Location.hook";
import { useFetchPropertyPreference } from "@/app/lib/hooks/PropertyPreference.hook";
import CustomMultipleSelect from "../CustomMultipleSelect";
import { useFetchServices } from "@/app/lib/hooks/Service.hook";
import { AgentTpe } from "@/app/lib/types/Request.type";

type BuyFirstSlideProps = {
  handleNextClick: () => void;
  agent: AgentTpe;
  setAgent: React.Dispatch<React.SetStateAction<AgentTpe>>;
};

const AgentFirstSlide = ({
  handleNextClick,
  agent,
  setAgent,
}: BuyFirstSlideProps) => {
  const { data: locationData, isSuccess: locationDataSuccess } =
    useFetchLocations();
  const {
    data: propertyPreferenceData,
    isSuccess: propertyPreferenceDataSuccess,
  } = useFetchPropertyPreference();
  const { data: properServiceData } = useFetchServices();

  const [errors, seterrors] = useState({
    location: "",
    property: "",
    otherLocation: "",
    whatsappContact: "",
    occupation: "",
    services: "",
    isAvailabilityChecked: "",
  });
  const handleChangeSelect = (
    val1: string,
    name1: string,
    val2: string,
    name2: string,
  ) => {
    seterrors({ ...errors, [name1]: "" });
    setAgent({ ...agent, [name1]: val1, [name2]: val2 });
  };
  const handleChangeInput = (val: string, name: string) => {
    seterrors({ ...errors, [name]: "" });
    setAgent({ ...agent, [name]: val });
  };
  const handleAvailabilityCheck = (e: ChangeEvent<HTMLInputElement>) => {
    seterrors({...errors, isAvailabilityChecked:''})
    setAgent({ ...agent, isAvailabilityChecked: e.target.checked });
  };
  const toggleOption = (optionId: string, title: string) => {
    setAgent((prev) => {
      // Create a copy of the previous state
      const updatedAgent: any = { ...prev };

      // Check if the optionId is present in the title array
      if (
        Array.isArray(updatedAgent[title]) &&
        updatedAgent[title].includes(optionId)
      ) {
        // Remove the optionId if present
        updatedAgent[title] = updatedAgent[title].filter(
          (id: string) => id !== optionId,
        );
      } else {
        // Add the optionId if not present
        if (Array.isArray(updatedAgent[title])) {
          updatedAgent[title] = [...updatedAgent[title], optionId];
        } else {
          updatedAgent[title] = [optionId];
        }
      }

      // Add your additional logic or function calls here if needed

      return updatedAgent;
    });
  };

  const Location = locationData?.data || [];
  const Property = propertyPreferenceData?.data || [];
  const Services = properServiceData?.data || [];

  const phoneNumberRegex = /^(\+?234|\+?0)?(\d{10})$/;
  const handleNextPageButton = () => {
    if (agent.location === "") {
      seterrors({ ...errors, location: "Location is required" });
    } else if (agent.whatsappContact === "") {
      seterrors({ ...errors, whatsappContact: "whatsapp contact is required" });
    } else if (!phoneNumberRegex.test(agent.whatsappContact)) {
      seterrors({ ...errors, whatsappContact: "Invalid phone number format" });
    } else if (agent.occupation === "") {
      seterrors({ ...errors, occupation: "Occupation is required" });
    } else if (agent.services.length === 0) {
      seterrors({ ...errors, services: "Services is required" });
    } else if (agent.property.length === 0) {
      seterrors({ ...errors, property: "Property is required" });
    } else if (agent.isAvailabilityChecked ===false) {
      seterrors({
        ...errors,
        isAvailabilityChecked:
          "Agree to terms of user and privacy policy is required",
      });
    } else {
      handleNextClick();
    }
  };
  return (
    <div className="relative ">
      <div className="">
        <h1 className="text-black text-[48px] md:text-[38px] font-bold text-center md:text-start">
          Become an agent
        </h1>
        <h4 className="text-neutral-700 text-[16px] md:text-xs font-medium md:mt-1 mt-6 leading-[24px] md:leading-normal text-center md:text-start">
          Submit a request form and a professional agent will get back to you
          soon
        </h4>
      </div>
      <div className="mt-[67px] md:mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-0 gap-4">
          <div>
            <label className="text-zinc-800 text-xs font-medium leading-normal ">
              Location
            </label>
            <CustomSelect
              options={Location}
              value={agent.location}
              handleChangeSelect={handleChangeSelect}
              title="location"
              titleId="locationId"
              placeholder="Preferred Location"
              error={errors.location}
            />
          </div>
          <div className="">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              Other Locations(optional)
            </label>
            <CustomMultipleSelect
              options={Location}
              toggle={toggleOption}
              error={errors.otherLocation}
              title="otherLocationId"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-[32px] md:mt-[20px] md:gap-0 gap-4">
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              Whatsapp contact
            </label>
            <input
              type="text"
              className={`w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border ${
                errors.whatsappContact ? "border-red-400" : "border-emerald-200"
              } justify-start items-center inline-flex`}
              placeholder="Phone number"
              onChange={(e) =>
                handleChangeInput(e.target.value, "whatsappContact")
              }
            />
            {errors.whatsappContact && (
              <p className="text-[10px] text-red-400 font-normal pl-5">
                {errors.whatsappContact}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              Occupation
            </label>
            <input
              type="text"
              className={`w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border ${
                errors.occupation ? "border-red-400" : "border-emerald-200"
              } justify-start items-center inline-flex`}
              placeholder="Full-time agent"
              onChange={(e) => handleChangeInput(e.target.value, "occupation")}
            />
            {errors.occupation && (
              <p className="text-[10px] text-red-400 font-normal pl-5">
                {errors.occupation}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-[32px] md:mt-[20px] md:gap-0 gap-4">
          <div>
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              What are you doing as an agent?
            </label>
            <CustomMultipleSelect
              options={Services}
              toggle={toggleOption}
              error={errors.services}
              title="services"
            />
          </div>
          <div className="">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              What type of properties (choose all that applies)
            </label>

            <CustomMultipleSelect
              options={Property}
              toggle={toggleOption}
              error={errors.property}
              title="property"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-4">
        <div className=" flex items-center justify-center md:justify-start">
          <input
            type="checkbox"
            checked={agent.isAvailabilityChecked}
            onChange={handleAvailabilityCheck}
          />
          <div className="w-[281px] ml-2">
            <span className="text-zinc-800 text-[12px] font-normal leading-normal">
              I agree with{" "}
            </span>
            <span className="text-green-700 text-[12px] font-normal leading-normal">
              Terms of Use{" "}
            </span>
            <span className="text-zinc-800 text-[12px] font-normal leading-normal">
              and Privacy Policy.
            </span>
          </div>
        </div>
        {errors.isAvailabilityChecked && (
          <p className="text-[10px] text-red-400 font-normal pl-5">
            {errors.isAvailabilityChecked}
          </p>
        )}
      </div>

      <div className="mt-12 md:mt-3 gap-4 md:gap-0 flex flex-col-reverse md:flex-row md:items-start md:justify-start items-center">
        <Link href={"/request"}>
          <Image src={ArrowLeftWithBg} alt="" />
        </Link>
        <button
          onClick={handleNextPageButton}
          className="w-[250px] h-[52px] pl-[31px] pr-[32.58px] py-3.5 md:ml-4 bg-[#52ADA2] rounded-[44px] justify-center items-center inline-flex"
        >
          <span className="text-center text-white text-sm font-semibold leading-tight">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default AgentFirstSlide;
