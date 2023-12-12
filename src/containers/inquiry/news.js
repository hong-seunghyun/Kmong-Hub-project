import React from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/inquiry_technology_table_head";
import TableCell from "/src/components/table/inquiry_technology_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="inquiry- ">
				<div className="transaction-01">

					<div className="head-wrap flex_">
						<h1 className="display-5-B">
							뉴스 문의 관리
						</h1>
					</div>

					<div>
						<div className="flex_ search-wrap">
							<DropDownMenu />
							<SearchBar />
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
								choice="number"
								number="1"
								img="/images/sample-img.png"
								title="문의 제목"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="답변 전"
								link="/inquiry/news_detail"
								
							/>
							<TableCell 
								choice="number"
								number="1"
								img="/images/sample-img.png"
								title="문의 제목"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="답변 전"
								link="/inquiry/news_detail"
								
							/>
							<TableCell 
								choice="number"
								number="1"
								img="/images/sample-img.png"
								title="문의 제목"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								labelBg="bg-violet-5"
								labelColor="txt-violet-1"
								label="답변 완료"
								link="/inquiry/news_detail_2"
								
							/>
							<TableCell 
								choice="number"
								number="1"
								img="/images/sample-img.png"
								title="문의 제목"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								labelBg="bg-violet-5"
								labelColor="txt-violet-1"
								label="답변 완료"
								link="/inquiry/news_detail_2"
								
							/>
							<TableCell 
								choice="number"
								number="1"
								img="/images/sample-img.png"
								title="문의 제목"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="답변 전"
								link="/inquiry/news_detail"
								
							/>
							<TableCell 
								choice="number"
								number="1"
								img="/images/sample-img.png"
								title="문의 제목"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="답변 전"
								link="/inquiry/news_detail"
								
							/>
							<TableCell 
								choice="number"
								number="1"
								img="/images/sample-img.png"
								title="문의 제목"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								labelBg="bg-violet-5"
								labelColor="txt-violet-1"
								label="답변 완료"
								link="/inquiry/news_detail_2"
								
							/>
							<TableCell 
								choice="number"
								number="1"
								img="/images/sample-img.png"
								title="문의 제목"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								labelBg="bg-violet-5"
								labelColor="txt-violet-1"
								label="답변 완료"
								link="/inquiry/news_detail_2"
								
							/>
							<TableCell 
								choice="number"
								number="1"
								img="/images/sample-img.png"
								title="문의 제목"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="답변 전"
								link="/inquiry/news_detail"
								
							/>
							<TableCell 
								choice="number"
								number="1"
								img="/images/sample-img.png"
								title="문의 제목"
								writer="미나 마수드"
								date="YYYY.MM.DD"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="답변 전"
								link="/inquiry/news_detail"
								
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