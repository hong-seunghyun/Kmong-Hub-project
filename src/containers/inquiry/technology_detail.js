import React from "react";
import Tabs from "/src/components/tabs/technical_document_detail_tab_1"
import ButtonL from "/src/components/buttons/button_outline_l"
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Label from "/src/components/label/label";
import Editor from "/src/components/editorBox/index"
import TextBtn from "/src/components/buttons/text_button_underline_primary_m"
import Upload from "/src/components/upload/upload"
import TextArea from "/src/components/textFields/textArea.tsx"

const Component = () => {

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="contents- contents-technology inquiry- inquiry-detail">
					<h1 className="display-5-B title flex_">
						기술이전 문의 관리
					</h1>
					
					<p className="table-caption body-2-B">기본 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									유형
								</th>
								<td className="tbody">
									<Upload state="done" type="preview"/>
									<p className="caption-R helper-txt">
										허용 사이즈: <span>800px x 800px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
									</p>
								</td>
							</tr>
							<tr>
								<th className="thead">
									게시물 제목
								</th>
								<td className="tbody">
									기술 이름
								</td>
							</tr>
							<tr>
								<th className="thead">
									등록일
								</th>
								<td className="tbody">
									YYYY.MM.DD
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">문의 내용</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead">
									제목
								</th>
								<td className="tbody">
								문의 제목입니다.
								</td>
							</tr>
							<tr>
								<th className="thead">
									내용
								</th>
								<td className="tbody">
								지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며, 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다. 형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나 무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다.
								</td>
							</tr>
							<tr>
								<th className="thead">
								작성자
								</th>
								<td className="tbody">
								홍길동
								</td>
							</tr>
							<tr>
								<th className="thead">
								상태
								</th>
								<td className="tbody">
								답변 전
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">답변내용</p>
					<TextArea labelText="" placeholder="답변 내용을 입력해 주세요." valueType="" helperTextResult="none"/>

					<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="/inquiry/technology">
								<ButtonL text="목록으로" />
							</Link>
						</div>
						<div className="flex_">
							<Link href="/inquiry/technology_detail_2">
								<Button text="답변하기" />
							</Link>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}
export default Component;