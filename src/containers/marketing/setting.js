import React, { useState } from "react";
import Link from "next/link"
import SearchBox from "/src/components/searchBar/search_bar_email_history"
import DropDownMenu from "/src/components/dropsMenu/drops_email_history_menu";
import TableHead from "/src/components/table/email_history_table_vertical_head"
import TableCell from "/src/components/table/email_history_table_vertical_cell"
import Pagnation from "/src/components/pagnation/pagnation";
import Icon from "/src/components/icon/icon.tsx"
import ButtonPrimary from "/src/components/buttons/button_primary_s"
import Tab from "/src/components/tabs/marketing_setting_tab"
import Badge from "/src/components/label/badge";


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
					<h2 className="heading-2-B">
						서류 제출 방법
					</h2>
					<p className="body-3-R txt-second-default">
						마케팅 관리 탭에 접속하시려면 하기 서류를 제출해 주세요.
					</p>
				</div>

				<div className="content- radius-20 bg-lightGray">
					<div className="sub-title body-2-B flex_ txt-second-default">
						<Badge value="1"/>
							필요 서류
					</div>
					<div className="content-text">
						<p className="body-3-R txt-second-default flex_">
							<Icon icon="checkNone" size={7} color="#574AFF" stroke="none" />
							발신번호
						</p>
						<p className="body-3-R txt-second-default flex_">
							<Icon icon="checkNone" size={7} color="#574AFF" stroke="none" />
							이름(법인명)
						</p>
						<p className="body-3-R txt-second-default flex_">
							<Icon icon="checkNone" size={7} color="#574AFF" stroke="none" />
							사업자등록증
						</p>
						<p className="body-3-R txt-second-default flex_">
							<Icon icon="checkNone" size={7} color="#574AFF" stroke="none" />
							휴대폰번호 및 유선번호와 통신서비스 이용증명원 <span className="txt-violet-1">(발급한지 1개월 이내)</span>
						</p>
						<p className="body-3-R txt-second-default flex_">
							<Icon icon="checkNone" size={7} color="#574AFF" stroke="none" />
							SENS 대리 등록 위임장
						</p>
						<p className="body-3-R txt-second-default flex_">
							<Icon icon="checkNone" size={7} color="#574AFF" stroke="none" />
							SENS 위임장 템플릿.docx
						</p>
						<p className="body-3-R txt-second-default flex_">
							<Icon icon="checkNone" size={7} color="#574AFF" stroke="none" />
							법인인감 (발급한지 3개월 이내)
						</p>
						<p className="body-3-R txt-third flex_ ps-txt">
							<span className="dot" />
							서류 제출 시, 개인정보보호를 위해 주민등록번호 등의 개인정보가 포함된 부분은 마스킹 처리해 주세요.
						</p>
					</div>
				</div>

				<div className="content- radius-20 bg-lightGray">
					<div className="sub-title body-2-B flex_ txt-second-default">
						<Badge value="2"/>
							서류 제출 방법
					</div>
					<div className="content-text">
						<p className="body-3-R txt-second-default flex_">
							필요 서류를 첨부하여 <span className="txt-violet-1 underline-"> jee-yk@kotechmarket.com </span> 로 이메일을 발송해 주세요.
						</p>
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
				<div className="marketing-contents markerting-setting">
					<h1 className="display-5-B flex_">
						마케팅 설정
					</h1>
					<Tab active={0}/>
					<TabContents />
				</div>
			</div>
		</div>
	)
}
export default Component;