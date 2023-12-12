import React from "react";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import ButtonM from "/src/components/buttons/button_primary_m";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/selling_procedure_head";
import TableCell from "/src/components/table/selling_procedure_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";
import PrimaryBtn from "/src/components/buttons/button_primary_l"
import OutlineBtn from "/src/components/buttons/button_outline_l"
import Tab from "/src/components/tabs/selling_procedure_tab_fixed"

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="contents-  selling-procedure">

					<div className="head-wrap flex_">
						<h1 className="display-5-B">
							운영자 선택
						</h1>
						<Link href="/board/board_writer">
							<ButtonM text="게시판 등록" />
						</Link>
					</div>
					<Tab active={1}/>

					<div>
						<div className="flex_ search-wrap">
							<DropDownMenu />
							<SearchBar />
						</div>

						<div className="table-container">
							<TableHead
								headChoice="선택"
								headTitle="이름"
								headDate="등록일"
								headEtc="관리"
							/>
							<TableCell 
								title="[이름]"
								date="YYYY.MM.DD HH:MM:SS"
								listLink="#"
							/>
							<TableCell 
								title="[이름]"
								date="YYYY.MM.DD HH:MM:SS"
								listLink="#"
							/>
							<TableCell 
								title="[이름]"
								date="YYYY.MM.DD HH:MM:SS"
								listLink="#"
							/>
							<TableCell 
								title="[이름]"
								date="YYYY.MM.DD HH:MM:SS"
								listLink="#"
							/>
							<TableCell 
								title="[이름]"
								date="YYYY.MM.DD HH:MM:SS"
								listLink="#"
							/>
							<TableCell 
								title="[이름]"
								date="YYYY.MM.DD HH:MM:SS"
								listLink="#"
							/>
							<TableCell 
								title="[이름]"
								date="YYYY.MM.DD HH:MM:SS"
								listLink="#"
							/>
							<TableCell 
								title="[이름]"
								date="YYYY.MM.DD HH:MM:SS"
								listLink="#"
							/>
							<TableCell 
								title="[이름]"
								date="YYYY.MM.DD HH:MM:SS"
								listLink="#"
							/>
							<TableCell 
								title="[이름]"
								date="YYYY.MM.DD HH:MM:SS"
								listLink="#"
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
				</div>
				
			</div>
	)
};

export default Component;