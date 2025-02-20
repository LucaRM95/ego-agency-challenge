import axios from "axios";

const baseApiConfiguration = (baseURL: string) => {
  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return instance;
};

export const getEgoApi = () => {
  let baseURL = import.meta.env.VITE_EGO_API || "";

  if (baseURL.charAt(baseURL.length - 1) === "/") {
    baseURL = baseURL.substring(0, baseURL.length - 1);
  }

  return baseApiConfiguration(baseURL);
};
