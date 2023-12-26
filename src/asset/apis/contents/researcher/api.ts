import { ApiResponse } from "../../common/types"
import { Researcher, ResearcherCategory, ResearcherDetail, ResearcherSearchParams, RscRegiDTO } from "./types"
import { Api, ApiForm } from "/src/asset/config/Api"

/** 연구원 리스트 */
export const getResearchers = ({
  currentPage, 
  searchType, 
  searchValue
}: ResearcherSearchParams): ApiResponse<Researcher[]> => {
  const queryParams = new URLSearchParams({
    currentPage: currentPage.toString(), 
    limit: '10', 
    ...(searchType && {searchType}),
    ...(searchValue && {searchValue})
  })
  const response = Api.get(`/viewapi/mngr/site/v1/researcher?` + queryParams)
  return response
}

/** 연구원 상세 */
export const getResearcher = (rscNo: number): ApiResponse<ResearcherDetail> => {
  const queryParams = new URLSearchParams({
    rscNo: rscNo.toString()
  })
  const response = Api.get(`/veiwapi/mngr/site/v1/rscDetail?` + queryParams)
  return response
}

/** 연구원 등록 및 수정 */
export const setResearcher = (rscRegiDto: RscRegiDTO, pflFile?: File): ApiResponse => {
  const formData = new FormData()
  const blob = new Blob([JSON.stringify(rscRegiDto)], {type : 'application/json'})
  formData.append('rscRegiDto', blob)
  pflFile && formData.append('pflFile', pflFile)

  const response = ApiForm.post(`/viewapi/mngr/site/v1/merge/rsc`, formData)
  return response
}

/** 연구원 AI 등록 */
export const uploadResearcherAIFile = (file: File): ApiResponse => {
  const formData = new FormData()
  const rscAiRegiDto = { aiType: 'file', text: '' }
  const blob = new Blob([JSON.stringify(rscAiRegiDto)], {type : 'application/json'})
  formData.append('rscAiRegiDto', blob)
  formData.append('file', file)

  const response = ApiForm.post(`/viewapi/mngr/site/v1/ai/rsc`, formData)
  return response
}

/** 연구원 삭제 */
export const deleteResearcher = (rscNo: number): ApiResponse => {
  const queryParams = new URLSearchParams({
    rscNo: rscNo.toString()
  })
  const response = Api.delete(`/veiwapi/mngr/site/v1/delete/rsc?` + queryParams)
  return response
}

/** 부서 리스트 */
export const getResearcherCategories = (): ApiResponse<ResearcherCategory[]> => {
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

  const response = Api.post(`/viewapi/mngr/site/v1/merge/rscCate`, rscCateListDto)
  return response
}

/** 부서 삭제 */
export const deleteResearcherCategory = (deptMajrNo: number): ApiResponse => {
  const queryParams = new URLSearchParams({
    deptMajrNo: deptMajrNo.toString()
  })
  const response = Api.delete(`/viewapi/mngr/site/v1/delete/rscCateDept?` + queryParams)
  return response
}
