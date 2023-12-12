import React, { useState } from "react";
import Tab from "/src/components/tabs/settings_tab_fixed";
import Input from "/src/components/textFields/textInput.tsx";
import TextArea from "/src/components/textFields/textArea.tsx";
import Upload from "/src/components/upload/upload"
import OutlineBtn from "/src/components/buttons/button_outline_l"
import PrimaryBtn from "/src/components/buttons/button_primary_l"
import Icon from "/src/components/icon/icon.tsx";

const Component = () => {
	const [ subTab, setSubTab ] = useState(0);
	const [ activeSubTab, setActiveSubTab ] = useState(0);

	const TabContentA = () => {
		setActiveSubTab(subTab);
		return(
			<div className="sub-page-0">
				<Input labelText="사이트 이름" placeholder="사이트 이름을 입력해주세요." valueType="" helperTextResult="none" iconState="false"/>
				<TextArea labelText="사이트 소개" placeholder="사이트 소개를 입력해 주세요." valueType="" helperTextResult="none"/>
				<div className="favicon-wrap">
					<p className="body-2-B">파비콘</p>
					<Upload state="default" type="normal"/>
					<p className="caption-R helper-txt">
						허용 사이즈: <span>16px x 16px</span> | 파일 형식: <span>ICO</span>
					</p>
				</div>
				
			</div>
		)
	}

	const TabContentB = () => {
		setActiveSubTab(subTab);
		return(
			<div className="sub-page-1">
				<Input importState="none" labelText="전화번호" placeholder="전화번호를 입력해 주세요" valueType="" helperTextResult="none" iconState="false"/>
				<TextArea importState="none" labelText="이메일" placeholder="이메일을 입력해 주세요." valueType="" helperTextResult="none"/>
			</div>
		)
	}

	const TabContentC = () => {
		setActiveSubTab(subTab);
		return(
			<div className="sub-page-2">
				<div className="flex_ button-input">
					<Input importState="none" labelText="관리자 수신 주소" placeholder="관리자 수신 주소를 입력해 주세요" valueType="" helperTextResult="none" iconState="false"/>
					<OutlineBtn text={<Icon icon="plus" size={13} color="#464749" stroke="none"/>}/>
				</div>
			</div>
		)
	}

	const TabContents = () => {
		if(subTab === 0){
			return <TabContentA />
		}else if(subTab === 1){
			return <TabContentB />
		}else if(subTab === 2){
			return <TabContentC />
		}
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="setting-contents">
					<h1 className="display-5-B">사이트 설정</h1>
					<Tab setSubTab={setSubTab} activeSubTab={activeSubTab} active={0}/>
					<TabContents />
					<div className="button-wrap flex_">
						<OutlineBtn text="초기화" state="default"/>
						<PrimaryBtn text="저장" state="disabled"/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Component;