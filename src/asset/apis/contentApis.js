import { Api } from "../config/Api";

//get(사이트 기본 정보)
export const getTechnologyTransfer = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/technology/category`);
  return response;
};
