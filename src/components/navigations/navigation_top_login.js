import React,{useState} from "react";
import Icon from "/src/components/icon/icon.tsx";
import ButtonPrimaryM from "/src/components/buttons/button_primary_m";
import ButtonSecondaryS from "/src/components/buttons/button_secondary_s";
import Link from "next/link";
import Label from "/src/components/label/label";
import ButtonLine from "/src/components/buttons/text_button_underline_primary_s";

const SUB_MENU_LIST_CONTENT = [
  {
    name: <Link href={`/contents`}>콘텐츠 설정</Link>,
    id: 0,
    state: "false",
  },
  {
    name: <Link href={`/technology`}>기술 이전 관리</Link>,
    id: 1,
    state: "false",
  },
  {
    name: <Link href={`/news`}>뉴스 관리</Link>,
    id: 2,
    state: "false",
  },
  {
    name: <Link href={`/event`}>행사 관리</Link>,
    id: 3,
    state: "false",
  },
  {
    name: <Link href={`/support`}>지원사업 관리</Link>,
    id: 4,
    state: "false",
  },
];

const SUB_MENU_LIST_MEMBER = [
  {
    name: <Link href={`/member`}>회원 관리</Link>,
    href: "/",
  },
  {
    name: <Link href={`/member/inactive_member`}>휴먼 회원 관리</Link>,
    href: "/",
  },
  {
    name: <Link href={`/member/accessdeny_freemember`}>운영자 관리</Link>,
    href: "/",
  },
];

const SUB_MENU_LIST_TRANSACTION = [
  {
    name: <Link href={`/transaction`}>업체 관리</Link>,
    href: "/",
  },
  {
    name: <Link href={`/transaction/manager_list`}>담당자 관리</Link>,
    href: "/",
  },
  {
    name: <Link href={`/transaction/transaction`}>거래 관리</Link>,
    href: "/",
  },
  {
    name: <Link href={`/transaction/template`}>템플릿 관리</Link>,
    href: "/",
  },
];

const SUB_MENU_LIST_DESIGN = [
  {
    name: <Link href={`/design`}>디자인 보관함</Link>,
    href: "/",
  },
  {
    name: <Link href={`/design/popup_list`}>팝업 관리</Link>,
    href: "/",
  },
  {
    name: <Link href={`/design/banner_list`}>배너 관리</Link>,
    href: "/",
  },
];

const SUB_MENU_LIST_MARKETING = [
  {
    name: <Link href={`/marketing`}>이메일 발송 관리</Link>,
    href: "/",
  },
  {
    name: <Link href={`/marketing/news`}>뉴스레터 발송 관리</Link>,
    href: "/",
  },
  {
    name: <Link href={`/marketing/sms`}>SMS 발송 관리</Link>,
    href: "/",
  },
  {
    name: <Link href={`/marketing/setting`}>마케팅 설정</Link>,
    href: "/",
  },
];

const SUB_MENU_LIST_QUESTION = [
  {
    name: <Link href={`/inquiry/technology`}>기술이전 문의 관리</Link>,
    href: "/",
  },
  {
    name: <Link href={`/inquiry/event`}>행사 문의 관리</Link>,
    href: "/",
  },
  {
    name: <Link href={`/inquiry/news`}>뉴스 문의 관리</Link>,
    href: "/",
  },
  {
    name: <Link href={`/inquiry/support`}>지원사업 문의 관리</Link>,
    href: "/",
  },
];

const SUB_MENU_LIST_RESEARCHER = [
  {
    name: <Link href={`/researcher`}>연구자 정보</Link>,
    href: "/",
  },
  {
    name: <Link href={`/researcher/company`}>소속 관리</Link>,
    href: "/",
  },
];


