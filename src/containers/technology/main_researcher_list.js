import React from "react";
import Link from "next/link"
import TableHead from "/src/components/table/researcher_head";
import TableCell from "/src/components/table/researcher_cell";
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
						headChoice="선택"
						headTitle="연구자명"
						headBelong="소속"
						headWriter="부서/학과"
						headPosition="직책"
						headEtc="관리"
					/>
					<TableCell 
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<div className="flex_ table-bottom-box">
						<Link href="/technology/retouch">
							<OutlineBtn text="이전으로" state="default"/>
						</Link>
						<Pagnation size="regular"/>
						<Link href="/technology/retouch">
							<PrimaryBtn text="선택완료" state="default"/>
						</Link>
					</div>
				</div>
			</div>
		)
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="researcher-contents contents- main-researcher-list">
					<div className="head-wrap flex_">
						<h1 className="display-5-B">
							대표 연구자 선택
						</h1>
					</div>
					<TabContents />
				</div>
			</div>
		</div>
	)
}
export default Component;