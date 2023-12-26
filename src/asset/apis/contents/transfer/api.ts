import { ApiResponse } from "../../common/types"
import { ContentsSearchParams } from "../common/types"
import { TechTransfer, TechTransferDetail } from "./types"
import { ContentsCategory } from "../common/types"
import { Api } from "/src/asset/config/Api"

/** 기술이전 리스트 */
export const getTechTransfers = ({
  currentPage,
  catgNo,
  fixYn,
  limit,
  searchValue
}: ContentsSearchParams): ApiResponse<TechTransfer[]> => {
  const queryParams = new URLSearchParams({
    currentPage: currentPage.toString(),
    limit: limit.toString(),
    ...(fixYn && { fixYn }),
    ...(catgNo && { catgNo: catgNo.toString() }),
    ...(searchValue && { searchValue })
  })
  const response = Api.get(`/viewapi/mngr/site/v1/ttf?` + queryParams)
  return response
}

/** 기술이전 상세 */
export const getTechTransfer = (ttfNo: number): ApiResponse<TechTransferDetail> => {
  const queryParams = new URLSearchParams({
    ttfNo: ttfNo.toString()
  })
  const response = Api.get(`/viewapi/mngr/site/v1/ttfDetail?` + queryParams)
  return response
}

/** 기술이전 카테고리 리스트 */
export const getTechCategories = (): ApiResponse<ContentsCategory[]> => {
  const response = Api.get(`/viewapi/mngr/site/v1/technology/category`)
  return response
}
