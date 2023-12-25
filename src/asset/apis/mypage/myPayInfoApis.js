import { Api } from "../../config/Api";

export const getPayInfoList = ({ currentIdx, search, startDate, endDate }) => {
  const response = Api.get(
    `/viewapi/mngr/site/v1/mypage/payInfo?currentPage=${currentIdx}&limit=10${
      search ? `&searchValue=${search}` : ""
    }${startDate ? `&startDate=${startDate}` : ""}${
      endDate ? `&endDate=${endDate}` : ""
    }`
  );
  return response;
};
