import { getSiteBasicInfo, getSiteBsl } from "../asset/apis/siteApis";
import { useSetRecoilState } from "recoil";
import {
  SettingCutspEmailAddr,
  SettingCutspPhcNo,
  SettingMngRcvEmailAddr,
  SettingSiteItrCntn,
  SettingSiteNm,
  SettingFvcPathAddr,
} from "../store/setting/basic/atom";
import {
  SettingBsicDmiAddr,
  SettingBslNo,
  SettingCbdAddr,
  SettingCbdNm,
  SettingOmbRptNo,
  SettingPtpPicEmailAddr,
  SettingPtpPicNm,
  SettingPtpPicPhcNo,
  SettingRpsvNm,
  SettingSiteInfoId,
} from "../store/setting/business/atom";

export const setSiteBasicInfoAtom = () => {
  const setSiteNm = useSetRecoilState(SettingSiteNm);
  const setSiteItrCntn = useSetRecoilState(SettingSiteItrCntn);
  const setMngRcvEmailAddr = useSetRecoilState(SettingMngRcvEmailAddr);
  const setCutspPhcNo = useSetRecoilState(SettingCutspPhcNo);
  const setCutspEmailAddr = useSetRecoilState(SettingCutspEmailAddr);
  const setFvcPathAddr = useSetRecoilState(SettingFvcPathAddr);

  getSiteBasicInfo()
    .then((e) => {
      setSiteNm(e.data.data.siteNm);
      setSiteItrCntn(e.data.data.siteItrCntn);
      setMngRcvEmailAddr(e.data.data.mngRcvEmailAddr);
      setCutspPhcNo(e.data.data.cutspPhcNo);
      setCutspEmailAddr(e.data.data.cutspEmailAddr);
      setFvcPathAddr(e.data.data.fvcPathAddr);
    })
    .then((e) => console.log(e));
};

export const setSiteBusinessAtom = () => {
  const setBslNo = useSetRecoilState(SettingBslNo);
  const setBsicDmiAddr = useSetRecoilState(SettingBsicDmiAddr);
  const setCbdAddr = useSetRecoilState(SettingCbdAddr);
  const setCbdNm = useSetRecoilState(SettingCbdNm);
  const setOmbRptNo = useSetRecoilState(SettingOmbRptNo);
  const setPtpPicEmailAddr = useSetRecoilState(SettingPtpPicEmailAddr);
  const setPtpPicNm = useSetRecoilState(SettingPtpPicNm);
  const setPtpPicPhcNo = useSetRecoilState(SettingPtpPicPhcNo);
  const setRpsvNm = useSetRecoilState(SettingRpsvNm);
  const setSiteInfoId = useSetRecoilState(SettingSiteInfoId);

  getSiteBsl()
    .then((e) => {
      if (e.data.data.bsicDmiAddr) setBsicDmiAddr(e.data.data.bsicDmiAddr);
      if (e.data.data.bslNo) setBslNo(e.data.data.bslNo);
      if (e.data.data.cbdAddr) setCbdAddr(e.data.data.cbdAddr);
      if (e.data.data.cbdNm) setCbdNm(e.data.data.cbdNm);
      if (e.data.data.ombRptNo) setOmbRptNo(e.data.data.ombRptNo);
      if (e.data.data.ptpPicEmailAddr)
        setPtpPicEmailAddr(e.data.data.ptpPicEmailAddr);
      if (e.data.data.ptpPicNm) setPtpPicNm(e.data.data.ptpPicNm);
      if (e.data.data.ptpPicPhcNo) setPtpPicPhcNo(e.data.data.ptpPicPhcNo);
      if (e.data.data.rpsvNm) setRpsvNm(e.data.data.rpsvNm);
      if (e.data.data.siteInfoId) setSiteInfoId(e.data.data.siteInfoId);
    })
    .catch((e) => console.log(e));
};
