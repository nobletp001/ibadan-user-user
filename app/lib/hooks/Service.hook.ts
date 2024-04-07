import { useQuery, UseQueryResult } from "@tanstack/react-query";
import HttpClient from "@/app/lib/http/axios.http";
import { TFetchLocationResponse } from "@/app/lib/types/Location.type";

const fetchServices = async () =>
  await HttpClient({ method: "GET", url: "/service" });

export const useFetchServices = () => {
  const query: UseQueryResult<TFetchLocationResponse, Error> = useQuery<
    TFetchLocationResponse,
    Error
  >({ queryKey: ["publicServices"], queryFn: fetchServices });
  return query;
};
