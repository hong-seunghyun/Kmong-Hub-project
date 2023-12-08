import React from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/table_vertical_head";
import TableCell from "/src/components/table/technology_table_vertical_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="contents-technology contents- document-">
				<div className="transaction-01">

					<div className="head-wrap flex_">
						<h1 className="display-5-B">
							기술문서 관리
						</h1>
						<Link href="/technical_document/add">
							<ButtonM text="기술문서  등록" />
						</Link>
					</div>

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
								labelBg="bg-violet-5"
								labelColor="txt-violet-1"
								label="특허"
								choice="number"
								number="1"
								title="기술이전명"
								writer="미나 마수드 외 2명"
								date="YYYY.MM.DD"
								link="/technical_document/detail_patent_1"
							/>
							<TableCell 
								labelBg="bg-violet-5"
								labelColor="txt-violet-1"
								label="특허"
								choice="number"
								number="1"
								title="기술이전명"
								writer="미나 마수드 외 2명"
								date="YYYY.MM.DD"
								link="/technical_document/detail_patent_1"
							/>
							<TableCell 
								labelBg="bg-violet-5"
								labelColor="txt-violet-1"
								label="특허"
								choice="number"
								number="1"
								title="기술이전명"
								writer="미나 마수드 외 2명"
								date="YYYY.MM.DD"
								link="/technical_document/detail_patent_1"
							/>
							<TableCell 
								labelBg="bg-violet-5"
								labelColor="txt-violet-1"
								label="특허"
								choice="number"
								number="1"
								title="기술이전명"
								writer="미나 마수드 외 2명"
								date="YYYY.MM.DD"
								link="/technical_document/detail_patent_1"
							/>
							<TableCell 
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="논문"
								choice="number"
								number="1"
								title="기술이전명"
								writer="미나 마수드 외 2명"
								date="YYYY.MM.DD"
								link="/technical_document/detail_thesis_1"
							/>
							<TableCell 
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="논문"
								choice="number"
								number="1"
								title="기술이전명"
								writer="미나 마수드 외 2명"
								date="YYYY.MM.DD"
								link="/technical_document/detail_thesis_1"
							/>
							<TableCell 
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="논문"
								choice="number"
								number="1"
								title="기술이전명"
								writer="미나 마수드 외 2명"
								date="YYYY.MM.DD"
								link="/technical_document/detail_thesis_1"
							/>
							<TableCell 
								labelBg="bg-purple-1"
								labelColor="txt-white"
								label="보고서"
								choice="number"
								number="1"
								title="기술이전명"
								writer="미나 마수드 외 2명"
								date="YYYY.MM.DD"
								link="/technical_document/detail_report_1"
							/>
							<TableCell 
								labelBg="bg-purple-1"
								labelColor="txt-white"
								label="보고서"
								choice="number"
								number="1"
								title="기술이전명"
								writer="미나 마수드 외 2명"
								date="YYYY.MM.DD"
								link="/technical_document/detail_report_1"
							/>
							<TableCell 
								labelBg="bg-purple-1"
								labelColor="txt-white"
								label="보고서"
								choice="number"
								number="1"
								title="기술이전명"
								writer="미나 마수드 외 2명"
								date="YYYY.MM.DD"
								link="/technical_document/detail_report_1"
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