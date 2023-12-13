import React from "react";
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
				<div className="contents- contents-technology contents-news contents-news-detail">
					<h1 className="display-5-B title flex_">
						배너 조회
					</h1>
					
					<p className="table-caption body-2-B">기본 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
								배너이름
								</th>
								<td className="tbody">
									O
								</td>
							</tr>
							<tr>
								<th className="thead">
									노출 기간
								</th>
								<td className="tbody">
									YYYY.MM.DD
								</td>
							</tr>
							<tr>
								<th className="thead">
									PC배너
								</th>
								<td className="tbody">
									<img src="/images/sample-img.png" alt=""/>
								</td>
							</tr>
							<tr>
								<th className="thead">
									모바일 배너
								</th>
								<td className="tbody">
									<img src="/images/sample-img.png" alt=""/>
								</td>
							</tr>
							<tr>
								<th className="thead">
									배너링크
								</th>
								<td className="tbody">
									www.naver.com
								</td>
							</tr>
						</tbody>
					</table>

					<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="/design/banner_list">
								<ButtonL text="목록으로" />
							</Link>
						</div>
						<div className="flex_">
							<Link href="#">
								<ButtonErrorL text="삭제" />
							</Link>
							<Link href="/design/banner_retouch">
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