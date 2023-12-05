import React, { useState } from "react";
import TextButton from "/src/components/buttons/text_button_underline_primary_s"
import ButtonL from "/src/components/buttons/button_outline_l"
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Label from "/src/components/label/label";
import Editor from "/src/components/editorBox/index"

const Component = () => {

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="contents- contents-technology contents-news contents-news-detail contents-event evevt-detail">
					<h1 className="display-5-B title">[제목]</h1>
					
					<p className="table-caption body-2-B">유형 선택</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									유형
								</th>
								<td className="tbody">
									기술문서 업로드
								</td>
							</tr>
							<tr>
								<th className="thead">
									파일
								</th>
								<td className="tbody">
									<div className="data-wrap flex_">
										<Label 
											backgroundColor="bg-violet-5" 
											fontColor="txt-violet-1" 
											text="보고서" 
											icon="false" 
											iconColor=""
										/>
										<div className="text-wrap flex_">
											<h6 className="body-3-B">파일명.확장자</h6>
											<p className="caption-R">파일크기 mb</p>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">기본 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									기관명
								</th>
								<td className="tbody">
									한국기술 HUB
								</td>
							</tr>
							<tr>
								<th className="thead ">
									기술명
								</th>
								<td className="tbody">
								약물 표면을 코팅해 약효의 지속력을 높이는 약물전달용 나노입자 안약
								</td>
							</tr>
							<tr>
								<th className="thead ">
								출원번호
								</th>
								<td className="tbody">
								123456789
								</td>
							</tr>
							<tr>
								<th className="thead ">
								등록번호
								</th>
								<td className="tbody">
								123456789
								</td>
							</tr>
							<tr>
								<th className="thead ">
								권리구분
								</th>
								<td className="tbody">
								특허권
								</td>
							</tr>
							<tr>
								<th className="thead ">
								소속
								</th>
								<td className="tbody">
								서울대학교
								</td>
							</tr>
							<tr>
								<th className="thead ">
								권리기간
								</th>
								<td className="tbody">
								YYYY.MM.DD ~ YYYY.MM.DD
								</td>
							</tr>
							<tr>
								<th className="thead ">
								대표 연구자
								</th>
								<td className="tbody">
								이현찬
								</td>
							</tr>
							<tr>
								<th className="thead ">
								공동 연구자
								</th>
								<td className="tbody">
								김재관
								</td>
							</tr>
							<tr>
								<th className="thead">
									파일
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
								카테고리
								</th>
								<td className="tbody">
								바이오/의료, 화학, 식품
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">기술 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
							<tbody>
								<tr>
									<th className="thead ">
										제목
									</th>
									<td className="tbody">
									약물 표면을 코팅해 약효의 지속력을 높이는 약물전달용 나노입자 안약
									</td>
								</tr>
								<tr>
									<th className="thead ">
										기술분야
									</th>
									<td className="tbody">
									의학
									</td>
								</tr>
								<tr>
									<th className="thead ">
										가격
									</th>
									<td className="tbody">
									가격 협의
									</td>
								</tr>
								<tr>
									<th className="thead ">
										판매유형
									</th>
									<td className="tbody">
									직접판매
									</td>
								</tr>
								<tr>
									<th className="thead ">
										거래방식
									</th>
									<td className="tbody">
									특허판매,노하우
									</td>
								</tr>
								<tr>
									<th className="thead ">
										기술 완성도
									</th>
									<td className="tbody">
									1단계 기본원리 파악
									</td>
								</tr>
							</tbody>
						</table>

					<p className="table-caption body-2-B">기술 소개</p>
					<Editor />

					<p className="table-caption body-2-B">기술 홍보 동영상</p>
					<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									행사 장소
								</th>
								<td className="tbody">
									온라인
								</td>
							</tr>
							<tr>
								<th className="thead ">
									온라인 링크
								</th>
								<td className="tbody">
									<TextButton text="kotech.kotech.co.kr" />
								</td>
							</tr>
							<tr>
								<th className="thead ">
									모집 방법
								</th>
								<td className="tbody">
									사이트 내 모집
								</td>
							</tr>
							<tr>
								<th className="thead ">
									모집 일정
								</th>
								<td className="tbody">
									YYYY.MM.DD ~ YYYY.MM.DD
								</td>
							</tr>
							<tr>
								<th className="thead ">
									행사 일정
								</th>
								<td className="tbody">
									YYYY.MM.DD ~ YYYY.MM.DD
								</td>
							</tr>
							<tr>
								<th className="thead ">
									가격
								</th>
								<td className="tbody">
									유료 / 20,000원
								</td>
							</tr>
							<tr>
								<th className="thead ">
									입금은행
								</th>
								<td className="tbody">
									kb국민
								</td>
							</tr>
							<tr>
								<th className="thead ">
									입금계좌
								</th>
								<td className="tbody">
									0123456789
								</td>
							</tr>
							<tr>
								<th className="thead ">
									예금주
								</th>
								<td className="tbody">
									미나 마수드
								</td>
							</tr>
							<tr>
								<th className="thead ">
									모집 인원
								</th>
								<td className="tbody">
									11명
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">설문조사</p>
					<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									질문 1
								</th>
								<td className="tbody">
									동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세?
								</td>
							</tr>
							<tr>
								<th className="thead ">
									선택지
								</th>
								<td className="tbody">
									1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 <br />
									2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 <br />
									3. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 <br />
									4. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 <br />
								</td>
							</tr>
						</tbody>
					</table>

					<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									질문 1
								</th>
								<td className="tbody">
									동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세?
								</td>
							</tr>
							<tr>
								<th className="thead ">
									선택지
								</th>
								<td className="tbody">
									1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 <br />
									2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 <br />
									3. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 <br />
									4. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 <br />
								</td>
							</tr>
						</tbody>
					</table>

					<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="/transaction">
								<ButtonL text="목록으로" />
							</Link>
						</div>
						<div className="flex_">
							<Link href="#">
								<ButtonErrorL text="삭제" />
							</Link>
							<Link href="/event/event_writer">
								<Button text="수정" />
							</Link>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}
export default Component;