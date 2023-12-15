import { Api } from "../../config/Api";

// post(팝업 불러오기)
export const getPopUp = (currentPage, limit, searchType, searchValue) => {
  const response = Api.get(`/viewapi/mngr/site/v2/signin`, {
    params: {
      currentPage: currentPage,
      limit: limit,
      searchType: searchType,
      searchValue: searchValue
    }
  });
  return response;
}