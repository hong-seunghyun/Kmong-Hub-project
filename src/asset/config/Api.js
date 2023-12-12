import axios from "axios";
import { baseUrl } from "./config.json";

export const Api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
    Authorization: `bearer ${
      typeof window !== "undefined" && localStorage.getItem("accessToken")
    }`,
  },
});
