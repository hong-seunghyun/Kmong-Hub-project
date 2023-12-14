import { Api, ApiOrgn } from "../config/Api";

// post(이메일 존재 여부)
export const checkTheEmail = ({ email }) => {
  const checkDTO = { email: email };
  const response = Api.post(`/viewapi/mngr/site/v2/exist/email`, checkDTO);
  return response;
}

// post(소속 검색)
export const searchOrgn = ({ query }) => {
  const response = ApiOrgn.get(`/organ?page=1&row_count=3&is_using=true&query=${query}&order_by=id&order_sort=id`);
  return response;
}