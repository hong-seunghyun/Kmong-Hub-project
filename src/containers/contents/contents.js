import React, { useState } from "react";
import Tab from "/src/components/tabs/content_tab_fixed";
import Input from "/src/components/textFields/textInput.tsx";
import PrimaryBtn from "/src/components/buttons/button_primary_l";
import Badge from "/src/components/label/badge";
import Radio from "/src/components/radio/radio";

const Component = () => {
  const [subTab, setSubTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const TabContents = () => {
    setActiveSubTab(subTab);

    return (
      <div className="sub-page-0">
        <div>
          <h4 className="body-2-B txt-second-default flex_ title-wrap">
            <Badge value="1&nbsp;" />
            기술이전
          </h4>
          <div className="input-wrap">
            <Input
              labelText="메뉴명"
              placeholder="카테고리 제목을 입력해 주세요."
              valueType="menu"
              helperTextResult="none"
              iconState="false"
            />
            <span className="flex_ radio-wrap">
              <Radio label="노출" name="radio-1" id="radio-a" />
              <Radio label="미노출" name="radio-1" id="radio-b" />
            </span>
          </div>

          <div className="input-wrap">
            <Input
              labelText="한줄 소개"
              placeholder=""
              inputCountState="countShow"
              maxLength={8}
              valueType=""
              helperTextResult="none"
              iconState="false"
            />
            <span className="flex_ radio-wrap">
              <Radio label="노출" name="radio-1" id="radio-a" />
              <Radio label="미노출" name="radio-1" id="radio-b" />
            </span>
          </div>

          <div className="input-wrap">
            <Input
              labelText="한줄 소개"
              placeholder=""
              inputCountState="countShow"
              maxLength={8}
              valueType=""
              helperTextResult="none"
              iconState="false"
            />
            <span className="flex_ radio-wrap">
              <Radio label="노출" name="radio-1" id="radio-a" />
              <Radio label="미노출" name="radio-1" id="radio-b" />
            </span>
          </div>
        </div>

        <div>
          <h4 className="body-2-B txt-second-default flex_ title-wrap">
            <Badge value="2&nbsp;" />
            뉴스
          </h4>
          <div className="input-wrap">
            <Input
              labelText="메뉴명"
              placeholder="카테고리 제목을 입력해 주세요."
              valueType="menu"
              helperTextResult="none"
              iconState="false"
            />
            <span className="flex_ radio-wrap">
              <Radio label="노출" name="radio-1" id="radio-a" />
              <Radio label="미노출" name="radio-1" id="radio-b" />
            </span>
          </div>

          <div className="input-wrap">
            <Input
              labelText="한줄 소개"
              placeholder=""
              inputCountState="countShow"
              maxLength={8}
              valueType=""
              helperTextResult="none"
              iconState="false"
            />
            <span className="flex_ radio-wrap">
              <Radio label="노출" name="radio-1" id="radio-a" />
              <Radio label="미노출" name="radio-1" id="radio-b" />
            </span>
          </div>
        </div>

        <div>
          <h4 className="body-2-B txt-second-default flex_ title-wrap">
            <Badge value="3&nbsp;" />
            행사
          </h4>
          <div className="input-wrap">
            <Input
              labelText="메뉴명"
              placeholder="카테고리 제목을 입력해 주세요."
              valueType="menu"
              helperTextResult="none"
              iconState="false"
            />
            <span className="flex_ radio-wrap">
              <Radio label="노출" name="radio-1" id="radio-a" />
              <Radio label="미노출" name="radio-1" id="radio-b" />
            </span>
          </div>

          <div className="input-wrap">
            <Input
              labelText="한줄 소개"
              placeholder=""
              inputCountState="countShow"
              maxLength={8}
              valueType=""
              helperTextResult="none"
              iconState="false"
            />
            <span className="flex_ radio-wrap">
              <Radio label="노출" name="radio-1" id="radio-a" />
              <Radio label="미노출" name="radio-1" id="radio-b" />
            </span>
          </div>
        </div>

        <div>
          <h4 className="body-2-B txt-second-default flex_ title-wrap">
            <Badge value="4&nbsp;" />
            지원사업
          </h4>
          <div className="input-wrap">
            <Input
              labelText="메뉴명"
              placeholder="카테고리 제목을 입력해 주세요."
              valueType="menu"
              helperTextResult="none"
              iconState="false"
            />
            <span className="flex_ radio-wrap">
              <Radio label="노출" name="radio-1" id="radio-a" />
              <Radio label="미노출" name="radio-1" id="radio-b" />
            </span>
          </div>

          <div className="input-wrap">
            <Input
              labelText="한줄 소개"
              placeholder=""
              inputCountState="countShow"
              maxLength={8}
              valueType=""
              helperTextResult="none"
              iconState="false"
            />
            <span className="flex_ radio-wrap">
              <Radio label="노출" name="radio-1" id="radio-a" />
              <Radio label="미노출" name="radio-1" id="radio-b" />
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="contents- contents-contents">
          <h1 className="display-5-B">콘텐츠 설정</h1>
          <Tab setSubTab={setSubTab} activeSubTab={activeSubTab} active={4} />
          <TabContents />
          <div className="button-wrap flex_">
            <PrimaryBtn text="저장" state="disabled" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
