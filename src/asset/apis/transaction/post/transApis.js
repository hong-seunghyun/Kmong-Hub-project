import { Api } from "../../../config/Api";

export const postConsulting = ({
  adNo,
  adRsltCntn,
  adStatCd,
  adrMbrDtos,
  cntn,
  delYn,
  iqryObjtCntnd,
  iqryTypeCd,
  mbrNo,
  titleNm,
  tranNo,
}) => {
  const response = Api.post(`/viewapi/mngr/site/v1/merge/tranAd`, {
    adNo,
    adRsltCntn,
    adStatCd,
    adrMbrDtos,
    cntn,
    delYn,
    iqryObjtCntnd,
    iqryTypeCd,
    mbrNo,
    titleNm,
    tranNo,
  });
  return response;
};

export const postMetting = ({
  cntn,
  mtngPlceCntn,
  mtngRsltCntn,
  mtngStatCd,
  mtngTypeCd,
  mtngUrlAddr,
  titleNm,
  tranMtJnrs,
  tranMtngNo,
}) => {
  const response = Api.post(`/viewapi/mngr/site/v1/merge/tranMtng`, {
    cntn,
    mtngPlceCntn,
    mtngRsltCntn,
    mtngStatCd,
    mtngTypeCd,
    mtngUrlAddr,
    titleNm,
    tranMtJnrs,
    tranMtngNo,
  });
  return response;
};

export const postPayMent = ({
  cntn,
  cntrcEndAd,
  cntrcStrAd,
  delYn,
  gmhwAchvIncldCd,
  memoCntn,
  paymWayCd,
  titleNm,
  tranPaymDts,
  tranPaymNo,
  tranPaymStatCd,
  tranTypeCdCntn,
  ulmtYn,
}) => {
  const response = Api.post(`/viewapi/mngr/site/v1/merge/tranPaym`, {
    cntn,
    cntrcEndAd,
    cntrcStrAd,
    delYn,
    gmhwAchvIncldCd,
    memoCntn,
    paymWayCd,
    titleNm,
    tranPaymDts,
    tranPaymNo,
    tranPaymStatCd,
    tranTypeCdCntn,
    ulmtYn,
  });
  return response;
};

export const postRegister = ({
  cntn,
  delYn,
  dmdCoRspbrNo,
  ettRspbrNo,
  spplCoRspbrNo,
  techDocDto,
  titleNm,
  tranRgstNo,
  tranRgstStatCd,
}) => {
  const response = Api.post(`/viewapi/mngr/site/v1/merge/tranRgst`, {
    cntn,
    delYn,
    dmdCoRspbrNo,
    ettRspbrNo,
    spplCoRspbrNo,
    techDocDto,
    titleNm,
    tranRgstNo,
    tranRgstStatCd,
  });
  return response;
};
