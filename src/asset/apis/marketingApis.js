import { Api } from "../config/Api";

export const getEmailList = ({ currentIdx, search }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/emailSend?currentPage=${currentIdx}&limit=10&searchValue=${search}`
  );
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

export const sendEmail = ({
  cntn,
  emailSendMbrs,
  emailSeq,
  rvsnSndDtm,
  rvsnSndYn,
  siteNo,
  sndStatCd,
  sndTypeCd,
  titleNm,
}) => {
  const response = Api.post(`/viewapi/mngr/site/v1/merge/emailSend`, {
    cntn,
    emailSendMbrs,
    emailSeq,
    rvsnSndDtm,
    rvsnSndYn,
    siteNo,
    sndStatCd,
    sndTypeCd,
    titleNm,
  });
  return response;
};

export const sendSMS = ({
  cntn,
  rvsnSndDtm,
  rvsnSndYn,
  siteNo,
  smsSendMbrs,
  titleNm,
  smsSeq,
  sndSmsPhcNo,
  sndStatCd,
  sndTypeCd,
}) => {
  const response = Api.post(`/viewapi/mngr/site/v1/merge/smsSend`, {
    cntn,
    rvsnSndDtm,
    rvsnSndYn,
    siteNo,
    smsSendMbrs,
    smsSeq,
    sndSmsPhcNo,
    sndStatCd,
    sndTypeCd,
    titleNm,
  });
  return response;
};

export const delEmailDetail = ({ emailSeq }) => {
  const response = Api.delete(
    `/viewapi/mngr/site/v1/delete/emailSend?emailSeq=${emailSeq}`
  );
  return response;
};

export const delSMSDetail = ({ smsSeq }) => {
  const response = Api.delete(
    `/viewapi/mngr/site/v1/delete/smsSend?smsSeq=${smsSeq}`
  );
  return response;
};
