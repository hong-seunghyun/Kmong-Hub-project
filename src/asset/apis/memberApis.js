import { Api } from "../config/Api";

export const getDormantMemberList = ({ currentIdx, searchType, search }) => {
  const response = Api.get(
    `viewapi/mngr/site/v1/dorUserList?currentPage=${currentIdx}&limit=10${
      searchType && searchType !== "" ? `&searchType=${searchType}` : ""
    }${search && search !== "" ? `&searchValue=${search}` : ""}`
  );
  return response;
};

export const getMemberList = ({ currentIdx, searchType, search }) => {
  const response = Api.get(
    `viewapi/mngr/site/v1/siteUserList?currentPage=${currentIdx}&limit=10${
      searchType && searchType !== "" ? `&searchType=${searchType}` : ""
    }${search && search !== "" ? `&searchValue=${search}` : ""}`
  );
  return response;
};

export const getMemberDetail = ({ siteMbrNo }) => {
  const response = Api.get(
    `viewapi/mngr/site/v1/siteMbrInfo?siteMbrNo=${siteMbrNo}`
  );
  return response;
};

export const deleteMember = ({ siteMbrNo }) => {
  const response = Api.delete(
    `viewapi/mngr/site/v1/delete/siteMbr?siteMbrNo=${siteMbrNo}`
  );
  return response;
};

export const getManagerList = ({ currentIdx, searchType, search }) => {
  const response = Api.get(
    `viewapi/mngr/site/v1/mngList?currentPage=${currentIdx}&limit=10${
      searchType && searchType !== "" ? `&searchType=${searchType}` : ""
    }${search && search !== "" ? `&searchValue=${search}` : ""}`
  );
  return response;
};

export const getManagerDetail = ({ siteMbrNo }) => {
  const response = Api.get(
    `viewapi/mngr/site/v1/managerInfo?mbrNo=${siteMbrNo}`
  );
  return response;
};

export const deleteManager = ({ mbrNo }) => {
  const response = Api.delete(
    `viewapi/mngr/site/v1/delete/submanager?mbrNo=${mbrNo}`
  );
  return response;
};

export const setManager = ({ formData }) => {
  const response = Api.post(`viewapi/mngr/site/v1/merge/submanager`, formData);
  return response;
};
