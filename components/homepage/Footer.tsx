import React, { FormEvent, MouseEvent, useEffect, useState } from "react";
import BrandLogo from "@/public/ibadanAgentLogo.svg";
import MessageIcon from "@/public/message.svg";
import Image from "next/image";
import FacebookIcon from "@/public/facebook.svg";
import TwitterIcon from "@/public/twitter.svg";
import InstagramIcon from "@/public/instagram.svg";
import { toast } from "react-toastify";
import { useSubmitContactForm } from "@/app/lib/hooks/Contact.hook";

function Footer() {
  const [contactUsEmail, setContactUsEmail] = useState<string>();
  const [contactUsBody, setContactUsBody] = useState<string>();
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);
  const mutation = useSubmitContactForm();

  const handleContactEmailAddressChange = (e: { target: HTMLInputElement }) => {
    const value = e.target.value;
    setContactUsEmail(value);
  };

  const handleContactBodyContentChange = (e: {
    target: HTMLTextAreaElement;
  }) => {
    const value = e.target.value;
    setContactUsBody(value);
  };

  const handleContactUsSubmit = async (
    e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    if (!contactUsEmail || contactUsEmail === "") {
      toast.error("Enter your email");
    }
    if (!contactUsBody || contactUsBody === "") {
      toast.error("Enter your message");
    }
    if (contactUsEmail && contactUsBody) {
      setButtonDisable(true);
      await mutation.mutateAsync({
        email: contactUsEmail,
        body: contactUsBody,
      });
    }
  };
  useEffect(() => {
    if (mutation.isSuccess) {
      setButtonDisable(false);
      setContactUsEmail("");
      setContactUsBody("");
      toast.success(
        "Your message has been submitted, we will contact you soon",
      );
    }
    if (mutation.error || mutation.isError) {
      setButtonDisable(false);
    }
  });
  return (
    <footer className="w-screen bg-[#232323] mt-[5.9rem] pt-[4rem] md:px-[8rem]  px-[1rem] text-white">
      <div className="flex flex-col md:flex-row justify-between gap-[2rem]">
        <div className="md:max-w-[25rem] max-w-[100%] flex-1">
          <Image src={BrandLogo} alt="" />
          <p className="leading-[40px] font-sans text-center md:text-left text-base text-white">
            Join us on this exciting venture as we redefine real estate
            transactions in Ibadan. Discover, connect, and thrive with
            IbadanAgent - Where Real Estate Meets Convenience.
          </p>
        </div>
        <div className="md:max-w-[23.5rem] max-w-[100%] flex-auto">
          <h3 className="text-center capitalize font-bold">contact us</h3>
          <div className="relative mt-5">
            <input
              type="email"
              value={contactUsEmail}
              onChange={handleContactEmailAddressChange}
              className="min-h-[3.75rem] w-full pl-[4rem] text-black border-none outline-none"
            />
            <div className="absolute left-[.5rem] top-[50%] translate-y-[-50%]  rounded-full h-[2.5rem] w-[2.5rem] bg-[#F4F5FB] flex items-center justify-center">
              <Image src={MessageIcon} alt="" />
            </div>
          </div>
          <div className="relative mt-[1.5rem] bg-white w-full h-[12.81rem]">
            <textarea
              value={contactUsBody}
              onChange={handleContactBodyContentChange}
              className="w-full h-[9.56rem] p-[1.1rem] text-black border-b-[#52ADA2] align-text-top outline-none border-b-[1px] placeholder:text-slate-400 resize-none"
              placeholder="Type your message"
            />
            <button
              onClick={handleContactUsSubmit}
              className="bg-[#52ADA2] float-right w-[11.25rem] h-[3.25rem]"
              disabled={buttonDisable}
            >
              {" "}
              Submit
            </button>
          </div>
        </div>
        <div className="md:max-w-[20rem] max-w-[100%] py-[1.5rem] flex flex-col items-center md:items-end gap-[0.75rem] flex-1">
          <div className="flex justify-between w-[158px] ">
            <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#B3E5C3] flex items-center justify-center">
              <Image src={InstagramIcon} alt="" />
            </div>
            <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#B3E5C3] flex items-center justify-center">
              <Image src={FacebookIcon} alt="" />
            </div>
            <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#B3E5C3] flex items-center justify-center">
              <Image src={TwitterIcon} alt="" />
            </div>
          </div>
          <p>+2348062111053</p>
          <p>hello@ibadanagent.com</p>
          <p className="">No 5, Oyo Street, Ibadan,</p>
          <p>Oyo State.</p>
        </div>
      </div>
      <div>
        <h6 className="mt-[5.19rem] pb-[1.9rem] text-center leading-[1.56rem] font-medium font-sans">
          &copy; {new Date().getFullYear()}, IbadanAgent -Your Trusted Real
          Estate Solution in Ibadan!
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
