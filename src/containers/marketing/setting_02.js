import React, { useState } from "react";
import Link from "next/link"
import TableHead from "/src/components/table/table_vertical_head";
import TableCell from "/src/components/table/technology_table_vertical_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Icon from "/src/components/icon/icon.tsx"
import ButtonPrimary from "/src/components/buttons/button_primary_s"
import ButtonM from "/src/components/buttons/button_primary_m";
import Tab from "/src/components/tabs/marketing_setting_tab"
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import Badge from "/src/components/label/badge";


const Component = () => {

	const TabContents = () => {
		return(
			<div className="sub-page-0">
				<div className="transaction-01">
					<div>
						<div className="flex_ search-wrap">
							<DropDownMenu />
							<SearchBar />
						</div>

						<div className="table-container">
							<TableHead
								headChoice="번호"
								headCategory="카테고리"
								headTitle="기술명"
								headWriter="연구원"
								headDate="등록연도"
								headEtc="관리"
							/>
							<TableCell 
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="이메일"
								choice="number"
								number="1"
								title="kotech@kotech.co.kr"
								date="YYYY.MM.DD HH:MM:SS"
							/>
							<TableCell 
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="이메일"
								choice="number"
								number="1"
								title="kotech@kotech.co.kr"
								date="YYYY.MM.DD HH:MM:SS"
							/>
							<TableCell 
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="이메일"
								choice="number"
								number="1"
								title="kotech@kotech.co.kr"
								date="YYYY.MM.DD HH:MM:SS"
							/>
							<TableCell 
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="이메일"
								choice="number"
								number="1"
								title="kotech@kotech.co.kr"
								date="YYYY.MM.DD HH:MM:SS"
							/>
							<TableCell 
								labelBg="bg-mint-1"
								labelColor="txt-white"
								label="연락처"
								choice="number"
								number="1"
								title="kotech@kotech.co.kr"
								date="YYYY.MM.DD HH:MM:SS"
							/>
							<TableCell 
								labelBg="bg-mint-1"
								labelColor="txt-white"
								label="연락처"
								choice="number"
								number="1"
								title="kotech@kotech.co.kr"
								date="YYYY.MM.DD HH:MM:SS"
							/>
							<TableCell 
								labelBg="bg-mint-1"
								labelColor="txt-white"
								label="연락처"
								choice="number"
								number="1"
								title="kotech@kotech.co.kr"
								date="YYYY.MM.DD HH:MM:SS"
							/>
							<TableCell 
								labelBg="bg-mint-1"
								labelColor="txt-white"
								label="연락처"
								choice="number"
								number="1"
								title="kotech@kotech.co.kr"
								date="YYYY.MM.DD HH:MM:SS"
							/>
							<TableCell 
								labelBg="bg-mint-1"
								labelColor="txt-white"
								label="연락처"
								choice="number"
								number="1"
								title="kotech@kotech.co.kr"
								date="YYYY.MM.DD HH:MM:SS"
							/>
							<TableCell 
								labelBg="bg-mint-1"
								labelColor="txt-white"
								label="연락처"
								choice="number"
								number="1"
								title="kotech@kotech.co.kr"
								date="YYYY.MM.DD HH:MM:SS"
							/>
							
							<Pagnation size="regular"/>
						</div>
					</div>
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
					<Tab active={1}/>
					<TabContents />
				</div>
			</div>
		</div>
	)
}
export default Component;