import React from "react";
import ButtonM from "/src/components/buttons/button_primary_m";
import DropDownMenu from "/src/components/dropsMenu/drops_company_management_menu";
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import TableHead from "/src/components/table/board_table_head";
import TableCell from "/src/components/table/board_table_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Link from "next/link";

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="board-">
				<div className="transaction-01">

					<div className="head-wrap flex_">
						<h1 className="display-5-B">
							게시판 관리
						</h1>
						<Link href="/transaction/company_add">
							<ButtonM text="게시판 등록" />
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
								headTitle="제목"
								headWriter="글 총갯수"
								headCategory="사용 여부"
								headDate="사용 여부"
								headEtc="관리"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[게시판 이름]"
								writer="174"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="사용 중"
								listLink="#"
								link="#"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[게시판 이름]"
								writer="174"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="사용 중"
								listLink="#"
								link="#"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[게시판 이름]"
								writer="174"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="사용 중"
								listLink="#"
								link="#"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[게시판 이름]"
								writer="174"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="사용 중"
								listLink="#"
								link="#"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[게시판 이름]"
								writer="174"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="사용 중"
								listLink="#"
								link="#"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[게시판 이름]"
								writer="174"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="사용 중"
								listLink="#"
								link="#"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[게시판 이름]"
								writer="174"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="사용 중"
								listLink="#"
								link="#"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[게시판 이름]"
								writer="174"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="사용 중"
								listLink="#"
								link="#"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[게시판 이름]"
								writer="174"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="사용 중"
								listLink="#"
								link="#"
							/>
							<TableCell 
								choice="number"
								number="1"
								title="[게시판 이름]"
								writer="174"
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="사용 중"
								listLink="#"
								link="#"
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