import { Api } from "../../config/Api";

export const getMyInfo = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/mypage/member`);
  return response;
};
