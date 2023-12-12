import axios from "axios";
import { baseUrl } from "../config/config.json";

//get(사이트 기본 정보)
export const getSiteBasicInfo = () => {
  const response = axios.get(`${baseUrl}/viewapi/mngr/site/v1/basicInfo`);
  return response;
};

//get(사이트 정보 확장)
export const getSiteBsl = () => {
  const response = axios.get(`${baseUrl}/viewapi/mngr/site/v1/bsl`);
  return response;
};

//get(회원가입 기본 설정)
export const getSiteSttg = () => {
  const response = axios.get(`${baseUrl}/viewapi/mngr/site/v1/bcmem/sttg`);
  return response;
};

//get(사이트 약관 정보)
export const getSiteClus = () => {
  const response = axios.get(`${baseUrl}/viewapi/mngr/site/v1/clus`);
  return response;
};

//get(사이트 스크립트 조회)
export const getSiteScpt = () => {
  const response = axios.get(`${baseUrl}/viewapi/mngr/site/v1/scpt`);
  return response;
};

