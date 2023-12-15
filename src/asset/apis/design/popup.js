import { Api } from "../../config/Api";

// post(팝업 불러오기)
export const getPopUp = ({email, pw}) => {
  const loginDTO = {
    email: email,
    password: pw
  };
  const response = Api.post(`/viewapi/mngr/site/v2/signin`, loginDTO);
  return response;
}