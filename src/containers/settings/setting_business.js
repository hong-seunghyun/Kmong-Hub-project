import React, { useEffect, useState } from "react";
import Tab from "/src/components/tabs/settings_tab_fixed";
import Input from "/src/components/textFields/textInput.tsx";
import OutlineBtn from "/src/components/buttons/button_outline_l";
import PrimaryBtn from "/src/components/buttons/button_primary_l";
import { useRecoilState } from "recoil";
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
} from "../../store/setting/business/atom";
import { getSiteBsl } from "../../asset/apis/siteApis";

const TabContentA = ({ setActiveSubTab }) => {
  const [bslNo, setBslNo] = useRecoilState(SettingBslNo);
  const [cbdAddr, setCbdAddr] = useRecoilState(SettingCbdAddr);
  const [cbdNm, setCbdNm] = useRecoilState(SettingCbdNm);
  const [ombRptNo, setOmbRptNo] = useRecoilState(SettingOmbRptNo);
  const [rpsvNm, setRpsvNm] = useRecoilState(SettingRpsvNm);
  setActiveSubTab(0);
  return (
    <div className="sub-page-0">
      <Input
        labelText="사업자 등록 번호"
        placeholder="사업자 등록 번호를 입력해 주세요."
        valueType=""
        state={bslNo}
        setState={setBslNo}
        helperTextResult="none"
        iconState="false"
      />
      <Input
        labelText="상호(법인명)"
        placeholder="상호(법인명)을 입력해 주세요."
        valueType=""
        state={cbdNm}
        setState={setCbdNm}
        helperTextResult="none"
        iconState="false"
      />
      <Input
        labelText="대표자"
        placeholder="대표자를 입력해 주세요."
        valueType=""
        state={rpsvNm}
        setState={setRpsvNm}
        helperTextResult="none"
        iconState="false"
      />
      <Input
        labelText="사업장 소재지"
        placeholder="사업장 소재지를 입력해 주세요."
        valueType=""
        state={cbdAddr}
        setState={setCbdAddr}
        helperTextResult="none"
        iconState="false"
      />
      <Input
        labelText="통신판매업 신고번호"
        placeholder="통신판매업 신고번호를 입력해 주세요."
        valueType=""
        state={ombRptNo}
        setState={setOmbRptNo}
        helperTextResult="none"
        iconState="false"
      />
    </div>
  );
};

const TabContentB = ({ setActiveSubTab }) => {
  const [ptpPicEmailAddr, setptpPicEmailAddr] = useRecoilState(
    SettingPtpPicEmailAddr
  );
  const [ptpPicNm, setPtpPicNm] = useRecoilState(SettingPtpPicNm);
  const [ptpPicPhcNo, setPtpPicPhcNo] = useRecoilState(SettingPtpPicPhcNo);

  setActiveSubTab(1);
  return (
    <div className="sub-page-1">
      <Input
        labelText="개인정보보호 책임자"
        placeholder="개인정보보호 책임자를 입력해 주세요."
        valueType=""
        state={ptpPicNm}
        setState={setPtpPicNm}
        helperTextResult="none"
        iconState="false"
      />
      <Input
        labelText="책임자 연락처"
        placeholder="책임자 연락처를 입력해 주세요."
        valueType=""
        state={ptpPicPhcNo}
        setState={setPtpPicPhcNo}
        helperTextResult="none"
        iconState="false"
      />
      <Input
        labelText="책임자 이메일"
        placeholder="책임자 이메일을 입력해 주세요."
        valueType=""
        state={ptpPicEmailAddr}
        setState={setptpPicEmailAddr}
        helperTextResult="none"
        iconState="false"
      />
    </div>
  );
};

const Component = () => {
  const [bsicDmiAddr, setBsicDmiAddr] = useRecoilState(SettingBsicDmiAddr);
  const [idvdDmiAddr, setIdvdDmiAddr] = useRecoilState(SettingIdvdDmiAddr);
  const [bslNo, setBslNo] = useRecoilState(SettingBslNo);
  const [cbdAddr, setCbdAddr] = useRecoilState(SettingCbdAddr);
  const [cbdNm, setCbdNm] = useRecoilState(SettingCbdNm);
  const [ombRptNo, setOmbRptNo] = useRecoilState(SettingOmbRptNo);
  const [rpsvNm, setRpsvNm] = useRecoilState(SettingRpsvNm);
  const [siteInfoId, setSiteInfoId] = useRecoilState(SettingSiteInfoId);
  const [ptpPicEmailAddr, setptpPicEmailAddr] = useRecoilState(
    SettingPtpPicEmailAddr
  );
  const [ptpPicNm, setPtpPicNm] = useRecoilState(SettingPtpPicNm);
  const [ptpPicPhcNo, setPtpPicPhcNo] = useRecoilState(SettingPtpPicPhcNo);
  const [iSave, setIsSave] = useState(false);

  const setValue = async () => {
    await getSiteBsl()
      .then((e) => {
        if (e.data.data.bsicDmiAddr) setBsicDmiAddr(e.data.data.bsicDmiAddr);
        if (e.data.data.bslNo) setBslNo(e.data.data.bslNo);
        if (e.data.data.cbdAddr) setCbdAddr(e.data.data.cbdAddr);
        if (e.data.data.cbdNm) setCbdNm(e.data.data.cbdNm);
        if (e.data.data.idvdDmiAddr) setIdvdDmiAddr(e.data.data.idvdDmiAddr);
        if (e.data.data.ombRptNo) setOmbRptNo(e.data.data.ombRptNo);
        if (e.data.data.ptpPicEmailAddr)
          setptpPicEmailAddr(e.data.data.ptpPicEmailAddr);
        if (e.data.data.ptpPicNm) setPtpPicNm(e.data.data.ptpPicNm);
        if (e.data.data.ptpPicPhcNo) setPtpPicPhcNo(e.data.data.ptpPicPhcNo);
        if (e.data.data.rpsvNm) setRpsvNm(e.data.data.rpsvNm);
        if (e.data.data.siteInfoId) setSiteInfoId(e.data.data.siteInfoId);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    setValue();
  }, []);

  useEffect(() => {
    if (
      bslNo !== "" &&
      cbdAddr !== "" &&
      cbdNm !== "" &&
      ombRptNo !== "" &&
      rpsvNm !== "" &&
      ptpPicEmailAddr !== "" &&
      ptpPicNm !== "" &&
      ptpPicPhcNo
    )
      setIsSave(false);
    else setIsSave(true);
  }, [
    bslNo,
    cbdAddr,
    cbdNm,
    ombRptNo,
    rpsvNm,
    ptpPicEmailAddr,
    ptpPicNm,
    ptpPicPhcNo,
  ]);

  const [subTab, setSubTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="setting-contents">
          <h1 className="display-5-B">사이트 설정</h1>
          <Tab setSubTab={setSubTab} activeSubTab={activeSubTab} active={1} />
          {subTab === 0 && <TabContentA setActiveSubTab={setActiveSubTab} />}
          {subTab === 1 && <TabContentB setActiveSubTab={setActiveSubTab} />}
          <div className="button-wrap flex_">
            <OutlineBtn text="초기화" state="default" />
            <PrimaryBtn text="저장" state={iSave && "disabled"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
