import { Api, ApiKotech } from "../config/Api";

export const decryptData = ({token_version_id, enc_data, integrity_value}) => {
  const response = ApiKotech.get(`/api/v1/nice/decrypt/data?token_version_id=${token_version_id}&enc_data=${enc_data}&integrity_value=${integrity_value}`);
  return response;
}

export const findEmail = ({hpNo}) => {
  const findEmailDTO = {
    hpNo
  };
  const response = Api.post('/viewapi/mngr/site/v2/findEmail', findEmailDTO);
  return response;
}

export const findPassword = ({email, hpNo}) => {
  const findPasswordDTO = {
    email,
    hpNo
  };
  const response = Api.post('/viewapi/mngr/site/v2/findPwd', findPasswordDTO);
  return response;
}

export const rePassword = ({mbrNo, password}) => {
  const rePasswordDTO = {
    mbrNo,
    password
  };
  const response = Api.post('/viewapi/mngr/site/v2/findPwd/reset', rePasswordDTO);
  return response;
}