import { useQuery, UseQueryResult } from "@tanstack/react-query";
import HttpClient from "@/app/lib/http/axios.http";
import { TFetchLocationResponse } from "@/app/lib/types/Location.type";

const fetchLocations = async () =>
  await HttpClient({ method: "GET", url: "/location" });

export const useFetchLocations = () => {
  const query: UseQueryResult<TFetchLocationResponse, Error> = useQuery<
    TFetchLocationResponse,
    Error
  >({ queryKey: ["publicLocations"], queryFn: fetchLocations });
  return query;
};
