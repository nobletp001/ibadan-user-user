"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import BrandLogo from "@/public/ibadanAgentLogo.svg";
import BuildingSvg from "@/public/buildings.svg";
import Search from "@/public/searchWhite.svg";
import MapCut from "@/public/CutMap.png";
import Hamburger from "@/public/Hamburger.svg";
import Frame1 from "@/public/frame1.png";
import Frame2 from "@/public/frame2.png";
import HandShake from "@/public/handshake.png";
import Frame3 from "@/public/frame3.png";
import Frame4 from "@/public/frame4.png";
import HomeCustomSelect from "./HomeCustomSelect";
import Accordion from "../Accordion";
import HomeCard from "./HomeCard";
import HomeMapComponent from "./HomeMapComponent";
import { useFetchLocations } from "@/app/lib/hooks/Location.hook";
import { TLocationDataType } from "@/app/lib/types/Location.type";
import { useFetchPropertyPreference } from "@/app/lib/hooks/PropertyPreference.hook";
import { TPropertyPreferenceDataType } from "@/app/lib/types/PropertyPreference.type";
import useWindowSize from "@/app/lib/hooks/windowSize";
import Footer from "./Footer";
import { cardItems, faqs } from "@/app/lib/data/data";
import { motion } from "framer-motion";
interface userWantType {
  location: string;
  id?: string;
}
const HomeDemo = () => {
  const [userWant, setUserWant] = useState<userWantType>({
    location: "",
    id: "",
  });
  const [preferLocation, setPreferLocation] = useState<string>("");
  const [nav, setNav] = useState<boolean>(false);
  const { data: locationData, isSuccess: locationDataSuccess } =
    useFetchLocations();
  const {
    data: propertyPreferenceData,
    isSuccess: propertyPreferenceDataSuccess,
  } = useFetchPropertyPreference();
  const handleNav = () => {
    setNav(!nav);
  };

  const { width } = useWindowSize();
  const isDesktopView = width >= 768;
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const fagRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);

  const pictureFrames = [Frame1, Frame2, Frame3, Frame4];

  const handleChangeSelect = (val: string, name: string, id?: string) => {
    setUserWant({ ...userWant, [name]: val, id: id });
  };
  const handleChangeSelectPrefer = (val: string, name: string) => {
    setPreferLocation(val);
  };
  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const Location = locationData?.data || [];
  const Prefered = propertyPreferenceData?.data || [];

  return (
    <div className="overflow-x-hidden  " ref={inViewRef}>
      <div className="min-h-[58.5rem] md:min-h-screen bg-[#1E1E1E] relative">
        <nav
          className={`bg-[#1E1E1E] w-full ${"md:pt-[71px]"} ease-in-out duration-500 md:px-[50px] pt-[.9rem] pr-[2.31rem] fixed z-[1000]`}
        >
          <div className=" flex justify-between items-center mx-auto md:mx-0 ">
            <div className="text-white font-bold text-base tracking-wider z-50 w-[12.1rem] md:w-[14.2rem]">
              <Image src={BrandLogo} alt="" />
            </div>
            <div className="hidden md:flex">
              <div className="flex space-x-[48px] mr-4">
                <div
                  onClick={() => handleScrollToSection(aboutRef)}
                  className="text-white font-bold text-base cursor-pointer tracking-wider"
                >
                  ABOUT US
                </div>
                <div
                  onClick={() => handleScrollToSection(contactRef)}
                  className="text-white font-bold text-base cursor-pointer tracking-wider"
                >
                  CONTACT US
                </div>
                <div
                  onClick={() => handleScrollToSection(fagRef)}
                  className="text-white font-bold text-base tracking-wider cursor-pointer"
                >
                  FAQ
                </div>
              </div>
            </div>
            <div onClick={handleNav} className="block md:hidden z-50">
              {nav ? (
                <Image src={Hamburger} alt="" />
              ) : (
                <Image src={Hamburger} alt="" />
              )}
            </div>
            <ul
              className={
                nav
                  ? "block md:hidden fixed right-0 top-[60px] px-12 bg-[#1E1E1E] w-[100%] z-20 h-[50%] ease-in-out duration-500"
                  : "ease-in-out duration-500 fixed w-[100%] z-50 h-[50%] top-[60px] px-12 right-[-100%]"
              }
            >
              <div className="mt-12 flex flex-col items-start px-4 top-[100px]">
                <Link
                  onClick={handleNav}
                  href="#"
                  className="text-white font-bold py-8 text-base tracking-wider"
                >
                  ABOUT US
                </Link>
                <Link
                  onClick={handleNav}
                  href="#"
                  className="text-white font-bold py-8 text-base tracking-wider"
                >
                  CONTACT US
                </Link>
                <Link
                  onClick={handleNav}
                  href="#"
                  className="text-white font-bold py-8 text-base tracking-wider"
                >
                  FAQ
                </Link>
              </div>
            </ul>
          </div>
        </nav>
        {/* Hero */}
        <div className="flex flex-col items-center relative">
          <div className="md:w-[1004px] mt-[40%]  md:mt-[20%] font-sans">
            <div className="w-full">
              <h1 className="md:leading-[5rem]  md:text-7xl text-4xl text-white text-center">
                Buy, Sell, Rent properties
              </h1>
            </div>
            <h1 className="md:leading-[5rem]  md:text-7xl text-4xl text-white text-center">
              {" "}
              with <span className="text-[#52ADA2] italic">super ease.</span>
            </h1>
          </div>
          <div className="z-50 flex flex-col md:flex-row justify-between items-center md:mt-[30px] mt-[70px] gap-[16px] h-[88px]">
            <div className="">
              <label className="text-slate-100 text-sm font-medium leading-normal">
                Location
              </label>
              <HomeCustomSelect
                options={Location}
                value={userWant?.location}
                handleChangeSelect={handleChangeSelect}
                placeholder="Preferred Locations"
                title="location"
              />
            </div>
            <div className="">
              <label className="text-slate-100 text-sm font-medium leading-normal">
                Property Preference
              </label>
              <HomeCustomSelect
                options={Prefered}
                value={preferLocation}
                handleChangeSelect={handleChangeSelectPrefer}
                placeholder="Preferred Property"
                title="preferLocation"
              />
            </div>
            <div className="mt-[26px]">
              <Link
                href={"/request"}
                className=" w-[149px] h-[52px] pl-[31px] pr-[32.58px] py-3.5 bg-[#52ADA2] rounded-[44px] justify-center items-center inline-flex gap-[8px]"
              >
                {/* <Image src={Search} alt="" width={20} /> */}
                <span className="text-center text-white text-sm font-semibold leading-tight ">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute bottom-0 overflow-hidden h-[50rem] w-screen">
          <div className=" absolute -bottom-[25rem] left-[50%] translate-x-[-50%] h-[100%] w-full bg-[#52ADA2] bg-gradient-to-t from-[#52ADA2] to-transparent opacity-10 rounded-full blur-[5rem] "></div>
        </div>
        <div className=" absolute bottom-0 left-[50%] translate-x-[-50%] max-w-[703px] max-h-[130px] min-w-[80%] md:min-w-0">
          <Image src={BuildingSvg} alt="" />
        </div>
      </div>

      {/* About Section */}
      <div className="md:px-[133px] md:pt-[117px] w-screen" ref={aboutRef}>
        <div className="flex md:flex-row flex-col w-full min-h-screen">
          <motion.div
            // whileInView={{ opacity: 1, x: 1 }}
            // initial={{ opacity: 0, x: "-400px" }}
            // exit={{ opacity: 0, x: "-400px" }}
            // transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-auto md:w-[50%] w-full items-center justify-start md:mt-0 mt-24"
          >
            <h2 className="md:text-[64px] text-[30px] font-bold md:text-left text-center">
              About us
            </h2>
            <p className="md:max-w-[42rem] text-center md:text-left font-medium leading-[50.4px] md:text-[1.5rem] tracking-[-0.06rem] md:px-0 px-12">
              At IbadanAgent, we are dedicated to revolutionizing the real
              estate experience in Ibadan, providing a localized platform that
              caters to your property needs. Our vision is to simplify the
              buying, selling, renting, and agent services in the Ibadan real
              estate market. We believe in transparency, efficiency, and
              connecting individuals with their ideal properties or clients. Our
              team is committed to creating a seamless and user-friendly
              platform that empowers property seekers, sellers, renters, and
              real estate agents alike. With IbadanAgent, you can navigate the
              real estate market with ease and confidence, ensuring a
              personalized and rewarding journey for all stakeholders.
            </p>
            {/* <h2 className='font-bold md:text-7xl text-4xl leading-[96px] text-zinc-300 w-[400px] md:w-[40.9rem] hidden md:block'>Agents, Buyers, <br />Sellers, Renters</h2> */}
            <div className="md:hidden flex flex-col items-center justify-center mx-auto">
              <h2 className="font-bold text-6xl text-center leading-[70px] text-zinc-300 w-[400px] md:w-[40.9rem]">
                Agents,
              </h2>
              <h2 className="font-bold text-6xl text-center leading-[70px] text-zinc-300 w-[400px] md:w-[40.9rem]">
                Buyers,
              </h2>
              <h2 className="font-bold text-6xl text-center leading-[70px] text-zinc-300 w-[400px] md:w-[40.9rem]">
                Sellers,
              </h2>
              <h2 className="font-bold text-6xl text-center leading-[70px] text-zinc-300 w-[400px] md:w-[40.9rem]">
                Renters
              </h2>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 1, scale: 1 }}
            initial={{ opacity: 0, x: 200, scale: 0.5 }}
            exit={{ opacity: 0, x: 200, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-[50%] hidden lg:block"
          >
            <HomeMapComponent />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 1, scale: 1 }}
            initial={{ opacity: 0, x: 200, scale: 0.5 }}
            exit={{ opacity: 0, x: 200, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 w-full block lg:hidden"
          >
            <Image src={MapCut} alt="" className="h-[25rem]" />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 grid-cols-1 justify-between w-full gap-y-[1.31rem] gap-x-[2.8rem] place-items-center mt-12 min-h-screen"
        >
          {cardItems.map((item, index) => {
            return (
              <HomeCard
                key={index}
                title={item.title}
                body={item.body}
                id={index + 1}
              />
            );
          })}
        </motion.div>

        <div
          className={
            isDesktopView
              ? "mt-[7.88rem] grid md:grid-cols-3 grid-cols-1 gap-[13px] overflow-none whitespace-nowrap"
              : "mt-[7.88rem] flex md:flex-row md:flex-wrap flex-nowrap gap-[13px] overflow-auto whitespace-nowrap"
          }
        >
          {pictureFrames.map((frame, index) => (
            <Image
              key={index}
              src={frame}
              alt=""
              className="md:first:col-span-3 h-[20rem] object-cover"
            />
          ))}
        </div>

        <div className="mt-[17.1rem] relative">
          <h2 className="text-center text-7xl md:leading-[96px] leading-[70px] px-10 font-bold text-[rgba(51,51,51,0.3)] mt-[-13rem] tracking-[-4%]">
            Connect with a property
            <br />
            agent in 2
            <span
              className={
                isDesktopView
                  ? 'after:inline-block after:content-[url("../public/signature.svg")] relative after:absolute after:-bottom-5 after:left-[50%] after:translate-x-[-50%] after:w-full'
                  : ""
              }
            >
              {" "}
              quick{" "}
            </span>
            <span
              className={
                !isDesktopView
                  ? 'after:inline-block after:content-[url("../public/signature.svg")] relative after:absolute after:-bottom-5 after:left-[50%] after:translate-x-[-50%] after:w-full'
                  : ""
              }
            >
              steps
            </span>
          </h2>
          <div className="mt-[5.9rem] w-full relative">
            <div className="flex justify-between flex-col md:flex-row items-center h-[21.44rem] px-[4rem]">
              <div className="h-full w-[24.6rem] flex flex-col gap-[2rem] flex-grow-0 items-center py-[1.56rem]">
                <div className="h-32 w-32 rounded-full flex items-center justify-center md:text-[3rem] text-[2rem] flex-shrink-0 text-white bg-[#52ADA2]">
                  1
                </div>
                <h3 className="text-center font-bold leading-[100%] tracking-[-0.16rem] md:text-[3.5rem] md:px-0 px-8 text-[3rem]">
                  Submit an enquiry form
                </h3>
              </div>
              <div className="h-full w-[24.6rem] flex flex-col gap-[2rem] flex-grow-0 items-center py-[1.56rem]">
                <div className="h-32 w-32 rounded-full flex items-center justify-center md:text-[3rem] text-[2rem] flex-shrink-0 text-white bg-[#52ADA2]">
                  2
                </div>
                <h3 className="text-center font-bold leading-[100%] tracking-[-0.16rem] md:text-[3.5rem] md:px-0 px-8 text-[3rem]">
                  Get contacted by our agents
                </h3>
              </div>
            </div>
            <hr className="border-[1px] border-[#52ADA2] border-dashed hidden md:block w-[27rem] max-w-[27rem] absolute top-[6rem] left-[50%] translate-x-[-50%] " />
          </div>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:mt-[7.25rem] mt-[30rem] md:px-[3rem] px-[2rem] relative mb-[10rem]"
          >
            <div className="z-50 relative bg-[#232323] w-full md:min-h-[28.2rem] min-h-[40rem] rounded-3xl py-[60px] px-[65px] flex flex-col items-center md:items-end gap-[2.69rem]">
              <div className="md:max-w-[90%] z-[70]">
                <h3 className="md:text-right text-center font-bold text-gray-400 md:leading-[64px] md:text-[62px] text-[25px] mt-[-20px] tracking-[-4%]">
                  Do you know your way in and out of Ibadan? Earn passive income
                  as an agent
                </h3>
              </div>

              <div className="z-[60] md:absolute md:w-[20%] w-[80%] md:bottom-[3.26rem] bottom-[7.5rem] md:left-[3.81rem]">
                <Image src={HandShake} alt="" />
              </div>
              <Link
                href={"/request"}
                className="bg-[#52ADA2] md:h-[84px] hidden  rounded-full w-[305px] bottom-4 md:flex place-items-center justify-center text-[24px] font-medium text-white"
              >
                Become an agent
              </Link>
              <button className="bg-[#52ADA2] md:min-h-[3rem] md:hidden absolute left-[50%] translate-x-[-50%] bottom-10 rounded-[2.75rem] w-[250px] h-[50px] md:py-[2rem] px-[4rem] text-[14px] font-[1.5rem] text-white">
                Become an agent
              </button>
            </div>

            <div className="z-40 md:w-[70%] w-[60%] absolute left-[50%] translate-x-[-50%] bottom-8">
              <div className="z-30 rounded-full w-full h-[3.62rem] bg-[#919191] absolute top-0 "></div>
              <div className="z-20 rounded-full w-[80%]  h-[3.62rem] bg-[#ADADAF] absolute top-6 left-[50%] translate-x-[-50%]"></div>
              <div className="rounded-full w-[60%]  h-[3.62rem] bg-[#C7C7C8] absolute top-12 left-[50%] translate-x-[-50%]"></div>
            </div>
          </motion.div>
        </div>
        <div className="mt-[7.5rem] px-[2rem] md:px-0" ref={fagRef}>
          <h3 className="uppercase text-center font-bold text-[1.5rem] md:text-[3rem]">
            frequently asked question
          </h3>
          <div className="">
            {faqs.map((faq, index) => (
              <div>
                <Accordion
                  key={index}
                  title={faq.title}
                  id={`faqs-${index}`}
                  active={faq.active}
                >
                  {faq.text}
                </Accordion>
                <hr className="w-full border-black" />
              </div>
            ))}
          </div>
          <div className="mt-[7.5rem] hidden md:block">
            <h3 className="text-center text-[6rem] font-bold leading-[100%] text-[rgba(51,51,51,0.30)]">
              Agents, Buyers, Sellers, Rentals
            </h3>
          </div>
        </div>
      </div>

      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
};

export default HomeDemo;
