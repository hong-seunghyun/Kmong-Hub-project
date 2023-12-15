import React, {  useState } from "react";
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
      .catch((_) => {});
  };

  useLayoutEffect(() => {
    getTechnologyTransferFunc();
  }, []);

  const TabContents = () => {
    setActiveSubTab(subTab);

    return (
      <div className="sub-page-0">
        <div className="flex_ button-input">
                <Input
                  importState=""
                  labelText={`카테고리`}
                  placeholder="카테고리 제목을 입력해 주세요."
                  valueType=""
                  helperTextResult="helperA"
                  iconState="false"
                />
                <OutlineBtn
                  text={
                    <Icon icon="plus" size={16} color="#464749" stroke="none" />
                  }
                />
              </div>
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
