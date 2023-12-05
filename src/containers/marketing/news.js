import React from "react";
import Link from "next/link"
import SearchBox from "/src/components/searchBar/search_bar_email_history"
import DropDownMenu from "/src/components/dropsMenu/drops_email_history_menu";
import TableHead from "/src/components/table/email_history_table_vertical_head"
import TableCell from "/src/components/table/email_history_table_vertical_cell"
import Pagnation from "/src/components/pagnation/pagnation";
import Icon from "/src/components/icon/icon.tsx"
import ButtonPrimary from "/src/components/buttons/button_primary_s"
import Tab from "/src/components/tabs/news_tab_fixed"


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
						headTitle="결제금액"
						headCategory="상태"
						headDate="발송 시간"
						headEtc="관리"
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
					<TableCell 
						labelBg="bg-violet-1"
						labelColor="txt-white"
						label="발송 예정"
						number="1"
						title="[이름]"
						date="YYYY.MM.DD HH:MM:SS"
						link="/marketing/news_detail"
						choice="number"
					/>
					<TableCell 
						labelBg="bg-violet-1"
						labelColor="txt-white"
						label="발송 예정"
						number="1"
						title="[이름]"
						date="YYYY.MM.DD HH:MM:SS"
						link="/marketing/news_detail"
						choice="number"
					/>
					<TableCell 
						labelBg="bg-violet-1"
						labelColor="txt-white"
						label="발송 예정"
						number="1"
						title="[이름]"
						date="YYYY.MM.DD HH:MM:SS"
						link="/marketing/news_detail"
						choice="number"
					/>
					<TableCell 
						labelBg="bg-wrong-red-hover"
						labelColor="txt-white"
						label="발송 실패"
						number="1"
						title="[이름]"
						date="YYYY.MM.DD HH:MM:SS"
						link="/marketing/news_detail"
						choice="number"
					/>
					<TableCell 
						labelBg="bg-wrong-red-hover"
						labelColor="txt-white"
						label="발송 실패"
						number="1"
						title="[이름]"
						date="YYYY.MM.DD HH:MM:SS"
						link="/marketing/news_detail"
						choice="number"
					/>
					<TableCell 
						labelBg="bg-wrong-red-hover"
						labelColor="txt-white"
						label="발송 실패"
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
				<div className="marketing-contents email-history news-history">
					<h1 className="display-5-B flex_">
						뉴스레터 발송 관리
						<div className="flex_ body-3-R txt-second-default bg-violet-6">
							<span className="flex_">
								<Icon icon="mail" size={9} color="#574AFF" stroke="none" />
								남은 발송 횟수
							</span>
							<span className="flex_">
								<span className="txt-red body-3-B">
									0
								</span>
								/
								<span className="txt-primary body-3-B total-cnt">
									7000
								</span>
							</span>
							<Link href="/marketing/news_writer">
								<ButtonPrimary text="등록" />
							</Link>
						</div>
					</h1>
					<Tab active={1}/>
					<TabContents />
				</div>
			</div>
		</div>
	)
}
export default Component;