
export type TCreateBuyRequestPayload = {
    locationId: string;
    otherLocationIds?: string[];
    propertyPreferenceId: string;
    propertySubPreferenceId?: string;
    bedrooms?: string;
    budget: string;
    otherDetail?: string;
    firstName: string;
    lastName: string;
    whatsappContact: string;
    occupation: string;
    email: string;
    alternativeContact?: string;
    isAvailableForInspection: boolean;
  };
  
  export type TCreateRentRequestPayload = {
    locationId: string;
    otherLocationIds?: string[];
    propertyPreferenceId: string;
    propertySubPreferenceId?: string;
    bedrooms?: string;
    budget: string;
    otherDetail?: string;
    firstName: string;
    lastName: string;
    whatsappContact: string;
    occupation: string;
    email: string;
    alternativeContact?: string;
    isAvailableForInspection: boolean;
  };
  export const OWNERSHIPMEANS = {
    INHERITANCE: "inheritance",
    ACQUISITION: "acquisition",
    LEASE: "lease",
    GIFT: "gift",
    ROC: "statutory right of occupancy",
  } as const;
  
  export const TITLEDOCUMENT = {
    CONVEYANCE: "deed of convenyance",
    SALES_AGREEMENT: "deed of sales agreement",
    ASSIGNEMT: "deed of assignment",
    CofO: "certificate of occupancy",
    SURVEYPLAN: "survery plan",
  } as const;
  
  export type OwnershipMeansType =
    (typeof OWNERSHIPMEANS)[keyof typeof OWNERSHIPMEANS];
  export type TitleDocumentype =
    (typeof TITLEDOCUMENT)[keyof typeof TITLEDOCUMENT];
  
  export type TCreateSellRequestPayload = {
    locationId: string;
    ownershipMeans: OwnershipMeansType;
    propertyPreferenceId: string;
    subPreferencesId?: string;
    titleDocument: TitleDocumentype;
    area: string;
    askingPrice: number;
    otherDetail?: string;
    firstName: string;
    lastName: string;
    whatsappContact: string;
    occupation: string;
    email: string;
    alternativeContact?: string;
    isOwner: boolean;
    propertyImages: string[];
    propertyDocuments: string[];
  };
  
  export type TCreateAgentRequestPayload = {
    locationId: string;
    otherLocationIds?: string[];
    whatsappContact: string;
    occupation: string;
    serviceIds: string[];
    propertyPreferenceIds: string[];
    isTermsAndConditionsAccepted: boolean;
    firstName: string;
    lastName: string;
    email: string;
    alternativeContact?: string;
    meansOfIdentification: string[];
    fileName: string;
    identificationType: string;
  }

  export type TUserPage = {
    locationId: string;
    location: string;
    otherLocationId: string;
    otherLocation: string;
    propertyId: string;
    property: string;
    subPropertyId: string;
    subProperty: string;
    selectedroomNumber: string;
    selectedBudgetRange: string;
    specificationDesc: string;
    selectedroomNumberId: string;
  };
  export interface AgentTpe {
    locationId: string;
    otherLocationId: string[];
    location: string;
    property: string[]; // Assuming property is an array of strings, you can adjust the type accordingly
    whatsappContact: string;
    occupation: string;
    services: string[];
    isAvailabilityChecked: boolean;
  }

 export  type SellAgentType = {
    location: string;
    locationId: string;
    ownership: string;
    ownershipId: string;
    property: string;
    propertyId: string;
    subProperty: string;
    subPropertyId: string;
    document: string;
    documentId: string;
    landArea: string;
    budget: string;
    specificationDesc: string;
    firstName:string;
    lastName:string;
    whatsapContact:string;
    occupation:string;
    email:string;
    alternativeContact:string;
    isOwner:boolean
  };
  