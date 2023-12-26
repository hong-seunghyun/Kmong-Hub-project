import { CONTENTS_CREATE_TYPE, CONTENTS_SAVE_STATUS } from "../common/codes"

/**
 * 기술이전 리스트 유닛
 */
export type TechTransfer = {
  ttfNo: number
  thumAddr?: string
  ttfFixed: 'Y' | 'N'
  tcqTitleNm: string
  crtTypeCd: keyof typeof CONTENTS_CREATE_TYPE
  mbrNo: number
  mbrNm: string
  createdDate: string
  saveStat: keyof typeof CONTENTS_SAVE_STATUS
}

/**
 * 기술이전 상세
 */
export type TechTransferDetail = {
  /** 기본 정보 */
  ttfBasicInfo: {
    ttfNo: number
    thumAddr?: string
    catgNm: string
    tcqTitleNM: string
    tcqSprNm: string
    pricAmt?: number

    // TODO: 가격 코드 정의 필요
    pricCd: string

    ucmcCd: string
    crtTypeCd: keyof typeof CONTENTS_CREATE_TYPE

    // TODO: 판매 유형 코드 정의 필요
    selTypeCd: string

    // TODO: 거래 방식 코드 정의 필요
    tranWayCd: string

    nnmNm: string
    pflImgPath: string
    aiSumm: string
    iptKwdCntn: string
    tcqNm: string
    orgnNm: string
    apyNo: string
    rgstNo: string
    clmDvCd: string
    clmStrDtm: string
    clmEndDtm: string
    rpsvRscNm: string
    jntRscNm: string
    ttfCntn: string

    trlCd: string
    ytbPath?: string
    iqNm: string
    iqUcmdNm: string
    iqEmailAddr: string
  }

  /** 기술문서 */
  ttfFiles: {
    fileNm: string
    filePath: string
    fileSize: number
  }[]

  /** 연관 기술 */
  rtFiles: {
    fileNm: string
    filePath: string
    fileSize: number
  }[]

  /** 매도/수 절차 리스트 */
  ttfSbpInfos: {
    pcdSeq: number, 
    titleNm: string
    ttfSbpCnInfos: string
  }[]
}
