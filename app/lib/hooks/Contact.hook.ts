import { useMutation } from "@tanstack/react-query";
import HttpClient from "@/app/lib/http/axios.http";
import { TSubmitContactFormPayload } from "@/app/lib/types/Contact.type";

const submitContactForm = async (payload: TSubmitContactFormPayload) =>
  await HttpClient({ method: "POST", url: "/contact", data: payload });

export const useSubmitContactForm = () => {
  return useMutation({ mutationFn: submitContactForm });
};

