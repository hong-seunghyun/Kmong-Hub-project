import React, { useEffect, useState } from "react";
import Tab from "/src/components/tabs/settings_tab_fixed";
import Input from "/src/components/textFields/textInput.tsx";
import OutlineBtn from "/src/components/buttons/button_outline_l";
import PrimaryBtn from "/src/components/buttons/button_primary_l";
import TextButtonUnderlineS from "/src/components/buttons/text_button_underline_s";
import { useRecoilState, useSetRecoilState } from "recoil";
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

const Component = () => {
  const [subTab, setSubTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  const setBsicDmiAddr = useSetRecoilState(SettingBsicDmiAddr);
  const setIdvdDmiAddr = useSetRecoilState(SettingIdvdDmiAddr);
  const setBslNo = useSetRecoilState(SettingBslNo);
  const setCbdAddr = useSetRecoilState(SettingCbdAddr);
  const setCbdNm = useSetRecoilState(SettingCbdNm);
  const setOmbRptNo = useSetRecoilState(SettingOmbRptNo);
  const setRpsvNm = useSetRecoilState(SettingRpsvNm);
  const setSiteInfoId = useSetRecoilState(SettingSiteInfoId);
  const setPtpPicEmailAddr = useSetRecoilState(SettingPtpPicEmailAddr);
  const setPtpPicNm = useSetRecoilState(SettingPtpPicNm);
  const setPtpPicPhcNo = useSetRecoilState(SettingPtpPicPhcNo);

  const getValue = async () => {
    await getSiteBsl()
      .then((e) => {
        if (e.data.data.bsicDmiAddr) setBsicDmiAddr(e.data.data.bsicDmiAddr);
        if (e.data.data.bslNo) setBslNo(e.data.data.bslNo);
        if (e.data.data.cbdAddr) setCbdAddr(e.data.data.cbdAddr);
        if (e.data.data.cbdNm) setCbdNm(e.data.data.cbdNm);
        if (e.data.data.idvdDmiAddr) setIdvdDmiAddr(e.data.data.idvdDmiAddr);
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

  const setInitValue = () => {
    setBsicDmiAddr("");
    setIdvdDmiAddr("");
  };

  useEffect(() => {
    getValue();
  }, []);

  const TabContents = () => {
    const [bsicDmiAddr, setBsicDmiAddr] = useRecoilState(SettingBsicDmiAddr);
    const [idvdDmiAddr, setIdvdDmiAddr] = useRecoilState(SettingIdvdDmiAddr);
    setActiveSubTab(subTab);
    return (
      <div className="sub-page-0">
        <Input
          importState="none"
          labelText="기본 도메인설정"
          placeholder="기본 도메인을 입력해 주세요."
          valueType=""
          state={bsicDmiAddr}
          setState={setBsicDmiAddr}
          helperTextResult="none"
          iconState="false"
        />
        <div className="flex_ button-input">
          <Input
            importState="none"
            labelText="개인 도메인"
            placeholder="기본 도메인을 입력해 주세요."
            valueType=""
            state={idvdDmiAddr}
            setState={setIdvdDmiAddr}
            helperTextResult="none"
            iconState="false"
          />
          <OutlineBtn text="도메인 확인" state="disabled" />
        </div>
        <div className="moreButton" style={{ textAlign: "right" }}>
          <TextButtonUnderlineS text="설정방법 확인하기" />
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="setting-contents setting-domain">
          <h1 className="display-5-B">사이트 설정</h1>
          <Tab setSubTab={setSubTab} activeSubTab={activeSubTab} active={4} />
          <TabContents />
          <div className="button-wrap flex_">
            <OutlineBtn text="초기화" state="default" onclick={setInitValue} />
            <PrimaryBtn text="저장" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
