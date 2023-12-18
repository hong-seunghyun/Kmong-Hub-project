import React, { useEffect, useLayoutEffect, useState } from "react";
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
  SettingSiteClusId,
  SettingTavoClusCntn,
} from "../../store/setting/terms/atom";
import { useSettingHandler } from "../../util/ButtonHandler/setting";
import { getSiteClus, setSiteClus } from "../../asset/apis/siteApis";

const TabContentA = ({ setActiveSubTab }) => {
  setActiveSubTab(0);
  const [tavoClusCntn, setTavoClusCntn] = useRecoilState(SettingTavoClusCntn);
  const [isButton, setButton] = useState(false);

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

const TabContentB = ({ setActiveSubTab }) => {
  setActiveSubTab(1);

  const [isButton, setButton] = useState(false);
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

const TabContentC = ({ setActiveSubTab }) => {
  setActiveSubTab(2);
  const [isButton, setButton] = useState(false);

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

const TabContentD = ({ setActiveSubTab }) => {
  setActiveSubTab(3);
  const [isButton, setButton] = useState(false);

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

const TabContentE = ({ setActiveSubTab }) => {
  setActiveSubTab(4);
  const [isButton, setButton] = useState(false);

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

const TabContentF = ({ setActiveSubTab }) => {
  setActiveSubTab(5);
  const [isButton, setButton] = useState(false);

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

const Component = () => {
  // useGetSiteTermsAtom();

  const [tavoClusCntn, setTavoClusCntn] = useRecoilState(SettingTavoClusCntn);
  const [pinfPrcsPlcyCntn, setPinfPrcsPlcyCntn] = useRecoilState(
    SettingPinfPrcsPlcyCntn
  );
  const [piuaBcmemCntn, setPiuaBcmemCntn] =
    useRecoilState(SettingPiuaBcmemCntn);
  const [piuaBbsCntn, setPiuaBbsCntn] = useRecoilState(SettingPiuaBbsCntn);
  const [advRcvAgrmYnCntn, setAdvRcvAgrmYnCntn] = useRecoilState(
    SettingAdvRcvAgrmYnCntn
  );
  const [pinfSttgYnCntn, setPinfSttgYnCntn] = useRecoilState(
    SettingPinfSttgYnCntn
  );
  const [siteClusId, setSiteClusId] = useRecoilState(SettingSiteClusId);

  const [iSave, setIsSave] = useState(false);
  const [subTab, setSubTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const getValue = async () => {
    await getSiteClus()
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

  useLayoutEffect(() => {
    getValue();
  }, []);

  useEffect(() => {
    if (
      tavoClusCntn !== "" &&
      pinfPrcsPlcyCntn !== "" &&
      piuaBcmemCntn !== "" &&
      piuaBbsCntn !== "" &&
      advRcvAgrmYnCntn !== "" &&
      pinfSttgYnCntn !== ""
    )
      setIsSave(false);
    else setIsSave(true);
  }, [
    tavoClusCntn,
    pinfPrcsPlcyCntn,
    piuaBcmemCntn,
    piuaBbsCntn,
    advRcvAgrmYnCntn,
    pinfSttgYnCntn,
  ]);

  const saveValue = async () => {
    await setSiteClus({
      tavoClusCntn,
      pinfPrcsPlcyCntn,
      piuaBcmemCntn,
      piuaBbsCntn,
      advRcvAgrmYnCntn,
      pinfSttgYnCntn,
      siteClusId,
    })
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };

  const setInitValue = () => {
    setAdvRcvAgrmYnCntn("");
    setPinfPrcsPlcyCntn("");
    setPinfSttgYnCntn("");
    setPiuaBbsCntn("");
    setPiuaBcmemCntn("");
    setTavoClusCntn("");
    setSiteClusId("");
  };

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="setting-contents setting-terms">
          <h1 className="display-5-B">사이트 설정</h1>
          <Tab setSubTab={setSubTab} activeSubTab={activeSubTab} active={2} />
          {subTab === 0 && <TabContentA setActiveSubTab={setActiveSubTab} />}
          {subTab === 1 && <TabContentB setActiveSubTab={setActiveSubTab} />}
          {subTab === 2 && <TabContentC setActiveSubTab={setActiveSubTab} />}
          {subTab === 3 && <TabContentD setActiveSubTab={setActiveSubTab} />}
          {subTab === 4 && <TabContentE setActiveSubTab={setActiveSubTab} />}
          {subTab === 5 && <TabContentF setActiveSubTab={setActiveSubTab} />}
          <div className="button-wrap flex_">
            <OutlineBtn text="초기화" state="default" onclick={setInitValue} />
            <PrimaryBtn
              text="저장"
              state={iSave && "disabled"}
              onclick={saveValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
