import { Api } from "../config/Api";

export const getSupportList = ({ currentIdx, searchType, search }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/inquiry/spj?currentPage=${currentIdx}&limit=10${
      searchType ? `&searchType=${searchType}` : ""
    }${search ? `&searchValue=${search}` : ""}`
  );
  return response;
};

export const getSupportDetail = ({ iqryNo }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/inquiry/spjDetail?iqryNo=${iqryNo}`
  );
  return response;
};

export const setSupportAnswer = ({ iqryNo, rpyCntn }) => {
  const response = Api.post(`/viewapi/mngr/site/v1/spj/rpy`, {
    iqryNo,
    rpyCntn,
  });
  return response;
};
