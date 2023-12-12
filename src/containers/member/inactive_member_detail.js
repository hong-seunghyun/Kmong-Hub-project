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
				<div className="member- member-detail">
					<h1 className="display-5-B title">휴먼 회원 관리</h1>
					
					<p className="table-caption body-2-B">기본 정보</p>
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
									이메일
								</th>
								<td className="tbody">
								kotech@kotech.co.kr
								</td>
							</tr>
							<tr>
								<th className="thead ">
									가입일
								</th>
								<td className="tbody">
								YYYY.MM.DD
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
									최근 접속일
								</th>
								<td className="tbody">
								YYYY.MM.DD HH:MM:SS
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">마케팅 수신 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
								이메일/SMS
								</th>
								<td className="tbody">
									<span className="txt-violet-1">동의</span>
								</td>
							</tr>
							<tr>
								<th className="thead ">
								뉴스레터 발송
								</th>
								<td className="tbody">
									<span className="txt-red">비동의</span>
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">부가 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
							<tbody>
								<tr>
									<th className="thead ">
										주소
									</th>
									<td className="tbody">
									서울특별시 종로구 청와대로 1
									</td>
								</tr>
								<tr>
									<th className="thead ">
									생년월일
									</th>
									<td className="tbody">
									YYYY.MM.DD
									</td>
								</tr>
								<tr>
									<th className="thead ">
									성별
									</th>
									<td className="tbody">
									남
									</td>
								</tr>
								<tr>
									<th className="thead ">
									회사명
									</th>
									<td className="tbody">
									성휘예대학교
									</td>
								</tr>
								<tr>
									<th className="thead ">
									사업 분야
									</th>
									<td className="tbody">
									AR/VR, 버츄얼
									</td>
								</tr>
								<tr>
									<th className="thead ">
									창업 연도
									</th>
									<td className="tbody">
									YYYY.MM.DD
									</td>
								</tr>
								<tr>
									<th className="thead ">
									회사 주소
									</th>
									<td className="tbody">
									서울특별시 종로구 청와대로 1
									</td>
								</tr>
								<tr>
									<th className="thead ">
									회사 전화번호
									</th>
									<td className="tbody">
									01012345678
									</td>
								</tr>
								<tr>
									<th className="thead ">
									회사 URL
									</th>
									<td className="tbody">
									<TextButton text="kotech.kotech.co.kr" />
									</td>
								</tr>
								<tr>
									<th className="thead ">
									관심 기술 분야
									</th>
									<td className="tbody">
									관심 기술 분야, 관심 기술 분야
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
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}
export default Component;