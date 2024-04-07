
export function formatError(responseData: any): string {
  if (responseData) {
    const { data, errors, title, message, error } =
      responseData?.response?.data;
    if (error) {
      return Object.values(error).join(" ");
    }

    if (data) {
      return Object.values(data).join(" ");
    }

    if (errors) {
      console.log(errors)
      if (Array.isArray(errors)) {
        return errors.map((err) => `${err.field}:${err.message}`).join("\n");
      } else {
        return errors;
      }
    }

    return message || title || "Unknown error";
  }

  return "Something went wrong!";
}
