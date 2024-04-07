import axios, { AxiosResponse } from "axios";
import { HttpMethodType } from "@/app/lib/enum/httpMethod.enum";

const API_BASE_URL = 'https://stg-ibagent-api.onrender.com/api/v1';

type AxiosParams = {
  url: string;
  method: HttpMethodType;
  baseUrl?: string;
  data?: FormData; // Update the type to include FormData
};

const Client = async ({ method, url, baseUrl, data }: AxiosParams) => {
  try {
    const res: AxiosResponse = await axios({
      method,
      url,
      baseURL:  API_BASE_URL,
      headers: {
        "Content-Type": "application/multi-form", // Consider 'multipart/form-data' for FormData
      },
      data: data,
    });

    if (res.status === 200 || res.status === 201) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};

export default Client;
