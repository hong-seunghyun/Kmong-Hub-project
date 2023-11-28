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
				<h1 className="title display-5-B">[(주)블래스트]</h1>

				<p className="table-caption body-2-B">기본정보</p>
				<table className="table-horizontal-container radius-20 body-3-R">
				<tbody>
					<tr>
						<th className="thead ">
							업체명
						</th>
						<td className="tbody">
							(주)블래스트
						</td>
					</tr>
					<tr>
						<th className="thead">
							대표자명
						</th>
						<td className="tbody">
							윌리엄
						</td>
					</tr>
					<tr>
						<th className="thead" >
							업종
						</th>
						<td className="tbody">
							AR/VR, 버츄얼 메타버스
						</td>
					</tr>
					<tr>
						<th className="thead">
							대표 전화번호
						</th>
						<td className="tbody">
							01012345678
						</td>
					</tr>
					<tr>
						<th className="thead">
							대표 이메일
						</th>
						<td className="tbody">
							kotech@kotech.co.kr
						</td>
					</tr>
					<tr>
						<th className="thead">
							업체 주소
						</th>
						<td className="tbody">
							서울시 강남구 서초대로 1길 11
						</td>
					</tr>
					<tr>
						<th className="thead">
							설립일
						</th>
						<td className="tbody">
							YYYY.MM.DD
						</td>
					</tr>
					<tr>
						<th className="thead">
							홈페이지 URL
						</th>
						<td className="tbody">
							<TextButton text="kotech.kotech.co.kr" />
						</td>
					</tr>
				</tbody>
			</table>
			<div className="btn-wrap flex_">
				<div className="flex_">
					<Link href="/transaction">
						<ButtonL text="목록" />
					</Link>
				</div>
				<div className="flex_">
					<Link href="/transaction/company_retouch">
						<ButtonErrorL text="삭제" />
					</Link>
					<Link href="/transaction/company_retouch">
						<Button text="수정" />
					</Link>
				</div>
			</div>
		</div>
		</div>
	)
};

export default Component;