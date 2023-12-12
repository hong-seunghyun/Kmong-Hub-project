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
						[제목]
						<span className="body-3-R flex_ txt-third">
							<Label 
								backgroundColor="bg-violet-5" 
								fontColor="txt-violet-1" 
								text="임시저장" 
								icon="false" 
								iconColor=""
							/>
							YYYY.MM.DD HH:MM 자동 저장
						</span>	
					</h1>
					
					<p className="table-caption body-2-B">콘텐츠 생성 유형</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									유형
								</th>
								<td className="tbody">
									기술문서 업로드
								</td>
							</tr>
							<tr>
								<th className="thead">
									파일
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

					<p className="table-caption body-2-B">뉴스 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									제목
								</th>
								<td className="tbody">
								약물 표면을 코팅해 약효의 지속력을 높이는 약물전달용 나노입자 안약
								</td>
							</tr>
							<tr>
								<th className="thead ">
								기술 분야
								</th>
								<td className="tbody">
								약물 표면을 코팅해 약효의 지속력을 높이는 약물전달용 나노입자 안약
								</td>
							</tr>
							<tr>
								<th className="thead">
									콘텐츠 <br />
									썸네일
								</th>
								<td className="tbody">
									<div className="data-wrap flex_">
										<img className="img-preview" src="/images/sample-img.png" alt="file" />
										<div className="text-wrap flex_">
											<h6 className="body-3-B">파일명.확장자</h6>
											<p className="caption-R">파일크기 mb</p>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">뉴스 내용</p>
					<Editor />

					<p className="table-caption body-2-B">뉴스 부가 정보</p>
					<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead">
									중요 키워드
								</th>
								<td className="tbody">
									<Label 
										backgroundColor="bg-violet-5" 
										fontColor="txt-violet-1" 
										text="AI 사용" 
										icon="false" 
										iconColor=""
									/>
									<Label 
										backgroundColor="bg-violet-5" 
										fontColor="txt-violet-1" 
										text="AI 사용" 
										icon="false" 
										iconColor=""
									/>
									<Label 
										backgroundColor="bg-violet-5" 
										fontColor="txt-violet-1" 
										text="AI 사용" 
										icon="false" 
										iconColor=""
									/>
								</td>
							</tr>
						</tbody>
					</table>

					<p className="table-caption body-2-B">카테고리</p>
					<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									카테고리
								</th>
								<td className="tbody">
									카테고리명
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
								<ButtonErrorL text="삭제" />
							</Link>
							<Link href="/news/temporary_news_writer">
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