import React, { useState } from "react";
import Tab from "/src/components/tabs/mypage_tab_fixed";
import Input from "/src/components/textFields/textInput.tsx";
import PasswordInput from "/src/components/textFields/passwordInput.tsx";
import Checkbox from "/src/components/radio/checkbox";
import Upload from "/src/components/upload/upload"
import OutlineBtn from "/src/components/buttons/button_outline_l"
import ButtonSecondary from "/src/components/buttons/button_secondary_l"
import PrimaryBtn from "/src/components/buttons/button_primary_l"
import ButtonCta from "/src/components/buttons/button_cta"
import Icon from "/src/components/icon/icon.tsx";

const Component = () => {

	const AccordionMenu = [
		{
			index: 0,
			title: "한국기술HUB는 어떤 서비스를 제공하나요?",
			content: "케한국기술HUB는 AI 기반의 기술 중개 플랫폼을 제공합니다. 기술 이전, 행사, 뉴스, 지원사업 등 다양한 콘텐츠 업로드와 관리를 지원하며, 기술이전 요청이 들어오면 상담부터 미팅, 계약, 그리고 사후관리에 이르는 모든 과정을 체계적으로 관리할 수 있는 기능을 제공합니다.",

		},
		{
			index: 1,
			title: "어떤 방식으로 콘텐츠를 업로드하나요?",
			content: "사용자가 업로드하려는 기술 문서를 선택하면, AI가 해당 문서를 분석하여 콘텐츠를 생성합니다. 생성된 콘텐츠는 사용자가 검토 및 수정한 후, 웹사이트에 업로드할 수 있습니다. 이러한 과정을 통해, 기술 정보를 쉽고 효율적으로 공유할 수 있습니다.",

		},
		{
			index: 2,
			title: "기술 문서 이외의 콘텐츠도 업로드 가능한가요?",
			content: "네, 가능합니다. 행사, 뉴스, 지원사업 등 다양한 종류의 콘텐츠 업로드를 지원하고 있습니다. 각각의 콘텐츠 형식에 맞게 AI가 최적화된 콘텐츠를 생성하여 업로드할 수 있습니다.",

		},
		{
			index: 3,
			title: "디자인 커스터마이징은 가능한가요?",
			content: "네, 가능합니다. 한국기술HUB는 사용자 맞춤형 디자인을 제공하며, 이를 위해 다양한 스킨을 선택하거나, 필요에 따라 한국기술HUB 개발팀과 협업하여 개별적인 디자인을 제작할 수 있습니다.",

		},
		{
			index: 4,
			title: "한국기술HUB는 어떤 보안 체계를 가지고 있나요?",
			content: "한국기술HUB는 AWS(Amazon Web Services)를 이용하여 서비스를 제공하고 있습니다. AWS는 강력한 보안 체계와 국제적인 인증을 받은 데이터 센터를 가지고 있어, 사용자 데이터의 안전성을 보장합니다. 추가로, 저희는 자체적인 보안 프로토콜을 갖추고 있습니다. 정기적인 보안 감사를 통해 시스템의 취약점을 찾아내고, 이를 보완하는 과정을 거치고 있습니다. 또한, 개인정보 보호와 데이터 누출 등의 위협으로부터 서비스를 보호하기 위해 다양한 보안 기술과 방법을 활용하고 있습니다. 이렇게 하여, 사용자 분들이 안심하고 저희 서비스를 이용하실 수 있습니다.",

		},
	];

	const Accordion = ({ title, content, index }) => {
		const [activeIndex, setActiveIndex] = useState(-1);

		const handleAccordionClick = (index) => {
			setActiveIndex(index === activeIndex ? -1 : index);
		};

		const isActive = index === activeIndex;
	
		return (
			<div className="content-wrap">
				<span className={`flex_ ${isActive? "active" : ""}`} onClick={() => handleAccordionClick(index)}>
					<h3 className="body-2-B flex_">
						<span className="body-2-B txt-violet-1">Q</span>
						{title}
					</h3>
					<span className="flex_">
						<Icon icon="chevronDown" size={9} color="#757779" stroke="" />
					</span>
				</span>
				{isActive && <p className="accordion-content body-3-R txt-third">{content}</p>}
			</div>
		);
	};

	const TabContents = () => {
		return(
			<div className="sub-page-0">
				<div className="title-box">
					<h3 className="heading-2-B">지금 나의 요금제는?</h3>
					<ul className="date-list body-3-R txt-second-default">
						<li className="choice radius-8">기간 없이 업그레이드</li>
						<li className="radius-8">6개월</li>
						<li className="radius-8">12개월</li>
					</ul>
				</div>

				<ul className="rate-plan-list">
					<li className="rate-plan choice">
						<div className="badge-count caption-B">
							만료까지 N일!
						</div>
						<h4 className="body-2-B">
							FREE
						</h4>
						<h3 className="heading-1-B">
							무료
						</h3>
						<p className="body-3-R">
							한국기술HUB 회원에게 <br />
							기본 기능 무료 제공
						</p>
						<ButtonCta text="이용 중" state="disabled"/>

						<ul className="content-list">
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
									AI 콘텐츠 생성 
									<b>5</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
									뉴스레터 발송
									<b>10</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								이메일 발송  
									<b>10</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
									sms 발송  
									<b>10</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								전자계약 발송  
									<b>5</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								웹사이트 용량
									<b>300</b>GB
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								트래픽 제한
									<b>1</b>GB
								</p>
							</li>
						</ul>
					</li>

					<li className="rate-plan">
						<h4 className="body-2-B">
							BASIC
						</h4>
						<h3 className="heading-1-B">
							1천만 원
						</h3>
						<p className="body-3-R">
							중소규모 중개 활동에 <br />
							적합한 패키지
						</p>
						<ButtonCta text="업그레이드" state="default" />

						<ul className="content-list">
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
									AI 콘텐츠 생성 
									<b>30</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
									뉴스레터 발송
									<b>1,000</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								이메일 발송  
									<b>1,000</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
									sms 발송  
									<b>1,000</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								전자계약 발송  
									<b>50</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								웹사이트 용량
									<b>10</b>GB
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								트래픽 제한
									<b>10</b>GB
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								도메인 설정
									<b>사용 가능</b>
								</p>
							</li>
						</ul>
					</li>

					<li className="rate-plan">
						<h4 className="body-2-B">
							PREMIUM
						</h4>
						<h3 className="heading-1-B">
							2천만 원
						</h3>
						<p className="body-3-R">
						대규모 중개에 필요한 <br />
						확장 기능 포함
						</p>
						<ButtonCta text="업그레이드" state="default" />

						<ul className="content-list">
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
									AI 콘텐츠 생성 
									<b>50</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
									뉴스레터 발송
									<b>3,000</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								이메일 발송  
									<b>3,000</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
									sms 발송  
									<b>3,000</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								전자계약 발송  
									<b>100</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								웹사이트 용량
									<b>100</b>GB
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								트래픽 제한
									<b>100</b>GB
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								도메인 설정
									<b>사용 가능</b>
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								AI 챗봇 설정
									<b>사용 가능</b>
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								운영자 관리
									<b>사용 가능</b>
								</p>
							</li>
						</ul>
					</li>

					<li className="rate-plan">
						<h4 className="body-2-B">
							BUSINESS
						</h4>
						<h3 className="heading-1-B">
							3천만 원
						</h3>
						<p className="body-3-R">
						협회 및 단체 회원을 위한<br />
						최적화된 서비스
						</p>
						<ButtonCta text="업그레이드" state="default" />

						<ul className="content-list">
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
									AI 콘텐츠 생성 
									<b>100</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
									뉴스레터 발송
									<b>10,000</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								이메일 발송  
									<b>10,000</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
									sms 발송  
									<b>10,000</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								전자계약 발송  
									<b>500</b>건
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								웹사이트 용량
									<b>1</b>TB
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								트래픽 제한
									<b>500</b>GB
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								도메인 설정
									<b>사용 가능</b>
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								AI 챗봇 설정
									<b>사용 가능</b>
								</p>
							</li>
							<li>
								<Icon icon="checkNone" size={7} fill="" stroke="" />
								<p className="body-3-R">
								운영자 관리
									<b>사용 가능</b>
								</p>
							</li>
						</ul>
					</li>
				</ul>

				<div className="check-list-box">
					<h3 className="heading-2-B">결제 전 확인사항</h3>
					<div className="flex_">

						<div>
							<p className="body-2-B txt-second-default title_">
								<Icon icon="inform" size={12} color="#574AFF" stroke="none" />
								결제 취소 및 환불
							</p>
							<p className="body-3-R txt-third text_">
								한국기술HUB의 유료 서비스는 디지털 콘텐츠의 특성상, 한 번 결제하면 취소가 어려워요. 그러니 결제하기 전에 신중하게 고려해주세요. (더 자세한 내용은 아래의 이용약관을 참조해주세요.) 이용 약관 제14조 (결제 취소 및 환불), 제15조 (환불 절차), 제16조 (과오금의 환불), 제 23조(유료 서비스)을 참조해 주세요.
							</p>
						</div>

						<div>
							<p className="body-2-B txt-second-default title_">
							<Icon icon="inform" size={12} color="#574AFF" stroke="none" />
							업그레이드 비용
							</p>
							<p className="body-3-R txt-third text_">
							업그레이드 비용은 새로운 요금제의 가격에서 기존 요금제의 남은 기간 동안의 가치를 차감한 금액이에요. 예를 들어, 6개월 기간 동안 Basic 요금제를 사용하고 있던 사용자가 2개월 후에 Premium 요금제로 업그레이드하는 경우, 업그레이드 비용은 새로운 요금제의 가격에서 기존 요금제의 남은 4개월 동안의 가치를 차감한 금액이에요.
							</p>
						</div>

						<div>
							<p className="body-2-B txt-second-default title_">
							<Icon icon="inform" size={12} color="#574AFF" stroke="none" />
								업그레이드 시점
							</p>
							<p className="body-3-R txt-third text_">
							업그레이드는 각 사용자의 기간 비율에 따라 가격이 조정돼요. 업그레이드 후 요금제는 기존 요금제 남은 기간과 동일하게 설정돼요.
							</p>
						</div>

						<div>
							<p className="body-2-B txt-second-default title_">
							<Icon icon="inform" size={12} color="#574AFF" stroke="none" />
								다운그레이드 정책
							</p>
							<p className="body-3-R txt-third text_">
							현재 다운그레이드는 지원하지 않으며, 계정 업그레이드 후 다운그레이드를 원하는 사용자는 기존 계정을 취소하고, 새로운 계정으로 등록해야해요. 다운그레이드는 계약 기간이 끝난 후에만 가능해요.
							</p>
						</div>

						<div className="full-box">
							<p className="body-2-B txt-second-default title_">
							<Icon icon="inform" size={12} color="#574AFF" stroke="none" />
								꼭 읽어주세요!
							</p>
							<p className="body-3-R txt-third text_">
							각 요금제의 '1일'은 24시간, '1주일'은 7일, '1개월'은 30일, '3개월'은 90일, 그리고 '1년'은 365일로 계산돼요.<br />
							사용자는 아이디와 비밀번호를 다른 사람과 공유할 수 없어요. 또한, 동일한 아이디로 동시에 로그인하는 것은 지원하지 않아요. 견적서와 사업자등록증 사본은 '결제하기' 버튼을 클릭한 후 '결제정보' 화면에서 바로 다운로드 받을 수 있어요. <br />
							회원가입 후 1년간 유료서비스 결제가 없거나, 유료 서비스 이용 후 1년간 요금제 추가 결제가 없는 경우, 사이트가 비활성화될 수 있으며 이는 서비스 이용에 불이익을 초래할 수 있어요.							
							</p>
						</div>

					</div>
				</div>

				<div className="faq-box">
					<h3 className="heading-2-B">자주 묻는 질문</h3>
					{AccordionMenu.map((item, index) => (
						<Accordion
							key={index}
							title={item.title}
							content={item.content}
							index={index}
						/>
					))}
				</div>

			</div>
		)
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="mypage-contents mypage-payment">
					<h1 className="display-5-B">마이페이지</h1>
					<Tab active={1}/>
					<TabContents />
				</div>
			</div>
		</div>
	)
}
export default Component;