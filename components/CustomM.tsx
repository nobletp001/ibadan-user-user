// CustomMultipleSelect.tsx

import React, { useState, useEffect } from "react";
import ArrowDown from "../public/arrow-down.svg";
import Image from "next/image";

interface Option {
  id: string;
  name: string;
}

interface CustomSelectProps {
  options: Option[];
  choseServices: (val: string[], title: string) => void;
  error: string;
  title: string;
}

const CustomMleSelect: React.FC<CustomSelectProps> = ({
  options,
  choseServices,
  error,
  title,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleOption = (optionId: string) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions((prev) => prev.filter((id) => id !== optionId));
      choseServices(selectedOptions, title);
    } else {
      setSelectedOptions((prev) => [...prev, optionId]);
      choseServices(selectedOptions, title);
    }
  };

  const removeOption = (optionId: string) => {
    setSelectedOptions((prev) => prev.filter((id) => id !== optionId));
    choseServices(selectedOptions, title);
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as Node;
    if (
      isDropdownOpen &&
      !document.getElementById("custom-select")?.contains(target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <div id="custom-select" className="relative">
      <div
        className={`w-[320px] h-[50px] mt-1 cursor-pointer pl-[17px] pr-6 py-[19px] ${
          error ? "border-red-400" : "border-emerald-200"
        } justify-between items-center inline-flex bg-white rounded-[44px] border `}
        onClick={handleDropdownToggle}
      >
        <div className="flex gap-1 text-zinc-500 font-medium placeholder text-xs">
          {selectedOptions.length === 0
            ? "Select Options"
            : selectedOptions.slice(0, 3).map((optionId) => (
                <div
                  key={optionId}
                  className="selected-option text-[12px] bg-white p-1 shadow rounded-md flex gap-1"
                >
                  {truncateText(
                    options.find((opt) => opt.id === optionId)?.name || "",
                    7,
                  )}
                  <button
                    onClick={() => removeOption(optionId)}
                    className="text-red-800"
                  >
                    X
                  </button>
                </div>
              ))}
          {selectedOptions.length > 3 && (
            <div className="selected-option text-[12px] bg-white p-1 shadow rounded-md flex gap-1">
              {selectedOptions.length} +
            </div>
          )}
        </div>

        <div className="w-4 h-4">
          <Image src={ArrowDown} alt="" width={40} />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute w-[320px] max-h-[10rem] overflow-y-scroll dropdown-scroll z-50 bg-slate-100 rounded-3xl my-3 flex flex-col justify-start items-start">
          {options.map((option) => (
            <div
              key={option.id}
              className="cursor-pointer px-6 py-[15px] rounded-[44px] flex items-center "
            >
              <input
                type="checkbox"
                id={option.id}
                checked={selectedOptions.includes(option.id)}
                onChange={() => toggleOption(option.id)}
                className="mr-2"
              />
              <label
                htmlFor={option.id}
                className="text-zinc-500 text-base font-medium"
              >
                {option.name}
              </label>
            </div>
          ))}
        </div>
      )}
      {error && (
        <p className="text-[10px] text-red-400 font-normal pl-5">{error}</p>
      )}
    </div>
  );
};

export default CustomMleSelect;
