import React from "react";
import Link from "next/link";
import Badge from "/src/components/label/badge";
import Input from "/src/components/textFields/textInput.tsx";
import ButtonL from "/src/components/buttons/button_outline_l"
import Button from "/src/components/buttons/button_primary_l"
import CheckBox from "/src/components/radio/checkbox"
import Editor from "/src/components/editorBox/index"
const Component = () => {
	return(
		<div className="page-wrap">
			<div className="board- board-add board-writer">

				<div className="head-wrap flex_">
					<h1 className="display-5-B">
						게시물 등록/수정
					</h1>
				</div>

				<div className="sub-title body-2-B flex_">
					<Badge value="1"/>
						기본 정보
				</div>
				<CheckBox label="공지글로 설정" id="note_" size="small"/>
				<div className="m-24" />
				<Input labelText="제목" placeholder="게시물 이름을 입력해 주세요." helperTextResult="none" iconState="false"/>
				<div className="m-24" />
				<Editor />
				<div className="btn-wrap flex_">
					<div className="flex_">
						<Link href="#">
							<ButtonL text="초기화" />
						</Link>
						<Link href="/board/board_list">
							<Button text="수정" />
						</Link>
					</div>
				</div>
			</div>
				
		</div>
	)
};

export default Component;