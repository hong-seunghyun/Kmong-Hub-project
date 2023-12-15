import React from "react";
import Link from "next/link"
import ButtonM from "/src/components/buttons/button_primary_m";
import SearchBox from "/src/components/searchBar/search_bar_email_history"
import DropDownMenu from "/src/components/dropsMenu/drops_email_history_menu";
import TableHead from "/src/components/table/transaction_list_table_head_02";
import TableCell from "/src/components/table/transaction_list_table_cell_02";
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
						headDate="등록일"
						headEtc="관리"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						label="콘텐츠명"
						labelBg="bg-violet-5"
						labelColor="txt-violet-1"
						writer="요청자명"
						date="YYYY.MM.DD"
						link="/transaction/transaction_info"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						label="콘텐츠명"
						labelBg="bg-violet-5"
						labelColor="txt-violet-1"
						writer="요청자명"
						date="YYYY.MM.DD"
						link="/transaction/transaction_info"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						label="콘텐츠명"
						labelBg="bg-violet-5"
						labelColor="txt-violet-1"
						writer="요청자명"
						date="YYYY.MM.DD"
						link="/transaction/transaction_info"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						label="콘텐츠명"
						labelBg="bg-violet-5"
						labelColor="txt-violet-1"
						writer="요청자명"
						date="YYYY.MM.DD"
						link="/transaction/transaction_info"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						label="콘텐츠명"
						labelBg="bg-violet-5"
						labelColor="txt-violet-1"
						writer="요청자명"
						date="YYYY.MM.DD"
						link="/transaction/transaction_info"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						label="콘텐츠명"
						labelBg="bg-violet-5"
						labelColor="txt-violet-1"
						writer="요청자명"
						date="YYYY.MM.DD"
						link="/transaction/transaction_info"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						label="콘텐츠명"
						labelBg="bg-violet-5"
						labelColor="txt-violet-1"
						writer="요청자명"
						date="YYYY.MM.DD"
						link="/transaction/transaction_info"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						label="콘텐츠명"
						labelBg="bg-violet-5"
						labelColor="txt-violet-1"
						writer="요청자명"
						date="YYYY.MM.DD"
						link="/transaction/transaction_info"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						label="콘텐츠명"
						labelBg="bg-violet-5"
						labelColor="txt-violet-1"
						writer="요청자명"
						date="YYYY.MM.DD"
						link="/transaction/transaction_info"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						label="콘텐츠명"
						labelBg="bg-violet-5"
						labelColor="txt-violet-1"
						writer="요청자명"
						date="YYYY.MM.DD"
						link="/transaction/transaction_info"
					/>

					<Pagnation size="regular"/>
				</div>
			</div>
		)
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="transaction-container transaction-">
					<div className="head-wrap flex_">
						<h1 className="display-5-B">
							거래 관리
						</h1>
						<Link href="/transaction/transaction_add">
							<ButtonM text="거래 등록" />
						</Link>
					</div>
					<Tab active={1}/>
					<TabContents />
				</div>
			</div>
		</div>
	)
}
export default Component;