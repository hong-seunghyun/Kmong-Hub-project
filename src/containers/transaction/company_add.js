import React from "react";
import ButtonL from "/src/components/buttons/button_outline_l"
import Button from "/src/components/buttons/button_primary_l"
import Badge from "/src/components/label/badge"
import Input from "/src/components/textFields/textInput.tsx"
import DatePicker from "/src/components/date/date-picker-single"
import CheckBox from "/src/components/radio/checkbox"

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="transaction-container company_retouch">
				<h1 className="title display-5-B">업체 등록/수정</h1>

				<div className="sub-title body-2-B flex_">
					<Badge value="1"/>
					기본정보
				</div>

				<div className="input-wrap">
					<Input labelText="업체명" placeholder="업체명을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<Input labelText="대표자명" placeholder="대표자명을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<Input labelText="업종" placeholder="업종을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<Input importState="none" labelText="대표 전화번호" placeholder="전화번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<Input importState="none" labelText="대표 이메일" placeholder="이메일을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap flex-wrap">
					<div className="flex_">
						<Input importState="none" labelText="업체 주소" placeholder="주소를 선택해 주세요." valueType="" helperTextResult="none" iconState="false"/>
						<ButtonL text="주소 찾기" />
					</div>
					<Input importState="none" labelText="" placeholder="상세 주소를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap half-wrap">
					<p className="body-2-B">설립일</p>
					<DatePicker />
				</div>

				<div className="input-wrap">
					<Input importState="none" labelText="홈페이지 URL" placeholder="홈페이지 URL을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>
				
				<CheckBox state="default" size="small" label="개인정보 수집 및 이용에 동의합니다."/>
		
				<div className="btn-wrap flex_">
					<ButtonL text="초기화"/>
					<Button text="저장"/>
				</div>
		</div>
	</div>
	)
};

export default Component;