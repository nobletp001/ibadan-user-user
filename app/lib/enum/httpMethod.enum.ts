export const HTTP_METHOD = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
} as const;

export type HttpMethodType = (typeof HTTP_METHOD)[keyof typeof HTTP_METHOD];
