import { Api } from "../../config/Api";

export const getMyPlanInfo = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/mypage/ppnInfo`);
  return response;
};

export const getSitePlanInfo = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/main/sitePpnInfo`);
  return response;
};
