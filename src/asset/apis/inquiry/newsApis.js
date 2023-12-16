import { Api } from "../config/Api";

export const getNewsList = ({ currentIdx, searchType, search }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/inquiry/news?currentPage=${currentIdx}&limit=10${
      searchType ? `&searchType=${searchType}` : ""
    }${search ? `&searchValue=${search}` : ""}`
  );
  return response;
};

export const getNewsDetail = ({ iqryNo }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/inquiry/newsDetail?iqryNo=${iqryNo}`
  );
  return response;
};

export const setNewsAnswer = ({ iqryNo, rpyCntn }) => {
  const response = Api.post(`/viewapi/mngr/site/v1/nws/rpy`, {
    iqryNo,
    rpyCntn,
  });
  return response;
};
