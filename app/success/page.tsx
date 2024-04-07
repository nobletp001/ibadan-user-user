"use client"
import MapImage from "@/components/MapImage";
import Image from "next/image";
import React from "react";
import Logo from "@/public/Ibadan-agent-logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();
  const goToBecomeAgent = () => {
    router.push("become-an-agent");
  };
  return (
    <div className="flex flex-col md:flex-row w-full my-4 min-h-screen items-center justify-between">
      <div className="w-full lg:w-[30%]   order-2 lg:order-1 h-auto lg:justify-center lg:items-end flex mt-7 mb-1">
        <MapImage />
      </div>

      <div className=" w-full lg:h-full h-auto lg:w-[70%] order-1 lg:order-2 ">
        <div className="w-full md:w-[777px] p-10  h-auto relative bg-white rounded-[20px] shadow border border-neutral-200">
          <div className="flex items-center justify-between ">
            <div className="">
              <Image src={Logo} alt="" />
            </div>{" "}
          </div>
          <h1 className="text-black lg:text-[2.7rem] text-[1.5rem]  font-bold text-center md:text-start leading-[56px]">
            {" "}
            We will get back to you soon 🕥{" "}
          </h1>
          <h4 className="text-neutral-700 text-[16px] md:text-xs font-medium md:mt-1 mt-6 leading-[24px] md:leading-normal text-center md:text-start">
            Your form was submitted successfully!
          </h4>
          <div className="w-full flex justify-center items-center">
            <div className="bg-[#e6fcec] h-auto pt-5 pb-10 p-16 w-[90%] my-10  rounded-[20px] shadow border border-neutral-200">
              <div className="flex flex-col gap-4">
                <p className="text-black text-[0.938rem] font-medium leading-[30px]  text-center ">
                  Thank you for successfully submitting the details of your
                  property for listing with IbadanAgent! Listing your property
                  with us is a smart choice. Our team will review the
                  information you've provided and promptly follow up with you to
                  discuss the next steps in showcasing your property to
                  potential buyers.
                </p>
                <p className="text-black text-[0.938rem] font-medium leading-[30px]  text-center ">
                  Should you have any further questions or need immediate
                  assistance, feel free to contact us at hello@ibadanagent.com.
                </p>
                <p className="text-black text-[0.938rem] font-medium leading-[30px]  text-center ">
                  Do you have what it takes to become an agent? We're here to
                  make your real estate journey in Ibadan as smooth and
                  successful as possible.
                </p>
              </div>
              <div className="flex w-full justify-center items-center my-5">
                <button
                  onClick={goToBecomeAgent}
                  className="w-[250px] h-[52px] pl-[31px] pr-[32.58px] py-3.5 md:ml-4 bg-[#52ADA2] rounded-[44px] justify-center items-center inline-flex"
                >
                  <span className="text-center text-white text-sm font-semibold leading-tight">
                    Let’s try it out
                  </span>
                </button>
              </div>
              <Link href="/">
                <p className="text-[#128F40] underline text-[0.875rem] font-normal leading-[24px]  text-center">
                  I am not interested, take me home
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
