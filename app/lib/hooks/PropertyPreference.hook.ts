import { useQuery, UseQueryResult } from "@tanstack/react-query";
import HttpClient from "@/app/lib/http/axios.http";
import { TFetchPropertyPreferenceResponse } from "@/app/lib/types/PropertyPreference.type";

const fetchPropertyPreference = async () =>
  await HttpClient({ method: "GET", url: "/preference" });

const fetchSubPropertyPreference = async ({
  propertyPreferenceId,
}: {
  propertyPreferenceId: string;
}) =>
  await HttpClient({
    method: "GET",
    url: `/preference/${propertyPreferenceId}`,
  });

export const useFetchPropertyPreference = () => {
  const query: UseQueryResult<TFetchPropertyPreferenceResponse, Error> =
    useQuery<TFetchPropertyPreferenceResponse, Error>({
      queryKey: ["publicPropertyPreference"],
      queryFn: fetchPropertyPreference,
    });
  return query;
};

export const useFetchSubPropertyPreference = ({
  propertyPreferenceId,
}: {
  propertyPreferenceId: string;
}) => {
  const query: UseQueryResult<TFetchPropertyPreferenceResponse, Error> =
    useQuery<TFetchPropertyPreferenceResponse, Error>({
      queryKey: ["publicPropertyPreference", propertyPreferenceId],
      queryFn: () => fetchSubPropertyPreference({ propertyPreferenceId }),
      enabled:!!propertyPreferenceId
    });
  return query;
};
