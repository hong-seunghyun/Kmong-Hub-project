import React from "react"
import Link from "next/link"
import Icon from "/src/components/icon/icon.tsx"
import Label from "/src/components/label/label";
import ButtonErrorL from "/src/components/buttons/button_error_l"
import ButtonL from "/src/components/buttons/button_outline_l"
import PrimaryBtn from "/src/components/buttons/button_primary_l"

const Component = () => {

	const TabContents = () => {
		return(
			<div className="sub-page-wrap">
				<div className="sub-page-01">
					<div className="sub-title body-2-B flex_">
							기본 정보
					</div>

					<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									제목
								</th>
								<td className="tbody">
									제목명
								</td>
							</tr>
							<tr>
								<th className="thead ">
									내용
								</th>
								<td className="tbody">
									법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다. 헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차, 내부규율과 사무처리에 관한 규칙을 제정할 수 있다. <br />
									각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나 무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="sub-page-02">
					<div className="sub-title body-2-B flex_">
							발송 정보
					</div>
					<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>

							<tr>
								<th className="thead ">
									발송 상태
								</th>
								<td className="tbody">
									<Label backgroundColor="bg-violet-1" fontColor="txt-white" text="발송 예정" icon="false" iconColor=""/>
								</td>
							</tr>

							<tr>
								<th className="thead ">
									발신자 정보
								</th>
								<td className="tbody">
									2321@naver.com
								</td>
							</tr>

							<tr>
								<th className="thead ">
									예약 전송
								</th>
								<td className="tbody">
									<span className="txt-violet-1">[예]</span> YYYY.MM.DD HH:MM:SS
								</td>
							</tr>

							<tr>
								<th className="thead ">
									발신자 선택
								</th>
								<td className="tbody">
									선택 발송
								</td>
							</tr>

							<tr>
								<th className="thead ">
									발송대상
								</th>
								<td className="tbody">

									<div className="send-list flex_ radius-8">
										<span className="send-category txt-violet-1 caption-B">
											회원
										</span>
										<span className="send-name body-3-B">
											[남예준]
										</span>
										<span className="send-address caption-R flex_ txt-third">
											<span>[서울대학교]</span>
											<span className="bar"></span>
											<span className="email">[kotech@kotech.co.kr]</span>
										</span>
									</div>

									<div className="send-list flex_ radius-8">
										<span className="send-category txt-violet-1 caption-B">
											회원
										</span>
										<span className="send-name body-3-B">
											[남예준]
										</span>
										<span className="send-address caption-R flex_ txt-third">
											<span>[서울대학교]</span>
											<span className="bar"></span>
											<span className="email">[kotech@kotech.co.kr]</span>
										</span>
									</div>

									<div className="send-list flex_ radius-8">
										<span className="send-category txt-violet-1 caption-B">
											회원
										</span>
										<span className="send-name body-3-B">
											[남예준]
										</span>
										<span className="send-address caption-R flex_ txt-third">
											<span>[서울대학교]</span>
											<span className="bar"></span>
											<span className="email">[kotech@kotech.co.kr]</span>
										</span>
									</div>

									<div className="send-list flex_ radius-8">
										<span className="send-category txt-violet-1 caption-B">
											회원
										</span>
										<span className="send-name body-3-B">
											[남예준]
										</span>
										<span className="send-address caption-R flex_ txt-third">
											<span>[서울대학교]</span>
											<span className="bar"></span>
											<span className="email">[kotech@kotech.co.kr]</span>
										</span>
									</div>

									<div className="send-list flex_ radius-8">
										<span className="send-category txt-violet-1 caption-B">
											회원
										</span>
										<span className="send-name body-3-B">
											[남예준]
										</span>
										<span className="send-address caption-R flex_ txt-third">
											<span>[서울대학교]</span>
											<span className="bar"></span>
											<span className="email">[kotech@kotech.co.kr]</span>
										</span>
									</div>

									<div className="send-list flex_ radius-8">
										<span className="send-category txt-mint-1 caption-B">
											담당자
										</span>
										<span className="send-name body-3-B">
											[남예준]
										</span>
										<span className="send-address caption-R flex_ txt-third">
											<span>[서울대학교]</span>
											<span className="bar"></span>
											<span className="email">[kotech@kotech.co.kr]</span>
										</span>
									</div>

									<div className="send-list flex_ radius-8">
										<span className="send-category txt-mint-1 caption-B">
											담당자
										</span>
										<span className="send-name body-3-B">
											[남예준]
										</span>
										<span className="send-address caption-R flex_ txt-third">
											<span>[서울대학교]</span>
											<span className="bar"></span>
											<span className="email">[kotech@kotech.co.kr]</span>
										</span>
									</div>

								</td>
							</tr>

						</tbody>
					</table>
					
				</div>
			</div>
		)
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="marketing-contents ready-detail news_detail">
					<h1 className="display-5-B flex_">
						뉴스레터 조회
						<div className="flex_ body-3-R txt-second-default bg-violet-6">
							<span className="flex_">
								<Icon icon="mail" size={9} color="#574AFF" stroke="none" />
								남은 발송 횟수
							</span>
							<span className="flex_">
								<span className="txt-violet-1 body-3-B">
									5000
								</span>
								/
								<span className="txt-primary body-3-B total-cnt">
									7000
								</span>
							</span>
						</div>
					</h1>
					<TabContents />
					<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="/marketing/news">
								<ButtonL text="목록으로" />
							</Link>
						</div>
						<div className="flex_">
							<Link href="#">
							<ButtonErrorL text="삭제" />
							</Link>
							<Link href="/marketing/news_retouch">
							<PrimaryBtn text="수정" state="default"/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Component;