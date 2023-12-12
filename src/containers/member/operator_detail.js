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
				<div className="member- member-detail">
					<h1 className="display-5-B title">운영자 상세</h1>
					
					<p className="table-caption body-2-B">기본 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									이름
								</th>
								<td className="tbody">
									기술문서 업로드
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
									소속
								</th>
								<td className="tbody">
								한국기술HUB
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
						</tbody>
					</table>

					<p className="table-caption body-2-B">권한 설정</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
								권한 설정
								</th>
								<td className="tbody">
								사이트 설정, 콘텐츠 관리
								</td>
							</tr>
						</tbody>
					</table>


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
							<Link href="/transaction">
								<ButtonL text="목록으로" />
							</Link>
						</div>
						<div className="flex_">
							<Link href="#">
								<ButtonErrorL text="삭제 요청" />
							</Link>
							<Link href="/member/operator_detail_retouch">
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