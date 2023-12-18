import { Api, ApiKotech } from "../config/Api";

// get(기술문서 불러오기)
export const getTechList = (currentPage, limit, searchValue) => {
  const response = Api.get(`/viewapi/mngr/site/v1/tdcList`, {
    params: searchValue ? {
      currentPage: currentPage,
      limit: limit,
      searchValue: searchValue
    } : {
      currentPage: currentPage,
      limit: limit
    },
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`
    }
  });
  return response;
}

// get(특허 기본정보)
export const getTechDetails = (no) => {
  const response = Api.get(`/viewapi/mngr/site/v1/tdcDetail`, {
    params: {
      tdcNo: no
    },
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`
    }
  });
  return response;
}

// get(소속 상세 정보)
export const getOrgnDetails = (id) => {
  const response = ApiKotech.get(`/organ/${id}`, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`
    }
  });
  return response;
}

// post(특허 저장하기)
export const addPatent = ({
  typeCd,
  tcqNm,
  rsacUcmdCd,
  apyNm,
  apyAd,
  statCd,
  rgstNo,
  ivtNm,
  ipcVal,
  cpcVal,
  piuaYn
}) => {
  const mergeTechDTO = {
    typeCd,
    tcqNm,
    rsacUcmdCd,
    apyNm,
    apyAd,
    statCd,
    rgstNo,
    ivtNm,
    ipcVal,
    cpcVal,
    piuaYn
  };

  const response = Api.post(`/viewapi/mngr/site/v1/merge/popu`, mergeTechDTO, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`
    }
  });
  return response;
}

// post(특허 저장하기)
export const addThesis = ({
  typeCd,
  tcqNm,
  rsacUcmdCd,
  uniqueNo,
  apyAd,
  sbmyn,
  ivtNm,
  orgCntn
}) => {
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

  const response = Api.post(`/viewapi/mngr/site/v1/merge/popu`, mergeTechDTO, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`
    }
  });
  return response;
}
