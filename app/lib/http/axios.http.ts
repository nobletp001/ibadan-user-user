import axios, { AxiosResponse } from "axios";
// import { API_BASE_URL } from "@/app/constant/env.constant";
import { HttpMethodType } from "@/app/lib/enum/httpMethod.enum";
 const API_BASE_URL ='https://stg-ibagent-api.onrender.com/api/v1'
type AxiosParams = {
  url: string;
  method: HttpMethodType;
  token?: string;
  baseUrl?: string;
  data?: object;
};

const Client = async ({ method, url, baseUrl, data, token }: AxiosParams) => {
  try {
    const res: AxiosResponse = await axios({
      method,
      url,
      baseURL: baseUrl || API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
        Authorization: token && `Bearer ${token}`,
      },
      data: data && JSON.stringify(data),
    });

    if (res.status === 200 || res.status === 201) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};

export default Client;
