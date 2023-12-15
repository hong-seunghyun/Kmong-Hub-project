import React, { useEffect, useState } from "react";
import Tab from "/src/components/tabs/settings_tab_fixed";
import Input from "/src/components/textFields/textInput.tsx";
import TextArea from "/src/components/textFields/textArea.tsx";
import Upload from "/src/components/upload/upload";
import OutlineBtn from "/src/components/buttons/button_outline_l";
import PrimaryBtn from "/src/components/buttons/button_primary_l";
import { useRecoilState } from "recoil";
import {
  SettingChntkScptCntn,
  SettingGganltcScptCntn,
  SettingOgImgPathAddr,
  SettingSiteScriptItrCntn,
  SettingSiteScriptNm,
  SettingSiteScriptScptId,
} from "../../store/setting/script/atom";
// import { useSettingHandler } from "../../util/ButtonHandler/setting";
import { getSiteScpt, setSiteScpt } from "../../asset/apis/siteApis";

const TabContentA = ({ setActiveSubTab }) => {
  setActiveSubTab(0);
  const [ogImgPathAddr, setOgImgPathAddr] =
    useRecoilState(SettingOgImgPathAddr);
  const [siteItrCntn, setSiteItrCntn] = useRecoilState(
    SettingSiteScriptItrCntn
  );
  const [siteNm, setSiteNm] = useRecoilState(SettingSiteScriptNm);

  return (
    <div className="sub-page-0">
      <Input
        labelText="사이트 이름"
        placeholder="사이트 이름을 입력해주세요."
        valueType=""
        state={siteNm}
        setState={setSiteNm}
        helperTextResult="none"
        iconState="false"
      />
      <TextArea
        labelText="사이트 소개"
        placeholder="사이트 소개를 입력해 주세요."
        valueType=""
        state={siteItrCntn}
        setState={setSiteItrCntn}
        helperTextResult="none"
      />
      <div className="flex_ button-input">
        <Input
          labelText="키워드"
          placeholder="사이트의 내용과 관련된 주요 키워드를 입력해 주세요."
          valueType=""
          state={siteNm}
          setState={setSiteNm}
          helperTextResult="none"
          iconState="false"
        />
        <OutlineBtn text="등록" />
      </div>
      <div className="favicon-wrap">
        <p className="body-2-B">OG 이미지</p>
        <Upload
          state="default"
          type="normal"
          urlState={ogImgPathAddr}
          setUrlState={setOgImgPathAddr}
        />
        <p className="caption-R helper-txt">
          허용 사이즈: <span>1200px x 630px</span> | 파일 형식:{" "}
          <span>JPG, PNG</span>
        </p>
      </div>
    </div>
  );
};

const TabContentB = ({ setActiveSubTab }) => {
  setActiveSubTab(1);
  const [gganltcScptCntn, setGganltcScptCntn] = useRecoilState(
    SettingGganltcScptCntn
  );
  return (
    <div className="sub-page-1">
      <TextArea
        labelText="스크립트"
        placeholder="스크립트를 삽입해 주세요."
        valueType=""
        state={gganltcScptCntn}
        setState={setGganltcScptCntn}
        helperTextResult="none"
      />
    </div>
  );
};

const TabContentC = ({ setActiveSubTab }) => {
  setActiveSubTab(2);
  const [chntkScptCntn, setChntkScptCntn] =
    useRecoilState(SettingChntkScptCntn);
  return (
    <div className="sub-page-2">
      <TextArea
        labelText="스크립트"
        placeholder="스크립트를 삽입해 주세요."
        valueType=""
        state={chntkScptCntn}
        setState={setChntkScptCntn}
        helperTextResult="none"
      />
    </div>
  );
};

const Component = () => {
  const [subTab, setSubTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [ogImgPathAddr, setOgImgPathAddr] =
    useRecoilState(SettingOgImgPathAddr);
  const [siteNm, setSiteNm] = useRecoilState(SettingSiteScriptNm);
  const [siteItrCntn, setSiteItrCntn] = useRecoilState(
    SettingSiteScriptItrCntn
  );
  const [gganltcScptCntn, setGganltcScptCntn] = useRecoilState(
    SettingGganltcScptCntn
  );
  const [chntkScptCntn, setChntkScptCntn] =
    useRecoilState(SettingChntkScptCntn);

  const [siteScptId, setSiteScriptScptId] = useRecoilState(
    SettingSiteScriptScptId
  );
  const [iSave, setIsSave] = useState(false);

  const getValue = async () => {
    await getSiteScpt()
      .then((e) => {
        console.log(e);
        if (e.data.data.chntkScptCntn)
          setChntkScptCntn(e.data.data.chntkScptCntn);
        if (e.data.data.gganltcScptCntn)
          setGganltcScptCntn(e.data.data.gganltcScptCntn);
        if (e.data.data.ogImgPathAddr)
          setOgImgPathAddr(e.data.data.ogImgPathAddr);
        if (e.data.data.siteItrCntn) setSiteItrCntn(e.data.data.siteItrCntn);
        if (e.data.data.siteNm) setSiteNm(e.data.data.siteNm);
        if (e.data.data.siteScptId) setSiteScriptScptId(e.data.data.siteScptId);
      })
      .catch((e) => console.log(e));
  };

  const saveValue = async () => {
    // console.log("eefefef");
    await setSiteScpt({
      chntkScptCntn,
      activeSubTab,
      siteNm,
      siteItrCntn,
      siteScptId,
      ogImgPathAddr,
      gganltcScptCntn,
    })
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (
      siteNm !== "" &&
      siteItrCntn !== "" &&
      gganltcScptCntn !== "" &&
      chntkScptCntn !== ""
    )
      setIsSave(true);
    else setIsSave(false);
  }, [siteNm, siteItrCntn, gganltcScptCntn, chntkScptCntn]);

  useEffect(() => {
    getValue();
  }, []);

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="setting-contents setting-script">
          <h1 className="display-5-B">사이트 설정</h1>
          <Tab setSubTab={setSubTab} activeSubTab={activeSubTab} active={3} />
          {subTab === 0 && <TabContentA setActiveSubTab={setActiveSubTab} />}
          {subTab === 1 && <TabContentB setActiveSubTab={setActiveSubTab} />}
          {subTab === 2 && <TabContentC setActiveSubTab={setActiveSubTab} />}
          <div className="button-wrap flex_">
            <OutlineBtn text="초기화" state="default" />
            <PrimaryBtn
              text="저장"
              state={!iSave && "disabled"}
              onclick={saveValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
