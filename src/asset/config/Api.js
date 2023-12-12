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
<<<<<<< HEAD
    "Content-Type": "application/json",
=======
    Authorization: `Bearer ${
      typeof window !== "undefined" && localStorage.getItem("accessToken")
    }`,
>>>>>>> b828ba58fb559d883d20f12e8c4ead02fe618adf
  },
});

//eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MUBuYXZlci5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTixST0xFX1VTRVIiLCJleHAiOjE3MDIzOTgxOTJ9.w7Sp7V4rYJGqgE_ac0P4plaa3woHa8AfgavHYqA0ZaRvTalNXPoYYUVhr0JsE_m9zKPARVbtgq0mA0PJTZU6NQ
