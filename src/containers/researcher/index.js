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
						headCategory="상태"
						headTitle="제목"
						headBelong="소속"
						headWriter="부서/학과"
						headPosition="직책"
						headEtc="관리"
					/>
					<TableCell 
						labelBg="bg-violet-5"
						label="임시저장"
						labelColor="txt-violet-1"
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						labelBg="bg-violet-5"
						label="임시저장"
						labelColor="txt-violet-1"
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						labelBg="bg-violet-1"
						label="AI 생성중"
						labelColor="txt-white"
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						labelBg="bg-violet-1"
						label="AI 생성중"
						labelColor="txt-white"
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						labelBg="bg-violet-1"
						label="AI 생성중"
						labelColor="txt-white"
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						labelBg="bg-gray"
						label="생성완료"
						labelColor="txt-third"
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						labelBg="bg-gray"
						label="생성완료"
						labelColor="txt-third"
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						labelBg="bg-gray"
						label="생성완료"
						labelColor="txt-third"
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						labelBg="bg-gray"
						label="생성완료"
						labelColor="txt-third"
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<TableCell 
						labelBg="bg-violet-5"
						label="임시저장"
						labelColor="txt-violet-1"
						img="/images/sample-img.png"
						title="유하민"
						belong="고려대학교, 서강대학교..."
						writer="전자공학"
						position="정교수"
						link="#"
					/>
					<Pagnation size="regular"/>
				</div>
			</div>
		)
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="researcher-contents">
					<div className="head-wrap flex_">
						<h1 className="display-5-B">
							연구자 관리
						</h1>
						<Link href="/transaction/company_add">
							<ButtonM text="연구자 등록" />
						</Link>
					</div>
					<TabContents />
				</div>
			</div>
		</div>
	)
}
export default Component;