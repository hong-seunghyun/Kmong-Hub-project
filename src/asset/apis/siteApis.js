import { Api } from "../config/Api";
import { baseUrl } from "../config/config.json";

// get(관리자 유저정보 조회)
export const getUserInfo = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/mypage/user`);
  return response;
}

// post(로그인)
export const login = ({email, pw}) => {
  const loginDTO = {
    email: email,
    password: pw
  };
  const response = Api.post(`/viewapi/mngr/site/v2/signin`, loginDTO);
  return response;
}

export const loginOptions = () => {
  const response = Api.options(`/viewapi/mngr/site/v2/signin`, {
    headers: {
      withCredentials: true
    }
  });
  return response;
}

//get(사이트 기본 정보)
export const getSiteBasicInfo = () => {
  const response = Api.get(`${baseUrl}/viewapi/mngr/site/v1/basicInfo`);
  return response;
};

//get(사이트 정보 확장)
export const getSiteBsl = () => {
  const response = Api.get(`${baseUrl}/viewapi/mngr/site/v1/bsl`);
  return response;
};

//get(회원가입 기본 설정)
export const getSiteSttg = () => {
  const response = Api.get(`${baseUrl}/viewapi/mngr/site/v1/bcmem/sttg`);
  return response;
};

//get(사이트 약관 정보)
export const getSiteClus = () => {
  const response = Api.get(`${baseUrl}/viewapi/mngr/site/v1/clus`);
  return response;
};

//get(사이트 스크립트 조회)
export const getSiteScpt = () => {
  const response = Api.get(`${baseUrl}/viewapi/mngr/site/v1/scpt`);
  return response;
};

//post(사이트 기본 정보)
export const setSiteBasicInfo = ({
  cutspEmailAddr,
  cutspPhcNo,
  fvcPathAddr,
  mngRcvEmailAddr,
  siteItrCntn,
  siteNm,
  siteNo,
  snrEmailAddr,
}) => {
  const response = Api.post(`${baseUrl}/viewapi/mngr/site/v1/merge/basicInfo`, {
    cutspEmailAddr,
    cutspPhcNo,
    fvcPathAddr,
    mngRcvEmailAddr,
    siteItrCntn,
    siteNm,
    siteNo,
    snrEmailAddr,
  });
  return response;
};

//post(사이트 정보 확장)
export const setSiteBsl = ({
  bsicDmiAddr,
  bslNo,
  cbdAddr,
  cbdNm,
  idvdDmiAddr,
  ombRptNo,
  ptpPicEmailAddr,
  ptpPicNm,
  ptpPicPhcNo,
  rpsvNm,
  siteInfoId,
}) => {
  const response = Api.post(`${baseUrl}/viewapi/mngr/site/v1/merge/bsl`, {
    bsicDmiAddr,
    bslNo,
    cbdAddr,
    cbdNm,
    idvdDmiAddr,
    ombRptNo,
    ptpPicEmailAddr,
    ptpPicNm,
    ptpPicPhcNo,
    rpsvNm,
    siteInfoId,
  });
  return response;
};

//post(회원가입 기본 설정)
export const setSiteSttg = ({
  addrYnCd,
  bizSprYnCd,
  brdtYnCd,
  cmpyAddrYnCd,
  cmpyNmYnCd,
  cmpyPhcNoYnCd,
  cmpyUrlYnCd,
  cncnTcqSprYnCd,
  fdtYrYnCd,
  nmYnCd,
  sexYnCd,
  siteBcmemId,
}) => {
  const response = Api.post(
    `${baseUrl}/viewapi/mngr/site/v1/merge/bcmem/sttg`,
    {
      addrYnCd,
      bizSprYnCd,
      brdtYnCd,
      cmpyAddrYnCd,
      cmpyNmYnCd,
      cmpyPhcNoYnCd,
      cmpyUrlYnCd,
      cncnTcqSprYnCd,
      fdtYrYnCd,
      nmYnCd,
      sexYnCd,
      siteBcmemId,
    }
  );
  return response;
};

//post(사이트 약관 정보)
export const setSiteClus = ({
  advRcvAgrmYnCntn,
  pinfPrcsPlcyCntn,
  pinfSttgYnCntn,
  piuaBbsCntn,
  piuaBcmemCntn,
  siteClusId,
  tavoClusCntn,
}) => {
  const response = Api.post(`${baseUrl}/viewapi/mngr/site/v1/merge/clus`, {
    advRcvAgrmYnCntn,
    pinfPrcsPlcyCntn,
    pinfSttgYnCntn,
    piuaBbsCntn,
    piuaBcmemCntn,
    siteClusId,
    tavoClusCntn,
  });
  return response;
};

//post(사이트 스크립트 조회)
export const setSiteScpt = ({
  chntkScptCntn,
  gganltcScptCntn,
  ogImgPathAddr,
  siteItrCntn,
  siteNm,
  siteScptId,
}) => {
  const response = Api.post(`${baseUrl}/viewapi/mngr/site/v1/merge/scpt`, {
    chntkScptCntn,
    gganltcScptCntn,
    ogImgPathAddr,
    siteItrCntn,
    siteNm,
    siteScptId,
  });
  return response;
};
