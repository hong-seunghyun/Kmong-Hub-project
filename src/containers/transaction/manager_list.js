import React from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/manager_list_table_head";
import TableCell from "/src/components/table/manager_list_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="transaction-container transaction-manger">
				<div className="transaction-01">

					<div className="head-wrap flex_">
						<h1 className="display-5-B">
							담당자 관리
						</h1>
						<Link href="/transaction/company_add">
							<ButtonM text="업체등록" />
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
								headTitle="담당자명"
								headPhone="휴대폰 번호"
								headCompany="업체명"
								headDate="최종 수정일"
								headEtc="관리"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[담당자명]"
								phone="000-0000-0000"
								company="[업체명]"
								date="YYYY.MM.DD"
								link="/transaction/manager_info"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[담당자명]"
								phone="000-0000-0000"
								company="[업체명]"
								date="YYYY.MM.DD"
								link="/transaction/manager_info"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[담당자명]"
								phone="000-0000-0000"
								company="[업체명]"
								date="YYYY.MM.DD"
								link="/transaction/manager_info"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[담당자명]"
								phone="000-0000-0000"
								company="[업체명]"
								date="YYYY.MM.DD"
								link="/transaction/manager_info"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[담당자명]"
								phone="000-0000-0000"
								company="[업체명]"
								date="YYYY.MM.DD"
								link="/transaction/manager_info"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[담당자명]"
								phone="000-0000-0000"
								company="[업체명]"
								date="YYYY.MM.DD"
								link="/transaction/manager_info"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[담당자명]"
								phone="000-0000-0000"
								company="[업체명]"
								date="YYYY.MM.DD"
								link="/transaction/manager_info"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[담당자명]"
								phone="000-0000-0000"
								company="[업체명]"
								date="YYYY.MM.DD"
								link="/transaction/manager_info"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[담당자명]"
								phone="000-0000-0000"
								company="[업체명]"
								date="YYYY.MM.DD"
								link="/transaction/manager_info"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[담당자명]"
								phone="000-0000-0000"
								company="[업체명]"
								date="YYYY.MM.DD"
								link="/transaction/manager_info"
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