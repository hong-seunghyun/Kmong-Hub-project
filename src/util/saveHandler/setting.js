import { useRecoilValue } from "recoil";
import {
  SettingSiteItrCntn,
  SettingSiteNm,
} from "../../store/setting/basic/atom";
import {
  SettingAdvRcvAgrmYnCntn,
  SettingPinfPrcsPlcyCntn,
  SettingPinfSttgYnCntn,
  SettingPiuaBbsCntn,
  SettingPiuaBcmemCntn,
  SettingTavoClusCntn,
} from "../../store/setting/terms/atom";
import {
  SettingChntkScptCntn,
  SettingGganltcScptCntn,
  SettingSiteScriptItrCntn,
  SettingSiteScriptNm,
} from "../../store/setting/script/atom";

const checkBasicValue = () => {
  const name = useRecoilValue(SettingSiteNm);
  const introduce = useRecoilValue(SettingSiteItrCntn);
  if (name && introduce) return true;
  return false;
};

const checkBusiness = () => {
  const bslNo = useRecoilValue(SettingBslNo);
  const cbdAddr = useRecoilValue(SettingCbdAddr);
  const cbdNm = useRecoilValue(SettingCbdNm);
  const ombRptNo = useRecoilValue(SettingOmbRptNo);
  const rpsvNm = useRecoilValue(SettingRpsvNm);
  const ptpPicEmailAddr = useRecoilValue(SettingPtpPicEmailAddr);
  const ptpPicNm = useRecoilValue(SettingPtpPicNm);
  const ptpPicPhcNo = useRecoilValue(SettingPtpPicPhcNo);
  if (
    bslNo &&
    cbdAddr &&
    cbdNm &&
    ombRptNo &&
    rpsvNm &&
    ptpPicEmailAddr &&
    ptpPicNm &&
    ptpPicPhcNo
  )
    return true;
  return false;
};

const checkTerms = () => {
  const tavoClusCntn = useRecoilValue(SettingTavoClusCntn);
  const pinfPrcsPlcyCntn = useRecoilValue(SettingPinfPrcsPlcyCntn);
  const piuaBcmemCntn = useRecoilValue(SettingPiuaBcmemCntn);
  const piuaBbsCntn = useRecoilValue(SettingPiuaBbsCntn);
  const advRcvAgrmYnCntn = useRecoilValue(SettingAdvRcvAgrmYnCntn);
  const pinfSttgYnCntn = useRecoilValue(SettingPinfSttgYnCntn);

  if (
    tavoClusCntn &&
    pinfPrcsPlcyCntn &&
    piuaBcmemCntn &&
    piuaBbsCntn &&
    advRcvAgrmYnCntn &&
    pinfSttgYnCntn
  )
    return true;
  return false;
};

const checkScript = () => {
  const siteItrCntn = useRecoilValue(SettingSiteScriptItrCntn);
  const siteNm = useRecoilValue(SettingSiteScriptNm);
  const gganltcScptCntn = useRecoilValue(SettingGganltcScptCntn);
  const chntkScptCntn = useRecoilValue(SettingChntkScptCntn);

  if (siteItrCntn && siteNm && gganltcScptCntn && chntkScptCntn) return true;
  return false;
};

export const settingHandler = () => {
  if (checkBasicValue() && checkBusiness() && checkTerms() && checkScript())
    return true;
  return false;
};
