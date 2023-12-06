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
									부서/학과
								</th>
								<td className="tbody">
								전자공학
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
								이메일
								</th>
								<td className="tbody">
									<TextButton text="홈페이지 바로가기" />
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">기본 정보</p>
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
								회사명
								</td>
							</tr>
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
								회사명
								</th>
								<td className="tbody">
								회사명
								</td>
							</tr>
						</tbody>
					</table>
					</div>
						


					<p className="table-caption body-2-B">콘텐츠 작성자 표시</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
								프로필 이름
								</th>
								<td className="tbody">
								미나마수드
								</td>
							</tr>
							<tr>
								<th className="thead ">
								프로필 이미지
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
								한국기술HUB
								</td>
							</tr>
						</tbody>
					</table>

					<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="/technology/operator_list">
								<ButtonL text="목록으로" />
							</Link>
						</div>
						<div className="flex_">
							<Link href="#">
								<ButtonErrorL text="삭제 요청" />
							</Link>
							<Link href="#">
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