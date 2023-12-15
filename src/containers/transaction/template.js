import React from "react";
import Link from "next/link"
import ButtonM from "/src/components/buttons/button_primary_m";
import SearchBox from "/src/components/searchBar/search_bar_email_history"
import DropDownMenu from "/src/components/dropsMenu/drops_email_history_menu";
import TableHead from "/src/components/table/template_table_vertical_head"
import TableCell from "/src/components/table/template_table_vertical_cell"
import Pagnation from "/src/components/pagnation/pagnation";
import Icon from "/src/components/icon/icon.tsx"
import ButtonPrimary from "/src/components/buttons/button_primary_s"
import Tab from "/src/components/tabs/template_tab"


const Component = () => {

	const TabContents = () => {
		return(
			<div className="sub-page-0">
				<div className="flex_ search-box">
					<SearchBox />
				</div>

				<div className="table-container">
					<TableHead 
						headChoice="번호"
						headTitle="이름"
						headDateFrom="생성 시각"
						headDateTo="최종 수정일"
						headEtc="관리"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="템플릿 이름"
						dateFrom="YYYY.MM.DD HH:MM"
						dateTo="YYYY.MM.DD HH:MM"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="템플릿 이름"
						dateFrom="YYYY.MM.DD HH:MM"
						dateTo="YYYY.MM.DD HH:MM"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="템플릿 이름"
						dateFrom="YYYY.MM.DD HH:MM"
						dateTo="YYYY.MM.DD HH:MM"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="템플릿 이름"
						dateFrom="YYYY.MM.DD HH:MM"
						dateTo="YYYY.MM.DD HH:MM"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="템플릿 이름"
						dateFrom="YYYY.MM.DD HH:MM"
						dateTo="YYYY.MM.DD HH:MM"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="템플릿 이름"
						dateFrom="YYYY.MM.DD HH:MM"
						dateTo="YYYY.MM.DD HH:MM"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="템플릿 이름"
						dateFrom="YYYY.MM.DD HH:MM"
						dateTo="YYYY.MM.DD HH:MM"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="템플릿 이름"
						dateFrom="YYYY.MM.DD HH:MM"
						dateTo="YYYY.MM.DD HH:MM"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="템플릿 이름"
						dateFrom="YYYY.MM.DD HH:MM"
						dateTo="YYYY.MM.DD HH:MM"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="템플릿 이름"
						dateFrom="YYYY.MM.DD HH:MM"
						dateTo="YYYY.MM.DD HH:MM"
					/>
					<Pagnation size="regular"/>
				</div>
			</div>
		)
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="marketing-contents email-history news-history transaction-container transaction-template">
					<h1 className="display-5-B flex_">
						템플릿 관리
						<Link href="#">
							<ButtonM text="템플릿 등록" />
						</Link>
					</h1>
					<Tab active={0}/>
					<TabContents />
				</div>
			</div>
		</div>
	)
}
export default Component;