import React from "react";
import ButtonL from "/src/components/buttons/button_outline_l"
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Label from "/src/components/label/label";
import Editor from "/src/components/editorBox/index"
import { useState } from "react";
import { useLayoutEffect } from "react";
import { deleteBanner, getBannerDetails } from "../../asset/apis/design/banner";
import { useRouter } from "next/router";

const Component = () => {

	const router = useRouter();
	const [ data, setData ] = useState({});

	useLayoutEffect(() => {
		if(!router.isReady) return;
		getBannerDetails(router.query.bnrNo).then(res => {
			console.log(res.data);
			setData(res.data.data);
		}).catch(err => {
			console.log(err);
		})
	},[]);

	const removeBanner = () => {
		deleteBanner(router.query.bnrNo).then(res => {
			console.log(res.data);
			alert('게시물이 삭제되었습니다.');
			window.location = '/design/banner_list'
		}).catch(err => {
			console.log(err);
		});
	}

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
									{data.bnrNm}
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
									PC배너
								</th>
								<td className="tbody">
									<img src={data.pcImgPath} alt=""/>
								</td>
							</tr>
							<tr>
								<th className="thead">
									모바일 배너
								</th>
								<td className="tbody">
									<img src={data.mobImgPath} alt=""/>
								</td>
							</tr>
							<tr>
								<th className="thead">
									배너링크
								</th>
								<td className="tbody">
									{data.bnrPath}
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
								<ButtonErrorL text="삭제" onclick={removeBanner}/>
							</Link>
							<Link href={`/design/banner_retouch?bnrNo=${router.query.bnrNo}`}>
								<Button text="수정" />
							</Link>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}
export default Component;