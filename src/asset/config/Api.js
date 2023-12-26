import axios from "axios";
import { baseUrl, kotechUrl, orgnUrl } from "./config.json";

axios.defaults.headers["Access-Control-Allow-Origin"] = "*";

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

export const ApiForm = axios.create({
  baseURL: baseUrl,
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${
      typeof window !== "undefined" && localStorage.getItem("accessToken")
    }`,
  },
});

export const ApiKotech = axios.create({
  baseURL: kotechUrl,
  withCredentials: true,
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
    "Content-Type": "application/json"
  },
});

export const ApiOcr = axios.create({
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
    "Content-Type": "application/json"
  },
});

export const ApiOrgn = axios.create({
  baseURL: orgnUrl,
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username: 'eef2e99a0012f85478408d15770b8108',
    password: '5ce3ad3bacff1d08bf058f614c0901ac60b43a5361d2c59f53fdf1595019f6ed'
  }
});
