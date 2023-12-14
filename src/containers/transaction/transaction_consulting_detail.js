import React from "react";
import TextButton from "/src/components/buttons/text_button_underline_primary_s"
import ButtonL from "/src/components/buttons/button_outline_l"
import DropDownMenu from "/src/components/dropsMenu/drops_email_history_menu";
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Tabs from "/src/components/tabs/transaction_info_tab"
import Input from "/src/components/textFields/textInput.tsx"
import TextArea from "/src/components/textFields/textArea.tsx"
import ButtonSecondary from "/src/components/buttons/button_secondary_l"
import Label from "/src/components/label/label";

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="transaction-container company_info transaction- transaction-info transaction-consulting">
				<h1 className="title display-5-B">거래 제목명</h1>

				<Tabs active={0} />
				
				<p className="table-caption body-2-B">상태</p>
				<DropDownMenu />

				<p className="table-caption body-2-B">기본정보</p>
				<table className="table-horizontal-container radius-20 body-3-R">
				<tbody>
					<tr>
						<th className="thead ">
							상담일자
						</th>
						<td className="tbody">
							YYYY.MM.DD
						</td>
					</tr>
					<tr>
						<th className="thead">
							제목
						</th>
						<td className="tbody">
							제목명
						</td>
					</tr>
					<tr>
						<th className="thead" >
							문의 유형
						</th>
						<td className="tbody">
							전화
						</td>
					</tr>
					<tr>
						<th className="thead">
							운영자
						</th>
						<td className="tbody">
							운영자
						</td>
					</tr>
				</tbody>
			</table>

			<p className="table-caption body-2-B">상담 내용</p>
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
							상담 요청자
						</th>
						<td className="tbody">
							담당자, 담당자, 담당자
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
						<th className="thead" >
							휴대폰 번호
						</th>
						<td className="tbody">
							0101345678
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
					<tr>
						<th className="thead">
							문의 대상 
						</th>
						<td className="tbody">
						문의 대상 
						</td>
					</tr>
					<tr>
						<th className="thead">
							내용
						</th>
						<td className="tbody">
							법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다. 헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차, 내부규율과 사무처리에 관한 규칙을 제정할 수 있다.
							각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나 무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다.
						</td>
					</tr>
				</tbody>
			</table>

			<p className="table-caption body-2-B">상담 결과</p>

			<div className="flex_ input-wrap button-input">
				<Input labelText="상담 요청자" placeholder="상담 요청자를 선택해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				<Link href="#">
						<ButtonSecondary text="선택" state="defalut"/>
					</Link>
			</div>

			<div className="input-wrap">
				<TextArea labelText="내용" placeholder="공무원의 직무상 불법행위로 손해를 받은 국민은 법률이 정하는 바에 의하여 국가 또는 공공단체에 정당한 배상을 청구할 수 있다. 이 경우 공무원 자신의 책임은 면제되지 아니한다." valueType="" helperTextResult="none"/>
			</div>

			<div className="btn-wrap flex_">
				<div className="flex_">
					<Link href="/transaction/transaction_consulting">
						<ButtonL text="목록으로" />
					</Link>
				</div>
				<div className="flex_">
						<Link href="#">
							<ButtonErrorL text="삭제" />
						</Link>
						<Link href="/transaction/transaction_consulting_add">
							<Button text="수정" />
						</Link>
					</div>
			</div>
		</div>
		</div>
	)
};

export default Component;