import React, { useLayoutEffect, useState } from "react";
import Tab from "/src/components/tabs/content_tab_fixed";
import Input from "/src/components/textFields/textInput.tsx";
import OutlineBtn from "/src/components/buttons/button_outline_l";
import PrimaryBtn from "/src/components/buttons/button_primary_l";
import Icon from "/src/components/icon/icon.tsx";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getTechnologyTransfer } from "../../asset/apis/contentApis";
import { TechnologyTransferContent } from "../../store/contents/tecnology/atom";

const Component = () => {
  const [subTab, setSubTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);
  const setTechnologyTransferContent = useSetRecoilState(
    TechnologyTransferContent
  );

  const getTechnologyTransferFunc = async () => {
    await getTechnologyTransfer()
      .then((e) => setTechnologyTransferContent([...e.data.data]))
      .catch((e) => console.log(e));
  };

  useLayoutEffect(() => {
    getTechnologyTransferFunc();
  }, []);

  const TabContents = () => {
    const [technologyList, setTechnologyList] = useState([]);
    const [technologyTransferList, setTechnologyTransferList] = useRecoilState(
      TechnologyTransferContent
    );
    setActiveSubTab(subTab);

    useLayoutEffect(() => {
      setTechnologyList([...technologyTransferList]);
    }, [technologyTransferList]);

    const changeCategoryValue = ({ value, index }) => {
      const copyList = JSON.parse(JSON.stringify(technologyTransferList));
      //   console.log(copyList, index);
      copyList[index].catgNm = value;
      setTechnologyList(copyList);
      setTechnologyTransferList(copyList);
    };
    return (
      <div className="sub-page-0">
        {technologyList.map((e, idx) => {
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
                    <Icon icon="plus" size={16} color="#464749" stroke="none" />
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
        <div className="contents- contents-technology">
          <h1 className="display-5-B">콘텐츠 설정</h1>
          <Tab setSubTab={setSubTab} activeSubTab={activeSubTab} active={0} />
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
