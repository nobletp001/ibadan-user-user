import React from "react";
import GreenBuilding from "@/public/miniWhiteBuilding.svg";
import WhiteBuilding from "@/public/miniGreenBuilding.svg";
import ArrowRight from "@/public/arrowRightWhite.svg";
import Image from "next/image";
import { Variants, motion } from "framer-motion";


type HomeCardProps = {
  title: string;
  body: string;
  id: number;
};
const HomeCard: React.FC<HomeCardProps> = ({ title, body, id}) => {
  return (
    <motion.div
      className={`md:max-w-[35rem] flex-1 md:w-full w-[20rem] h-full ${
        title !== "Agent" ? "bg-[#52ADA2]" : "bg-[#3F3F46]"
      } rounded-[1.5rem] relative overflow-x-clip pb-[2rem]`}
    >
      <div className=" z-30 h-full relative md:px-[42.5px] flex flex-col">
        <h2
          className={` md:text-start md:ml-0 ml-3 text-center md:text-[9.3rem] text-8xl text-transparent opacity-20 font-bold leading-[100%] bg-clip-text bg-gradient-to-b  ${
            title !== "Agent"
              ? "from-black from-[2.86%] to-tranparent to-[88.7%]"
              : "from-white from-[2.86%] to-[88.7%]"
          }`}
        >
          {title}
        </h2>
        <p
          className={`max-w-[30rem] leading-[37.44px] text-2xl tracking-[-0.06rem] px-4 ${
            title !== "Agent" ? "text-black" : "text-white"
          }`}
        >
          {body}
        </p>
        <div className="flex flex-col md:justify-end w-full flex-1 items-end">
          <button
            className={`${
              title !== "Agent"
                ? "bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)]"
                : "bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)]"
            } rounded-full mx-auto md:mx-0  h-[3.75rem] min-h-[3rem} py-[1rem] px-[2.1rem] flex items-center`}
          >
            <Image src={ArrowRight} alt="" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 z-10">
        {title !== "Agent" ? (
          <Image src={WhiteBuilding} alt="" />
        ) : (
          <Image src={GreenBuilding} alt="" />
        )}
      </div>
    </motion.div>
  );
};

export default HomeCard;
