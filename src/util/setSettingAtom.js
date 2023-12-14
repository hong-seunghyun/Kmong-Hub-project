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
