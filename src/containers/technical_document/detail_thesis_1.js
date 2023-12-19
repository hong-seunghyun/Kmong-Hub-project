import React from "react";
import Tabs from "/src/components/tabs/technical_document_detail_tab_1"
import ButtonL from "/src/components/buttons/button_outline_l"
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Label from "/src/components/label/label";
import Editor from "/src/components/editorBox/index"
import TextBtn from "/src/components/buttons/text_button_underline_primary_m"
import { useState } from "react";
import { useRouter } from "next/router";
import { getTechDetails } from "../../asset/apis/tech";
import { useLayoutEffect } from "react";

const Component = () => {

	const router = useRouter();
	const [ data, setData ] = useState({
		tcqNm: '기술기술',
		techDocDetails: [
			{
				filePath: 'asdfasdf'
			}
		],
		orgCntn: 'aaa',
		ivtNm: 'bbb',
		sbmyn: 'ccc',
		apyAd: 'ddd',
		tdcNo: 'eee',
		orgnNm: 'fff',
	});

	useLayoutEffect(() => {
		if(!router.isReady) return;
		const no = router.query.no;
		getTechDetails(no).then(res => {
			console.log(res.data);
			setData(res.data.data);
		}).catch(err => {
			console.log(err);
		});
	},[]);

	return data ? (
		<div className="container">
			<div className="page-wrap">
				<div className="contents- contents-technology contents-news contents-news-detail document-">
					<h1 className="display-5-B title flex_">
						{data.tcqNm}
					</h1>
					<Tabs active={0} />
					
					<p className="table-caption body-2-B">기본 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
									유형
								</th>
								<td className="tbody">
									<Label 
											backgroundColor="bg-violet-5" 
											fontColor="txt-violet-1" 
											text="논문" 
											icon="false" 
											iconColor=""
										/>
								</td>
							</tr>
							<tr>
								<th className="thead">
									연구기관
								</th>
								<td className="tbody">
									{data.orgnNm}
								</td>
							</tr>
							<tr>
								<th className="thead">
									문서번호
								</th>
								<td className="tbody">
									{data.tdcNo}
								</td>
							</tr>
							<tr>
								<th className="thead">
									출원일자
								</th>
								<td className="tbody">
									{data.apyAd}
								</td>
							</tr>
							<tr>
								<th className="thead">
									투고 여부
								</th>
								<td className="tbody">
									{data.sbmyn}
								</td>
							</tr>
							<tr>
								<th className="thead">
									발명자
								</th>
								<td className="tbody">
									{data.ivtNm}
								</td>
							</tr>
							<tr>
								<th className="thead">
								출처
								</th>
								<td className="tbody">
								{data.orgCntn}
								</td>
							</tr>
							<tr>
								<th className="thead">
								원문
								</th>
								<td className="tbody">
									<TextBtn text="PDF 보기" link={data.techDocDetails[0].filePath}/>
								</td>
							</tr>
						</tbody>
					</table>

					<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="/technical_document">
								<ButtonL text="목록으로" />
							</Link>
						</div>
						<div className="flex_">
							<Link href="#">
								<ButtonErrorL text="삭제 요청" />
							</Link>
							<Link href="/technical_document/retouch_patent">
								<Button text="수정 요청" />
							</Link>
						</div>
					</div>

				</div>
			</div>
		</div>
	) : (<></>)
}
export default Component;