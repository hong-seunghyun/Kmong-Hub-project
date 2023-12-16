import React, { useLayoutEffect, useState } from "react";
import Tab from "/src/components/tabs/content_tab_fixed";
import Input from "/src/components/textFields/textInput.tsx";
import PrimaryBtn from "/src/components/buttons/button_primary_l";
import Badge from "/src/components/label/badge";
import Radio from "/src/components/radio/radio";
import { getMenuExps } from "../../asset/apis/contentApis";
import { useRecoilState } from "recoil";
import {
  EventIntroduceAtom,
  EventIntroduceExpAtom,
  EventTitleAtom,
  EventTitleExpAtom,
  NewsIntroduceAtom,
  NewsIntroduceExpAtom,
  NewsTitleAtom,
  NewsTitleExpAtom,
  SupportIntroduceAtom,
  SupportIntroduceExpAtom,
  SupportTitleAtom,
  SupportTitleExpAtom,
  TTFIntroduceAtom,
  TTFIntroduceExpAtom,
  TTFTitleAtom,
  TTFTitleExpAtom,
} from "../../store/contents/contents/atom";

const Component = () => {
  const [subTab, setSubTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const [TTFTitle, setTTFTitle] = useRecoilState(TTFTitleAtom);
  const [TTFTitleExp, setTTFTitleExp] = useRecoilState(TTFTitleExpAtom);
  const [TTFIntroduce, setTTFIntroduce] = useRecoilState(TTFIntroduceAtom);
  const [TTFIntroduceExp, setTTFIntroduceExp] =
    useRecoilState(TTFIntroduceExpAtom);

  const [newsTitle, setNewsTitle] = useRecoilState(NewsTitleAtom);
  const [newsTitleExp, setNewsTitleExp] = useRecoilState(NewsTitleExpAtom);
  const [newsIntroduce, setNewsIntroduce] = useRecoilState(NewsIntroduceAtom);
  const [newsIntroduceExp, setNewsIntroduceExp] =
    useRecoilState(NewsIntroduceExpAtom);

  const [SupportTitle, setSupportTitle] = useRecoilState(SupportTitleAtom);
  const [SupportTitleExp, setSupportTitleExp] =
    useRecoilState(SupportTitleExpAtom);
  const [SupportIntroduce, setSupportIntroduce] =
    useRecoilState(SupportIntroduceAtom);
  const [SupportIntroduceExp, setSupportIntroduceExp] = useRecoilState(
    SupportIntroduceExpAtom
  );

  const [eventTitle, setEventTitle] = useRecoilState(EventTitleAtom);
  const [eventTitleExp, setEventTitleExp] = useRecoilState(EventTitleExpAtom);
  const [eventIntroduce, setEventIntroduce] =
    useRecoilState(EventIntroduceAtom);
  const [eventIntroduceExp, setEventIntroduceExp] = useRecoilState(
    EventIntroduceExpAtom
  );

  // const initValue = (value) => {
  //   switch (value.mnuDvCd) {
  //     case "TTF":
  //       setTTFTitle(value.mnuNm);
  //       setTTFIntroduce(value.onelineItr);
  //       setTTFTitleExp(value.ctntExpsYn);
  //       break;
  //     case "EVN":
  //       setEventTitle(value.mnuNm);
  //       setEventIntroduce(value.onelineItr);
  //       setEventTitleExp(value.ctntExpsYn);
  //       break;
  //     case "NEWS":
  //       setNewsTitle(value.mnuNm);
  //       setNewsIntroduce(value.onelineItr);
  //       setNewsTitleExp(value.ctntExpsYn);
  //       break;
  //     case "SPJ":
  //       setSupportTitle(value.mnuNm);
  //       setSupportIntroduce(value.onelineItr);
  //       setSupportTitleExp(value.ctntExpsYn);
  //       break;
  //   }
  // };

  const getMenuExpContentFunc = async () => {
    await getMenuExps()
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };

  useLayoutEffect(() => {
    getMenuExpContentFunc();
  }, []);

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
