import React from "react";
import ButtonL from "/src/components/buttons/button_outline_l"
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Label from "/src/components/label/label";
import Editor from "/src/components/editorBox/index"
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import { getPopUpDetails } from "../../asset/apis/design/popup";
import { useState } from "react";

const Component = () => {

	const router = useRouter();
	const [ data, setData ] = useState({});

	useLayoutEffect(() => {
		if(!router.isReady) return;
		getPopUpDetails(router.query.popuNo).then(res => {
			console.log(res.data);
			setData(res.data.data);
		}).catch(err => {
			console.log(err);
		})
	},[]);

	return data != {} ? (
		<div className="container">
			<div className="page-wrap">
				<div className="contents- contents-technology contents-news contents-news-detail">
					<h1 className="display-5-B title flex_">
						팝업 조회
					</h1>
					
					<p className="table-caption body-2-B">기본 정보</p>
						<table className="table-horizontal-container radius-20 body-3-R">
						<tbody>
							<tr>
								<th className="thead ">
								팝업이름
								</th>
								<td className="tbody">
									{data.popuNm}
								</td>
							</tr>
							<tr>
								<th className="thead">
									노출 기간
								</th>
								<td className="tbody">
									{data.expsEndDtm && `${data.expsStrDtm.split(' ')[0]} ~ ${data.expsEndDtm.split(' ')[0]}`}
								</td>
							</tr>
							<tr>
								<th className="thead">
									PC팝업
								</th>
								<td className="tbody">
									<img src={data.pcImgPath} alt=""/>
								</td>
							</tr>
							<tr>
								<th className="thead">
									모바일 팝업
								</th>
								<td className="tbody">
									<img src={data.mobImgPath} alt=""/>
								</td>
							</tr>
							<tr>
								<th className="thead">
									팝업링크
								</th>
								<td className="tbody">
									{data.popuPath}
								</td>
							</tr>
						</tbody>
					</table>

					<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="/design/popup_list">
								<ButtonL text="목록으로" />
							</Link>
						</div>
						<div className="flex_">
							<Link href="#">
								<ButtonErrorL text="삭제" />
							</Link>
							<Link href="/design/popup_retouch">
								<Button text="수정" />
							</Link>
						</div>
					</div>

				</div>
			</div>
		</div>
	) : (<></>)
}
export default Component;