// HDS 관리자 Navigation Side Component 2023

import React, {useState, useEffect} from 'react';
import Icon from "components/icon/icon.tsx";
import 'scss/public.scss';
import 'scss/style.scss';

const MenuList = [
	{
		id: 1,
		mainNav : '홈',
		hrefLink : '/',
		icon: () => (
			<Icon size={16} color="none" stroke="inherit" icon="home" />
		),
		subNavList:[{}]
	},
	{
		id: 2,
		mainNav : '사이트 설정',
		hrefLink : '/',
		icon: () => (
			<Icon size={17} color="none" stroke="inherit" icon="setting" />
		),
		subNavList:[{}]
	},
	{
		id: 3,
		mainNav : '콘텐츠 관리',
		hrefLink : '/',
		icon: () => (
			<Icon size={16} color="inherit" stroke="none" icon="content" />
		),
	},
	{
		id: 4,
		mainNav : '기술문서 관리',
		hrefLink : '/',
		icon: () => (
			<Icon size={17} color="none" stroke="inherit" icon="document" />
		),
	},
	{
		id: 5,
		mainNav : '연구자 관리',
		hrefLink : '/',
		icon: () => (
			<Icon size={15} color="inherit" stroke="none" icon="researcher" />

		),
	},
	{
		id: 6,
		mainNav : '회원 관리',
		hrefLink : '/',
		icon: () => (
			<Icon size={15} color="none" stroke="inherit" icon="member" />

		),
	},
	{
		id: 7,
		mainNav : '거래 관리',
		hrefLink : '/',
		icon: () => (
			<Icon size={12} color="inherit" stroke="none" icon="transaction" />

		),
	},
	{
		id: 8,
		mainNav : '게시판 관리',
		hrefLink : '/',
		icon: () => (
			<Icon size={16} color="inherit" stroke="none" icon="board" />

		),
	},
	{
		id: 9,
		mainNav : '디자인 관리',
		hrefLink : '/',
		icon: () => (
			<Icon size={15} color="none" stroke="inherit" icon="design" />

		),
	},
	{
		id: 10,
		mainNav : '마케팅 관리',
		hrefLink : '/',
		icon: () => (
			<Icon size={14} color="inherit" stroke="none" icon="marketing" />

		),
	},
	{
		id: 11,
		mainNav : '문의 관리',
		hrefLink : '/',
		icon: () => (
			<Icon size={15} color="none" stroke="inherit" icon="question" />

		),
	},
	{
		id: 12,
		mainNav : '마이페이지 관리',
		hrefLink : '/',
		icon: () => (
			<Icon size={13} color="none" stroke="inherit" icon="mypage" />
		),
	},
	{
		id: 13,
		mainNav : '통계 관리',
		hrefLink : '/',
		icon: () => (
			<Icon size={15} color="none" stroke="inherit" icon="statistic" />

		),
	},
]

const Component = () => {


	return(
		<div className="sidebar-wrap">
			<ul>
			{MenuList.map((item, index)=> (
					<li className="radius-8" key={index}>
						<div className="flex_ nav-box ac-white" >
							<span className="flex_">
								{item.icon()}
								<p>{item.mainNav}</p>
							</span>
							<span className="icon-arrow">
								<Icon size={9} color="inherit" stroke="none" icon="chevronRight" />
							</span>
						</div>
						<div className="sub-nav-box bg-gray-8">
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
export default Component;