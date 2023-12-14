import React from "react";
import TextButton from "/src/components/buttons/text_button_underline_primary_s"
import ButtonL from "/src/components/buttons/button_outline_l"
import DropDownMenu from "/src/components/dropsMenu/drops_email_history_menu";
import SearchBox from "/src/components/searchBar/search_bar_email_history"
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Tabs from "/src/components/tabs/transaction_info_tab"
import TableHead from "/src/components/table/transaction_consulting_table_head";
import TableCell from "/src/components/table/transaction_consulting_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import ButtonM from "/src/components/buttons/button_primary_m";
import Label from "/src/components/label/label";

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="transaction-container company_info transaction-info transaction-consulting">
				<div className="head-wrap flex_">
					<h1 className="display-5-B">
						거래 제목명
					</h1>
					<Link href="/transaction/transaction_consulting_add">
						<ButtonM text="상담 등록" />
					</Link>
				</div>

				<Tabs active={1} />

				<div className="flex_ search-box">
					<DropDownMenu />
					<SearchBox />
				</div>

				<div className="table-container">
					<TableHead 
						headChoice="번호"
						headTitle="제목"
						headWriter="상담 요청자"
						headConsulting="상담자"
						headState="상태"
						headDate="등록일"
						headEtc="관리"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						writer="요청자명"
						consulting="운영자명"
						label="진행중"
						labelBg="bg-violet-1"
						labelColor="txt-white"
						date="YYYY.MM.DD"
						link="/transaction/transaction_consulting_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						writer="요청자명"
						consulting="운영자명"
						label="진행중"
						labelBg="bg-violet-1"
						labelColor="txt-white"
						date="YYYY.MM.DD"
						link="/transaction/transaction_consulting_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						writer="요청자명"
						consulting="운영자명"
						label="완료"
						labelBg="bg-violet-5"
						labelColor="txt-violet-1"
						date="YYYY.MM.DD"
						link="/transaction/transaction_consulting_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						writer="요청자명"
						consulting="운영자명"
						label="완료"
						labelBg="bg-violet-5"
						labelColor="txt-violet-1"
						date="YYYY.MM.DD"
						link="/transaction/transaction_consulting_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						writer="요청자명"
						consulting="운영자명"
						label="거래완료"
						labelBg="bg-mint-1"
						labelColor="txt-white"
						date="YYYY.MM.DD"
						link="/transaction/transaction_consulting_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						writer="요청자명"
						consulting="운영자명"
						label="거래완료"
						labelBg="bg-mint-1"
						labelColor="txt-white"
						date="YYYY.MM.DD"
						link="/transaction/transaction_consulting_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						writer="요청자명"
						consulting="운영자명"
						label="거래실패"
						labelBg="bg-wrong-red-hover"
						labelColor="txt-white"
						date="YYYY.MM.DD"
						link="/transaction/transaction_consulting_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						writer="요청자명"
						consulting="운영자명"
						label="거래실패"
						labelBg="bg-wrong-red-hover"
						labelColor="txt-white"
						date="YYYY.MM.DD"
						link="/transaction/transaction_consulting_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						writer="요청자명"
						consulting="운영자명"
						label="보류"
						labelBg="bg-purple-1"
						labelColor="txt-white"
						date="YYYY.MM.DD"
						link="/transaction/transaction_consulting_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="[제목명]"
						writer="요청자명"
						consulting="운영자명"
						label="보류"
						labelBg="bg-purple-1"
						labelColor="txt-white"
						date="YYYY.MM.DD"
						link="/transaction/transaction_consulting_detail"
					/>

					<Pagnation size="regular"/>
				</div>

			<div className="btn-wrap flex_">
				<div className="flex_">
					<Link href="/transaction/transaction">
						<ButtonL text="목록으로" />
					</Link>
				</div>
				<div className="flex_">
						<Link href="#">
							<ButtonErrorL text="삭제" />
						</Link>
						<Link href="/transaction/transaction_info_retouch">
							<Button text="수정" />
						</Link>
					</div>
			</div>
		</div>
		</div>
	)
};

export default Component;