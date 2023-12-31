import React, { useState } from "react";
import Tab from "/src/components/tabs/settings_tab_fixed";
import Input from "/src/components/textFields/textInput.tsx";
import OutlineBtn from "/src/components/buttons/button_outline_l"
import PrimaryBtn from "/src/components/buttons/button_primary_l"

const Component = () => {
	const [ subTab, setSubTab ] = useState(0);
	const [ activeSubTab, setActiveSubTab ] = useState(0);

	const TabContentA = () => {
		setActiveSubTab(subTab);
		return(
			<div className="sub-page-0">
				<Input labelText="사업자 등록 번호" placeholder="사업자 등록 번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				<Input labelText="상호(법인명)" placeholder="상호(법인명)을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				<Input labelText="대표자" placeholder="대표자를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				<Input labelText="사업장 소재지" placeholder="사업장 소재지를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				<Input labelText="통신판매업 신고번호" placeholder="통신판매업 신고번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
			</div>
		)
	}

	const TabContentB = () => {
		setActiveSubTab(subTab);
		return(
			<div className="sub-page-1">
				<Input labelText="개인정보보호 책임자" placeholder="개인정보보호 책임자를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				<Input labelText="책임자 연락처" placeholder="책임자 연락처를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				<Input labelText="책임자 이메일" placeholder="책임자 이메일을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
			</div>
		)
	}


	const TabContents = () => {
		if(subTab === 0){
			return <TabContentA />
		}else if(subTab === 1){
			return <TabContentB />
		}
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="setting-contents">
					<h1 className="display-5-B">사이트 설정</h1>
					<Tab setSubTab={setSubTab} activeSubTab={activeSubTab} active={1}/>
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