const Component = (props) => {
	const [ isOpen, setMenu ] = useState(false);
	const [isContentMenu, setContentMenu] = useState(false);
  const [isContentMember, setContentMember] = useState(false);
  const [isContentTransaction, setContentTransaction] = useState(false);
  const [isContentDesign, setContentDesign] = useState(false);
  const [isContentMarketing, setContentMarketing] = useState(false);
  const [isContentQuestion, setContentQuestion] = useState(false);
  const [isContentResearcher, setContentResearcher] = useState(false);

	const toggleMenu = () => {
		setMenu(isOpen => !isOpen);
	}

	const navigationNumberResult = () => {
    if (props.navigationNumber === 0 || props.navigationNumber === 1) {
      setContentMenu(true);
      const resultNumber = props.navigationNumber;
      SUB_MENU_LIST_CONTENT[resultNumber] = {
        ...SUB_MENU_LIST_CONTENT[resultNumber],
        state: "true",
      };
    }
    return;
  };

	const onMenuContent = () => {
    if(!isContentMenu){
			setContentMenu(true)
		}else{
			setContentMenu(false)
		}
  };
	const onMenuMember = () => {
    if(!isContentMember){
			setContentMember(true)
		}else{
			setContentMember(false)
		}
  };
	const onMenuTransaction = () => {
    if(!isContentTransaction){
			setContentTransaction(true)
		}else{
			setContentTransaction(false)
		}
  };
	const onMenuDesign = () => {
    if(!isContentDesign){
			setContentDesign(true)
		}else{
			setContentDesign(false)
		}
  };
	const onMenuMarketing = () => {
    if(!isContentMarketing){
			setContentMarketing(true)
		}else{
			setContentMarketing(false)
		}
  };
	const onMenuQuestion = () => {
    if(!isContentQuestion){
			setContentQuestion(true)
		}else{
			setContentQuestion(false)
		}
  };

	const onMenuResearcher = () => {
    if(!isContentResearcher){
			setContentResearcher(true)
		}else{
			setContentResearcher(false)
		}
  };

	return(
		<div className="header-" >

			<div className="header-container flex_ pc-header">
				<Link href={`/`}><img src="/images/logo.png" alt="logo" /></Link>
				<div className="header-content flex_">
					<div className="icon-wrap flex_">
						<Icon size={24} icon="bell" color="none" stroke="#464749" />
					</div>
					<div className="user-wrap flex_ body-3-R">
						<img src="/images/user_icon_s.png" alt="logo" />
						<p>test@naver.com</p>
					</div>
					<Link href="/" className="logout-btn caption-R">
						로그아웃
					</Link>
					<div className="link-btn">
						<ButtonSecondaryS text="사이트 이동"/>
					</div>
				</div>
			</div>

			<div className="m-header header-container flex_">
				<div className="menu-box" onClick={()=>toggleMenu()}>
					<Icon icon="menu" size={20} color="none" stroke="#464749" />
				</div>
				<div className="logo-box">
					<Link href={`/`}><img src="/images/logo.png" alt="logo" /></Link>
				</div>
				<div className="icon-wrap flex_">
					<Icon size={24} icon="bell" color="none" stroke="#464749" />
				</div>
			</div>


			<div className={`sidebar-wrap ${isOpen ? "show-menu" : "hide-menu"}`}>
				<div className="m-sidebar-wrap">
					<h6 className="heading-2-B">
						[회원이름]님,<br/>
						안녕하세요!
					</h6>
					<div className="flex_ plan-wrap bg-lightGray radius-8 border-gray-3">
						<span className="flex_">
							<Label
                backgroundColor="bg-violet-1"
                fontColor="txt-white"
                text="BASIC"
                icon="false"
                iconColor=""
              />
							<p className="body-3-R">N개월</p>
						</span>
						<ButtonLine text="용량 업그레이드" />
					</div>
					<ButtonPrimaryM text="사이트 바로가기"/>
				</div>
				<ul>
					<li className="radius-8">
						<Link href={`/home`} className="flex_ nav-box ac-white">
							<span className="flex_">
								<Icon size={16} color="none" stroke="inherit" icon="home" />
								<p>홈</p>
							</span>
							<span className="icon-arrow">
								<Icon
									size={9}
									color="inherit"
									stroke="none"
									icon="chevronRight"
								/>
							</span>
						</Link>
					</li>
					<li className="radius-8">
						<Link className="flex_ nav-box ac-white" href={`/settings/settings`}>
							<span className="flex_">
								<Icon size={17} color="none" stroke="inherit" icon="setting" />
								<p>사이트 설정</p>
							</span>
							<span className="icon-arrow">
								<Icon
									size={9}
									color="inherit"
									stroke="none"
									icon="chevronRight"
								/>
							</span>
						</Link>
					</li>
					<li className={`radius-8 list-wrap ${isContentMenu ? "show" : ""}`}>
						<div
							className="flex_ nav-box ac-white "
							onClick={() => onMenuContent()}
						>
							<span className="flex_">
								<Icon size={16} color="inherit" stroke="none" icon="content" />
								<p>콘텐츠 관리</p>
							</span>
							<span className="icon-arrow">
								<Icon
									size={9}
									color="inherit"
									stroke="none"
									icon="chevronRight"
								/>
							</span>
						</div>
						<div className="sub-nav-box bg-gray-8">
							{SUB_MENU_LIST_CONTENT.map((item, index) => (
								<p key={index} className={item.state}>
									{item.name}
								</p>
							))}
						</div>
					</li>
					<li className="radius-8 ">
						<Link className="flex_ nav-box ac-white" href={`/technical_document`}>
							<span className="flex_">
								<Icon size={17} color="none" stroke="inherit" icon="document" />
								<p>기술문서 관리</p>
							</span>
							<span className="icon-arrow">
								<Icon
									size={9}
									color="inherit"
									stroke="none"
									icon="chevronRight"
								/>
							</span>
						</Link>
					</li>
					<li
						className={`radius-8 list-wrap ${isContentResearcher ? "show" : ""}`}
					>
						<div
							className="flex_ nav-box ac-white"
							onClick={() => onMenuResearcher()}
						>
							<span className="flex_">
								<Icon size={15} color="none" stroke="inherit" icon="member" />
								<p>연구자 관리</p>
							</span>
							<span className="icon-arrow">
								<Icon
									size={9}
									color="inherit"
									stroke="none"
									icon="chevronRight"
								/>
							</span>
						</div>
						<div className="sub-nav-box bg-gray-8">
							{SUB_MENU_LIST_RESEARCHER.map((item, index) => (
								<p key={index}>{item.name}</p>
							))}
						</div>
					</li>
					<li className={`radius-8 list-wrap ${isContentMember ? "show" : ""}`}>
						<div
							className="flex_ nav-box ac-white"
							onClick={() => onMenuMember()}
						>
							<span className="flex_">
								<Icon size={15} color="none" stroke="inherit" icon="member" />
								<p>회원 관리</p>
							</span>
							<span className="icon-arrow">
								<Icon
									size={9}
									color="inherit"
									stroke="none"
									icon="chevronRight"
								/>
							</span>
						</div>
						<div className="sub-nav-box bg-gray-8">
							{SUB_MENU_LIST_MEMBER.map((item, index) => (
								<p key={index}>{item.name}</p>
							))}
						</div>
					</li>
					<li
						className={`radius-8 list-wrap ${isContentTransaction ? "show" : ""}`}
					>
						<div
							className="flex_ nav-box ac-white"
							onClick={() => onMenuTransaction()}
						>
							<span className="flex_">
								<Icon
									size={12}
									color="inherit"
									stroke="none"
									icon="transaction"
								/>
								<p>거래 관리</p>
							</span>
							<span className="icon-arrow">
								<Icon
									size={9}
									color="inherit"
									stroke="none"
									icon="chevronRight"
								/>
							</span>
						</div>
						<div className="sub-nav-box bg-gray-8">
							{SUB_MENU_LIST_TRANSACTION.map((item, index) => (
								<p key={index}>{item.name}</p>
							))}
						</div>
					</li>
					<li className="radius-8">
						<Link className="flex_ nav-box ac-white" href={`/board`}>
							<span className="flex_">
								<Icon size={16} color="inherit" stroke="none" icon="board" />
								<p>게시판 관리</p>
							</span>
							<span className="icon-arrow">
								<Icon
									size={9}
									color="inherit"
									stroke="none"
									icon="chevronRight"
								/>
							</span>
						</Link>
					</li>
					<li
						className={`radius-8 list-wrap ${isContentDesign ? "show" : ""}`}
						onClick={() => onMenuDesign()}
					>
						<div className="flex_ nav-box ac-white">
							<span className="flex_">
								<Icon size={15} color="none" stroke="inherit" icon="design" />
								<p>디자인 관리</p>
							</span>
							<span className="icon-arrow">
								<Icon
									size={9}
									color="inherit"
									stroke="none"
									icon="chevronRight"
								/>
							</span>
						</div>
						<div className="sub-nav-box bg-gray-8">
							{SUB_MENU_LIST_DESIGN.map((item, index) => (
								<p key={index}>{item.name}</p>
							))}
						</div>
					</li>
					<li
						className={`radius-8 list-wrap ${isContentMarketing ? "show" : ""}`}
						onClick={() => onMenuMarketing()}
					>
						<div className="flex_ nav-box ac-white">
							<span className="flex_">
								<Icon size={14} color="inherit" stroke="none" icon="marketing" />
								<p>마케팅 관리</p>
							</span>
							<span className="icon-arrow">
								<Icon
									size={9}
									color="inherit"
									stroke="none"
									icon="chevronRight"
								/>
							</span>
						</div>
						<div className="sub-nav-box bg-gray-8">
							{SUB_MENU_LIST_MARKETING.map((item, index) => (
								<p key={index}>{item.name}</p>
							))}
						</div>
					</li>
					<li
						className={`radius-8 list-wrap ${isContentQuestion ? "show" : ""}`}
						onClick={() => onMenuQuestion()}
					>
						<div className="flex_ nav-box ac-white">
							<span className="flex_">
								<Icon size={15} color="none" stroke="inherit" icon="question" />
								<p>문의 관리</p>
							</span>
							<span className="icon-arrow">
								<Icon
									size={9}
									color="inherit"
									stroke="none"
									icon="chevronRight"
								/>
							</span>
						</div>
						<div className="sub-nav-box bg-gray-8">
							{SUB_MENU_LIST_QUESTION.map((item, index) => (
								<p key={index}>{item.name}</p>
							))}
						</div>
					</li>
					<li className="radius-8">
						<Link className="flex_ nav-box ac-white" href={`/mypage`}>
							<span className="flex_">
								<Icon size={13} color="none" stroke="inherit" icon="mypage" />
								<p>마이페이지 관리</p>
							</span>
							<span className="icon-arrow">
								<Icon
									size={9}
									color="inherit"
									stroke="none"
									icon="chevronRight"
								/>
							</span>
						</Link>
					</li>
					<li className="radius-8">
						<Link className="flex_ nav-box ac-white" href={`/summing`}>
							<span className="flex_">
								<Icon size={15} color="none" stroke="inherit" icon="statistic" />
								<p>통계 관리</p>
							</span>
							<span className="icon-arrow">
								<Icon
									size={9}
									color="inherit"
									stroke="none"
									icon="chevronRight"
								/>
							</span>
						</Link>
					</li>
				</ul>
				<div className="m-logout-btn txt-second-default">
					<Link href="/" className="logout-btn caption-R">
						로그아웃
					</Link>
				</div>
			</div>

		</div>
	)
}
export default Component;