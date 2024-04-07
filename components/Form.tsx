import Link from "next/link";
import React from "react";

const Form = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full ">
        <h2 className="w-[279px] md:w-[472px] hidden md:block text-center text-black text-base md:text-xs font-bold uppercase leading-none tracking-wide">
          Hello there
        </h2>
        <h1 className="text-center text-black text-5xl font-bold leading-[56px] mt-2">
          What do you want to do?
        </h1>
      </div>
      <div className=" my-[51px] flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-[24px] md:gap-0">
          <Link
            href={"/buy"}
            className="w-[245px] md:w-[265px] text-zinc-500 h-[62px] md:h-[68px] px-8 py-[19px] bg-emerald-400 rounded-[44px] border bg-opacity-20 border-emerald-200 justify-between text-center text-lg font-medium hover:text-white hover:bg-[#52ADA2]"
          >
            Buy Property
          </Link>

          <Link
            href={"/sell"}
            className=" w-[245px] md:w-[265px] text-zinc-500 md:ml-4 h-[62px] md:h-[68px] px-8 py-[19px] bg-emerald-400 rounded-[44px] border bg-opacity-20 border-emerald-200 justify-between text-center text-lg font-medium hover:text-white hover:bg-[#52ADA2]"
          >
            Sell property
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-[24px] md:mt-4 gap-[24px] md:gap-0">
          <Link
            href={"/rent"}
            className="w-[245px] md:w-[265px] text-zinc-500 h-[62px] md:h-[68px] px-8 py-[19px] bg-emerald-400 rounded-[44px] border bg-opacity-20 border-emerald-200 justify-between text-center text-lg font-medium hover:text-white hover:bg-[#52ADA2]"
          >
            Rent property
          </Link>
          <Link
            href={"/become-an-agent"}
            className="w-[245px] md:w-[265px] text-zinc-500 md:ml-4 h-[62px] md:h-[68px] px-8 py-[19px] bg-emerald-400 rounded-[44px] border bg-opacity-20 border-emerald-200 justify-between text-center text-lg font-medium hover:text-white hover:bg-[#52ADA2]"
          >
            Become an agent
          </Link>
        </div>
      </div>
    </>
  );
};

export default Form;
