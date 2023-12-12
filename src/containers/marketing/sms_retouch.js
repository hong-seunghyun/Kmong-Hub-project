import React from "react"
import Link from "next/link"
import Icon from "/src/components/icon/icon.tsx"
import Badge from "/src/components/label/badge"
import Input from "/src/components/textFields/textInput.tsx"
import TextArea from "/src/components/textFields/textArea.tsx"
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
						<Input labelText="제목" placeholder="제목명" valueType="" helperTextResult="none" iconState="false"/>
					</div>

					<div className="input-wrap">
						<p className="table-caption body-2-B">내용<span className="txt-violet-1">*</span></p>
						<TextArea labelText="" placeholder="법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다. 헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차, 내부규율과 사무처리에 관한 규칙을 제정할 수 있다. 각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나 무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다." valueType="" helperTextResult="none"/>
						<p className="caption-R helper-txt">
						한글 70자, 영문 160자 이상 넘어갈 경우, MMS 처리가 되어 SMS 발송 횟수가 2배로 차감돼요.
						</p>
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

					<div className="flex_ input-wrap button-input">
						<Input importState="" labelText="발송 대상" placeholder="발송 대상을 선택해 주세요." valueType="" helperTextResult="none" iconState="false"/>
						<Link href="/marketing/send_list">
							<ButtonSecondary text="선택" state="defalut"/>
						</Link>
					</div>

					<div className="send-list flex_ radius-8">
						<div className="flex_">
							<span className="send-category txt-violet-1 caption-B">
								회원
							</span>
							<span className="send-name body-3-B">
								[남예준]
							</span>
							<span className="send-address caption-R flex_">
								<span>[서울대학교]</span>
								<span className="bar"></span>
								<span className="email">[kotech@kotech.co.kr]</span>
							</span>
						</div>
						<Icon icon="cancel" size={8} color="#242424" stroke="none" />
					</div>

					<div className="send-list flex_ radius-8">
						<div className="flex_">
							<span className="send-category txt-violet-1 caption-B">
								회원
							</span>
							<span className="send-name body-3-B">
								[남예준]
							</span>
							<span className="send-address caption-R flex_">
								<span>[서울대학교]</span>
								<span className="bar"></span>
								<span className="email">[kotech@kotech.co.kr]</span>
							</span>
						</div>
						<Icon icon="cancel" size={8} color="#242424" stroke="none" />
					</div>

					<div className="send-list flex_ radius-8">
						<div className="flex_">
							<span className="send-category txt-violet-1 caption-B">
								회원
							</span>
							<span className="send-name body-3-B">
								[남예준]
							</span>
							<span className="send-address caption-R flex_">
								<span>[서울대학교]</span>
								<span className="bar"></span>
								<span className="email">[kotech@kotech.co.kr]</span>
							</span>
						</div>
						<Icon icon="cancel" size={8} color="#242424" stroke="none" />
					</div>

					<div className="send-list flex_ radius-8">
						<div className="flex_">
							<span className="send-category txt-violet-1 caption-B">
								회원
							</span>
							<span className="send-name body-3-B">
								[남예준]
							</span>
							<span className="send-address caption-R flex_">
								<span>[서울대학교]</span>
								<span className="bar"></span>
								<span className="email">[kotech@kotech.co.kr]</span>
							</span>
						</div>
						<Icon icon="cancel" size={8} color="#242424" stroke="none" />
					</div>

					<div className="send-list flex_ radius-8">
						<div className="flex_">
							<span className="send-category txt-violet-1 caption-B">
								회원
							</span>
							<span className="send-name body-3-B">
								[남예준]
							</span>
							<span className="send-address caption-R flex_">
								<span>[서울대학교]</span>
								<span className="bar"></span>
								<span className="email">[kotech@kotech.co.kr]</span>
							</span>
						</div>
						<Icon icon="cancel" size={8} color="#242424" stroke="none" />
					</div>

					<div className="send-list flex_ radius-8">
						<div className="flex_">
							<span className="send-category txt-mint-1 caption-B">
								담당자
							</span>
							<span className="send-name body-3-B">
								[남예준]
							</span>
							<span className="send-address caption-R flex_">
								<span>[서울대학교]</span>
								<span className="bar"></span>
								<span className="email">[kotech@kotech.co.kr]</span>
							</span>
						</div>
						<Icon icon="cancel" size={8} color="#242424" stroke="none" />
					</div>

					<div className="send-list flex_ radius-8">
						<div className="flex_">
							<span className="send-category txt-mint-1 caption-B">
								담당자
							</span>
							<span className="send-name body-3-B">
								[남예준]
							</span>
							<span className="send-address caption-R flex_">
								<span>[서울대학교]</span>
								<span className="bar"></span>
								<span className="email">[kotech@kotech.co.kr]</span>
							</span>
						</div>
						<Icon icon="cancel" size={8} color="#242424" stroke="none" />
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
				<div className="marketing-contents email-retouch">
					<h1 className="display-5-B flex_">
						SMS 발송 등록/수정
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
					<div className="button-wrap flex_">
						<OutlineBtn text="초기화" state="disabled"/>
						<Link href="/marketing/send_list">
							<PrimaryBtn text="수정" state="default"/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Component;