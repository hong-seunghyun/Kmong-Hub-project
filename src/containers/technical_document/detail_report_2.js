import React, { useState } from "react";
import Tabs from "/src/components/tabs/technical_document_detail_tab_1"
import ButtonL from "/src/components/buttons/button_outline_l"
import ButtonErrorL from "/src/components/buttons/button_error_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Label from "/src/components/label/label";
import Editor from "/src/components/editorBox/index"
import TextBtn from "/src/components/buttons/text_button_underline_primary_m"

const Component = () => {

	const [ data, setData ] = useState({
		tcqNm: 'aaa'
	});

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="contents- contents-technology contents-news contents-news-detail document-">
					<h1 className="display-5-B title flex_">
						{data.tcqNm}
					</h1>
					<Tabs active={1} />
					
					<p className="table-caption body-2-B">상세정보</p>
					<Editor />

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
	)
}
export default Component;