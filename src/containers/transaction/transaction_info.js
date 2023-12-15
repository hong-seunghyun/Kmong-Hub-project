import React from "react";
import TextButton from "/src/components/buttons/text_button_underline_primary_s"
import ButtonL from "/src/components/buttons/button_outline_l"
import DropDownMenu from "/src/components/dropsMenu/drops_email_history_menu";
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Tabs from "/src/components/tabs/transaction_info_tab"
import Label from "/src/components/label/label";

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="transaction-container company_info transaction-info">
				<h1 className="title display-5-B">거래 제목명</h1>

				<Tabs active={0} />
				
				<p className="table-caption body-2-B">상태</p>
				<DropDownMenu />

				<p className="table-caption body-2-B">기본정보</p>
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
						<th className="thead">
							내용
						</th>
						<td className="tbody">
							법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다. 헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차, 내부규율과 사무처리에 관한 규칙을 제정할 수 있다. <br />
							각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나 무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다.
						</td>
					</tr>
					<tr>
						<th className="thead" >
							거래 기술
						</th>
						<td className="tbody">
							<Label 
								backgroundColor="bg-violet-5" 
								fontColor="txt-violet-1" 
								text="콘텐츠명 1" 
								icon="false" 
								iconColor=""
							/>
							<Label 
								backgroundColor="bg-violet-5" 
								fontColor="txt-violet-1" 
								text="콘텐츠명 2" 
								icon="false" 
								iconColor=""
							/>
							<Label 
								backgroundColor="bg-violet-5" 
								fontColor="txt-violet-1" 
								text="콘텐츠명 3" 
								icon="false" 
								iconColor=""
							/>
						</td>
					</tr>
					<tr>
						<th className="thead">
							발명자
						</th>
						<td className="tbody">
							발명자, 발명자, 발명자
						</td>
					</tr>
				</tbody>
			</table>

			<p className="table-caption body-2-B">수요 업체</p>
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
						<th className="thead">
							딤딩지
						</th>
						<td className="tbody">
							담당자, 담당자, 담당자
						</td>
					</tr>
					<tr>
						<th className="thead" >
							휴대폰 번호
						</th>
						<td className="tbody">
							0101345678
						</td>
					</tr>
					<tr>
						<th className="thead">
							직책 
						</th>
						<td className="tbody">
							-
						</td>
					</tr>
					<tr>
						<th className="thead">
							이메일 
						</th>
						<td className="tbody">
							-
						</td>
					</tr>
				</tbody>
			</table>

			<p className="table-caption body-2-B">공급 업체</p>
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
						<th className="thead">
							딤딩지
						</th>
						<td className="tbody">
							담당자, 담당자, 담당자
						</td>
					</tr>
					<tr>
						<th className="thead" >
							휴대폰 번호
						</th>
						<td className="tbody">
							0101345678
						</td>
					</tr>
					<tr>
						<th className="thead">
							직책 
						</th>
						<td className="tbody">
							-
						</td>
					</tr>
					<tr>
						<th className="thead">
							이메일 
						</th>
						<td className="tbody">
							-
						</td>
					</tr>
				</tbody>
			</table>

			<p className="table-caption body-2-B">중계 업체</p>
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
						<th className="thead">
							딤딩지
						</th>
						<td className="tbody">
							담당자, 담당자, 담당자
						</td>
					</tr>
					<tr>
						<th className="thead" >
							휴대폰 번호
						</th>
						<td className="tbody">
							0101345678
						</td>
					</tr>
					<tr>
						<th className="thead">
							직책 
						</th>
						<td className="tbody">
							-
						</td>
					</tr>
					<tr>
						<th className="thead">
							이메일 
						</th>
						<td className="tbody">
							-
						</td>
					</tr>
				</tbody>
			</table>

			<div className="btn-wrap flex_">
				<div className="flex_">
					<Link href="/transaction/transaction">
						<ButtonL text="목록으로" />
					</Link>
				</div>
				<div className="flex_">
						<Link href="#">
							<ButtonErrorL text="삭제" />
						</Link>
						<Link href="/transaction/transaction_info_retouch">
							<Button text="수정" />
						</Link>
					</div>
			</div>
		</div>
		</div>
	)
};

export default Component;