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
			<div className="contents-technology contents-">
				<div className="transaction-01">

					<div className="head-wrap flex_">
						<h1 className="display-5-B">
							기술 이전 관리
						</h1>
						<Link href="/technology/add_1">
							<ButtonM text="기술이전 등록" />
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
								headCategory="상태"
								headTitle="제목"
								headWriter="작성자"
								headDate="등록일"
								headEtc="관리"
							/>
							<TableCell 
								labelBg="bg-violet-5"
								labelColor="txt-violet-1"
								label="임시저장"
								choice="number"
								number="1"
								title="약물 표면을 코팅해 약효의 지속력을 높이는 약물전달용 나노입..."
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/technology/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-violet-5"
								labelColor="txt-violet-1"
								label="임시저장"
								choice="number"
								number="1"
								title="약물 표면을 코팅해 약효의 지속력을 높이는 약물전달용 나노입..."
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/technology/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="AI 생성중"
								choice="number"
								number="1"
								title="약물 표면을 코팅해 약효의 지속력을 높이는 약물전달용 나노입..."
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/technology/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="AI 생성중"
								choice="number"
								number="1"
								title="약물 표면을 코팅해 약효의 지속력을 높이는 약물전달용 나노입..."
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/technology/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-violet-1"
								labelColor="txt-white"
								label="AI 생성중"
								choice="number"
								number="1"
								title="약물 표면을 코팅해 약효의 지속력을 높이는 약물전달용 나노입..."
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/technology/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-gray"
								labelColor="txt-third"
								label="생성완료"
								choice="number"
								number="1"
								title="약물 표면을 코팅해 약효의 지속력을 높이는 약물전달용 나노입..."
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/technology/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-gray"
								labelColor="txt-third"
								label="생성완료"
								choice="number"
								number="1"
								title="약물 표면을 코팅해 약효의 지속력을 높이는 약물전달용 나노입..."
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/technology/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-gray"
								labelColor="txt-third"
								label="생성완료"
								choice="number"
								number="1"
								title="약물 표면을 코팅해 약효의 지속력을 높이는 약물전달용 나노입..."
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/technology/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-gray"
								labelColor="txt-third"
								label="생성완료"
								choice="number"
								number="1"
								title="약물 표면을 코팅해 약효의 지속력을 높이는 약물전달용 나노입..."
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/technology/detail"
								img="/images/sample-img.png"
							/>
							<TableCell 
								labelBg="bg-gray"
								labelColor="txt-third"
								label="생성완료"
								choice="number"
								number="1"
								title="약물 표면을 코팅해 약효의 지속력을 높이는 약물전달용 나노입..."
								writer="미나 마수드"
								date="YYYY.MM.DD"
								link="/technology/detail"
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