import React, { useState } from "react";
import TextButton from "/src/components/buttons/text_button_underline_primary_s"
import ButtonL from "/src/components/buttons/button_outline_l"
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Label from "/src/components/label/label";
import Editor from "/src/components/editorBox/index"
import TableHead from "/src/components/table/event_list_detail_head";
import TableCell from "/src/components/table/event_list_detail_cell";
import OutlineBtn from "/src/components/buttons/button_outline_l"
import Pagnation from "/src/components/pagnation/pagnation";
import Tabs from "/src/components/tabs/event_list_detail"

const Component = () => {

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="contents- contents-technology content-support-detail content-support-list-detail">
					<h1 className="display-5-B title"></h1>
					
					<p className="table-caption body-2-B">기본 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									제목
								</th>
								<td className="tbody">
									제목
								</td>
							</tr>
							<tr>
								<th className="thead">
									콘텐츠<br />
									썸네일
								</th>
								<td className="tbody">
									<div className="data-wrap flex_">
										<img className="img-preview" src="/images/sample-img.png" alt="file" />
										<div className="text-wrap flex_">
											<h6 className="body-3-B">파일명.확장자</h6>
											<p className="caption-R">파일크기 mb</p>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<th className="thead">
									중요 키워드
								</th>
								<td className="tbody">
									<Label 
										backgroundColor="bg-violet-5" 
										fontColor="txt-violet-1" 
										text="AI 사용" 
										icon="false" 
										iconColor=""
									/>
									<Label 
										backgroundColor="bg-violet-5" 
										fontColor="txt-violet-1" 
										text="AI 사용" 
										icon="false" 
										iconColor=""
									/>
									<Label 
										backgroundColor="bg-violet-5" 
										fontColor="txt-violet-1" 
										text="AI 사용" 
										icon="false" 
										iconColor=""
									/>
								</td>
							</tr>
							<tr>
								<th className="thead ">
								소관 부처
								</th>
								<td className="tbody">
									마케팅
								</td>
							</tr>
							<tr>
								<th className="thead ">
									수행 기관
								</th>
								<td className="tbody">
									한국기술HUB
								</td>
							</tr>
							<tr>
								<th className="thead ">
									모집 방법
								</th>
								<td className="tbody">
									외부 사이트를 통해 모집
								</td>
							</tr>
							<tr>
								<th className="thead ">
									링크
								</th>
								<td className="tbody">
									<TextButton text="kotech.kotech.co.kr" />
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">신청자 정보</p>
                    <Tabs active={2} />
					<div className="table-container">
						<TableHead
							headChoice="번호"
							headCategory="상태"
							headTitle="이름"
							headCheck="출석체크"
                            headCount="신청 인원"
							headDate="공고기간"
							headEtc="관리"
						/>
                        <TableCell 
							choice="number"
							number="1"
							labelBg="bg-wrong-red-hover"
							labelColor="txt-white"
							label="취소요청"
							title="지원사업명"
							count="N명"
							date="YYYY.MM.DD HH:MM"
							link="/support/user_detail"
							img="/images/sample-img.png"
						/>
						<TableCell 
							choice="number"
							number="1"
							labelBg="bg-wrong-red-hover"
							labelColor="txt-white"
							label="취소요청"
							title="지원사업명"
							count="N명"
							date="YYYY.MM.DD HH:MM"
							link="/support/user_detail"
							img="/images/sample-img.png"
						/>
						<TableCell 
							choice="number"
							number="1"
							labelBg="bg-wrong-red-hover"
							labelColor="txt-white"
							label="취소요청"
							title="지원사업명"
							count="N명"
							date="YYYY.MM.DD HH:MM"
							link="/support/user_detail"
							img="/images/sample-img.png"
						/>
						<TableCell 
							choice="number"
							number="1"
							labelBg="bg-wrong-red-hover"
							labelColor="txt-white"
							label="취소요청"
							title="지원사업명"
							count="N명"
							date="YYYY.MM.DD HH:MM"
							link="/support/user_detail"
							img="/images/sample-img.png"
						/>
						<TableCell 
							choice="number"
							number="1"
							labelBg="bg-wrong-red-hover"
							labelColor="txt-white"
							label="취소요청"
							title="지원사업명"
							count="N명"
							date="YYYY.MM.DD HH:MM"
							link="/support/user_detail"
							img="/images/sample-img.png"
						/>
						<TableCell 
							choice="number"
							number="1"
							labelBg="bg-wrong-red-hover"
							labelColor="txt-white"
							label="취소요청"
							title="지원사업명"
							count="N명"
							date="YYYY.MM.DD HH:MM"
							link="/support/user_detail"
							img="/images/sample-img.png"
						/>
						<TableCell 
							choice="number"
							number="1"
							labelBg="bg-wrong-red-hover"
							labelColor="txt-white"
							label="취소요청"
							title="지원사업명"
							count="N명"
							date="YYYY.MM.DD HH:MM"
							link="/support/user_detail"
							img="/images/sample-img.png"
						/>
						<TableCell 
							choice="number"
							number="1"
							labelBg="bg-wrong-red-hover"
							labelColor="txt-white"
							label="취소요청"
							title="지원사업명"
							count="N명"
							date="YYYY.MM.DD HH:MM"
							link="/support/user_detail"
							img="/images/sample-img.png"
						/>
						<TableCell 
							choice="number"
							number="1"
							labelBg="bg-wrong-red-hover"
							labelColor="txt-white"
							label="취소요청"
							title="지원사업명"
							count="N명"
							date="YYYY.MM.DD HH:MM"
							link="/support/user_detail"
							img="/images/sample-img.png"
						/>
						<TableCell 
							choice="number"
							number="1"
							labelBg="bg-wrong-red-hover"
							labelColor="txt-white"
							label="취소요청"
							title="지원사업명"
							count="N명"
							date="YYYY.MM.DD HH:MM"
							link="/support/user_detail"
							img="/images/sample-img.png"
						/>
					</div>
					<div className="btn-page flex_">
                        <OutlineBtn text="목록으로" />
						<Pagnation size="regular"/>
						<Button text="승인 취소" />
					</div>

				</div>
			</div>
		</div>
	)
}
export default Component;