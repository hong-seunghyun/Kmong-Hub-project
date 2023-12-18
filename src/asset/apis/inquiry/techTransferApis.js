import { Api } from "../../config/Api";

export const getTechTransferList = ({ currentIdx, searchType, search }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/inquiry/ttf?currentPage=${currentIdx}&limit=10${
      searchType ? `&searchType=${searchType}` : ""
    }${search ? `&searchValue=${search}` : ""}`
  );
  return response;
};

export const getTechTransferDetail = ({ iqryNo }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/inquiry/ttfDetail?iqryNo=${iqryNo}`
  );
  return response;
};

export const setTechTransferAnswer = ({ iqryNo, rpyCntn }) => {
  const response = Api.post(`/viewapi/mngr/site/v1/ttf/rpy`, {
    iqryNo,
    rpyCntn,
  });
  return response;
};
