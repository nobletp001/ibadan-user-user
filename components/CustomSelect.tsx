"use client";

import React, { useState } from "react";
import Image from "next/image";
import ArrowDown from "../public/arrow-down.svg";
import { TLocationDataType } from "@/app/lib/types/Location.type";
import "@/app/globals.css";

interface CustomSelectProps {
  options: TLocationDataType;
  value: string;
  handleChangeSelect: ( name1: string, val1:string, val2:string, name2:string) => void;
  placeholder: string;
  title:string;
  titleId:string
  error?:string
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  handleChangeSelect,
  placeholder,
  title,
  titleId,
  error
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: { n: string; id: string }) => {
    const name1=title
    const val1=option?.n
    const name2=titleId
    const val2 =option?.id
    handleChangeSelect(val1, name1, val2, name2);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="relative">
        <div
          onClick={toggleDropdown}
          className={`w-[320px] h-[50px] mt-1 cursor-pointer pl-[17px] pr-6 py-[19px] ${error ? "border-red-400":"border-emerald-200"} bg-white rounded-[44px] border  justify-between items-center inline-flex`}
        >
          <div className="text-zinc-500 font-medium placeholder text-xs">
            {value || placeholder}
          </div>
          <div className="w-4 h-4 justify-center items-center flex">
            <div className="w-4 h-4">
              <Image src={ArrowDown} alt="" width={40} />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="absolute w-[320px] max-h-[10rem] overflow-y-scroll dropdown-scroll z-50 bg-slate-100 rounded-3xl my-3 flex flex-col justify-start items-start">
            {options.map((option: { id: any; name: any }) => (
              <div
                key={option.id}
                className="cursor-pointer px-6 py-[15px] rounded-[44px] flex items-center justify-between"
                onClick={() => handleOptionClick({n:option?.name, id:option?.id})}
              >
                <div className="justify-start items-start flex">
                  <span className="text-zinc-500 text-base font-medium">
                    {option.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {error &&   <p className="text-[10px] text-red-400 font-normal pl-5">{error}</p>}
    </div>
  );
};

export default CustomSelect;
