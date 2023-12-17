import { Api } from "../../config/Api";

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

// post(팝업 등록, 수정)
export const createPopup = ({typeCd, }, mobImg, pcImg) => {
  const mergeTechDTO = {

  };

  const response = Api.post(`/viewapi/mngr/site/v1/merge/popu`, mergeTechDTO, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
      'Content-Type': 'multipart/form-data',
      Accept: "application/json"
    }
  });
  return response;
}
