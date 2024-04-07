import React, { useState } from "react";
import Uploader from "../Uploader";
import ArrowLeftWithBg from "../../public/arrowWithBg.svg";
import Image from "next/image";
import { SellAgentType } from "@/app/lib/types/Request.type";
import { useMutation } from "@tanstack/react-query";
import { submitSellRequestForm } from "@/app/lib/hooks/Request.hook";
import { formatError } from "@/app/lib/hooks/errorHandler";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import BeatLoader from "react-spinners/BeatLoader";
import UploaderSellFile from "../uploadSellFile";

interface SellSecondSlideProps {
  handlePrevClick: () => void;
  sellAgent: SellAgentType;
}
const SellSecondSlide = ({
  handlePrevClick,
  sellAgent,
}: SellSecondSlideProps) => {
  const [fileNamesProperty, setFileNamesProperty] = useState<File[]>([]);
  const [fileNamesDocument, setFileNamesDocument] = useState<File[]>([]);

  const [errors, seterrors] = useState({
    file: "",
    file2:""
  });
  const router = useRouter();
  const errorFileRemoveDocument = () => {
    seterrors({ ...errors, file: "" });
  };
  const sellMutation = useMutation<void, Error, FormData>({
    mutationFn: (credentials: FormData) => submitSellRequestForm(credentials),
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
  console.log(sellAgent, "ssellagane")
  const handSubmit = async () => {
    if (fileNamesProperty.length === 0) {
      seterrors({ ...errors, file: "File credentials is required" });
    } 
    else if(fileNamesDocument.length===0){
      seterrors({ ...errors, file2: "File credentials is required" });

    }
    else {
      const form = new FormData();
      form.append("locationId", sellAgent.locationId);
      form.append("ownership", sellAgent.ownershipId);
      form.append("propertyPreferenceId", sellAgent.propertyId);
      form.append("propertySubPreferenceId", sellAgent.subPropertyId);
      form.append("titleDocument", sellAgent.document);
      form.append("area", sellAgent.landArea);
      form.append("occupation", sellAgent.occupation);
      form.append("whatsappContact", sellAgent.whatsapContact);
      form.append("askingPrice", sellAgent.budget);
      form.append("otherDetail", sellAgent.specificationDesc);
      form.append("firstName", sellAgent.firstName);
      form.append("lastName", sellAgent.lastName);
      form.append("email", sellAgent.email);
      form.append("alternativeContact", sellAgent.alternativeContact);
      form.append("isOwner", sellAgent.isOwner.toString());
      fileNamesProperty.forEach((file) => {
        form.append(`propertyImages`, file);
      });
      fileNamesDocument.forEach((file) => {
        form.append(`propertyDocuments`, file);
      })
      await sellMutation.mutateAsync(form);
    }
  };
  return (
    <div className="relative ">
      <div className="">
        <h1 className="text-black text-[38px]  font-bold text-center md:text-start leading-[56px]">
          Let&apos;s get some info{" "}
        </h1>
        <h4 className="text-neutral-700 text-[16px] md:text-xs font-medium md:mt-1 mt-6 leading-[24px] md:leading-normal text-center md:text-start">
          Kindly fill in some details about the property you want to sell
        </h4>
      </div>
      <div>
        <div className="my-10 flex flex-col lg:flex-row w-full llg:gap-3 gap-1">
          <div className="w-full lg:w-1/2">
            <h4 className="text-black text-[10px] lg:text-[16px] my-2 md:text-xs font-medium  leading-[24px] md:leading-normal ">
              Upload images of the property
            </h4>
            <UploaderSellFile
              setFileNames={setFileNamesProperty}
              fileNames={fileNamesProperty}
              error={errors.file}
              errorFileRemove={errorFileRemoveDocument}
              idFile="property"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h4 className="text-black text-[10px] lg:text-[16px] my-2 md:text-xs font-medium  leading-[24px] md:leading-normal ">
              Upload relevant document (if any)
            </h4>
            <UploaderSellFile
              setFileNames={setFileNamesDocument}
              fileNames={fileNamesDocument}
              error={errors.file2}
              errorFileRemove={errorFileRemoveDocument}
              idFile="document"
            />
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-4 gap-4 md:gap-0 flex flex-col-reverse md:flex-row md:items-start md:justify-start items-center">
        <div onClick={handlePrevClick} style={{ cursor: "pointer" }}>
          <Image src={ArrowLeftWithBg} alt="" />
        </div>
        <button
          onClick={handSubmit}
          className="w-[250px] h-[52px] pl-[31px] pr-[32.58px] py-3.5 md:ml-4 bg-[#52ADA2] rounded-[44px] justify-center items-center inline-flex"
        >
          {sellMutation?.isPending ? (
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

export default SellSecondSlide;
