
import HttpClient from "@/app/lib/http/axios.http";
import { TCreateBuyRequestPayload} from "@/app/lib/types/Request.type";
import ClientForm from "../http/axios.form";
export const submitBuyRequestForm  = async (payload: TCreateBuyRequestPayload) =>
  await HttpClient({ method: "POST", url: "/request/buy", data: payload });



  export const submitRentRequestForm  = async (payload: TCreateBuyRequestPayload) =>
  await HttpClient({ method: "POST", url: "/request/rent", data: payload });


  export const submitAgentRequestForm  = async (payload:FormData) =>
  await ClientForm({ method: "POST", url: "/request/agent", data: payload });


  export const submitSellRequestForm  = async (payload:FormData) =>
  await ClientForm({ method: "POST", url: "/request/sell", data: payload });

