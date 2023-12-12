import React from "react";
import Link from "next/link"
import SearchBox from "/src/components/searchBar/search_bar_email_history"
import DropDownMenu from "/src/components/dropsMenu/drops_email_history_menu";
import TableHead from "/src/components/table/manager_list_table_head";
import TableCell from "/src/components/table/manager_list_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Icon from "/src/components/icon/icon.tsx"
import ButtonPrimary from "/src/components/buttons/button_primary_s"
import Tab from "/src/components/tabs/transaction_tab"


const Component = () => {

	const TabContents = () => {
		return(
			<div className="sub-page-0">
				<div className="flex_ search-box">
					<DropDownMenu />
					<SearchBox />
				</div>

				<div className="table-container">
					<TableHead 
						headChoice="번호"
                        headTitle="제목"
                        headState="거래 관련 기술"
                        headWriter="요청자"
                        headDate="최종 수정일"
                        headEtc="관리"
					/>
                    <TableCell 
                        choice="number"
                        number="1"
                        title="[담당자명]"
                        state="000-0000-0000"
                        writer="[업체명]"
                        date="YYYY.MM.DD"
                        link="/transaction/manager_info"
                    />
					<TableCell 
						labelBg="bg-violet-5"
						labelColor="txt-violet-1"
						label="발송 완료"
						number="1"
						title="[이름]"
						date="YYYY.MM.DD HH:MM:SS"
						link="/marketing/news_detail"
						choice="number"
					/>
					<Pagnation size="regular"/>
				</div>
			</div>
		)
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="marketing-contents email-history news-history transaction-">
					<h1 className="display-5-B flex_">
						거래 관리
					</h1>
					<Tab active={1}/>
					<TabContents />
				</div>
			</div>
		</div>
	)
}
export default Component;