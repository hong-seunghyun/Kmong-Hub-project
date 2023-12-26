import { ApiResponse } from "../../common/types"
import { ContentsSearchParams } from "../common/types"
import { Event, EventDetail } from "./types"
import { ContentsCategory } from "../common/types"
import { Api } from "/src/asset/config/Api"

/** 행사 리스트 */
export const getEvents = ({
  currentPage,
  catgNo,
  fixYn,
  limit,
  searchValue
}: ContentsSearchParams): ApiResponse<Event[]> => {
  const queryParams = new URLSearchParams({
    currentPage: currentPage.toString(),
    limit: limit.toString(),
    ...(fixYn && { fixYn }),
    ...(catgNo && { catgNo: catgNo.toString() }),
    ...(searchValue && { searchValue })
  })
  const response = Api.get(`/viewapi/mngr/site/v1/even?` + queryParams)
  return response
}

/** 행사 상세 */
export const getEvent = (ttfNo: number): ApiResponse<EventDetail> => {
  const queryParams = new URLSearchParams({
    ttfNo: ttfNo.toString()
  })
  const response = Api.get(`/viewapi/mngr/site/v1/evenDetail?` + queryParams)
  return response
}

/** 행사 카테고리 리스트 */
export const getEventCategories = (): ApiResponse<ContentsCategory[]> => {
  const response = Api.get(`/viewapi/mngr/site/v1/event/category`)
  return response
}
