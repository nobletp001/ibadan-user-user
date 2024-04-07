import { BaseType } from "@/app/lib/types/base.type";

export type TLocationDataType = Array<{ id: string; name: string }>;
export type TFetchLocationResponse = BaseType<TLocationDataType>;
