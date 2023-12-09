import React, { useState } from "react";
import TextButton from "/src/components/buttons/text_button_underline_primary_s"
import ButtonL from "/src/components/buttons/button_outline_l"
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Label from "/src/components/label/label";
import Editor from "/src/components/editorBox/index"
import TableHead from "/src/components/table/table_vertical_head";
import TableCell from "/src/components/table/table_vertical_cell";
import OutlineBtn from "/src/components/buttons/button_outline_l"
import Pagnation from "/src/components/pagnation/pagnation";

const Component = () => {

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="contents- contents-technology content-support-detail">
					<h1 className="display-5-B title">과제명</h1>
					
					<p className="table-caption body-2-B">기본 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									제목
								</th>
								<td className="tbody">
									제목
								</td>
							</tr>
                            <tr>
								<th className="thead ">
									사업자 등록 여부
								</th>
								<td className="tbody">
									등록
								</td>
							</tr>
                            <tr>
								<th className="thead ">
									사업자 등록 번호
								</th>
								<td className="tbody">
									0123456789
								</td>
							</tr>
                            <tr>
								<th className="thead ">
									기업명
								</th>
								<td className="tbody">
									한국기술HUB
								</td>
							</tr>
                            <tr>
								<th className="thead ">
									사업자 주소
								</th>
								<td className="tbody">
									서울시 종로구
								</td>
							</tr>
                            <tr>
								<th className="thead ">
									담당자명
								</th>
								<td className="tbody">
									-
								</td>
							</tr>
                            <tr>
								<th className="thead ">
									소속
								</th>
								<td className="tbody">
									-
								</td>
							</tr>
                            <tr>
								<th className="thead ">
									직책
								</th>
								<td className="tbody">
									-
								</td>
							</tr>
                            <tr>
								<th className="thead ">
									휴대폰 번호
								</th>
								<td className="tbody">
									012345678
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
								<th className="thead">
									콘텐츠<br />
									썸네일
								</th>
								<td className="tbody">
									<div className="data-wrap flex_">
                                        <Label 
											backgroundColor="bg-violet-5" 
											fontColor="txt-violet-1" 
											text="보고서" 
											icon="false" 
											iconColor=""
                                        />										
                                        <div className="text-wrap flex_">
											<h6 className="body-3-B">파일명.확장자</h6>
											<p className="caption-R">파일크기 mb</p>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<div className="btn-page flex_">
						<OutlineBtn text="뒤로" />
					</div>

				</div>
			</div>
		</div>
	)
}
export default Component;