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
import {
  SettingBslNo,
  SettingCbdAddr,
  SettingCbdNm,
  SettingOmbRptNo,
  SettingPtpPicEmailAddr,
  SettingPtpPicNm,
  SettingPtpPicPhcNo,
  SettingRpsvNm,
} from "../../store/setting/business/atom";

export const useSettingHandler = () => {
  const name = useRecoilValue(SettingSiteNm);
  const introduce = useRecoilValue(SettingSiteItrCntn);
  const tavoClusCntn = useRecoilValue(SettingTavoClusCntn);
  const pinfPrcsPlcyCntn = useRecoilValue(SettingPinfPrcsPlcyCntn);
  const piuaBcmemCntn = useRecoilValue(SettingPiuaBcmemCntn);
  const piuaBbsCntn = useRecoilValue(SettingPiuaBbsCntn);
  const advRcvAgrmYnCntn = useRecoilValue(SettingAdvRcvAgrmYnCntn);
  const pinfSttgYnCntn = useRecoilValue(SettingPinfSttgYnCntn);
  const bslNo = useRecoilValue(SettingBslNo);
  const cbdAddr = useRecoilValue(SettingCbdAddr);
  const cbdNm = useRecoilValue(SettingCbdNm);
  const ombRptNo = useRecoilValue(SettingOmbRptNo);
  const rpsvNm = useRecoilValue(SettingRpsvNm);
  const ptpPicEmailAddr = useRecoilValue(SettingPtpPicEmailAddr);
  const ptpPicNm = useRecoilValue(SettingPtpPicNm);
  const ptpPicPhcNo = useRecoilValue(SettingPtpPicPhcNo);
  const siteItrCntn = useRecoilValue(SettingSiteScriptItrCntn);
  const siteNm = useRecoilValue(SettingSiteScriptNm);
  const gganltcScptCntn = useRecoilValue(SettingGganltcScptCntn);
  const chntkScptCntn = useRecoilValue(SettingChntkScptCntn);

  const useCheckValue = () => {
    if (
      name === "" &&
      introduce === "" &&
      bslNo === "" &&
      cbdAddr === "" &&
      cbdNm === "" &&
      ombRptNo === "" &&
      rpsvNm === "" &&
      ptpPicEmailAddr === "" &&
      ptpPicNm === "" &&
      ptpPicPhcNo === "" &&
      tavoClusCntn === "" &&
      pinfPrcsPlcyCntn === "" &&
      piuaBcmemCntn === "" &&
      piuaBbsCntn === "" &&
      advRcvAgrmYnCntn === "" &&
      pinfSttgYnCntn === "" &&
      siteItrCntn === "" &&
      siteNm === "" &&
      gganltcScptCntn === "" &&
      chntkScptCntn === ""
    )
      return false;
    return true;
  };

  if (useCheckValue()) return false;
  return true;
};