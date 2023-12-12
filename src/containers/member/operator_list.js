import React from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/member_list_table_head";
import TableCell from "/src/components/table/member_list_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="member- ">

			<div className="head-wrap flex_">
						<h1 className="display-5-B">
							운영자 관리
						</h1>
						<Link href="/member/operator_add">
							<ButtonM text="운영자 등록" />
						</Link>
					</div>

					<div>
						<div className="flex_ search-wrap">
							<DropDownMenu />
							<SearchBar />
						</div>

						<div className="table-container">
							<TableHead
								headChoice="번호"
								headTitle="이름"
								headEmail="이메일"
								headDate="가입일"
								headAccess="최근 접속일"
								headEtc="관리"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="YYYY.MM.DD"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/member/operator_detail"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="YYYY.MM.DD"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/member/operator_detail"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="YYYY.MM.DD"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/member/operator_detail"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="YYYY.MM.DD"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/member/operator_detail"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="YYYY.MM.DD"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/member/operator_detail"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="YYYY.MM.DD"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/member/operator_detail"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="YYYY.MM.DD"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/member/operator_detail"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="YYYY.MM.DD"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/member/operator_detail"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="YYYY.MM.DD"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/member/operator_detail"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="YYYY.MM.DD"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/member/operator_detail"
							/>
							<Pagnation size="regular"/>
						</div>
					</div>
				</div>
				
			</div>
	)
};

export default Component;