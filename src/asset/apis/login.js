import { Api } from "../config/Api";

// post(로그인)
export const login = ({email, pw}) => {
  const loginDTO = {
    email: email,
    password: pw
  };
  const response = Api.post(`/viewapi/mngr/site/v2/signin`, loginDTO);
  return response;
}