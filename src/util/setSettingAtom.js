import {
  getSiteBasicInfo,
  getSiteBsl,
  getSiteClus,
  getSiteScpt,
  setSiteBasicInfo,
  setSiteBsl,
  setSiteScpt,
} from "../asset/apis/siteApis";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  SettingCutspEmailAddr,
  SettingCutspPhcNo,
  SettingMngRcvEmailAddr,
  SettingSiteItrCntn,
  SettingSiteNm,
  SettingFvcPathAddr,
  SettingSnrEmailAddr,
  SettingSiteNo,
} from "../store/setting/basic/atom";
import {
  SettingBsicDmiAddr,
  SettingBslNo,
  SettingCbdAddr,
  SettingCbdNm,
  SettingIdvdDmiAddr,
  SettingOmbRptNo,
  SettingPtpPicEmailAddr,
  SettingPtpPicNm,
  SettingPtpPicPhcNo,
  SettingRpsvNm,
  SettingSiteInfoId,
} from "../store/setting/business/atom";
import {
  SettingAdvRcvAgrmYnCntn,
  SettingPinfPrcsPlcyCntn,
  SettingPinfSttgYnCntn,
  SettingPiuaBbsCntn,
  SettingPiuaBcmemCntn,
  SettingSiteClusId,
  SettingTavoClusCntn,
} from "../store/setting/terms/atom";
import {
  SettingChntkScptCntn,
  SettingGganltcScptCntn,
  SettingOgImgPathAddr,
  SettingSiteScriptItrCntn,
  SettingSiteScriptNm,
  SettingSiteScriptScptId,
} from "../store/setting/script/atom";

//사이트 기본 정보 저장
export const useSetSiteBasic = () => {
  const siteNm = useRecoilValue(SettingSiteNm);
  const siteNo = useRecoilValue(SettingSiteNo);
  const siteItrCntn = useRecoilValue(SettingSiteItrCntn);
  const mngRcvEmailAddr = useRecoilValue(SettingMngRcvEmailAddr);
  const cutspPhcNo = useRecoilValue(SettingCutspPhcNo);
  const cutspEmailAddr = useRecoilValue(SettingCutspEmailAddr);
  const fvcPathAddr = useRecoilValue(SettingFvcPathAddr);
  const snrEmailAddr = useRecoilValue(SettingSnrEmailAddr);

  setSiteBasicInfo({
    cutspEmailAddr,
    cutspPhcNo,
    fvcPathAddr,
    mngRcvEmailAddr,
    siteItrCntn,
    siteNm,
    siteNo,
    snrEmailAddr,
  })
    .then((e) => {
      console.log(e);
    })
    .then((e) => console.log(e));
};

//사이트 정보 확장 불러오기
// export const useGetSiteBusinessAtom = () => {
//   const setBslNo = useSetRecoilState(SettingBslNo);
//   const setBsicDmiAddr = useSetRecoilState(SettingBsicDmiAddr);
//   const setCbdAddr = useSetRecoilState(SettingCbdAddr);
//   const setCbdNm = useSetRecoilState(SettingCbdNm);
//   const setIdvdDmiAddr = useSetRecoilState(SettingIdvdDmiAddr);
//   const setOmbRptNo = useSetRecoilState(SettingOmbRptNo);
//   const setPtpPicEmailAddr = useSetRecoilState(SettingPtpPicEmailAddr);
//   const setPtpPicNm = useSetRecoilState(SettingPtpPicNm);
//   const setPtpPicPhcNo = useSetRecoilState(SettingPtpPicPhcNo);
//   const setRpsvNm = useSetRecoilState(SettingRpsvNm);
//   const setSiteInfoId = useSetRecoilState(SettingSiteInfoId);
// };
//사이트 정보 확장 저장
export const useSetSiteBusiness = () => {
  const bsicDmiAddr = useRecoilValue(SettingBslNo);
  const bslNo = useRecoilValue(SettingBsicDmiAddr);
  const cbdAddr = useRecoilValue(SettingCbdAddr);
  const cbdNm = useRecoilValue(SettingCbdNm);
  const idvdDmiAddr = useRecoilValue(SettingIdvdDmiAddr);
  const ombRptNo = useRecoilValue(SettingOmbRptNo);
  const ptpPicEmailAddr = useRecoilValue(SettingPtpPicEmailAddr);
  const ptpPicNm = useRecoilValue(SettingPtpPicNm);
  const ptpPicPhcNo = useRecoilValue(SettingPtpPicPhcNo);
  const rpsvNm = useRecoilValue(SettingRpsvNm);
  const siteInfoId = useRecoilValue(SettingSiteInfoId);

  setSiteBsl({
    bsicDmiAddr,
    bslNo,
    cbdAddr,
    cbdNm,
    idvdDmiAddr,
    ombRptNo,
    ptpPicEmailAddr,
    ptpPicNm,
    ptpPicPhcNo,
    rpsvNm,
    siteInfoId,
  })
    .then((e) => console.log(e))
    .catch((e) => console.log(e));
};

