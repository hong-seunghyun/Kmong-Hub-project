import React, { useState } from "react";
import Tab from "/src/components/tabs/settings_tab_fixed";
import Input from "/src/components/textFields/textInput.tsx";
import OutlineBtn from "/src/components/buttons/button_outline_l";
import PrimaryBtn from "/src/components/buttons/button_primary_l";
import TextButtonUnderlineS from "/src/components/buttons/text_button_underline_s";

const Component = () => {

  const [subTab, setSubTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const TabContents = () => {
    setActiveSubTab(subTab);
    return (
      <div className="sub-page-0">
        <Input
          importState="none"
          labelText="기본 도메인설정"
          placeholder="기본 도메인을 입력해 주세요."
          valueType=""
          helperTextResult="none"
          iconState="false"
        />
        <div className="flex_ button-input domain-input-wrap">
          <Input
            importState="none"
            labelText="개인 도메인"
            placeholder="기본 도메인을 입력해 주세요."
            valueType=""
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
            <OutlineBtn text="초기화" state="default" />
            <PrimaryBtn text="저장" state="disabled" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
