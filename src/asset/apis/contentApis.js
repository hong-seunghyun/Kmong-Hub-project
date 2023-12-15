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

//get(뉴스 카테고리  정보)
export const getSupport = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/supprj/category`);
  return response;
};

export const getEvnet = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/event/category`);
  return response;
};

export const getMenuExps = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/mnuexps`);
  return response;
};
