import { Api } from "../config/Api";

export const getEventList = ({ currentIdx, searchType, search }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/inquiry/even?currentPage=${currentIdx}&limit=10${
      searchType ? `&searchType=${searchType}` : ""
    }${search ? `&searchValue=${search}` : ""}`
  );
  return response;
};

export const getEventDetail = ({ iqryNo }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/inquiry/evenDetail?iqryNo=${iqryNo}`
  );
  return response;
};

export const setEventAnswer = ({ iqryNo, rpyCntn }) => {
  const response = Api.post(`/viewapi/mngr/site/v1/even/rpy`, {
    iqryNo,
    rpyCntn,
  });
  return response;
};
