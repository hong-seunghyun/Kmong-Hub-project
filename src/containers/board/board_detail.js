import React, { useState } from "react";
import ButtonL from "/src/components/buttons/button_outline_l"
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";

const Component = () => {

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="board- board-detail">
					<h1 className="display-5-B title">게시물 조회</h1>
					
					<p className="table-caption body-2-B">기본 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									공지글 여부
								</th>
								<td className="tbody">
									O
								</td>
							</tr>
							<tr>
								<th className="thead ">
									제목
								</th>
								<td className="tbody">
								기술 이름
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
					<div className="m-24" />
					<p className="table-caption body-2-B">문의 내용</p>
					<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									내용
								</th>
								<td className="tbody">
								지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며, 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다. 형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나 무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다.
								</td>
							</tr>
							<tr>
								<th className="thead ">
									작성자
								</th>
								<td className="tbody">
								홍길동
								</td>
							</tr>
						</tbody>
					</table>

					<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="/board/board_list">
								<ButtonL text="목록으로" />
							</Link>
						</div>
						<div className="flex_">
							<Link href="#">
								<ButtonErrorL text="삭제" />
							</Link>
							<Link href="/board/board_detail_retouch">
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