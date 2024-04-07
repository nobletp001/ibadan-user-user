"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ArrowDown from "@/public/arrow-downWhite.svg";
import { TLocationDataType } from "@/app/lib/types/Location.type";
import "@/app/globals.css";

interface HomeCustomSelectProps {
  options: TLocationDataType;
  value: string;
  handleChangeSelect: (val: string, name: string, id?: string) => void;
  placeholder: string;
  title: string;
}

const HomeCustomSelect: React.FC<HomeCustomSelectProps> = ({
  options,
  value,
  handleChangeSelect,
  placeholder,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string, id: string) => {
    if (title == "location") {
      handleChangeSelect(option, title, id);
    } else {
      handleChangeSelect(option, title);
    }

    setIsOpen(false);
  };
  return (
    <div>
      <div className="relative">
        <div
          onClick={toggleDropdown}
          className="w-[330px] h-[50px] mt-1 cursor-pointer pl-[17px] pr-6 py-[19px] bg-zinc-500 rounded-[44px] border border-emerald-200 justify-between items-center inline-flex"
        >
          <div className="text-white text-sm font-medium placeholder">
            {value || placeholder}
          </div>
          <div className="w-4 h-4 justify-center items-center flex">
            <div
              className={`w-4 h-4 shrink-0 transform origin-center transition duration-200 ease-out ${
                isOpen && "!scale-y-[-1]"
              }`}
            >
              <Image src={ArrowDown} alt="" width={40} />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="absolute w-[330px] max-h-[10rem] overflow-y-scroll dropdown-scroll z-50 bg-zinc-500 rounded-3xl my-3 flex flex-col justify-start items-start">
            {options.map((option) => (
              <div
                key={option.id}
                className="cursor-pointer px-6 py-[15px] rounded-[44px] flex items-center justify-between"
                onClick={() => handleOptionClick(option.name, option?.id)}
              >
                <div className="justify-start items-start flex">
                  <span className="text-slate-100 text-base font-medium">
                    {option.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeCustomSelect;
