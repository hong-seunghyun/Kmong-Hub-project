import { Api } from "../config/Api";

export const getManagerInfo = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/mypage/user`);
  return response;
};

export const getEmailDetail = ({ emailIdx }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/emailSendDetail?emailSeq=${emailIdx}`
  );
  return response;
};

export const getSMSList = ({ currentIdx, search }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/smsSend?currentPage=${currentIdx}&limit=10&searchValue=${search}`
  );
  return response;
};
