import React from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/member_list_table_head";
import TableCell from "/src/components/table/member_list_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";
import PrimaryBtn from "/src/components/buttons/button_primary_l"
import OutlineBtn from "/src/components/buttons/button_outline_l"

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="contents-  operator_list">

					<div className="head-wrap flex_">
						<h1 className="display-5-B">
							운영자 선택
						</h1>
					</div>

					<div>
						<div className="flex_ search-wrap">
							<DropDownMenu />
							<SearchBar />
						</div>

						<div className="table-container">
							<TableHead
								headChoice="선택"
								headTitle="이름"
								headEmail="이메일"
								headDate="소속"
								headAccess="최근 접속일"
								headEtc="관리"
							/>
							<TableCell 
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="한국기술HUB"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/technology/operator_detail"
							/>
							<TableCell 
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="한국기술HUB"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/technology/operator_detail"
							/>
							<TableCell 
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="한국기술HUB"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/technology/operator_detail"
							/>
							<TableCell 
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="한국기술HUB"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/technology/operator_detail"
							/>
							<TableCell 
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="한국기술HUB"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/technology/operator_detail"
							/>
							<TableCell 
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="한국기술HUB"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/technology/operator_detail"
							/>
							<TableCell 
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="한국기술HUB"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/technology/operator_detail"
							/>
							<TableCell 
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="한국기술HUB"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/technology/operator_detail"
							/>
							<TableCell 
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="한국기술HUB"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/technology/operator_detail"
							/>
							<TableCell 
								title="[이름]"
								email="kotech@kotech.co.kr"
								date="한국기술HUB"
								access="YYYY.MM.DD HH:MM:SS"
								listLink="/technology/operator_detail"
							/>
							<div className="flex_ table-bottom-box">
								<Link href="/technology/retouch">
									<OutlineBtn text="이전으로" state="default"/>
								</Link>
								<Pagnation size="regular"/>
								<Link href="/technology/retouch">
									<PrimaryBtn text="선택완료" state="default"/>
								</Link>
							</div>
						</div>
					</div>
				</div>
				
			</div>
	)
};

export default Component;