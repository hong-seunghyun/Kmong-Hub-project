import React from "react";
import Link from "next/link"
import TableHead from "/src/components/table/table_vertical_head";
import TableCell from "/src/components/table/table_vertical_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import ButtonM from "/src/components/buttons/button_primary_m";
import PrimaryBtn from "/src/components/buttons/button_primary_l"
import OutlineBtn from "/src/components/buttons/button_outline_l"
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";

const Component = () => {

	const TabContents = () => {
		return(
			<div className="sub-page-0">
				<div className="flex_ search-wrap">
					<DropDownMenu />
					<SearchBar />
				</div>
				<div className="table-container">
					<TableHead
						headChoice="번호"
						headTitle="소속"
						headWriter="부서/학과"
						headDate="직책"
						headEtc="관리"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="한국외국어대학교(서울)"
						writer="컴퓨터공학과"
						date="YYYY.MM.DD"
						link="/researcher/company_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="한국외국어대학교(서울)"
						writer="컴퓨터공학과"
						date="YYYY.MM.DD"
						link="/researcher/company_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="한국외국어대학교(서울)"
						writer="컴퓨터공학과"
						date="YYYY.MM.DD"
						link="/researcher/company_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="한국외국어대학교(서울)"
						writer="컴퓨터공학과"
						date="YYYY.MM.DD"
						link="/researcher/company_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="한국외국어대학교(서울)"
						writer="컴퓨터공학과"
						date="YYYY.MM.DD"
						link="/researcher/company_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="한국외국어대학교(서울)"
						writer="컴퓨터공학과"
						date="YYYY.MM.DD"
						link="/researcher/company_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="한국외국어대학교(서울)"
						writer="컴퓨터공학과"
						date="YYYY.MM.DD"
						link="/researcher/company_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="한국외국어대학교(서울)"
						writer="컴퓨터공학과"
						date="YYYY.MM.DD"
						link="/researcher/company_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="한국외국어대학교(서울)"
						writer="컴퓨터공학과"
						date="YYYY.MM.DD"
						link="/researcher/company_detail"
					/>
					<TableCell 
						choice="number"
						number="1"
						title="한국외국어대학교(서울)"
						writer="컴퓨터공학과"
						date="YYYY.MM.DD"
						link="/researcher/company_detail"
					/>
					<Pagnation size="regular"/>
				</div>
			</div>
		)
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="researcher-contents researcher-company">
					<div className="head-wrap flex_">
						<h1 className="display-5-B">
							소속 정보
						</h1>
						<Link href="/researcher/company_add">
							<ButtonM text="부서/학과 등록" />
						</Link>
					</div>
					<TabContents />
				</div>
			</div>
		</div>
	)
}
export default Component;