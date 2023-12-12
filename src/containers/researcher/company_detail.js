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
					<h1 className="display-5-B title">소속 상세</h1>
					
					<p className="table-caption body-2-B">기본 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									소속
								</th>
								<td className="tbody">
								한국외국어대학교(서울)
								</td>
							</tr>
							<tr>
								<th className="thead ">
									부서/학과
								</th>
								<td className="tbody">
								컴퓨터공학과
								</td>
							</tr>
							<tr>
								<th className="thead ">
									최종 수정일
								</th>
								<td className="tbody">
								YYYY.MM.DD
								</td>
							</tr>
							
						</tbody>
					</table>

					<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="/researcher/company">
								<ButtonL text="목록으로" />
							</Link>
						</div>
						<div className="flex_">
							<Link href="#">
								<ButtonErrorL text="삭제" />
							</Link>
							<Link href="/researcher/company_add">
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