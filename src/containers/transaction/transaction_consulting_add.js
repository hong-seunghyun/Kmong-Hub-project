import React from "react";
import TextButton from "/src/components/buttons/text_button_underline_primary_s"
import ButtonL from "/src/components/buttons/button_outline_l"
import DropDownMenu from "/src/components/dropsMenu/drops_email_history_menu";
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Tabs from "/src/components/tabs/transaction_info_tab"
import Label from "/src/components/label/label";
import Badge from "/src/components/label/badge"
import Input from "/src/components/textFields/textInput.tsx"
import TextArea from "/src/components/textFields/textArea.tsx"
import SelectLabel from "/src/components/label/select_label";
import ButtonSecondary from "/src/components/buttons/button_secondary_l"
import DatePicker from "/src/components/date/date-picker-single"
import Radio from "/src/components/radio/radio"

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="transaction-container company_info company_retouch transaction-info transaction-consulting">
				<h1 className="title display-5-B">거래 등록/수정</h1>

				<div className="sub-title body-2-B flex_">
					<Badge value="1"/>
					상태
				</div>

				<div className="input-wrap">
					<p className="table-caption body-2-B">상태</p>
					<DropDownMenu />
				</div>
				
				<div className="sub-title body-2-B flex_ m-48">
					<Badge value="2"/>
					기본 정보
				</div>

				<div className="input-wrap">
					<p className="table-caption body-2-B">상담 일자</p>
					<DatePicker />
				</div>

				<div className="input-wrap">
					<Input labelText="제목" placeholder="대표자명" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="radio-flex input-wrap">
					<p className="table-caption body-2-B">상담 일자<span className="txt-violet-1">*</span></p>
					<div className="flex_">
						<Radio label="전화" state="disabled" name="radio-a" id="radio-a-1"/>
						<Radio label="이메일" state="disabled" name="radio-a" id="radio-a-2"/>
						<Radio label="사이트" state="disabled" name="radio-a" id="radio-a-3"/>
						<Radio label="온라인 미팅" state="disabled" name="radio-a" id="radio-a-4"/>
						<Radio label="오프라인 미팅" state="disabled" name="radio-a" id="radio-a-4"/>
						<Radio label="기타" state="disabled" name="radio-a" id="radio-a-4"/>
					</div>
				</div>

				<div className="sub-title body-2-B flex_ m-48">
					<Badge value="3"/>
					상담 내용
				</div>

				<div className="flex_ input-wrap button-input">
					<Input labelText="상담 요청자" placeholder="상담 요청자를 선택해 주세요." valueType="" helperTextResult="none" iconState="false"/>
					<Link href="#">
							<ButtonSecondary text="선택" state="defalut"/>
						</Link>
				</div>

				<div className="input-wrap">
					<Input labelText="문의 대상" placeholder="문의 대상을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<TextArea labelText="내용" placeholder="공무원의 직무상 불법행위로 손해를 받은 국민은 법률이 정하는 바에 의하여 국가 또는 공공단체에 정당한 배상을 청구할 수 있다. 이 경우 공무원 자신의 책임은 면제되지 아니한다." valueType="" helperTextResult="none"/>
				</div>


			<div className="btn-wrap flex_">
				<div className="flex_">
				</div>
				<div className="flex_">
						<Link href="#">
							<ButtonErrorL text="초기화" />
						</Link>
						<Link href="#">
							<Button text="저장" />
						</Link>
					</div>
			</div>
		</div>
	</div>
	)
};

export default Component;