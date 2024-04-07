import React, { useEffect, useState, useContext } from "react";
import Button from "../Button";
import CustomSelect from "../CustomSelect";
import Link from "next/link";
import ArrowLeftWithBg from "../../public/arrowWithBg.svg";
import Image from "next/image";

import { useFetchLocations } from "@/app/lib/hooks/Location.hook";
import { TLocationDataType } from "@/app/lib/types/Location.type";
import {
  useFetchPropertyPreference,
  useFetchSubPropertyPreference,
} from "@/app/lib/hooks/PropertyPreference.hook";
import { TPropertyPreferenceDataType } from "@/app/lib/types/PropertyPreference.type";
import {
  OWNERSHIPMEANS,
  TCreateSellRequestPayload,
  TITLEDOCUMENT,
} from "@/app/lib/types/Request.type";
import { SellAgentType } from "@/app/lib/types/Request.type";
type BuySecondSlideProps = {
  handleNextClick: () => void;
  sellAgent: SellAgentType;
  setSellAgent: React.Dispatch<React.SetStateAction<SellAgentType>>;
};

const SellFirstSlide = ({
  handleNextClick,
  sellAgent,
  setSellAgent,
}: BuySecondSlideProps) => {
  const [errors, seterrors] = useState({
    location: "",
    ownership: "",
    property: "",
    document: "",
    landArea: "",
    budget: "",
    specificationDesc: "",
    subProperty: "",
  });
  const meansOfOwnership = Object.values(OWNERSHIPMEANS).map((data) => ({
    id: data,
    name: data,
  }));

  const titleDocuments = Object.values(TITLEDOCUMENT).map((data) => ({
    id: data,
    name: data,
  }));

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
    propertyPreferenceId: sellAgent?.propertyId,
  });
  const handleChangeSelect = (
    val1: string,
    name1: string,
    val2: string,
    name2: string,
  ) => {
    seterrors({ ...errors, [name1]: "" });
    setSellAgent({ ...sellAgent, [name1]: val1, [name2]: val2 });
  };
  const handleChangeInput = (val: string, name: string) => {
    seterrors({ ...errors, [name]: "" });

    setSellAgent({ ...sellAgent, [name]: val });
  };
  const Location = locationData?.data || [];
  const Property = propertyPreferenceData?.data || [];
  const subProperty = propertySubPreferenceData?.data || [];

  const handleNextPageButton = () => {
    if (sellAgent.location === "") {
      seterrors({ ...errors, location: "Location is required" });
    } else if (sellAgent.ownership === "") {
      seterrors({ ...errors, ownership: "Ownership is required" });
    } else if (sellAgent.property === "") {
      seterrors({
        ...errors,
        property: "Property is required",
      });
    } else if (sellAgent.document === "") {
      seterrors({ ...errors, document: "Type of document is required" });
    } else if (sellAgent.landArea === "") {
      seterrors({
        ...errors,
        landArea: "Document is required",
      });
    } else if (sellAgent.landArea === "") {
      seterrors({
        ...errors,
        landArea: "Land area is required",
      });
    } else if (sellAgent.budget === "") {
      seterrors({
        ...errors,
        budget: "Price is required",
      });
    } else if (sellAgent.specificationDesc === "") {
      seterrors({
        ...errors,
        specificationDesc: "Give more specifications is required",
      });
    } else {
      handleNextClick();
    }
  };

  return (
    <div className="relative p-8 md:p-12">
      <div className="md:mt-2">
        <h1 className="text-black text-[38px] mt-4 md:mt-0 font-bold text-center md:text-start">
          Let&apos;s get some info{" "}
        </h1>
        <h4 className="text-neutral-700 text-[16px] md:text-xs font-medium md:mt-1 mt-6 leading-[24px] md:leading-normal text-center md:text-start">
          Submit a request form and a professional agent will get back to you
          soon
        </h4>
      </div>
      <div className="mt-[67px] md:mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-0 gap-4">
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-sm font-medium leading-normal">
              Location
            </label>
            <CustomSelect
              options={Location}
              value={sellAgent.location}
              handleChangeSelect={handleChangeSelect}
              title="location"
              titleId="locationId"
              placeholder="Preferred Location"
              error={errors.location}
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-sm font-medium leading-normal">
              Means of ownership
            </label>
            <CustomSelect
              options={meansOfOwnership}
              value={sellAgent.ownership}
              handleChangeSelect={handleChangeSelect}
              title="ownership"
              titleId="ownershipId"
              placeholder="Type of Ownership"
              error={errors.ownership}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-[32px] md:mt-[20px] md:gap-0 gap-4">
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-sm font-medium leading-normal">
              Property Preference
            </label>
            <CustomSelect
              options={Property}
              value={sellAgent.property}
              handleChangeSelect={handleChangeSelect}
              title="property"
              titleId="propertyId"
              placeholder="Preferred Preference"
              error={errors.property}
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-sm font-medium leading-normal">
              Sub-Preference(optional)
            </label>
            <CustomSelect
              options={subProperty}
              value={sellAgent.subProperty}
              handleChangeSelect={handleChangeSelect}
              title="subProperty"
              titleId="subPropertyId"
              placeholder="Sub-preference"
              error={errors.subProperty}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-[32px] md:mt-[20px] md:gap-0 gap-4">
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-sm font-medium leading-normal">
              Title Document
            </label>
            <CustomSelect
              options={titleDocuments}
              value={sellAgent.document}
              handleChangeSelect={handleChangeSelect}
              title="document"
              titleId="documentID"
              placeholder="Title Document"
              error={errors.document}
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-sm font-medium leading-normal">
              Land Area
            </label>
            <input
              value={sellAgent.landArea}
              onChange={(e) => handleChangeInput(e.target.value, "landArea")}
              type="text"
              className={`w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border ${
                errors.landArea ? "border-red-400" : "border-emerald-200"
              } justify-start items-center inline-flex`}
              placeholder="Land Area"
            />
            {errors.landArea && (
              <p className="text-[10px] text-red-400 font-normal pl-5">
                {errors.landArea}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-[32px] md:mt-[20px] md:gap-0 gap-4">
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-sm font-medium leading-normal">
              Asking Price
            </label>
            <input
              type="text"
              value={sellAgent.budget}
              onChange={(e) => handleChangeInput(e.target.value, "budget")}
              className={`w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border ${
                errors.budget ? "border-red-400" : "border-emerald-200"
              } justify-start items-center inline-flex`}
              placeholder="Asking Price"
            />
            {errors.budget && (
              <p className="text-[10px] text-red-400 font-normal pl-5">
                {errors.budget}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-sm font-medium leading-normal">
              Give more specifications
            </label>
            <input
              value={sellAgent.specificationDesc}
              onChange={(e) =>
                handleChangeInput(e.target.value, "specificationDesc")
              }
              type="text"
              className={`w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border ${
                errors.specificationDesc
                  ? "border-red-400"
                  : "border-emerald-200"
              } justify-start items-center inline-flex`}
              placeholder="Write your specifications"
            />
            {errors.specificationDesc && (
              <p className="text-[10px] text-red-400 font-normal pl-5">
                {errors.specificationDesc}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-4 gap-4 md:gap-0 flex flex-col-reverse md:flex-row md:items-start md:justify-start items-center">
        <Link href={"/request"} style={{ cursor: "pointer" }}>
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

export default SellFirstSlide;
