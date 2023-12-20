import { Api } from "../../../config/Api";

export const getConsulting = ({ currentIdx, searchType, search }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/tranAd?currentPage=${currentIdx}&limit=10${
      searchType ? `&searchType=${searchType}` : ""
    }${search ? `&searchValue=${search}` : ""}`
  );

  return response;
};

export const getConsultingDetail = ({ adNo }) => {
  const response = Api.get(`/viewapi/mngr/site/v1/tranAdDetail?adNo=${adNo}`);
  return response;
};

export const getMeeting = ({ currentIdx, searchType, search }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/tranMt?currentPage=${currentIdx}&limit=10${
      searchType ? `&searchType=${searchType}` : ""
    }${search ? `&searchValue=${search}` : ""}`
  );

  return response;
};

export const getMeetingDetail = ({ tranMtngNo }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/tranMtngDt?tranMtngNo=${tranMtngNo}`
  );
  return response;
};

export const getPayMent = ({ currentIdx, searchType, search }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/tranPy?currentPage=${currentIdx}&limit=10${
      searchType ? `&searchType=${searchType}` : ""
    }${search ? `&searchValue=${search}` : ""}`
  );

  return response;
};

export const getPayMentDetail = ({ tranPaymNo }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/tranPaymDt?tranPaymNo=${tranPaymNo}`
  );
  return response;
};

export const getRegister = ({ currentIdx, searchType, search }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/tranRgst?currentPage=${currentIdx}&limit=10${
      searchType ? `&searchType=${searchType}` : ""
    }${search ? `&searchValue=${search}` : ""}`
  );

  return response;
};

export const getRegisterDetail = ({ tranRgstNo }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/tranRgstDetail?tranRgstNo=${tranRgstNo}`
  );
  return response;
};
