import { CONTENTS_SAVE_STATUS, CONTENTS_CREATE_TYPE } from "../common/codes"

/**
 * 연구자 검색 타입
 */
export type ResearcherSearchType = 'rscNm' | 'ucmdNm' | 'deptMajrNm' | 'pstnNm'

/**
 * 연구자 검색 파라미터
 */
export type ResearcherSearchParams = {
  currentPage: number
  searchType?: ResearcherSearchType
  searchValue?: string
}

/** 부서/학과 등록 DTO */
export type DeptMajr = {
  deptMajrNo?: number
  deptMajrNm?: string
  seq: number
}

/**
 * 연구자 등록 정보 DTO
 */
export type RscRegiDTO = {
  rscNm: string
  deptMajrs: DeptMajr
  pstnNm: string
  crtTypeCd: keyof typeof CONTENTS_CREATE_TYPE
  aosCntn?: string
  educationCntn?: string
  emailAddr?: string
  hpNo?: string
  inaCntn?: string
  labNm?: string
  labWebAddr?: string
  lctCntn?: string
  ofcPhcNo?: string
  rscCarerInfos?: {}[]
  webAddr?: string
  ytbPath?: string
}

/**
 * 연구자 리스트 유닛
 */
export type Researcher = {
  rscNo: number
  rscNm: string
  ucmdNm: string
  deptMajrNo: number
  deptMajrNm: string
  pstnNm: string
  createdDate: string
  saveStat: keyof typeof CONTENTS_SAVE_STATUS
}

/**
 * 연구자 상세
 */
export type ResearcherDetail = {
  /** 기본 정보 */
  rscBasicInfo: {
    rscNo: number
    rscNm: string
    pflFilePath: string
    pstnNm: string
    labNm: string
    labWebAddr: string
    ytbPath?: string
    educationCntn?: string
    lctCntn?: string
    inaCntn?: string
    aosCntn?: string
    hpNo?: string
    ofcPhcNo: string
    emailAddr: string
    webAddr?: string
  }

  /** 부서/학과 정보 */
  deptMajr: {
    ucmdCd: string | number
    ucmdNm: string
    catgNo: number
    catgNm: string
    useYn: 'Y' | 'N'
    createdDate: string
  }[]

  /** 경력 정보 */
  rscCarerInfo: {
    carerSeq: number
    cmpyNm: string
    jncmpYm: string
    resignYm: string
    hdofYn: string
    rspbTaskCntn: string
  }[]
}

/**
 * 부서/학과 정보
 */
export type ResearcherCategory = {
  ucmdCd: string
  ucmdNm: string
  catgNo: number
  catgNm: string
  useYn: 'Y' | 'N'
  createdDate: string
}
