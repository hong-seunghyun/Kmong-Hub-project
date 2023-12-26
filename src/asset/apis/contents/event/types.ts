import { CONTENTS_CREATE_TYPE } from "../common/codes"

/**
 * 행사 리스트 유닛
 * @todo 모집 시작, 종료일 데이터 필요
 */
export type Event = {
  evenNo: number
  thumAddr?: string
  evenFixed: 'Y' | 'N'
  titleNm: string
  crtTypeCd?: keyof typeof CONTENTS_CREATE_TYPE 

  /** @deprecated */
  tmpSveYn: 'Y' | 'N'

  mbrNo: number
  mbrNm: string
  createdDate: string
}

/** 
 * 행사 상세 정보
 */
export type EventDetail = {
  eventBasicInfo: {
    siteNo: number
    evenNo: number
    thumAddr: string
    onOrOff: "on" | "off"
    catgNo: number
    catgNm: string
    titleNM: string
    crtTypeCd?: keyof typeof CONTENTS_CREATE_TYPE
    qivsYn: "Y" | "N"
    tmpSveYn: "Y" | "N"
    accthrNm: string
    bacnNo: number

    // TODO: 코드값 확인
    bankCd: string

    // TODO: 코드값 확인
    feeDvCd: string

    // TODO: 코드값 확인
    rcruMthdCd: string

    onEvenPlceCntn?: string
    ofEvenPlceCntn?: string

    // TODO: 코드값 확인
    evenPlceCd: string

    rcruStrtDtm: string
    rcruEndDtm: string
    evenStrtDtm: string
    evenEndDtm: string

    amt?: number
    onlinRcruNopNum: `${number}`
    offlineRcruNopNum: `${number}`

    ytbPath?: string
    aiSumm: string
    evenCntn: string

    nnmNm: string
    pflImgPath: string

    iptKwdCntn: string

    iqNm: string
    iqUcmdNm: string
    iqEmailAddr: string
  }

  qivsInfos?: {
    // 질문 번호
    questNo: number

    // 질문
    questCtnt: string

    // TODO: 질문 유형. 코드 확인 필요
    questTypeCd: string

    // 주관식 여부, Y: 객관식, N: 주관식
    saqstMchoYn: 'Y' | 'N'

    /** 보기 목록, 객관식일 경우에만 존재 */
    qivsOptInfos?: {
      explSeq: number
      explCntn: string
    }[]
  }[]
  
  seoInfo: {
    ctntId: number
    ctntDvCd: string
    pageUrlAddr: string
    pageTitle: string
    metaExpCntn: string
    metaKwdCntn: string
    wrterNm: string
    ogTitleNm: string
    ogExpCntn: string
    ogImgPathAddr: string
    ogSiteNm: string
  }
}
