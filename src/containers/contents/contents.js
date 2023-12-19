import React, { useLayoutEffect, useState } from "react";
import Tab from "/src/components/tabs/content_tab_fixed";
import Input from "/src/components/textFields/textInput.tsx";
import PrimaryBtn from "/src/components/buttons/button_primary_l";
import Badge from "/src/components/label/badge";
import Radio from "/src/components/radio/radio";
import { getMenuExps } from "../../asset/apis/contentApis";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  EvnetInfoAtom,
  NewsInfoAtom,
  SuppotInfoAtom,
  TTFInfoAtom,
} from "../../store/contents/contents/atom";

const Component = () => {
  const setTTFInfo = useSetRecoilState(TTFInfoAtom);
  const setNewsInfo = useSetRecoilState(NewsInfoAtom);
  const setSupportInfo = useSetRecoilState(SuppotInfoAtom);
  const setEventInfo = useSetRecoilState(EvnetInfoAtom);
  const [subTab, setSubTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const initValue = (value) => {
    for (let i = 0; i < value.length; i++) {
      switch (value[i].mnuDvCd) {
        case "TTF":
          console.log("TTf");
          setTTFInfo({ ...value[i] });
          break;
        case "EVN":
          console.log("evn");
          setEventInfo({ ...value[i] });
          break;
        case "NWS":
          console.log("news");
          setNewsInfo({ ...value[i] });
          break;
        case "SPJ":
          console.log("spj");
          setSupportInfo({ ...value[i] });
          break;
      }
    }
  };

  const getMenuExpContentFunc = async () => {
    await getMenuExps()
      .then((e) => initValue(e.data.data))
      .catch((e) => console.log(e));
  };

  useLayoutEffect(() => {
    getMenuExpContentFunc();
  }, []);

  const TabContents = () => {
    setActiveSubTab(subTab);

    const [TTFInfo, setTTFInfo] = useRecoilState(TTFInfoAtom);
    const [NewsInfo, setNewsInfo] = useRecoilState(NewsInfoAtom);
    const [SupportInfo, setSupportInfo] = useRecoilState(SuppotInfoAtom);
    const [EventInfo, setEventInfo] = useRecoilState(EvnetInfoAtom);

    const setTTFTitle = (event) => {
      let cpVal = { ...TTFInfo };
      cpVal.mnuNm = event.target.value;
      setTTFInfo(cpVal);
    };
    const setTTFIntroduce = (event) => {
      let cpVal = { ...TTFInfo };
      cpVal.onelineItr = event.target.value;
      setTTFInfo(cpVal);
    };

    const setNewsTitle = (event) => {
      let cpVal = { ...NewsInfo };
      cpVal.mnuNm = event.target.value;
      setNewsInfo(cpVal);
    };
    const setNewsIntroduce = (event) => {
      let cpVal = { ...NewsInfo };
      cpVal.onelineItr = event.target.value;
      setNewsInfo(cpVal);
    };

    const setSupportTitle = (event) => {
      let cpVal = { ...SupportInfo };
      cpVal.mnuNm = event.target.value;
      setSupportInfo(cpVal);
    };
    const setSupportIntroduce = (event) => {
      let cpVal = { ...SupportInfo };
      cpVal.onelineItr = event.target.value;
      setSupportInfo(cpVal);
    };

    const setEventTitle = (event) => {
      let cpVal = { ...EventInfo };
      cpVal.mnuNm = event.target.value;
      setEventInfo(cpVal);
    };
    const setEvnetIntroduce = (event) => {
      let cpVal = { ...EventInfo };
      cpVal.onelineItr = event.target.value;
      setEventInfo(cpVal);
    };

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
              valueType=""
              inputCountState="countShow"
              maxLength={8}
              state={TTFInfo.mnuNm}
              setStateFunc={setTTFTitle}
              helperTextResult="none"
              iconState="false"
            />
          </div>

          <div className="input-wrap">
            <Input
              labelText="한줄 소개"
              placeholder="메뉴의 한줄 소개를 입력해 주세요."
              valueType="menu"
              state={TTFInfo.onelineItr}
              setStateFunc={setTTFIntroduce}
              helperTextResult="none"
              iconState="false"
            />
            <span className="flex_ radio-wrap">
              <Radio
                label="노출"
                name="radio-1"
                id="radio-a"
                state={TTFInfo.ctntExpsYn !== "Y" && "disabled"}
                onclick={() => {
                  let cpVal = { ...TTFInfo };
                  cpVal.ctntExpsYn = "Y";
                  console.log("Y");
                  setTTFInfo(cpVal);
                }}
                checked={TTFInfo.ctntExpsYn === "Y"}
              />
              <Radio
                label="미노출"
                name="radio-2"
                id="radio-b"
                state={TTFInfo.ctntExpsYn !== "N" && "disabled"}
                onclick={() => {
                  let cpVal = { ...TTFInfo };
                  cpVal.ctntExpsYn = "N";
                  setTTFInfo(cpVal);
                }}
                checked={TTFInfo.ctntExpsYn === "N"}
              />
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
              valueType=""
              inputCountState="countShow"
              maxLength={8}
              state={NewsInfo.mnuNm}
              setStateFunc={setNewsTitle}
              helperTextResult="none"
              iconState="false"
            />
          </div>

          <div className="input-wrap">
            <Input
              labelText="한줄 소개"
              placeholder="메뉴의 한줄 소개를 입력해 주세요."
              valueType="menu"
              state={NewsInfo.onelineItr}
              setStateFunc={setNewsIntroduce}
              helperTextResult="none"
              iconState="false"
            />
            <span className="flex_ radio-wrap">
              <Radio
                label="노출"
                name="radio-3"
                id="radio-c"
                state={NewsInfo.ctntExpsYn !== "Y" && "disabled"}
                onclick={() => {
                  let cpVal = { ...NewsInfo };
                  cpVal.ctntExpsYn = "Y";
                  setNewsInfo(cpVal);
                }}
                checked={NewsInfo.ctntExpsYn === "Y"}
              />
              <Radio
                label="미노출"
                name="radio-4"
                id="radio-d"
                state={NewsInfo.ctntExpsYn !== "N" && "disabled"}
                onclick={() => {
                  let cpVal = { ...NewsInfo };
                  cpVal.ctntExpsYn = "N";
                  setNewsInfo(cpVal);
                }}
                checked={NewsInfo.ctntExpsYn === "N"}
              />
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
              valueType=""
              inputCountState="countShow"
              maxLength={8}
              state={EventInfo.mnuNm}
              setStateFunc={setEventTitle}
              helperTextResult="none"
              iconState="false"
            />
          </div>

          <div className="input-wrap">
            <div>
              <Input
                labelText="한줄 소개"
                placeholder="메뉴의 한줄 소개를 입력해 주세요."
                valueType="menu"
                state={EventInfo.onelineItr}
                setStateFunc={setEvnetIntroduce}
                helperTextResult="none"
                iconState="false"
              />
            </div>
            <span className="flex_ radio-wrap">
              <Radio
                label="노출"
                name="radio-5"
                id="radio-e"
                state={EventInfo.ctntExpsYn !== "Y" && "disabled"}
                onclick={() => {
                  let cpVal = { ...EventInfo };
                  cpVal.ctntExpsYn = "Y";
                  setEventInfo(cpVal);
                }}
                checked={EventInfo.ctntExpsYn === "Y"}
              />
              <Radio
                label="미노출"
                name="radio-6"
                id="radio-f"
                state={EventInfo.ctntExpsYn !== "N" && "disabled"}
                onclick={() => {
                  let cpVal = { ...EventInfo };
                  cpVal.ctntExpsYn = "N";
                  setEventInfo(cpVal);
                }}
                checked={EventInfo.ctntExpsYn === "N"}
              />
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
              inputCountState="countShow"
              maxLength={8}
              state={SupportInfo.mnuNm}
              setStateFunc={setSupportTitle}
              placeholder="카테고리 제목을 입력해 주세요."
              helperTextResult="none"
              iconState="false"
            />
          </div>

          <div className="input-wrap">
            <Input
              labelText="한줄 소개"
              placeholder="메뉴의 한줄 소개를 입력해 주세요."
              valueType="menu"
              state={SupportInfo.onelineItr}
              setStateFunc={setSupportIntroduce}
              helperTextResult="none"
              iconState="false"
            />
            <span className="flex_ radio-wrap">
              <Radio
                label="노출"
                name="radio-7"
                id="radio-g"
                state={SupportInfo.ctntExpsYn !== "Y" && "disabled"}
                onclick={() => {
                  let cpVal = { ...SupportInfo };
                  cpVal.ctntExpsYn = "Y";
                  setSupportInfo(cpVal);
                }}
                checked={SupportInfo.ctntExpsYn === "Y"}
              />
              <Radio
                label="미노출"
                name="radio-8"
                id="radio-h"
                state={SupportInfo.ctntExpsYn !== "N" && "disabled"}
                onclick={() => {
                  let cpVal = { ...SupportInfo };
                  cpVal.ctntExpsYn = "N";
                  setSupportInfo(cpVal);
                }}
                checked={SupportInfo.ctntExpsYn === "N"}
              />
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
