import axios from "axios";
import { baseUrl } from "./config.json";

axios.defaults.headers["Access-Control-Allow-Origin"] = "*";

export const Api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
    Authorization: `Bearer ${
      typeof window !== "undefined" && localStorage.getItem("accessToken")
    }`,
  },
});

//eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MUBuYXZlci5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJleHAiOjE3MDIzOTgxOTJ9.w7Sp7V4rYJGqgE_ac0P4plaa3woHa8AfgavHYqA0ZaRvTalNXPoYYUVhr0JsE_m9zKPARVbtgq0mA0PJTZU6NQ
