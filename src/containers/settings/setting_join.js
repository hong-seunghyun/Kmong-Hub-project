import React, { useState } from "react";
import Tab from "/src/components/tabs/settings_tab_fixed";
import OutlineBtn from "/src/components/buttons/button_outline_l";
import PrimaryBtn from "/src/components/buttons/button_primary_l";
import ToggleSwich from "/src/components/radio/slide_toggle_btn";
import Radio from "/src/components/radio/radio";

const Component = () => {
  const [subTab, setSubTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const TabContents = () => {
    setActiveSubTab(subTab);
    return (
      <div className="sub-page-0">
        <div className="flex_">
          <div>
            <h6 className="caption-B">주소</h6>
            <div className="flex_ radio-wrap">
              <ToggleSwich id="toggle-a" state="default" />
              <span className="flex_">
                <Radio
                  id="radio-a"
                  label="필수"
                  state="disabled"
                  name="radio-0"
                />
                <Radio
                  id="radio-b"
                  label="선택"
                  state="disabled"
                  name="radio-0"
                />
              </span>
            </div>
          </div>

          <div>
            <h6 className="caption-B">창업 연도</h6>
            <div className="flex_ radio-wrap">
              <ToggleSwich id="toggle-b" state="default" />
              <span className="flex_">
                <Radio
                  id="radio-c"
                  label="필수"
                  state="disabled"
                  name="radio-1"
                />
                <Radio
                  id="radio-d"
                  label="선택"
                  state="disabled"
                  name="radio-1"
                />
              </span>
            </div>
          </div>

          <div>
            <h6 className="caption-B">생년월일</h6>
            <div className="flex_ radio-wrap">
              <ToggleSwich id="toggle-c" state="default" />
              <span className="flex_">
                <Radio
                  id="radio-e"
                  label="필수"
                  state="disabled"
                  name="radio-2"
                />
                <Radio
                  id="radio-f"
                  label="선택"
                  state="disabled"
                  name="radio-2"
                />
              </span>
            </div>
          </div>

          <div>
            <h6 className="caption-B">회사 주소</h6>
            <div className="flex_ radio-wrap">
              <ToggleSwich id="toggle-d" state="default" />
              <span className="flex_">
                <Radio
                  id="radio-g"
                  label="필수"
                  state="disabled"
                  name="radio-3"
                />
                <Radio
                  id="radio-h"
                  label="선택"
                  state="disabled"
                  name="radio-3"
                />
              </span>
            </div>
          </div>

          <div>
            <h6 className="caption-B">성별</h6>
            <div className="flex_ radio-wrap">
              <ToggleSwich id="toggle-e" state="default" />
              <span className="flex_">
                <Radio
                  id="radio-i"
                  label="필수"
                  state="disabled"
                  name="radio-4"
                />
                <Radio
                  id="radio-j"
                  label="선택"
                  state="disabled"
                  name="radio-4"
                />
              </span>
            </div>
          </div>

          <div>
            <h6 className="caption-B">회사 전화번호</h6>
            <div className="flex_ radio-wrap">
              <ToggleSwich id="toggle-f" state="default" />
              <span className="flex_">
                <Radio
                  id="radio-k"
                  label="필수"
                  state="disabled"
                  name="radio-5"
                />
                <Radio
                  id="radio-l"
                  label="선택"
                  state="disabled"
                  name="radio-5"
                />
              </span>
            </div>
          </div>

          <div>
            <h6 className="caption-B">회사이름</h6>
            <div className="flex_ radio-wrap">
              <ToggleSwich id="toggle-g" state="default" />
              <span className="flex_">
                <Radio
                  id="radio-m"
                  label="필수"
                  state="disabled"
                  name="radio-6"
                />
                <Radio
                  id="radio-n"
                  label="선택"
                  state="disabled"
                  name="radio-6"
                />
              </span>
            </div>
          </div>

          <div>
            <h6 className="caption-B">회사 URL</h6>
            <div className="flex_ radio-wrap">
              <ToggleSwich id="toggle-h" state="default" />
              <span className="flex_">
                <Radio
                  id="radio-o"
                  label="필수"
                  state="disabled"
                  name="radio-7"
                />
                <Radio
                  id="radio-p"
                  label="선택"
                  state="disabled"
                  name="radio-7"
                />
              </span>
            </div>
          </div>

          <div>
            <h6 className="caption-B">사업분야</h6>
            <div className="flex_ radio-wrap">
              <ToggleSwich id="toggle-i" state="default" />
              <span className="flex_">
                <Radio
                  id="radio-q"
                  label="필수"
                  state="disabled"
                  name="radio-8"
                />
                <Radio
                  id="radio-r"
                  label="선택"
                  state="disabled"
                  name="radio-8"
                />
              </span>
            </div>
          </div>

          <div>
            <h6 className="caption-B">관심 기술 분야 선택</h6>
            <div className="flex_ radio-wrap">
              <ToggleSwich id="toggle-j" state="default" />
              <span className="flex_">
                <Radio
                  id="radio-s"
                  label="필수"
                  state="disabled"
                  name="radio-9"
                />
                <Radio
                  id="radio-t"
                  label="선택"
                  state="disabled"
                  name="radio-9"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="setting-contents setting-join">
          <h1 className="display-5-B">사이트 설정</h1>
          <Tab setSubTab={setSubTab} activeSubTab={activeSubTab} active={5} />
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
