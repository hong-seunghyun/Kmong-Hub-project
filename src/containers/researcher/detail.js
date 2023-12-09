import React, { useState } from "react";
import TextButton from "/src/components/buttons/text_button_underline_primary_s"
import ButtonL from "/src/components/buttons/button_outline_l"
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Upload from "/src/components/upload/upload"

const Component = () => {

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="member- member-detail researcher-detail">
					<h1 className="display-5-B title">연구자 상세</h1>
					
					<p className="table-caption body-2-B">기본 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									연구자명
								</th>
								<td className="tbody">
								연구자명
								</td>
							</tr>
							<tr>
								<th className="thead ">
									연구자<br />
									프로필
								</th>
								<td className="tbody">
								<Upload state="done" type="preview"/>
								</td>
							</tr>
							<tr>
								<th className="thead ">
									소속
								</th>
								<td className="tbody">
								서울대, 연세대, 고려대
								</td>
							</tr>
							<tr>
								<th className="thead ">
									부서/학과
								</th>
								<td className="tbody">
								전자공학
								</td>
							</tr>
							<tr>
								<th className="thead ">
								직책
								</th>
								<td className="tbody">
								직책
								</td>
							</tr>
							<tr>
								<th className="thead ">
								연구실
								</th>
								<td className="tbody">
								전자공학연구실
								</td>
							</tr>
							<tr>
								<th className="thead ">
								연구실 홈페이지
								</th>
								<td className="tbody">
									<TextButton text="홈페이지 바로가기" />
								</td>
							</tr>
							<tr>
								<th className="thead ">
								휴대폰 번호
								</th>
								<td className="tbody">
								01012345678
								</td>
							</tr>
							<tr>
								<th className="thead ">
								사무실 전화번호
								</th>
								<td className="tbody">
								0212345678
								</td>
							</tr>
							<tr>
								<th className="thead ">
								이메일
								</th>
								<td className="tbody">
								kotech@kotech.co.kr
								</td>
							</tr>
							<tr>
								<th className="thead ">
								홈페이지
								</th>
								<td className="tbody">
									<TextButton text="홈페이지 바로가기" />
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">경력 정보</p>
					<div className="table-wrap">
						<p className="table-caption body-3-B txt-second-default">경력정보 1</p>
						<table className="table-horizontal-container radius-20 body-3-R">
							<tbody>
								<tr>
									<th className="thead ">
									회사명
									</th>
									<td className="tbody">
									회사명
									</td>
								</tr>
								<tr>
									<th className="thead ">
									입사연월
									</th>
									<td className="tbody">
									YYYY.MM.DD
									</td>
								</tr>
								<tr>
									<th className="thead ">
									퇴사연월
									</th>
									<td className="tbody">
										<span className="txt-violet-1">재직 중</span>
									</td>
								</tr>
								<tr>
									<th className="thead ">
									담당업무
									</th>
									<td className="tbody">
										생명유기화학 (Organic and Biological Chemistry), 학부 강의
										생명체를 이루는 주요 화합물은 탄소 중심의 유기화합물이다. 본 교과목에서는 분자의 구조 및 화학 결합을 이해하고, 탄소 화합물들의 화학 구조적 특징을 배우고, 작용기들에 따른 분류와 기본적 유기화학 반응들을 이해하여 생명체 내에 존재하는 고분자 유기화합물, 지질과 막, 탄수화물, 단백질과 효소, 핵산의 분자 구조를 이해함으로써 궁극적으로 분자 수준에서 생명체를 이해하는 데 있다.
									</td>
								</tr>
							</tbody>
						</table>
						<p className="table-caption body-3-B txt-second-default">경력정보 2</p>
						<table className="table-horizontal-container radius-20 body-3-R">
							<tbody>
								<tr>
									<th className="thead ">
									회사명
									</th>
									<td className="tbody">
									회사명
									</td>
								</tr>
								<tr>
									<th className="thead ">
									입사연월
									</th>
									<td className="tbody">
									YYYY.MM.DD
									</td>
								</tr>
								<tr>
									<th className="thead ">
									퇴사연월
									</th>
									<td className="tbody">
										<span className="txt-violet-1">재직 중</span>
									</td>
								</tr>
								<tr>
									<th className="thead ">
									담당업무
									</th>
									<td className="tbody">
										생명유기화학 (Organic and Biological Chemistry), 학부 강의
										생명체를 이루는 주요 화합물은 탄소 중심의 유기화합물이다. 본 교과목에서는 분자의 구조 및 화학 결합을 이해하고, 탄소 화합물들의 화학 구조적 특징을 배우고, 작용기들에 따른 분류와 기본적 유기화학 반응들을 이해하여 생명체 내에 존재하는 고분자 유기화합물, 지질과 막, 탄수화물, 단백질과 효소, 핵산의 분자 구조를 이해함으로써 궁극적으로 분자 수준에서 생명체를 이해하는 데 있다.
									</td>
								</tr>
							</tbody>
						</table>
					</div>
						


					<p className="table-caption body-2-B">강의</p>
					<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
								유튜브 URL
								</th>
								<td className="tbody">
								<TextButton text="www.kotech.co.kr" />
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">강의</p>
					<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
								강의 내역
								</th>
								<td className="tbody">
									생명유기화학 (Organic and Biological Chemistry), 학부 강의
									생명체를 이루는 주요 화합물은 탄소 중심의 유기화합물이다. 본 교과목에서는 분자의 구조 및 화학 결합을 이해하고, 탄소 화합물들의 화학 구조적 특징을 배우고, 작용기들에 따른 분류와 기본적 유기화학 반응들을 이해하여 생명체 내에 존재하는 고분자 유기화합물, 지질과 막, 탄수화물, 단백질과 효소, 핵산의 분자 구조를 이해함으로써 궁극적으로 분자 수준에서 생명체를 이해하는 데 있다.
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">대외활동</p>
					<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
								활동 내역
								</th>
								<td className="tbody">
									생명유기화학 (Organic and Biological Chemistry), 학부 강의
									생명체를 이루는 주요 화합물은 탄소 중심의 유기화합물이다. 본 교과목에서는 분자의 구조 및 화학 결합을 이해하고, 탄소 화합물들의 화학 구조적 특징을 배우고, 작용기들에 따른 분류와 기본적 유기화학 반응들을 이해하여 생명체 내에 존재하는 고분자 유기화합물, 지질과 막, 탄수화물, 단백질과 효소, 핵산의 분자 구조를 이해함으로써 궁극적으로 분자 수준에서 생명체를 이해하는 데 있다.
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">연구분야</p>
					<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
								연구 내역
								</th>
								<td className="tbody">
									생명유기화학 (Organic and Biological Chemistry), 학부 강의
									생명체를 이루는 주요 화합물은 탄소 중심의 유기화합물이다. 본 교과목에서는 분자의 구조 및 화학 결합을 이해하고, 탄소 화합물들의 화학 구조적 특징을 배우고, 작용기들에 따른 분류와 기본적 유기화학 반응들을 이해하여 생명체 내에 존재하는 고분자 유기화합물, 지질과 막, 탄수화물, 단백질과 효소, 핵산의 분자 구조를 이해함으로써 궁극적으로 분자 수준에서 생명체를 이해하는 데 있다.
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">학력</p>
					<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
								학력 내역
								</th>
								<td className="tbody">
									생명유기화학 (Organic and Biological Chemistry), 학부 강의
									생명체를 이루는 주요 화합물은 탄소 중심의 유기화합물이다. 본 교과목에서는 분자의 구조 및 화학 결합을 이해하고, 탄소 화합물들의 화학 구조적 특징을 배우고, 작용기들에 따른 분류와 기본적 유기화학 반응들을 이해하여 생명체 내에 존재하는 고분자 유기화합물, 지질과 막, 탄수화물, 단백질과 효소, 핵산의 분자 구조를 이해함으로써 궁극적으로 분자 수준에서 생명체를 이해하는 데 있다.
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">문의처</p>
					<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
								이름
								</th>
								<td className="tbody">
									도윤호
								</td>
							</tr>
							<tr>
								<th className="thead ">
								연락처
								</th>
								<td className="tbody">
									01012345678
								</td>
							</tr>
							<tr>
								<th className="thead ">
								이메일
								</th>
								<td className="tbody">
								약물 표면을 코팅해 약효의 지속력을 높이는 약물전달용 나노입자 안약
								</td>
							</tr>
						</tbody>
					</table>

					<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="/researcher">
								<ButtonL text="목록으로" />
							</Link>
						</div>
						<div className="flex_">
							<Link href="#">
								<ButtonErrorL text="삭제 요청" />
							</Link>
							<Link href="/researcher/add">
								<Button text="수정 요청" />
							</Link>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}
export default Component;