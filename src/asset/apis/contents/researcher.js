/** 콘텐츠 - 연구자 관리 API */
import { Api, ApiForm } from "../../config/Api"

/** 연구원 리스트 */
export const getResearchers = ({
  currentPage, 
  limit, 
  searchType, 
  searchValue
}) => {
  const queryParams = new URLSearchParams({
    currentPage, 
    limit, 
    ...(searchType && {searchType}),
    ...(searchValue && {searchValue})
  })
  const response = Api.get(`/viewapi/mngr/site/v1/researcher?` + queryParams)
  return response
}

/** 연구원 상세 */
export const getResearcher = ({ rscNo }) => {
  const queryParams = new URLSearchParams({
    rscNo
  })
  const response = Api.get(`/veiwapi/mngr/site/v1/rscDetail?` + queryParams)
  return response
}

/** 연구원 등록 및 수정 */
export const setResearcher = (formData) => {
  const response = ApiForm.post(`/viewapi/mngr/site/v1/merge/rsc`, formData)
  return response
}

/** 연구원 삭제 */
export const deleteResearcher = ({ rscNo }) => {
  const queryParams = new URLSearchParams({
    rscNo
  })
  const response = Api.delete(`/veiwapi/mngr/site/v1/delete/rsc?` + queryParams)
  return response
}

/** 부서 리스트 */
export const getResearcherCategory = () => {
  const response = Api.get(`/viewapi/mngr/site/v1/researcher/category`)
  return response
}

/** 부서 등록 및 수정 */
export const setResearcherCategory = ({
  catgNm, 
  deptMajrNm, 
  deptMajrNo, 
  ucmdCd, 
  ucmdNm, 
  useYn
}) => {
  const rscCateListDto = {
    ...(deptMajrNo && {deptMajrNo}), 
    ...(catgNm && {catgNm}),
    ...(deptMajrNm && {deptMajrNm}),
    ...(ucmdCd && {ucmdCd}),
    ...(ucmdNm && {ucmdNm}),
    ...(useYn && {useYn}),
  }

  const response = Api.post(`/viewapi/mngr/site/v1/rscCate`, rscCateListDto)
  return response
}

/** 부서 삭제 */
export const deleteResearcherCategory = ({ deptMajrNo }) => {
  const queryParams = new URLSearchParams({
    deptMajrNo
  })
  const response = Api.delete(`/viewapi/mngr/site/v1/delete/rscCateDept?` + queryParams)
  return response
}
