import { Api } from "../config/Api";

// get(관리자 유저정보 조회)
export const getUserInfo = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/mypage/user`, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
    }
  });
  return response;
}