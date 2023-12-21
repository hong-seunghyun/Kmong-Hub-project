/** 콘텐츠 - 기술이전 관리 API */
import { Api, ApiForm } from "../../config/Api"

/** 기술이전 리스트*/
export const getTransfers = ({
  catgNo, 
  currentPage, 
  fixYn, 
  limit, 
  searchValue
}) => {
  const queryParams = new URLSearchParams({
    currentPage, 
    limit, 
    ...(catgNo && {catgNo}),
    ...(fixYn && {fixYn}),
    ...(searchValue && {searchValue})
  })

  const response = Api.get(`/viewapi/mngr/site/v1/ttf?` + queryParams)
  return response
}

/** 기술이전 상세*/
export const getTransfer = ({ ttfNo }) => {
  const queryParams = new URLSearchParams({
    ttfNo
  })

  const response = Api.get(`/viewapi/mngr/site/v1/ttfDetail?` + queryParams)
  return response
}

/** 기술이전 등록 및 수정*/
export const setTransfer = (formData) => {
  const response = ApiForm.post(`/viewapi/mngr/site/v1/merge/ttf`, formData)
  return response
}

/** 기술이전 삭제 */
export const deleteTransfer = ({ ttfNo }) => {
  const queryParams = new URLSearchParams({
    ttfNo
  })

  const response = Api.delete(`/viewapi/mngr/site/v1/delete/ttf?` + queryParams)
  return response
}

/** 기술이전 고정 등록 및 해제 */
export const pinTransfer = ({ ttfNo }) => {
  const queryParams = new URLSearchParams({
    ttfNo
  })

  const response = Api.get(`/viewapi/mngr/site/v1/ttf/fix?` + queryParams)
  return response
}
