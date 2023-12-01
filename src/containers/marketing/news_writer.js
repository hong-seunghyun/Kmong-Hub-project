import React from "react";
import Link from "next/link"
import SearchBox from "/src/components/searchBar/search_bar_email_history"
import DropDownMenu from "/src/components/dropsMenu/drops_email_history_menu";
import TableHead from "/src/components/table/table_vertical_head";
import TableCell from "/src/components/table/news_writer_step_a_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Icon from "/src/components/icon/icon.tsx"
import ButtonPrimary from "/src/components/buttons/button_primary_s"
import Tab from "/src/components/tabs/news_writer_tab_fixed"


const Component = () => {

	const TabContents = () => {
		return(
			<div className="sub-page-0">
				<div className="flex_ search-box">
					<DropDownMenu />
					<SearchBox />
				</div>

				<div className="table-container">
					<TableHead
						headChoice="선택"
						headCategory=""
						headTitle="제목"
						headWriter="작성자"
						headDate="등록일"
						headEtc="관리"
					/>
					<TableCell 
						title="[기술이전명]"
						writer="미나 마수드"
						date="YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						title="[기술이전명]"
						writer="미나 마수드"
						date="YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						title="[기술이전명]"
						writer="미나 마수드"
						date="YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						title="[기술이전명]"
						writer="미나 마수드"
						date="YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						title="[기술이전명]"
						writer="미나 마수드"
						date="YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						title="[기술이전명]"
						writer="미나 마수드"
						date="YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						title="[기술이전명]"
						writer="미나 마수드"
						date="YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						title="[기술이전명]"
						writer="미나 마수드"
						date="YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						title="[기술이전명]"
						writer="미나 마수드"
						date="YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						title="[기술이전명]"
						writer="미나 마수드"
						date="YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<Pagnation size="regular"/>
				</div>
			</div>
		)
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="marketing-contents email-history news-writer">
					<h1 className="display-5-B flex_">
						뉴스레터 발송 등록/수정
						<div className="flex_ body-3-R txt-second-default bg-violet-6">
							<span className="flex_">
								<Icon icon="mail" size={9} color="#574AFF" stroke="none" />
								남은 발송 횟수
							</span>
							<span className="flex_">
								<span className="txt-red body-3-B">
									0
								</span>
								/
								<span className="txt-primary body-3-B total-cnt">
									7000
								</span>
							</span>
							<Link href="/marketing/email_writer">
								<ButtonPrimary text="등록" state="disabled" />
							</Link>
						</div>
					</h1>
					<Tab active={0}/>
					<TabContents />
				</div>
			</div>
		</div>
	)
}
export default Component;