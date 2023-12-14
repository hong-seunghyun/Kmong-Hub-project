import { Api, ApiOrgn } from "../config/Api";

// post(이메일 존재 여부)
export const checkTheEmail = ({ email }) => {
  const checkDTO = { email: email };
  const response = Api.post(`/viewapi/mngr/site/v2/exist/email`, checkDTO);
  return response;
}

// get(소속 검색)
export const searchOrgn = ({ query }) => {
  const response = ApiOrgn.get(`/organ?page=1&row_count=3&is_using=true&query=${query}&order_by=id&order_sort=id`);
  return response;
}

// post(회원가입)
export const register = ({ emailAddr, hpNo, mbrNm, nnmNm, nwlAgrmYn, pwd, smsRcvAgrmYn, ucmdCd, orgnPhcNo }, pflImg, pslAttchFile) => {
  const registerDTO = {
    emailAddr,
    hpNo,
    mbrNm,
    nnmNm,
    nwlAgrmYn,
    pwd,
    smsRcvAgrmYn,
    ucmdCd,
    orgnPhcNo
  };
  const formData = new FormData();
  formData.append('pflImg', pflImg);
  formData.append('pslAttchFile', pslAttchFile);
  formData.append('signUpReq', registerDTO);
  const response = Api.post(`/viewapi/mngr/site/v2/member`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
  return response;
}