//이용약관 불러오기
export const useGetSiteTermsAtom = () => {
  const setAdvRcvAgrmYnCntn = useSetRecoilState(SettingAdvRcvAgrmYnCntn);
  const setPinfPrcsPlcyCntn = useSetRecoilState(SettingPinfPrcsPlcyCntn);
  const setPinfSttgYnCntn = useSetRecoilState(SettingPinfSttgYnCntn);
  const setPiuaBbsCntn = useSetRecoilState(SettingPiuaBbsCntn);
  const setPiuaBcmemCntn = useSetRecoilState(SettingPiuaBcmemCntn);
  const setTavoClusCntn = useSetRecoilState(SettingTavoClusCntn);
  const setSiteClusId = useSetRecoilState(SettingSiteClusId);

  getSiteClus()
    .then((e) => {
      if (e.data.data.advRcvAgrmYnCntn)
        setAdvRcvAgrmYnCntn(e.data.data.advRcvAgrmYnCntn);
      if (e.data.data.pinfPrcsPlcyCntn)
        setPinfPrcsPlcyCntn(e.data.data.pinfPrcsPlcyCntn);
      if (e.data.data.pinfSttgYnCntn)
        setPinfSttgYnCntn(e.data.data.pinfSttgYnCntn);
      if (e.data.data.piuaBbsCntn) setPiuaBbsCntn(e.data.data.piuaBbsCntn);
      if (e.data.data.piuaBcmemCntn)
        setPiuaBcmemCntn(e.data.data.piuaBcmemCntn);
      if (e.data.data.tavoClusCntn) setTavoClusCntn(e.data.data.tavoClusCntn);
      if (e.data.data.siteClusId) setSiteClusId(e.data.data.siteClusId);
    })
    .catch((e) => console.log(e));
};
//이용약관 저장
export const useSetSiteTerms = () => {
  const advRcvAgrmYnCntn = useRecoilValue(SettingAdvRcvAgrmYnCntn);
  const pinfPrcsPlcyCntn = useRecoilValue(SettingPinfPrcsPlcyCntn);
  const pinfSttgYnCntn = useRecoilValue(SettingPinfSttgYnCntn);
  const piuaBbsCntn = useRecoilValue(SettingPiuaBbsCntn);
  const piuaBcmemCntn = useRecoilValue(SettingPiuaBcmemCntn);
  const tavoClusCntn = useRecoilValue(SettingTavoClusCntn);
  const siteClusId = useRecoilValue(SettingSiteClusId);

  setSiteScpt({
    advRcvAgrmYnCntn,
    pinfPrcsPlcyCntn,
    pinfSttgYnCntn,
    piuaBbsCntn,
    piuaBcmemCntn,
    siteClusId,
    tavoClusCntn,
  })
    .then((e) => console.log(e))
    .catch((e) => console.log(e));
};

//스크립트 불러오기
export const useGetSiteScriptAtom = () => {
  const setChntkScptCntn = useSetRecoilState(SettingChntkScptCntn);
  const setGganltcScptCntn = useSetRecoilState(SettingGganltcScptCntn);
  const setOgImgPathAddr = useSetRecoilState(SettingOgImgPathAddr);
  const setSiteScriptItrCntn = useSetRecoilState(SettingSiteScriptItrCntn);
  const setSiteScriptNm = useSetRecoilState(SettingSiteScriptNm);
  const setSiteScriptScptId = useSetRecoilState(SettingSiteScriptScptId);

  getSiteScpt()
    .then((e) => {
      if (e.data.data.chntkScptCntn)
        setChntkScptCntn(e.data.data.chntkScptCntn);
      if (e.data.data.gganltcScptCntn)
        setGganltcScptCntn(e.data.data.gganltcScptCntn);
      if (e.data.data.ogImgPathAddr)
        setOgImgPathAddr(e.data.data.ogImgPathAddr);
      if (e.data.data.siteItrCntn)
        setSiteScriptItrCntn(e.data.data.siteItrCntn);
      if (e.data.data.siteNm) setSiteScriptNm(e.data.data.siteNm);
      if (e.data.data.siteScptId) setSiteScriptScptId(e.data.data.siteScptId);
    })
    .catch((e) => console.log(e));
};

//스크립트 저장
export const useSetSiteScript = () => {
  const chntkScptCntn = useRecoilValue(SettingChntkScptCntn);
  const gganltcScptCntn = useRecoilValue(SettingGganltcScptCntn);
  const ogImgPathAddr = useRecoilValue(SettingOgImgPathAddr);
  const siteItrCntn = useRecoilValue(SettingSiteScriptItrCntn);
  const siteNm = useRecoilValue(SettingSiteScriptNm);
  const siteScptId = useRecoilValue(SettingSiteScriptScptId);

  setSiteScpt({
    chntkScptCntn,
    gganltcScptCntn,
    ogImgPathAddr,
    siteItrCntn,
    siteNm,
    siteScptId,
  })
    .then((e) => console.log(e))
    .catch((e) => console.log(e));
};
