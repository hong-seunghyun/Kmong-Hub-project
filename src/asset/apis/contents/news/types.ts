import { CONTENTS_CREATE_TYPE } from "../common/codes"

/**
 * 뉴스 리스트 유닛
 */
export type News = {
  titleNm: string
  thumAddr: string
  nwsFixed: 'Y' | 'N'
  mbrNo: number
  newsNo: number
  mbrNm: string
  createdDate: string
  crtTypeCd: keyof typeof CONTENTS_CREATE_TYPE
}

/**
 * 뉴스 상세
 */
export type NewsDetail = {
  siteNo: number
  nwsNo: number
  humAddr: string
  catgNm: string
  catgNO: number
  titleNm: string
  sttlNm: string
  ytbPath?: string
  crtTypeCd: keyof typeof CONTENTS_CREATE_TYPE
  aiSumm: string
  nwsCntn: string
  iptKwdCntn: string
  iqNm: string
  iqUcmdNm: string
  iqPflImgPath: string
  iqEmailAddr: string
  createdDAte: string
}
