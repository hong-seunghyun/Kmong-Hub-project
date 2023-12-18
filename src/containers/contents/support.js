import React, { useLayoutEffect, useState } from "react";
import Tab from "/src/components/tabs/content_tab_fixed";
import Input from "/src/components/textFields/textInput.tsx";
import OutlineBtn from "/src/components/buttons/button_outline_l";
import PrimaryBtn from "/src/components/buttons/button_primary_l";
import Icon from "/src/components/icon/icon.tsx";
import { SupportListContent } from "../../store/contents/support/atom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getSupport } from "../../asset/apis/contentApis";

const Component = () => {
  const [subTab, setSubTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const setSupportListContent = useSetRecoilState(SupportListContent);

  const getSupportListContentFunc = async () => {
    await getSupport()
      .then((e) => setSupportListContent([...e.data.data]))
      .catch((e) => console.log(e));
  };

  useLayoutEffect(() => {
    getSupportListContentFunc();
  }, []);

  const TabContents = () => {
    const [supportListState, setSupportListState] = useState([]);
    const [supportList, setSupportList] = useRecoilState(SupportListContent);
    setActiveSubTab(subTab);

    useLayoutEffect(() => {
      setSupportListState([...supportList]);
    }, [supportList]);

    const changeCategoryValue = ({ value, index }) => {
      const copyList = JSON.parse(JSON.stringify(supportList));
      //   console.log(copyList, index);
      copyList[index].catgNm = value;
      setSupportListState(copyList);
      setSupportList(copyList);
    };
    return (
      <div className="sub-page-0">
        {supportListState &&
          supportListState.map((e, idx) => {
            return (
              <>
                <div className="flex_ button-input">
                  <Input
                    importState=""
                    labelText={`카테고리 ${idx + 1}`}
                    placeholder="카테고리 제목을 입력해 주세요."
                    valueType=""
                    state={e.catgNm}
                    setStateFunc={(event) => {
                      console.log(idx);
                      changeCategoryValue({
                        event: event.target.value,
                        index: idx,
                      });
                    }}
                    helperTextResult="helperA"
                    iconState="false"
                  />
                  {idx !== 0 && (
                    <OutlineBtn
                      text={
                        <Icon
                          icon="minus"
                          size={3}
                          color="#464749"
                          stroke="none"
                        />
                      }
                    />
                  )}
                  <OutlineBtn
                    text={
                      <Icon
                        icon="plus"
                        size={16}
                        color="#464749"
                        stroke="none"
                      />
                    }
                  />
                </div>
              </>
            );
          })}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="page-wrap">
        <div className="contents- contents-support">
          <h1 className="display-5-B">콘텐츠 설정</h1>
          <Tab setSubTab={setSubTab} activeSubTab={activeSubTab} active={3} />
          <TabContents />
          <div className="button-wrap flex_">
            <OutlineBtn text="순서변경" state="disabled" />
            <PrimaryBtn text="저장" state="disabled" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;
