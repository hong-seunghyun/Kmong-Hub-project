import React from "react";
import TextButton from "/src/components/buttons/text_button_underline_primary_s"
import ButtonL from "/src/components/buttons/button_outline_l"
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="transaction-container company_info">
				<h1 className="title display-5-B">담당자 상세</h1>

				<p className="table-caption body-2-B">기본정보</p>
				<table className="table-horizontal-container radius-20 body-3-R">
				<tbody>
					<tr>
						<th className="thead ">
							업체명
						</th>
						<td className="tbody">
							업체명
						</td>
					</tr>
					<tr>
						<th className="thead ">
							담당자명
						</th>
						<td className="tbody">
						담당자명
						</td>
					</tr>
					<tr>
						<th className="thead" >
							휴대폰 번호
						</th>
						<td className="tbody">
							01012345678
						</td>
					</tr>
					<tr>
						<th className="thead">
							사무실 전화번호
						</th>
						<td className="tbody">
							0212345678
						</td>
					</tr>
					<tr>
						<th className="thead">
							직책
						</th>
						<td className="tbody">
							직책명
						</td>
					</tr>
					<tr>
						<th className="thead">
							부서
						</th>
						<td className="tbody">
							부서명
						</td>
					</tr>
					<tr>
						<th className="thead">
							이메일
						</th>
						<td className="tbody">
						kotech@kotech.co.kr
						</td>
					</tr>
					<tr>
						<th className="thead">
							팩스 번호
						</th>
						<td className="tbody">
							0212345678
						</td>
					</tr>
				</tbody>
			</table>
			<div className="btn-wrap flex_">
				<div className="flex_">
					<Link href="/transaction/manager_list">
						<ButtonL text="목록" />
					</Link>
				</div>
				<div className="flex_">
					<Link href="#">
						<ButtonErrorL text="삭제" />
					</Link>
					<Link href="/transaction/manager_retouch">
						<Button text="수정" />
					</Link>
				</div>
			</div>
		</div>
		</div>
	)
};

export default Component;