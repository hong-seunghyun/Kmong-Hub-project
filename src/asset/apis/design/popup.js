import { Api } from "../../config/Api";

// get(팝업 불러오기)
export const getPopUp = (currentPage, limit, searchValue) => {
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

// post(팝업 등록, 수정)
export const createPopup = ({delYn, expsEndDtm, expsStrDtm, popuNm, popuPath}, mobImg, pcImg) => {
  const mergePopupDTO = {
    delYn,
    expsEndDtm,
    expsStrDtm,
    popuNm,
    popuPath
  };
  const blob = new Blob([JSON.stringify(mergePopupDTO)], {
    type: "application/json"
  });
  console.log(blob);

  const formData = new FormData();
  formData.append('mergePopupDto', blob);
  mobImg && formData.append('mobImg', mobImg);
  pcImg && formData.append('pcImg', pcImg);

  const response = Api.post(`/viewapi/mngr/site/v1/merge/popu`, formData, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
      'Content-Type': 'multipart/form-data',
      Accept: "application/json"
    }
  });
  return response;
}

// post(팝업 불러오기)
export const getPopUpActive = (currentPage, limit, searchType, searchValue) => {
  const response = Api.get(`/viewapi/mngr/site/v1/popu`, {
    params: searchValue == '' ? {
      currentPage: currentPage,
      limit: limit,
      searchType: searchType,
    } : {
      currentPage: currentPage,
      limit: limit,
      searchType: searchType,
      searchValue: searchValue
    }
  });
  return response;
}