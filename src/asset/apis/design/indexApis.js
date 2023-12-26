import { Api } from "../../config/Api";

export const getMembership = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/mypage/ppnInfo`);
  return response;
};