import React, {useState} from 'react';
import Icon from "components/icon/icon.tsx";
import Link from 'next/link';

const SUB_MENU_LIST_CONTENT = [
	{
		name:'콘텐츠 설정',
		href:'/'
	},
	{
		name:'기술 이전 관리',
		href:'/'
	},
	{
		name:'뉴스 관리',
		href:'/'
	},
	{
		name:'행사 관리',
		href:'/'
	},
	{
		name:'지원사업 관리',
		href:'/'
	}
];

const SUB_MENU_LIST_MEMBER = [
	{
		name:'회원 관리',
		href:'/'
	},
	{
		name:'휴먼 회원 관리',
		href:'/'
	},
	{
		name:'운영자 관리',
		href:'/'
	}
];

const SUB_MENU_LIST_TRANSACTION = [
	{
		name:'업체 관리',
		href:'/'
	},
	{
		name:'담당자 관리',
		href:'/'
	},
	{
		name:'거래 관리',
		href:'/'
	}
];

const SUB_MENU_LIST_DESIGN = [
	{
		name:'디자인 보관함',
		href:'/'
	},
	{
		name:'팝업 관리',
		href:'/'
	},
	{
		name:'배너 관리',
		href:'/'
	}
];

const SUB_MENU_LIST_MARKETING = [
	{
		name:'이메일 발송 관리',
		href:'/'
	},
	{
		name:'뉴스레터 발송 관리',
		href:'/'
	},
	{
		name:'SMS 발송 관리',
		href:'/'
	},{
		name:'마케팅 설정',
		href:'/'
	}
];

const SUB_MENU_LIST_QUESTION = [
	{
		name:'기술이전 문의 관리',
		href:'/'
	},
	{
		name:'행사 문의 관리',
		href:'/'
	},
	{
		name:'뉴스 문의 관리',
		href:'/'
	},{
		name:'지원사업 문의 관리',
		href:'/'
	}
];

