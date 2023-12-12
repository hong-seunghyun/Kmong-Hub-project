import React, { useState } from "react";
import Tab from "/src/components/tabs/settings_tab_fixed";
import TextArea from "/src/components/textFields/textArea.tsx";
import OutlineBtn from "/src/components/buttons/button_outline_l";
import PrimaryBtn from "/src/components/buttons/button_primary_l";
import Icon from "/src/components/icon/icon.tsx";
import ButtonSecondaryS from "/src/components/buttons/button_secondary_s";
import TextButtonUnderlinePrimaryS from "/src/components/buttons/text_button_underline_primary_s";
import { useRecoilState } from "recoil";
import {
  SettingAdvRcvAgrmYnCntn,
  SettingPinfPrcsPlcyCntn,
  SettingPinfSttgYnCntn,
  SettingPiuaBbsCntn,
  SettingPiuaBcmemCntn,
  SettingTavoClusCntn,
} from "../../store/setting/terms/atom";
import { setSiteTermsAtom } from "../../util/setSettingAtom";

const Component = () => {
  setSiteTermsAtom();

  const [subTab, setSubTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [isButton, setButton] = useState(false);

  const TabContentA = () => {
    setActiveSubTab(subTab);
    const [tavoClusCntn, setTavoClusCntn] = useRecoilState(SettingTavoClusCntn);

    const [] = useState();
    return (
      <div className="sub-page-0 sub-page">
        <TextArea
          labelText="사이트 소개"
          placeholder="이용 약관을 입력해 주세요."
          valueType=""
          state={tavoClusCntn}
          setState={setTavoClusCntn}
          helperTextResult="none"
        />
        <ButtonSecondaryS text="예시 불러오기" setButton={setButton} />

        <div
          className={`flex_ tip-text-box txt-second-default radius-8 bg-violet-6 ${
            isButton ? "show" : ""
          }`}
        >
          <span className="flex_ body-3-R">
            <Icon icon="inform" size={12} color="#574aff" stroke="none" />
            파란색 글씨에 대한 내용을 변경해주세요.
          </span>
          <span className="flex_">
            <TextButtonUnderlinePrimaryS text="예시 불러오기" />
            <Icon icon="chevronRight" size={9} color="#574AFF" stroke="none" />
          </span>
        </div>
      </div>
    );
  };

  const TabContentB = () => {
    setActiveSubTab(subTab);

    const [pinfPrcsPlcyCntn, setPinfPrcsPlcyCntn] = useRecoilState(
      SettingPinfPrcsPlcyCntn
    );
    return (
      <div className="sub-page-0 sub-page">
        <TextArea
          labelText="개인정보처리방침"
          placeholder="개인정보처리방침을 입력해 주세요."
          valueType=""
          state={pinfPrcsPlcyCntn}
          setState={setPinfPrcsPlcyCntn}
          helperTextResult="none"
        />
        <ButtonSecondaryS text="예시 불러오기" setButton={setButton} />

        <div
          className={`flex_ tip-text-box txt-second-default radius-8 bg-violet-6 ${
            isButton ? "show" : ""
          }`}
        >
          <span className="flex_ body-3-R">
            <Icon icon="inform" size={12} color="#574aff" stroke="none" />
            파란색 글씨에 대한 내용을 변경해주세요.
          </span>
          <span className="flex_">
            <TextButtonUnderlinePrimaryS text="예시 불러오기" />
            <Icon icon="chevronRight" size={9} color="#574AFF" stroke="none" />
          </span>
        </div>
      </div>
    );
  };

  const TabContentC = () => {
    setActiveSubTab(subTab);

    const [piuaBcmemCntn, setPiuaBcmemCntn] =
      useRecoilState(SettingPiuaBcmemCntn);
    return (
      <div className="sub-page-0 sub-page">
        <TextArea
          labelText="개인정보 수집 및 이용에 대한 동의(회원 가입)"
          placeholder="개인정보 수집 및 이용에 대한 동의(회원 가입)을 입력해 주세요."
          valueType=""
          state={piuaBcmemCntn}
          setState={setPiuaBcmemCntn}
          helperTextResult="none"
        />
        <ButtonSecondaryS text="예시 불러오기" setButton={setButton} />

        <div
          className={`flex_ tip-text-box txt-second-default radius-8 bg-violet-6 ${
            isButton ? "show" : ""
          }`}
        >
          <span className="flex_ body-3-R">
            <Icon icon="inform" size={12} color="#574aff" stroke="none" />
            파란색 글씨에 대한 내용을 변경해주세요.
          </span>
          <span className="flex_">
            <TextButtonUnderlinePrimaryS text="예시 불러오기" />
            <Icon icon="chevronRight" size={9} color="#574AFF" stroke="none" />
          </span>
        </div>
      </div>
    );
  };

  const TabContentD = () => {
    setActiveSubTab(subTab);

    const [piuaBbsCntn, setPiuaBbsCntn] = useRecoilState(SettingPiuaBbsCntn);
    return (
      <div className="sub-page-0 sub-page">
        <TextArea
          labelText="개인정보 수집 및 이용에 대한 동의 (게시판)"
          placeholder="개인정보 수집 및 이용에 대한 동의 (게시판)을 입력해 주세요."
          valueType=""
          state={piuaBbsCntn}
          setState={setPiuaBbsCntn}
          helperTextResult="none"
        />
        <ButtonSecondaryS text="예시 불러오기" setButton={setButton} />

        <div
          className={`flex_ tip-text-box txt-second-default radius-8 bg-violet-6 ${
            isButton ? "show" : ""
          }`}
        >
          <span className="flex_ body-3-R">
            <Icon icon="inform" size={12} color="#574aff" stroke="none" />
            파란색 글씨에 대한 내용을 변경해주세요.
          </span>
          <span className="flex_">
            <TextButtonUnderlinePrimaryS text="예시 불러오기" />
            <Icon icon="chevronRight" size={9} color="#574AFF" stroke="none" />
          </span>
        </div>
      </div>
    );
  };

  const TabContentE = () => {
    setActiveSubTab(subTab);
    const [advRcvAgrmYnCntn, setAdvRcvAgrmYnCntn] = useRecoilState(
      SettingAdvRcvAgrmYnCntn
    );
    return (
      <div className="sub-page-0 sub-page">
        <TextArea
          labelText="광고성 정보 수신동의"
          placeholder="광고성 정보 수신동의"
          valueType=""
          state={advRcvAgrmYnCntn}
          setState={setAdvRcvAgrmYnCntn}
          helperTextResult="none"
        />
        <ButtonSecondaryS text="예시 불러오기" setButton={setButton} />

        <div
          className={`flex_ tip-text-box txt-second-default radius-8 bg-violet-6 ${
            isButton ? "show" : ""
          }`}
        >
          <span className="flex_ body-3-R">
            <Icon icon="inform" size={12} color="#574aff" stroke="none" />
            파란색 글씨에 대한 내용을 변경해주세요.
          </span>
          <span className="flex_">
            <TextButtonUnderlinePrimaryS text="예시 불러오기" />
            <Icon icon="chevronRight" size={9} color="#574AFF" stroke="none" />
          </span>
        </div>
      </div>
    );
  };

  const TabContentF = () => {
    setActiveSubTab(subTab);

    const [pinfSttgYnCntn, setPinfSttgYnCntn] = useRecoilState(
      SettingPinfSttgYnCntn
    );
    return (
      <div className="sub-page-0 sub-page">
        <TextArea
          labelText="개인정보제공 설정"
          placeholder="개인정보제공 설정"
          valueType=""
          state={pinfSttgYnCntn}
          setState={setPinfSttgYnCntn}
          helperTextResult="none"
        />
        <ButtonSecondaryS text="예시 불러오기" setButton={setButton} />

        <div
          className={`flex_ tip-text-box txt-second-default radius-8 bg-violet-6 ${
            isButton ? "show" : ""
          }`}
        >
          <span className="flex_ body-3-R">
            <Icon icon="inform" size={12} color="#574aff" stroke="none" />
            파란색 글씨에 대한 내용을 변경해주세요.
          </span>
          <span className="flex_">
            <TextButtonUnderlinePrimaryS text="예시 불러오기" />
            <Icon icon="chevronRight" size={9} color="#574AFF" stroke="none" />
          </span>
        </div>
      </div>
    );
  };

  const TabContents = () => {
    if (subTab === 0) {
      return <TabContentA />;
    } else if (subTab === 1) {
      return <TabContentB />;
    } else if (subTab === 2) {
      return <TabContentC />;
    } else if (subTab === 3) {
      return <TabContentD />;
    } else if (subTab === 4) {
      return <TabContentE />;
    } else if (subTab === 5) {
      return <TabContentF />;
    }
  };

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="setting-contents setting-terms">
          <h1 className="display-5-B">사이트 설정</h1>
          <Tab setSubTab={setSubTab} activeSubTab={activeSubTab} active={2} />
          <TabContents />
          <div className="button-wrap flex_">
            <OutlineBtn text="초기화" state="default" />
            <PrimaryBtn text="저장" state="disabled" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
