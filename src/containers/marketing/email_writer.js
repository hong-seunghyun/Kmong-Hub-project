import React, { useState } from "react";
import Icon from "/src/components/icon/icon.tsx"
import Badge from "/src/components/label/badge"
import Input from "/src/components/textFields/textInput.tsx"
import Editor from "/src/components/editorBox/index"
import SearchBox from "/src/components/searchBar/search_bar_email_history"
import DropDownMenu from "/src/components/dropsMenu/drops_email_history_menu";
import TableHead from "/src/components/table/email_history_table_vertical_head"
import TableCell from "/src/components/table/email_history_table_vertical_cell"
import Pagnation from "/src/components/pagnation/pagnation";

import ButtonPrimary from "/src/components/buttons/button_primary_s"

const Component = () => {

	const TabContents = () => {
		return(
			<div className="sub-page-wrap">
				<div className="sub-page-01">
					<div className="sub-title body-2-B flex_">
						<Badge value="1"/>
							기본 정보
					</div>

					<div className="input-wrap">
						<Input labelText="제목" placeholder="제목을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
					</div>

					<div className="input-wrap">
						<Editor />
					</div>
				</div>
				<div className="sub-page-02">
					<div className="sub-title body-2-B flex_">
						<Badge value="2"/>
							발송 정보
					</div>
					<div className="input-wrap">
						<Input labelText="발신자 정보" placeholder="kotech@kotech.co.kr" valueType="" helperTextResult="none" iconState="false"/>
					</div>

					<div className="input-wrap">
						<Input labelText="발신자 정보" placeholder="kotech@kotech.co.kr" valueType="" helperTextResult="none" iconState="false"/>
					</div>

					<div className="input-wrap">
						<Input labelText="발신자 정보" placeholder="kotech@kotech.co.kr" valueType="" helperTextResult="none" iconState="false"/>
					</div>
				</div>
			</div>
		)
	}

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="marketing-contents email-writer">
					<h1 className="display-5-B flex_">
						이메일 발송 관리
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
				</div>
			</div>
		</div>
	)
}
export default Component;