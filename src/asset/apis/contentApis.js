import { Api } from "../config/Api";

//get(기술 카테고리 정보)
export const getTechnologyTransfer = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/technology/category`);
  return response;
};

//get(뉴스 카테고리  정보)
export const getNews = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/news/category`);
  return response;
};
