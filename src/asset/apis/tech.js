import { Api } from "../config/Api";

// get(팝업 불러오기)
export const getTechList = (currentPage, limit, searchValue) => {
  const response = Api.get(`/viewapi/mngr/site/v1/popu`, {
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
