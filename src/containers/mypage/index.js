import React, { useState } from "react";
import Tab from "/src/components/tabs/mypage_tab_fixed";
import Input from "/src/components/textFields/textInput.tsx";
import PasswordInput from "/src/components/textFields/passwordInput.tsx";
import Checkbox from "/src/components/radio/checkbox";
import Upload from "/src/components/upload/upload"
import OutlineBtn from "/src/components/buttons/button_outline_l"
import ButtonSecondary from "/src/components/buttons/button_secondary_l"
import PrimaryBtn from "/src/components/buttons/button_primary_l"
import Icon from "/src/components/icon/icon.tsx";

const Component = () => {

	const TabContents = () => {
		return(
			<div className="sub-page-0">
				<div className="flex_ button-input">
					<Input importState="none" labelText="개인 도메인" placeholder="기본 도메인을 입력해 주세요." valueType="" helperTextResult="none" iconState="true"/>
					<ButtonSecondary text="중복 확인" state="disabled"/>
				</div>
				<div className="flex_ button-input">
					<PasswordInput labelText="비밀번호" placeholder="*******" valueType="" helperTextResult="none" iconState="true"/>
					<ButtonSecondary text="변경" state="default"/>
				</div>
				<div className="flex_ button-input">
					<Input labelText="휴대폰 번호" placeholder="01012345678" valueType="" helperTextResult="none" iconState="false"/>
					<ButtonSecondary text="변경" state="default"/>
				</div>

				<Input labelText="이름" placeholder="미나 마수드" valueType="" helperTextResult="none" iconState="false"/>

				<Input labelText="닉네임" placeholder="알라딘" valueType="" helperTextResult="none" iconState="false"/>

				<div className="box-">
					<p className="body-2-B txt-second-default">프로필</p>
					<Upload state="default" type="normal"/>
					<p className="caption-R helper-txt">
						허용 사이즈: <span>800px x 800px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
					</p>
				</div>
				
				<div className="flex_ input-search">
					<Input labelText="소속" placeholder="한국기술HUB" valueType="" helperTextResult="none" iconState="false"/>
					<Icon icon="search" size={16} stroke="#EAEDF0" fill="none" /> 
				</div>

				<div className="box-">
					<p className="body-2-B txt-second-default">사업자 등록증<span className="body-2-B  txt-violet-1">*</span></p>
						<Upload state="done" type="preview"/>
					<p className="caption-R helper-txt">
						허용 사이즈: <span>800px x 800px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
					</p>
				</div>

				<div className="flex_ button-input">
					<Input labelText="소속 전화번호" placeholder="01012345678" valueType="" helperTextResult="none" iconState="false"/>
					<ButtonSecondary text="변경" state="default"/>
				</div>

				<div className="checkBox-">
					<Checkbox size="large" id="check-a" label="(선택) 한국기술마켓의 뉴스레터 발송에 동의해요." state="default"/>
					<Checkbox size="large" id="check-b" label="(선택) 이메일/SMS 등 수신을 동의해요." state="default"/>
				</div>

			</div>
		)
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="mypage-contents">
					<h1 className="display-5-B">마이페이지</h1>
					<Tab active={0}/>
					<TabContents />
					<div className="button-wrap flex_">
						<OutlineBtn text="탈퇴" state="default"/>
						<PrimaryBtn text="저장" state="default"/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Component;