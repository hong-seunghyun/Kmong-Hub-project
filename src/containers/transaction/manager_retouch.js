import React from "react";
import ButtonL from "/src/components/buttons/button_outline_l"
import Button from "/src/components/buttons/button_primary_l"
import ButtonSub from "/src/components/buttons/button_secondary_l"
import Badge from "/src/components/label/badge"
import Input from "/src/components/textFields/textInput.tsx"
import DatePicker from "/src/components/date/date-picker-single"
import CheckBox from "/src/components/radio/checkbox"

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="transaction-container company_retouch">
				<h1 className="title display-5-B">담당자 등록/수정</h1>

				<div className="sub-title body-2-B flex_">
					<Badge value="1"/>
					기본정보
				</div>

				<div className="input-wrap flex-wrap">
					<div className="flex_">
						<Input importState="" labelText="업체명" placeholder="업체명" valueType="" helperTextResult="none" iconState="false"/>
						<ButtonSub text="선택" />
					</div>
				</div>

				<div className="input-wrap">
					<Input labelText="담당자 이름" placeholder="담당자명" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<Input labelText="휴대폰 번호" placeholder="01012345678" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<Input importState="none" labelText="사무실 전화번호" placeholder="0212345678" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<Input importState="none" labelText="직책" placeholder="직책명" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<Input importState="none" labelText="부서명" placeholder="부서명" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<Input importState="none" labelText="이메일" placeholder="kotech@kotech.co.kr" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<Input importState="none" labelText="팩스 번호" placeholder="12345678" valueType="" helperTextResult="none" iconState="false"/>
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