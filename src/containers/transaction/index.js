import React from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/table_vertical_head";
import TableCell from "/src/components/table/table_vertical_cell";

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="transaction-container">
				<div className="transaction-01">

					<div className="head-wrap flex_">
						<h1 className="display-5-B">
							업체 관리
						</h1>
						<ButtonM text="업체등록" />
					</div>

					<div>
						<div className="flex_">
							<DropDownMenu />
							<SearchBar />
						</div>

						<div className="table-container">
							<TableHead
								headChoice="번호"
								headTitle="업체명"
								headWriter="업종"
								headDate="등록연도"
								headEtc="관리"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[업체명]"
								writer="[기계/전기]"
								date="YYYY.MM.DD"
							/>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	)
};

export default Component;