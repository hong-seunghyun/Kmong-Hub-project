import { ApiResponse } from "../../common/types"
import { ContentsCategory, ContentsSearchParams } from "../common/types"
import { News, NewsDetail } from "./types"
import { Api } from "/src/asset/config/Api"

/** 뉴스 리스트 */
export const getNews = ({
  currentPage,
  limit, 
  catgNo, 
  searchValue,
  fixYn
}: ContentsSearchParams): ApiResponse<News[]> => {
  const queryParams = new URLSearchParams({
    currentPage: currentPage.toString(),
    limit: limit.toString(),
    ...(fixYn && { fixYn }),
    ...(catgNo && { catgNo: catgNo.toString() }),
    ...(searchValue && { searchValue })
  })
  const response = Api.get(`/viewapi/mngr/site/v1/news?` + queryParams)
  return response
}

/** 뉴스 상세 */
export const getNewsDetail = (nwsNo: number): ApiResponse<NewsDetail> => {
  const queryParams = new URLSearchParams({
    nwsNo: nwsNo.toString()
  })
  const response = Api.get(`/viewapi/mngr/site/v1/newsDetail?` + queryParams)
  return response
}

/** 뉴스 카테고리 리스트 */
export const getNewsCategories = (): ApiResponse<ContentsCategory[]> => {
  const response = Api.get(`/viewapi/mngr/site/v1/news/category`)
  return response
}
