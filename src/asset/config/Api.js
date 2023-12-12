import axios from "axios";
import { baseUrl } from "./config.json";
import { useEffect } from "react";

axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

export const Api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
    "Content-Type": "application/json",
    Authorization: `Bearer ${
      typeof window !== "undefined" && localStorage.getItem("accessToken")
    }`,
  },
});