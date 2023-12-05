import React, { useState } from "react";
import Tab from "/src/components/tabs/marketing_send_list_tab_fixed";
import Link from "next/link"
import SearchBox from "/src/components/searchBar/search_bar_email_history"
import DropDownMenu from "/src/components/dropsMenu/drops_email_history_menu";
import TableHead from "/src/components/table/send_list_table_vertical_head"
import TableCell from "/src/components/table/send_list_table_vertical_cell"
import Pagnation from "/src/components/pagnation/pagnation";
import Icon from "/src/components/icon/icon.tsx"
import PrimaryBtn from "/src/components/buttons/button_primary_l"
import OutlineBtn from "/src/components/buttons/button_outline_l"

const Component = () => {

	const TabContents = () => {
		return(
			<div className="sub-page">
				<div className="sub-page-01">
					<div className="flex_ search-box">
						<DropDownMenu />
						<SearchBox />
					</div>

					<div className="table-container">
						<TableHead 
							headChoice="선택"
							headCategory="이름"
							headTitle="이메일"
							headWriter="가입일"
							headDate="최근접속일"
							headEtc="관리"
						/>
						<TableCell 
							choice=""
							label="[이름]"
							title="kotech@kotech.co.kr"
							writer="YYYY.MM.DD"
							date="YYYY.MM.DD HH:MM:SS"
							link="#"
						/>
						<TableCell 
							choice=""
							label="[이름]"
							title="kotech@kotech.co.kr"
							writer="YYYY.MM.DD"
							date="YYYY.MM.DD HH:MM:SS"
							link="#"
						/>
						<TableCell 
							choice=""
							label="[이름]"
							title="kotech@kotech.co.kr"
							writer="YYYY.MM.DD"
							date="YYYY.MM.DD HH:MM:SS"
							link="#"
						/>
						<TableCell 
							choice=""
							label="[이름]"
							title="kotech@kotech.co.kr"
							writer="YYYY.MM.DD"
							date="YYYY.MM.DD HH:MM:SS"
							link="#"
						/>
						<TableCell 
							choice=""
							label="[이름]"
							title="kotech@kotech.co.kr"
							writer="YYYY.MM.DD"
							date="YYYY.MM.DD HH:MM:SS"
							link="#"
						/>
						<TableCell 
							choice=""
							label="[이름]"
							title="kotech@kotech.co.kr"
							writer="YYYY.MM.DD"
							date="YYYY.MM.DD HH:MM:SS"
							link="#"
						/>
						<TableCell 
							choice=""
							label="[이름]"
							title="kotech@kotech.co.kr"
							writer="YYYY.MM.DD"
							date="YYYY.MM.DD HH:MM:SS"
							link="#"
						/>
						<TableCell 
							choice=""
							label="[이름]"
							title="kotech@kotech.co.kr"
							writer="YYYY.MM.DD"
							date="YYYY.MM.DD HH:MM:SS"
							link="#"
						/>
						<TableCell 
							choice=""
							label="[이름]"
							title="kotech@kotech.co.kr"
							writer="YYYY.MM.DD"
							date="YYYY.MM.DD HH:MM:SS"
							link="#"
						/>
						<TableCell 
							choice=""
							label="[이름]"
							title="kotech@kotech.co.kr"
							writer="YYYY.MM.DD"
							date="YYYY.MM.DD HH:MM:SS"
							link="#"
						/>
						<div className="flex_ table-bottom-box">
							<OutlineBtn text="이전으로" state="default"/>
							<Pagnation size="regular"/>
							<PrimaryBtn text="선택완료" state="disabled"/>
						</div>
					</div>

					<div className="sub-page-02">
						<h3 className="body-2-B">
							발송 대상 리스트&nbsp;
							<span className="txt-violet-1">(N)</span>
						</h3>

						<div className="send-list flex_ radius-8">
							<div className="flex_">
								<span className="send-category txt-violet-1 caption-B">
									회원
								</span>
								<span className="send-name body-3-B">
									[남예준]
								</span>
								<span className="send-address caption-R flex_">
									<span>[서울대학교]</span>
									<span className="bar"></span>
									<span className="email">[kotech@kotech.co.kr]</span>
								</span>
							</div>
							<Icon icon="cancel" size={8} color="#242424" stroke="none" />
						</div>

						<div className="send-list flex_ radius-8">
							<div className="flex_">
								<span className="send-category txt-violet-1 caption-B">
									회원
								</span>
								<span className="send-name body-3-B">
									[남예준]
								</span>
								<span className="send-address caption-R flex_">
									<span>[서울대학교]</span>
									<span className="bar"></span>
									<span className="email">[kotech@kotech.co.kr]</span>
								</span>
							</div>
							<Icon icon="cancel" size={8} color="#242424" stroke="none" />
						</div>

						<div className="send-list flex_ radius-8">
							<div className="flex_">
								<span className="send-category txt-violet-1 caption-B">
									회원
								</span>
								<span className="send-name body-3-B">
									[남예준]
								</span>
								<span className="send-address caption-R flex_">
									<span>[서울대학교]</span>
									<span className="bar"></span>
									<span className="email">[kotech@kotech.co.kr]</span>
								</span>
							</div>
							<Icon icon="cancel" size={8} color="#242424" stroke="none" />
						</div>

						<div className="send-list flex_ radius-8">
							<div className="flex_">
								<span className="send-category txt-violet-1 caption-B">
									회원
								</span>
								<span className="send-name body-3-B">
									[남예준]
								</span>
								<span className="send-address caption-R flex_">
									<span>[서울대학교]</span>
									<span className="bar"></span>
									<span className="email">[kotech@kotech.co.kr]</span>
								</span>
							</div>
							<Icon icon="cancel" size={8} color="#242424" stroke="none" />
						</div>

						<div className="send-list flex_ radius-8">
							<div className="flex_">
								<span className="send-category txt-violet-1 caption-B">
									회원
								</span>
								<span className="send-name body-3-B">
									[남예준]
								</span>
								<span className="send-address caption-R flex_">
									<span>[서울대학교]</span>
									<span className="bar"></span>
									<span className="email">[kotech@kotech.co.kr]</span>
								</span>
							</div>
							<Icon icon="cancel" size={8} color="#242424" stroke="none" />
						</div>
						
						
						<div className="send-list flex_ radius-8">
							<div className="flex_">
								<span className="send-category txt-mint-1 caption-B">
									담당자
								</span>
								<span className="send-name body-3-B">
									[남예준]
								</span>
								<span className="send-address caption-R flex_">
									<span>[서울대학교]</span>
									<span className="bar"></span>
									<span className="email">[kotech@kotech.co.kr]</span>
								</span>
							</div>
							<Icon icon="cancel" size={8} color="#242424" stroke="none" />
						</div>

						<div className="send-list flex_ radius-8">
							<div className="flex_">
								<span className="send-category txt-mint-1 caption-B">
									담당자
								</span>
								<span className="send-name body-3-B">
									[남예준]
								</span>
								<span className="send-address caption-R flex_">
									<span>[서울대학교]</span>
									<span className="bar"></span>
									<span className="email">[kotech@kotech.co.kr]</span>
								</span>
							</div>
							<Icon icon="cancel" size={8} color="#242424" stroke="none" />
						</div>
						
					</div>
					
				</div>
			</div>
		)
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="marketing-contents send-list-page">
					<h1 className="display-5-B">발송 대상 선택</h1>
					<Tab active={1}/>
					<TabContents />
				</div>
			</div>
		</div>
	)
}
export default Component;