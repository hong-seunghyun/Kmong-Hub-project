import { Api } from "../../config/Api";

// post(팝업 불러오기)
export const getPopUp = (currentPage, limit, searchValue) => {
  const response = Api.get(`/viewapi/mngr/site/v1/popu`, {
    params: {
      currentPage: currentPage,
      limit: limit,
      searchValue: searchValue
    }
  });
  return response;
}

// post(팝업 불러오기)
export const getPopUpActive = (currentPage, limit, searchType, searchValue) => {
  const response = Api.get(`/viewapi/mngr/site/v1/popu`, {
    params: {
      currentPage: currentPage,
      limit: limit,
      searchType: searchType,
      searchValue: searchValue
    }
  });
  return response;
}