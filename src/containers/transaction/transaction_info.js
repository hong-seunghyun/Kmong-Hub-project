import React from "react";
import TextButton from "/src/components/buttons/text_button_underline_primary_s"
import ButtonL from "/src/components/buttons/button_outline_l"
import DropDownMenu from "/src/components/dropsMenu/drops_email_history_menu";
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="transaction-container company_info transaction-info">
				<h1 className="title display-5-B">거래 제목명</h1>
				
				<p className="table-caption body-2-B">상태</p>
				<DropDownMenu />

				<p className="table-caption body-2-B">기본정보</p>
				<table className="table-horizontal-container radius-20 body-3-R">
				<tbody>
					<tr>
						<th className="thead ">
							요청일자
						</th>
						<td className="tbody">
							YYYY.MM.DD
						</td>
					</tr>
					<tr>
						<th className="thead">
							거래 관련 기술
						</th>
						<td className="tbody">
							윌리엄
						</td>
					</tr>
					<tr>
						<th className="thead" >
							이메일
						</th>
						<td className="tbody">
						kotech@kotech.co.kr
						</td>
					</tr>
					<tr>
						<th className="thead">
							요청자
						</th>
						<td className="tbody">
						<TextButton text="요청자명" />
						</td>
					</tr>
					<tr>
						<th className="thead">
							제목
						</th>
						<td className="tbody">
						제목
						</td>
					</tr>
					<tr>
						<th className="thead">
							내용
						</th>
						<td className="tbody">
							내용
						</td>
					</tr>
					<tr>
						<th className="thead">
						도입 목적
						</th>
						<td className="tbody">
						특허권 확보
						</td>
					</tr>
					<tr>
						<th className="thead">
						거래 유형
						</th>
						<td className="tbody">
						기술 매매
						</td>
					</tr>
					<tr>
						<th className="thead">
						도입 희망 시기
						</th>
						<td className="tbody">
						즉시
						</td>
					</tr>
					<tr>
						<th className="thead">
						도입 시 예상금액
						</th>
						<td className="tbody">
						1,000만원 이하
						</td>
					</tr>
				</tbody>
			</table>
			<div className="btn-wrap flex_">
				<div className="flex_">
					<Link href="/transaction/transaction">
						<ButtonL text="목록" />
					</Link>
				</div>
			</div>
		</div>
		</div>
	)
};

export default Component;