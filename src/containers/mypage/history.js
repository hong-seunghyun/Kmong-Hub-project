import React, { useState } from "react";
import Tab from "/src/components/tabs/mypage_tab_fixed";
import DatePicker from "/src/components/date/date-picker"
import SearchBox from "/src/components/searchBar/search_bar_mypage_history"
import TableHead from "/src/components/table/table_vertical_head"
import TableCell from "/src/components/table/table_vertical_cell"
import Pagnation from "/src/components/pagnation/pagnation";
const Component = () => {

	const TabContents = () => {
		return(
			<div className="sub-page-0">
				<div className="flex_ search-box">
					<DatePicker />
					<SearchBox />
				</div>
				<div className="table-container">
					<TableHead 
						headChoice="번호"
						headCategory="결제 플랜"
						headTitle="결제금액"
						headDate="결제 일자"
						headEtc="관리"
					/>
					<TableCell 
						labelBg="bg-purple-1"
						labelColor="txt-white"
						label="FREE"
						number="1"
						title="100,000원"
						date="YYYY.MM.DD HH:MM:SS"
						link="/mypage/detail"
						choice="number"
					/>
					<TableCell 
						labelBg="bg-purple-1"
						labelColor="txt-white"
						label="FREE"
						number="1"
						title="100,000원"
						date="YYYY.MM.DD HH:MM:SS"
						link="/mypage/detail"
						choice="number"
					/>
					<TableCell 
						labelBg="bg-purple-1"
						labelColor="txt-white"
						label="FREE"
						number="1"
						title="100,000원"
						date="YYYY.MM.DD HH:MM:SS"
						link="/mypage/detail"
						choice="number"
					/>
					<TableCell 
						labelBg="bg-pink-1"
						labelColor="txt-white"
						label="BASIC"
						number="1"
						title="300,000원"
						date="YYYY.MM.DD HH:MM:SS"
						link="/mypage/detail"
						choice="number"
					/>
					<TableCell 
						labelBg="bg-pink-1"
						labelColor="txt-white"
						label="BASIC"
						number="1"
						title="300,000원"
						date="YYYY.MM.DD HH:MM:SS"
						link="/mypage/detail"
						choice="number"
					/>
					<TableCell 
						labelBg="bg-mint-1"
						labelColor="txt-white"
						label="PREMIUM"
						number="1"
						title="500,000원"
						date="YYYY.MM.DD HH:MM:SS"
						link="/mypage/detail"
						choice="number"
					/>
					<TableCell 
						labelBg="bg-mint-1"
						labelColor="txt-white"
						label="PREMIUM"
						number="1"
						title="500,000원"
						date="YYYY.MM.DD HH:MM:SS"
						link="/mypage/detail"
						choice="number"
					/>
					<TableCell 
						labelBg="bg-mint-1"
						labelColor="txt-white"
						label="PREMIUM"
						number="1"
						title="500,000원"
						date="YYYY.MM.DD HH:MM:SS"
						link="/mypage/detail"
						choice="number"
					/>
					<TableCell 
						labelBg="bg-gold-1"
						labelColor="txt-white"
						label="BUSINESS"
						number="1"
						title="800,000원"
						date="YYYY.MM.DD HH:MM:SS"
						link="/mypage/detail"
						choice="number"
					/>
					<TableCell 
						labelBg="bg-gold-1"
						labelColor="txt-white"
						label="BUSINESS"
						number="1"
						title="800,000원"
						date="YYYY.MM.DD HH:MM:SS"
						link="/mypage/detail"
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
				<div className="mypage-contents mypage-history">
					<h1 className="display-5-B">마이페이지</h1>
					<Tab active={2}/>
					<TabContents />
				</div>
			</div>
		</div>
	)
}
export default Component;