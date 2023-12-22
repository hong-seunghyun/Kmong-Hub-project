import { Api, ApiKotech } from "../config/Api";

// get(기술문서 불러오기)
export const getTechList = (currentPage, limit, searchValue) => {
  const response = Api.get(`/viewapi/mngr/site/v1/tdcList`, {
    params: searchValue
      ? {
          currentPage: currentPage,
          limit: limit,
          searchValue: searchValue,
        }
      : {
          currentPage: currentPage,
          limit: limit,
        },
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
    },
  });
  return response;
};

// get(특허 기본정보)
export const getTechDetails = (no) => {
  const response = Api.get(`/viewapi/mngr/site/v1/tdcDetail`, {
    params: {
      tdcNo: no,
    },
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
    },
  });
  return response;
};

// get(소속 상세 정보)
export const getOrgnDetails = (id) => {
  const response = ApiKotech.get(`/organ/${id}`, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
    },
  });
  return response;
};

// post(특허 저장하기)
export const addPatent = (
  {
    tdcNo,
    typeCd,
    tcqNm,
    rsacUcmdCd,
    apyNo,
    apyAd,
    statCd,
    rgstNo,
    ivtNm,
    ipcVal,
    cpcVal,
    piuaYn,
  },
  file
) => {
  const mergeTechDTO = {
    tdcNo,
    typeCd,
    tcqNm,
    rsacUcmdCd,
    apyNo,
    apyAd,
    statCd,
    rgstNo,
    ivtNm,
    ipcVal,
    cpcVal,
    piuaYn,
  };
  console.log(JSON.stringify(mergeTechDTO));
  const blob = new Blob([JSON.stringify(mergeTechDTO)], {
    type: "application/json",
  });
  console.log(blob);
  console.log(file);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("tecDocRgstDto", blob);

  const response = Api.post(`/viewapi/mngr/site/v1/merge/tdc`, formData, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      'Content-Type': 'multipart/form-data',
      Accept: "application/json"
    },
  });
  return response;
};

// post(논문 저장하기)
export const addThesis = (
  { typeCd, tcqNm, rsacUcmdCd, uniqueNo, apyAd, sbmyn, ivtNm, orgCntn },
  file
) => {
  const mergeTechDTO = {
    typeCd,
    tcqNm,
    rsacUcmdCd,
    uniqueNo,
    apyAd,
    sbmyn,
    ivtNm,
    orgCntn
  };
  console.log(JSON.stringify(mergeTechDTO));
  const blob = new Blob([JSON.stringify(mergeTechDTO)], {
    type: "application/json",
  });
  console.log(blob);
  console.log(file);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("tecDocRgstDto", blob);

  const response = Api.post(`/viewapi/mngr/site/v1/merge/tdc`, formData, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      'Content-Type': 'multipart/form-data',
      Accept: "application/json"
    },
  });
  return response;
};

// post(논문 저장하기)
export const addReport = (
  { typeCd, tcqNm, rsacUcmdCd, uniqueNo, apyAd, sbmyn, ivtNm, orgCntn },
  file
) => {
  const mergeTechDTO = {
    typeCd,
    tcqNm,
    rsacUcmdCd,
    uniqueNo,
    apyAd,
    sbmyn,
    ivtNm,
    orgCntn
  };
  console.log(JSON.stringify(mergeTechDTO));
  const blob = new Blob([JSON.stringify(mergeTechDTO)], {
    type: "application/json",
  });
  console.log(blob);
  console.log(file);

  const formData = new FormData();
  formData.append("file", file);
  formData.append("tecDocRgstDto", blob);

  const response = Api.post(`/viewapi/mngr/site/v1/merge/tdc`, formData, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      'Content-Type': 'multipart/form-data',
      Accept: "application/json"
    },
  });
  return response;
};