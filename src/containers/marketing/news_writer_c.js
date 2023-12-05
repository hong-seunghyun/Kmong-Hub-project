import React from "react";
import Link from "next/link"
import TableHead from "/src/components/table/news_writer_step_c_head";
import TableCell from "/src/components/table/news_writer_step_c_cell";
import Pagnation from "/src/components/pagnation/pagnation";
import Icon from "/src/components/icon/icon.tsx"
import ButtonPrimary from "/src/components/buttons/button_primary_s"
import Tab from "/src/components/tabs/news_writer_tab_fixed"
import PrimaryBtn from "/src/components/buttons/button_primary_l"
import OutlineBtn from "/src/components/buttons/button_outline_l"

const Component = () => {

	const TabContents = () => {
		return(
			<div className="sub-page-0">
				<div className="flex_ tip-box">
					<Icon icon="inform" size={12} color="#574AFF" stroke="none" />
					<p className="body-2-B txt-violet-1">(0/6)</p>
					<p className="body-3-B txt-second-default">기술이전 콘텐츠는 최대 6개까지 등록할 수 있어요.</p>
				</div>
				<div className="table-container">
					<TableHead
						headChoice="선택"
						headCategory="상태"
						headTitle="제목"
						headState="심사 상태"
						headWriter="작성자"
						headDate="공고기간"
						headEtc="관리"
					/>
					<TableCell 
						labelBg="bg-gray"
						label="생성완료"
						labelColor="txt-third"
						title="지원사업명"
						state="대&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;기"
						stateBg="bg-violet-5"
						stateColor="txt-violet-1"
						writer="작성자"
						date="YYYY.MM.DD ~ YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						labelBg="bg-gray"
						label="생성완료"
						labelColor="txt-third"
						title="지원사업명"
						state="대&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;기"
						stateBg="bg-violet-5"
						stateColor="txt-violet-1"
						writer="작성자"
						date="YYYY.MM.DD ~ YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						labelBg="bg-violet-1"
						label="AI 생성중"
						labelColor="txt-white"
						title="지원사업명"
						state=""
						stateBg="none"
						stateColor="none"
						writer="작성자"
						date="YYYY.MM.DD ~ YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						labelBg="bg-gray"
						label="생성완료"
						labelColor="txt-third"
						title="지원사업명"
						state="심사 중"
						stateBg="bg-violet-1"
						stateColor="txt-white"
						writer="작성자"
						date="YYYY.MM.DD ~ YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						labelBg="bg-violet-1"
						label="AI 생성중"
						labelColor="txt-white"
						title="지원사업명"
						state=""
						stateBg="none"
						stateColor="none"
						writer="작성자"
						date="YYYY.MM.DD ~ YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						labelBg="bg-gray"
						label="생성완료"
						labelColor="txt-third"
						title="지원사업명"
						state="보&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;류"
						stateBg="bg-purple-1"
						stateColor="txt-white"
						writer="작성자"
						date="YYYY.MM.DD ~ YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						labelBg="bg-gray"
						label="생성완료"
						labelColor="txt-third"
						title="지원사업명"
						state="탈&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;락"
						stateBg="bg-wrong-red-hover"
						stateColor="txt-white"
						writer="작성자"
						date="YYYY.MM.DD ~ YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						labelBg="bg-gray"
						label="생성완료"
						labelColor="txt-third"
						title="지원사업명"
						state="선&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;정"
						stateBg="bg-mint-1"
						stateColor="txt-white"
						writer="작성자"
						date="YYYY.MM.DD ~ YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						labelBg="bg-violet-1"
						label="AI 생성중"
						labelColor="txt-white"
						title="지원사업명"
						state=""
						stateBg="none"
						stateColor="none"
						writer="작성자"
						date="YYYY.MM.DD ~ YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					<TableCell 
						labelBg="bg-gray"
						label="생성완료"
						labelColor="txt-third"
						title="지원사업명"
						state="취&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소"
						stateBg="bg-gray"
						stateColor="txt-third"
						writer="작성자"
						date="YYYY.MM.DD ~ YYYY.MM.DD"
						link="#"
						img="/images/sample-img.png"
					/>
					
					<div className="flex_ table-bottom-box">
						<OutlineBtn text="이전으로" state="default"/>
						<Pagnation size="regular"/>
						<Link href="/marketing/news_writer_d">
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
				<div className="marketing-contents email-history news-writer news-writer-c">
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
					<Tab active={2}/>
					<TabContents />
				</div>
			</div>
		</div>
	)
}
export default Component;