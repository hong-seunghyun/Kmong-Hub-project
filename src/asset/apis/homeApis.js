import { Api } from "../config/Api";

// get(관리자 유저정보 조회)
export const getUserInfo = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/mypage/member`, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
    },
  });
  return response;
};
export const getSiteInfo = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/main/siteInfo`, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
    },
  });
  return response;
};
