import React from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/technology_index_table_vertical_head";
import TableCell from "/src/components/table/technology_index_table_vertical_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="contents-technology contents- contents-news">
				<div className="transaction-01">

					<div className="head-wrap flex_">
						<h1 className="display-5-B">
							뉴스 관리
						</h1>
						<Link href="/news/add_1">
							<ButtonM text="등록" />
						</Link>
					</div>

					<div>
						<div className="flex_ search-wrap">
							<span className="flex_">
								<DropDownMenu datas={[]}/>
								<DropDownMenu datas={[]}/>
							</span>
							<SearchBar data={[]}/>
						</div>

						<div className="table-container">
							<TableHead
								headChoice="번호"
								headCategory="상태"
								headTitle="제목"
								headWriter="작성자"
								headDate="등록일"
								headEtc="관리"
							/>
							<TableCell 
								labelBg="bg-mint-1"
								label="임시저장"
								labelColor="txt-white"
								choice="number"
								number="1"
								title="뉴스명"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/news/temporary_detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-mint-1"
								label="임시저장"
								labelColor="txt-white"
								choice="number"
								number="1"
								title="뉴스명"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/news/temporary_detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="AI 생성중"
								choice="number"
								number="1"
								title="뉴스명"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/news/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="AI 생성중"
								choice="number"
								number="1"
								title="뉴스명"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/news/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="AI 생성중"
								choice="number"
								number="1"
								title="뉴스명"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/news/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-violet-5"
								label="생성완료"
								labelColor="txt-violet-1"
								choice="number"
								number="1"
								title="뉴스명"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/news/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-violet-5"
								label="생성완료"
								labelColor="txt-violet-1"
								choice="number"
								number="1"
								title="뉴스명"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/news/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-violet-5"
								label="생성완료"
								labelColor="txt-violet-1"
								choice="number"
								number="1"
								title="뉴스명"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/news/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-gray"
								label="등록완료"
								labelColor="txt-third"
								choice="number"
								number="1"
								title="뉴스명"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/news/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-gray"
								label="등록완료"
								labelColor="txt-third"
								choice="number"
								number="1"
								title="뉴스명"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/news/detail"
								img="/images/sample-img.png"
							/>
							<Pagnation size="regular"/>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	)
};

export default Component;