import { Api } from "../config/Api";

// post(이메일 존재 여부)
export const checkTheEmail = ({ email }) => {
  const checkDTO = { email: email };
  const response = Api.post(`/viewapi/mngr/site/v2/exist/email`, checkDTO);
  return response;
}