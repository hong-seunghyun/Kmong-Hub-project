import React, { useState } from "react";
import Icon from "/src/components/icon/icon.tsx"
import Input from "/src/components/textFields/textInput.tsx"
import InputPassword from "/src/components/textFields/passwordInput.tsx"
import ButtonSecondary from "/src/components/buttons/button_secondary_l"
import Upload from "/src/components/upload/upload"
import OutlineBtn from "/src/components/buttons/button_outline_l"
import PrimaryBtn from "/src/components/buttons/button_primary_l"
import Badge from "/src/components/label/badge";
import CheckBox from "/src/components/radio/checkbox"

const Component = () => {

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="member- operator-add">
					<h1 className="display-5-B">운영자 등록/수정</h1>

					<div className="sub-title body-2-B flex_">
						<Badge value="1"/>
							기본 정보
					</div>

					<div className="flex_ button-input">
						<Input importState="" labelText="이메일" placeholder="이메일을 입력해 주세요." valueType="" helperTextResult="none" iconState="true"/>
						<ButtonSecondary text="중복 확인" state="disabled"/>
					</div>

					<div className="flex_ box-">
						<InputPassword importState="" labelText="비밀번호" placeholder="비밀번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="true"/>
						<div className="flex_">
							<div className="flex_ check_flex txt-disabled caption-R">
								<Icon icon="checkNone" size={7} color="#b3b6b8" stroke="" />
								숫자 입력
							</div>
							<div className="flex_ check_flex txt-disabled caption-R">
								<Icon icon="checkNone" size={7} color="#b3b6b8" stroke="" />
								8자 이상 ~ 12자 이하
							</div>
							<div className="flex_ check_flex txt-disabled caption-R">
								<Icon icon="checkNone" size={7} color="#b3b6b8" stroke="" />
								영문 입력
							</div>
						</div>
					</div>

					<div className="box-">
						<Input importState="" labelText="이름" placeholder="이름을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
					</div>

					<div className="box-">
						<Input importState="" labelText="소속" placeholder="소속을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
					</div>

					<div className="box-">
						<Input importState="" labelText="휴대폰 번호" placeholder="휴대폰 번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
					</div>

					<div className="sub-title body-2-B flex_">
						<Badge value="2"/>
							권한 설정
					</div>

					<div className="flex_ checkbox-flex box-">
						<CheckBox size="small" label="사이트 설정"/>
						<CheckBox size="small" label="콘텐츠 관리"/>
						<CheckBox size="small" label="기술문서 관리"/>
						<CheckBox size="small" label="연구자 관리"/>
						<CheckBox size="small" label="디자인 관리"/>
						<CheckBox size="small" label="콘텐츠 관리"/>
						<CheckBox size="small" label="게시판 관리"/>
						<CheckBox size="small" label="회원 관리"/>
						<CheckBox size="small" label="마케팅 관리"/>
						<CheckBox size="small" label="통계"/>
						<CheckBox size="small" label="거래 관리"/>
					</div>

					<div className="sub-title body-2-B flex_">
						<Badge value="3"/>
						콘텐츠 작성자 표시 정보
					</div>

					<div className="box-">
						<Input importState="none" labelText="프로필 이름" placeholder="프로필 이름을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
					</div>

					<div className="box-">
						<p className="body-2-B txt-second-default">프로필 이미지<span className="txt-violet-1">*</span></p>
						<p className="caption-R helper-txt txt-third">
						입력하신 프로필 이름과 이미지는 공급사가 업로드하는 모든 콘텐츠 옆에 작성자의 정보로 표시돼요.
						</p>
						<Upload state="default" type="normal"/>
						<p className="caption-R helper-txt">
							허용 사이즈: <span>800px x 800px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
						</p>
					</div>

					<div className="flex_ input-search">
						<Input labelText="소속" placeholder="소속을 검색해 주세요." valueType="" helperTextResult="none" iconState="false"/>
						<Icon icon="search" size={16} stroke="#EAEDF0" fill="none" /> 
					</div>
					<p className="caption-R helper-txt txt-third">
					원하는 기관을 선택해주세요. 선택한 기관의 특허, 논문, 보고서 등의 정보를 불러와 보실 수 있어요.
					</p>

					<div className="button-wrap flex_">
						<OutlineBtn text="초기화" state="default"/>
						<PrimaryBtn text="저장" state="default"/>
					</div>

				</div>
			</div>
		</div>
	)
}
export default Component;