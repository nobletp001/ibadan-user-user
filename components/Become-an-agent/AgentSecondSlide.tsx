import React, { useState } from "react";
import ArrowLeftWithBg from "../../public/arrowWithBg.svg";
import Image from "next/image";
import Uploader from "../Uploader";
import { AgentTpe } from "@/app/lib/types/Request.type";
import { useMutation } from "@tanstack/react-query";
import { submitAgentRequestForm } from "@/app/lib/hooks/Request.hook";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import BeatLoader from "react-spinners/BeatLoader";
import { formatError } from "@/app/lib/hooks/errorHandler";

type BuySecondSlideProps = {
  handlePrevClick: () => void;
  agent: AgentTpe;
};
type AgentPageType = {
  firstName: string;
  lastName: string;
  bvn: string;
  email: string;
  fileNames: string[];
};

const AgentSecondSlide = ({ handlePrevClick, agent }: BuySecondSlideProps) => {
  const [agentPage, setAgentPage] = useState<AgentPageType>({
    firstName: "",
    lastName: "",
    bvn: "",
    email: "",
    fileNames: [],
  });
  const [fileNames, setFileNames] = useState<string[]>([]);
  const router = useRouter();
  const agentMutation = useMutation<void, Error, FormData>({
    mutationFn: (credentials: FormData) => submitAgentRequestForm(credentials),
    onError: (error) => {
      const m = formatError(error);
      toast.error(m);
    },
    onSuccess: (s: any, _) => {
      if (s?.status === true) {
        toast.success(s?.message);
        router.push("/success");
      }
    },
  });
  const [errors, seterrors] = useState({
    firstName: "",
    lastName: "",
    bvn: "",
    email: "",
    file: "",
  });

  const handleChangeInput = (val: string, name: string) => {
    seterrors({ ...errors, [name]: "" });
    setAgentPage({ ...agentPage, [name]: val });
  };
  // console.log(agent, "agent");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression
  const handleSubmit = async () => {
    if (agentPage.firstName === "") {
      seterrors({ ...errors, firstName: "First name is required" });
    } else if (agentPage.lastName === "") {
      seterrors({ ...errors, lastName: "Last name is required" });
    } else if (agentPage.email === "") {
      seterrors({ ...errors, email: "Email is required" });
    } else if (!emailRegex.test(agentPage.email)) {
      seterrors({ ...errors, email: "Invalid email format" });
    } else if (agentPage.bvn === "") {
      seterrors({ ...errors, bvn: "BVN is required" });
    } else if (fileNames.length === 0) {
      seterrors({ ...errors, file: "File credentials is required" });
    } else {
      const form = new FormData();
      form.append("locationId", agent.locationId);
      form.append("whatsappContact", agent.whatsappContact);
      form.append("occupation", agent.occupation);
      form.append(
        "isTermsAndConditionsAccepted",
        agent.isAvailabilityChecked.toString(),
      );
      form.append("firstName", agentPage.firstName);
      form.append("lastName", agentPage.lastName);
      form.append("email", agentPage.email);
      agent.otherLocationId.forEach((Id) => {
        form.append("otherLocationIds", Id);
      });
      agent.property.forEach((propertyId) => {
        form.append("propertyPreferenceIds[]", propertyId);
      });
      agent.services.forEach((serviceId) => {
        form.append("serviceIds[]", serviceId);
      });
      fileNames.forEach((file) => {
        form.append("idCards[]", file);
      });
      await agentMutation.mutateAsync(form);
    }
  };
  const errorFileRemove = () => {
    seterrors({ ...errors, file: "" });
  };
  return (
    <div className="relative ">
      <div className="">
        <h1 className="text-black text-[38px]  font-bold text-center md:text-start leading-[56px]">
          Some personal info
        </h1>
        <h4 className="text-neutral-700 text-[16px] md:text-xs font-medium md:mt-4 mt-6 leading-[24px] md:leading-normal text-center md:text-start">
          Kindly fill in some details so we can reach out to you
        </h4>
      </div>
      <div className="mt-[67px] md:mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-0 gap-4">
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              First Name
            </label>
            <input
              type="text"
              value={agentPage.firstName}
              className={`w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border ${
                errors.firstName ? "border-red-400" : "border-emerald-200"
              } justify-start items-center inline-flex`}
              placeholder="First Name"
              onChange={(e) => handleChangeInput(e.target.value, "firstName")}
            />
            {errors.firstName && (
              <p className="text-[10px] text-red-400 font-normal pl-5">
                {errors.firstName}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              Last Name
            </label>
            <input
              type="text"
              value={agentPage.lastName}
              className={`w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border ${
                errors.lastName ? "border-red-400" : "border-emerald-200"
              } justify-start items-center inline-flex`}
              placeholder="Last Name"
              onChange={(e) => handleChangeInput(e.target.value, "lastName")}
            />
            {errors.lastName && (
              <p className="text-[10px] text-red-400 font-normal pl-5">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-[32px] md:mt-[20px] md:gap-0 gap-4">
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              Email
            </label>
            <input
              type="text"
              className={`w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border ${
                errors.email ? "border-red-400" : "border-emerald-200"
              } justify-start items-center inline-flex`}
              placeholder="Phone number"
              value={agentPage.email}
              onChange={(e) => handleChangeInput(e.target.value, "email")}
            />
            {errors.email && (
              <p className="text-[10px] text-red-400 font-normal pl-5">
                {errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start justify-start">
            <label className="text-zinc-800 text-xs font-medium leading-normal">
              NIN/BVN
            </label>
            <input
              type="text"
              className={`w-[320px] h-[50px] px-6 py-[19px] text-xs mt-1 outline-none bg-white rounded-[44px] border ${
                errors.bvn ? "border-red-400" : "border-emerald-200"
              } justify-start items-center inline-flex`}
              placeholder="NIN/BVN"
              value={agentPage.bvn}
              onChange={(e) => handleChangeInput(e.target.value, "bvn")}
            />
            {errors.bvn && (
              <p className="text-[10px] text-red-400 font-normal pl-5">
                {errors.bvn}
              </p>
            )}
          </div>
        </div>
        <div className="mt-8 md:mt-4">
          <Uploader
            setFileNames={setFileNames}
            error={errors.file}
            fileNames={fileNames}
            errorFileRemove={errorFileRemove}
          />
        </div>
      </div>
      <div className="mt-12 md:mt-6 gap-4 md:gap-0 flex flex-col-reverse md:flex-row md:items-start md:justify-start items-center">
        <div onClick={handlePrevClick} style={{ cursor: "pointer" }}>
          <Image src={ArrowLeftWithBg} alt="" />
        </div>
        <button
          onClick={handleSubmit}
          className="w-[250px] h-[52px] pl-[31px] pr-[32.58px] py-3.5 md:ml-4 bg-[#52ADA2] rounded-[44px] justify-center items-center inline-flex"
        >
          {agentMutation?.isPending ? (
            <BeatLoader color="#36d7b7" />
          ) : (
            <span className="text-center text-white text-sm font-semibold leading-tight">
              Submit application
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default AgentSecondSlide;