const Component = () => {
	const [ isContentMenu, setContentMenu ] = useState(false);
	const [ isContentMember, setContentMember ] = useState(false);
	const [ isContentTransaction, setContentTransaction ] = useState(false);
	const [ isContentDesign, setContentDesign ] = useState(false);
	const [ isContentMarketing, setContentMarketing ] = useState(false);
	const [ isContentQuestion, setContentQuestion ] = useState(false);

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

	return(
		<div className="sidebar-wrap">
			<ul>
				<li className="radius-8" >
					<div className="flex_ nav-box ac-white" >
						<span className="flex_">
							<Icon size={16} color="none" stroke="inherit" icon="home" />
							<p><Link href={`/home`}>홈</Link></p>
						</span>
						<span className="icon-arrow">
							<Icon size={9} color="inherit" stroke="none" icon="chevronRight" />
						</span>
					</div>
				</li>
				<li className="radius-8" >
					<div className="flex_ nav-box ac-white" >
						<span className="flex_">
							<Icon size={17} color="none" stroke="inherit" icon="setting" />
							<p>
									<Link href={`/settings/settings`}>사이트 설정</Link>
							</p>
						</span>
						<span className="icon-arrow">
							<Icon size={9} color="inherit" stroke="none" icon="chevronRight" />
						</span>
					</div>
				</li>
				<li className={`radius-8 list-wrap ${isContentMenu ? 'show' : ''}`} >
					<div className="flex_ nav-box ac-white " onClick={() => onMenuContent()}>
						<span className="flex_">
							<Icon size={16} color="inherit" stroke="none" icon="content"  />
							<p>콘텐츠 관리</p>
						</span>
						<span className="icon-arrow">
							<Icon size={9} color="inherit" stroke="none" icon="chevronRight" />
						</span>
					</div>
					<div className="sub-nav-box bg-gray-8">
						{SUB_MENU_LIST_CONTENT.map((item, index)=> (
							<p key={index}>{item.name}</p>
						))}
					</div>
				</li>
				<li className="radius-8 " >
					<div className="flex_ nav-box ac-white" >
						<span className="flex_">
							<Icon size={17} color="none" stroke="inherit" icon="document" />
							<p>기술문서 관리</p>
						</span>
						<span className="icon-arrow">
							<Icon size={9} color="inherit" stroke="none" icon="chevronRight" />
						</span>
					</div>
				</li>
				<li className="radius-8" >
					<div className="flex_ nav-box ac-white" >
						<span className="flex_">
							<Icon size={15} color="inherit" stroke="none" icon="researcher" />
							<p>연구자 관리</p>
						</span>
						<span className="icon-arrow">
							<Icon size={9} color="inherit" stroke="none" icon="chevronRight" />
						</span>
					</div>
				</li>
				<li className={`radius-8 list-wrap ${isContentMember ? 'show' : ''}`} >
					<div className="flex_ nav-box ac-white" onClick={() => onMenuMember()}>
						<span className="flex_">
							<Icon size={15} color="none" stroke="inherit" icon="member" />
							<p>회원 관리</p>
						</span>
						<span className="icon-arrow">
							<Icon size={9} color="inherit" stroke="none" icon="chevronRight" />
						</span>
					</div>
					<div className="sub-nav-box bg-gray-8">
						{SUB_MENU_LIST_MEMBER.map((item, index)=> (
							<p key={index}>{item.name}</p>
						))}
					</div>
				</li>
				<li className={`radius-8 list-wrap ${isContentTransaction ? 'show' : ''}`} >
					<div className="flex_ nav-box ac-white" onClick={() => onMenuTransaction()} >
						<span className="flex_">
							<Icon size={12} color="inherit" stroke="none" icon="transaction" />
							<p>거래 관리</p>
						</span>
						<span className="icon-arrow">
							<Icon size={9} color="inherit" stroke="none" icon="chevronRight" />
						</span>
					</div>
					<div className="sub-nav-box bg-gray-8">
						{SUB_MENU_LIST_TRANSACTION.map((item, index)=> (
							<p key={index}>{item.name}</p>
						))}
					</div>
				</li>
				<li className="radius-8" >
					<div className="flex_ nav-box ac-white" >
						<span className="flex_">
							<Icon size={16} color="inherit" stroke="none" icon="board" />
							<p>게시판 관리</p>
						</span>
						<span className="icon-arrow">
							<Icon size={9} color="inherit" stroke="none" icon="chevronRight" />
						</span>
					</div>
				</li>
				<li className={`radius-8 list-wrap ${isContentDesign ? 'show' : ''}`} onClick={() => onMenuDesign()}>
					<div className="flex_ nav-box ac-white" >
						<span className="flex_">
							<Icon size={15} color="none" stroke="inherit" icon="design" />
							<p>디자인 관리</p>
						</span>
						<span className="icon-arrow">
							<Icon size={9} color="inherit" stroke="none" icon="chevronRight" />
						</span>
					</div>
					<div className="sub-nav-box bg-gray-8">
						{SUB_MENU_LIST_DESIGN.map((item, index)=> (
							<p key={index}>{item.name}</p>
						))}
					</div>
				</li>
				<li className={`radius-8 list-wrap ${isContentMarketing ? 'show' : ''}`} onClick={() => onMenuMarketing()}>
					<div className="flex_ nav-box ac-white" >
						<span className="flex_">
							<Icon size={14} color="inherit" stroke="none" icon="marketing" />
							<p>마케팅 관리</p>
						</span>
						<span className="icon-arrow">
							<Icon size={9} color="inherit" stroke="none" icon="chevronRight" />
						</span>
					</div>
					<div className="sub-nav-box bg-gray-8">
						{SUB_MENU_LIST_MARKETING.map((item, index)=> (
							<p key={index}>{item.name}</p>
						))}
					</div>
				</li>
				<li className={`radius-8 list-wrap ${isContentQuestion ? 'show' : ''}`} onClick={() => onMenuQuestion()}>
					<div className="flex_ nav-box ac-white" >
						<span className="flex_">
							<Icon size={15} color="none" stroke="inherit" icon="question" />
							<p>문의 관리</p>
						</span>
						<span className="icon-arrow">
							<Icon size={9} color="inherit" stroke="none" icon="chevronRight" />
						</span>
					</div>
					<div className="sub-nav-box bg-gray-8">
						{SUB_MENU_LIST_QUESTION.map((item, index)=> (
							<p key={index}>{item.name}</p>
						))}
					</div>
				</li>
				<li className="radius-8" >
					<div className="flex_ nav-box ac-white" >
						<span className="flex_">
							<Icon size={13} color="none" stroke="inherit" icon="mypage" />
							<p>마이페이지 관리</p>
						</span>
						<span className="icon-arrow">
							<Icon size={9} color="inherit" stroke="none" icon="chevronRight" />
						</span>
					</div>
				</li>
				<li className="radius-8" >
					<div className="flex_ nav-box ac-white" >
						<span className="flex_">
							<Icon size={15} color="none" stroke="inherit" icon="statistic" />
							<p>통계 관리</p>
						</span>
						<span className="icon-arrow">
							<Icon size={9} color="inherit" stroke="none" icon="chevronRight" />
						</span>
					</div>
				</li>
			</ul>
		</div>
	)
}
export default Component;