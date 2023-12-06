import React from "react";
import Link from "next/link";
import Badge from "/src/components/label/badge";
import Input from "/src/components/textFields/textInput.tsx";
import ButtonL from "/src/components/buttons/button_outline_l"
import Button from "/src/components/buttons/button_primary_l"

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="board- board-add">

				<div className="head-wrap flex_">
					<h1 className="display-5-B">
						게시판 등록/수정
					</h1>
				</div>

				<div className="sub-title body-2-B flex_">
					<Badge value="1"/>
						기본 정보
				</div>
				<Input labelText="게시판 이름" placeholder="게시판 이름을 입력해주세요." helperTextResult="none" iconState="false"/>
			
				<div className="btn-wrap flex_">
					<div className="flex_">
						<Link href="#">
							<ButtonL text="초기화" />
						</Link>
						<Link href="/board">
							<Button text="수정" />
						</Link>
					</div>
				</div>
			</div>
				
		</div>
	)
};

export default Component;