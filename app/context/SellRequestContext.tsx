"use client";

import { createContext } from "react";
import {
  OwnershipMeansType,
  TitleDocumentype,
} from "../lib/types/Request.type";

export type TSellRequestFormData = {
  locationId?: string;
  ownershipMeans?: OwnershipMeansType;
  propertyPreferenceId?: string;
  subPreferencesId?: string;
  titleDocument?: TitleDocumentype;
  area?: string;
  askingPrice?: number;
  otherDetail?: string;
  firstName?: string;
  lastName?: string;
  whatsappContact?: string;
  occupation?: string;
  email?: string;
  alternativeContact?: string;
  isOwner?: boolean;
  propertyImages?: string[];
  propertyDocuments?: string[];
};

type TSellRequestHandleChangeFunction = {
  handleInputChange: (key: string, value: string) => void;
};
type TSellRequestContext = TSellRequestFormData &
  TSellRequestHandleChangeFunction;

const SellContext = createContext<TSellRequestContext>({
  handleInputChange: (key: string, value: string) => {},
});

export default SellContext;
