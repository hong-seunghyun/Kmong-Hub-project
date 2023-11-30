import React from "react"
import Link from "next/link"
import Icon from "/src/components/icon/icon.tsx"
import Badge from "/src/components/label/badge"
import Input from "/src/components/textFields/textInput.tsx"
import Editor from "/src/components/editorBox/index"
import DatePickerTime from "/src/components/date/date-picker-single-time"
import Radio from "/src/components/radio/radio"
import OutlineBtn from "/src/components/buttons/button_outline_l"
import ButtonSecondary from "/src/components/buttons/button_secondary_l"
import PrimaryBtn from "/src/components/buttons/button_primary_l"

const Component = () => {

	const TabContents = () => {
		return(
			<div className="sub-page-wrap">
				<div className="sub-page-01">
					<div className="sub-title body-2-B flex_">
						<Badge value="1"/>
							기본 정보
					</div>

					<div className="input-wrap">
						<Input labelText="제목" placeholder="제목을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
					</div>

					<div className="input-wrap">
						<Editor />
					</div>
				</div>
				<div className="sub-page-02">
					<div className="sub-title body-2-B flex_">
						<Badge value="2"/>
							발송 정보
					</div>
					<div className="input-wrap">
						<Input labelText="발신자 정보" placeholder="kotech@kotech.co.kr" valueType="" helperTextResult="none" iconState="false"/>
					</div>
					<div className="input-wrap">
						<p className="table-caption body-2-B">예약 전송 여부<span className="txt-violet-1">*</span></p>
						<div className="flex_ radio-flex">
							<Radio label="예" id="radio-a" name="radio-1" />
							<Radio label="아니오" id="radio-b" name="radio-1" />
						</div>
						<DatePickerTime />
					</div>

					<div className="input-wrap">
						<p className="table-caption body-2-B">발송 선택<span className="txt-violet-1">*</span></p>
						<div className="flex_ radio-flex">
							<Radio label="회원 전체 발송" id="radio-a" name="radio-1" />
							<Radio label="담당자 전체 발송" id="radio-b" name="radio-1" />
							<Radio label="선택 발송" id="radio-c" name="radio-1" />
						</div>
					</div>

					<div className="input-wrap">
						<Input labelText="발신자 정보" placeholder="kotech@kotech.co.kr" valueType="" helperTextResult="none" iconState="false"/>
					</div>

					<div className="flex_ input-wrap button-input">
						<Input importState="" labelText="발송 대상" placeholder="발송 대상을 선택해 주세요." valueType="" helperTextResult="none" iconState="false"/>
						<ButtonSecondary text="선택" state="defalut"/>
					</div>

					<div className="full-box">
						<p className="body-2-B txt-second-default title_">
						<Icon icon="inform" size={12} color="#574AFF" stroke="none" />
							광고성 메일 전송 시 주의사항
						</p>
						<p className="body-3-R txt-third text_">
							광고성 메일은 사전동의 받은 이에게만 광고 발송이 가능하며 수신 동의 분쟁 발생시 입증책임 광고성 정보 전송자에게 있어요. <br />
							&nbsp;&nbsp;1. 제목 앞에 (광고)문구를 표기해 주세요. <br />
							&nbsp;&nbsp;2. 본문에 수신자가 수신거부 또는 수신동의 철회 안내문과 전송자의 명칭, 전자우편 주소, 전화번호, 주소 등 정보를 표기해 주세요.
						</p>
					</div>
					
				</div>
			</div>
		)
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="marketing-contents email-writer news-retouch">
					<h1 className="display-5-B flex_">
						뉴스레터 발송 등록/수정
						<div className="flex_ body-3-R txt-second-default bg-violet-6">
							<span className="flex_">
								<Icon icon="mail" size={9} color="#574AFF" stroke="none" />
								남은 발송 횟수
							</span>
							<span className="flex_">
								<span className="txt-violet-1 body-3-B">
									5000
								</span>
								/
								<span className="txt-primary body-3-B total-cnt">
									7000
								</span>
							</span>
						</div>
					</h1>
					<TabContents />
					<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="/marketing/news_detail">
								<OutlineBtn text="이전으로" />
							</Link>
						</div>
						<div className="flex_">
							<Link href="#">
								<OutlineBtn text="초기화" state="default"/>
							</Link>
							<Link href="/marketing/#">
								<PrimaryBtn text="뉴스레터 발송" state="disabled"/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Component;