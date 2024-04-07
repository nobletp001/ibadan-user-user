import { BaseType } from "@/app/lib/types/base.type";

export type TPropertyPreferenceDataType = Array<{ id: string; name: string }>;
export type TFetchPropertyPreferenceResponse =
  BaseType<TPropertyPreferenceDataType>;
