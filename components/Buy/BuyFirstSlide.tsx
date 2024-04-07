import React, { useState } from "react";
import CustomSelect from "../CustomSelect";
import Image from "next/image";
import ArrowLeftWithBg from "../../public/arrowWithBg.svg";
import Link from "next/link";
import { useFetchLocations } from "@/app/lib/hooks/Location.hook";
import { TLocationDataType } from "@/app/lib/types/Location.type";
import {
  useFetchPropertyPreference,
  useFetchSubPropertyPreference,
} from "@/app/lib/hooks/PropertyPreference.hook";
import { TUserPage } from "@/app/lib/types/Request.type";

interface BuyFirstSlideProps {
  handleNextClick: (inputValues: TUserPage) => void;
}

const BuyFirstSlide: React.FC<BuyFirstSlideProps> = ({ handleNextClick }) => {
  const [userBuy, setUserBuy] = useState<TUserPage>({
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
  const [errors, seterrors] = useState({
    selectedroomNumber: "",
    selectedBudgetRange: "",
    specificationDesc: "",
    location: "",
    property: "",
  });
  const handleChangeSelect = (
    val1: string,
    name1: string,
    val2: string,
    name2: string,
  ) => {
    seterrors({ ...errors, [name1]: "" });
    setUserBuy({ ...userBuy, [name1]: val1, [name2]: val2 });
  };
  const handleChangeInput = (val: string, name: string) => {
    seterrors({ ...errors, [name]: "" });

    setUserBuy({ ...userBuy, [name]: val });
  };

  const { data: locationData, isSuccess: locationDataSuccess } =
    useFetchLocations();
  const {
    data: propertyPreferenceData,
    isSuccess: propertyPreferenceDataSuccess,
  } = useFetchPropertyPreference();
  const {
    data: propertySubPreferenceData,
    isSuccess: propertySubPreferenceDataSuccess,
  } = useFetchSubPropertyPreference({
    propertyPreferenceId: userBuy.propertyId,
  });
  const numberOfRooms: TLocationDataType = [
    { id: "1", name: "1" },
    { id: "2", name: "2" },
    { id: "3", name: "3" },
    { id: "4", name: "4" },
    { id: "5", name: "5" },
  ];
  const Location = locationData?.data || [];
  const Property = propertyPreferenceData?.data || [];
  const subProperty = propertySubPreferenceData?.data || [];
  const handleNextPageButton = () => {
    if (userBuy.location === "") {
      seterrors({ ...errors, location: "Location is required" });
    } else if (userBuy.property === "") {
      seterrors({ ...errors, property: "Property is required" });
    } else if (userBuy.selectedroomNumber === "") {
      seterrors({
        ...errors,
        selectedroomNumber: "Number of bedrooms is required",
      });
    } else if (userBuy.selectedBudgetRange === "") {
      seterrors({ ...errors, selectedBudgetRange: "Budget is required" });
    } else if (userBuy.specificationDesc === "") {
      seterrors({
        ...errors,
        specificationDesc: "Give more specifications is required",
      });
    } else {
      handleNextClick(userBuy);
    }
  };
  return (
    <div className="relative ">
      <div className="">
        <h1 className="text-black text-[38px]  font-bold text-center md:text-start leading-[56px]">
          Buy properties with ease
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
              value={userBuy.location}
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
            <CustomSelect
              options={Location}
              value={userBuy.otherLocation}
              handleChangeSelect={handleChangeSelect}
              title="otherLocation"
              titleId="otherLocationId"
              placeholder="Other Locations"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-[32px] md:mt-[20px] md:gap-0 gap-4">
          <div>
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              Property Preference
            </label>
            <CustomSelect
              options={Property}
              value={userBuy.property}
              handleChangeSelect={handleChangeSelect}
              placeholder="Preferred Property"
              title="property"
              titleId="propertyId"
              error={errors.property}
            />
          </div>
          <div className="">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              Sub-preference(optional)
            </label>
            <CustomSelect
              options={subProperty}
              value={userBuy.subProperty}
              handleChangeSelect={handleChangeSelect}
              placeholder="Sub-Preference"
              title="subProperty"
              titleId="subPropertyId"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-[32px] md:mt-[20px] md:gap-0 gap-4">
          <div className="">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              Number of Bedrooms(optional)
            </label>
            <CustomSelect
              options={numberOfRooms}
              value={userBuy.selectedroomNumber}
              handleChangeSelect={handleChangeSelect}
              placeholder="No of Bedroom"
              title="selectedroomNumber"
              titleId="selectedroomNumberId"
              error={errors.selectedroomNumber}
            />
          </div>

          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              Budget
            </label>
            <input
              value={userBuy.selectedBudgetRange}
              onChange={(e) =>
                handleChangeInput(e.target.value, "selectedBudgetRange")
              }
              type="text"
              className={`w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border ${
                errors.selectedBudgetRange
                  ? "border-red-400"
                  : "border-emerald-200"
              } justify-start items-center inline-flex`}
              placeholder="Budget"
            />
            {errors.selectedBudgetRange && (
              <p className="text-[10px] text-red-400 font-normal pl-5">
                {errors.selectedBudgetRange}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label className="text-zinc-800 text-xs font-medium leading-normal">
          Give more specifications
        </label>
        <input
          value={userBuy.specificationDesc}
          onChange={(e) =>
            handleChangeInput(e.target.value, "specificationDesc")
          }
          type="text"
          placeholder="Write your specifications"
          className={`w-full h-[50px] px-6 py-[25px] text-xs mt-1 outline-none bg-white border ${
            errors.specificationDesc ? "border-red-400" : "border-emerald-200"
          } justify-start items-center inline-flex`}
        />
        {errors.specificationDesc && (
          <p className="text-[10px] text-red-400 font-normal pl-5">
            {errors.specificationDesc}
          </p>
        )}
      </div>
      <div className="mt-12 md:mt-4 gap-4 md:gap-0 flex flex-col-reverse md:flex-row md:items-start md:justify-start items-center">
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

export default BuyFirstSlide;
