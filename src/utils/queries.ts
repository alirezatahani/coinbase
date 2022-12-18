export const convertToQuery = (params: any) => {
  return Object.keys(params)
    .map((key) => (key + (key === "uuids" ? "[]=" : "=") + params[key]))
    .join("&");
};
