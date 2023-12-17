import React from "react";
import ButtonL from "/src/components/buttons/button_outline_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Label from "/src/components/label/label";
import SelectLabel from "/src/components/label/select_label";
import Editor from "/src/components/editorBox/index"
import Icon from "/src/components/icon/icon.tsx"
import Badge from "/src/components/label/badge"
import Radio from "/src/components/radio/radio"
import Upload from "/src/components/upload/upload"
import ButtonSecondary from "/src/components/buttons/button_secondary_l"
import Input from "/src/components/textFields/textInput.tsx"
import TextArea from "/src/components/textFields/textArea.tsx"
import DatePicker from "/src/components/date/date-picker-single"
import OutlineBtn from "/src/components/buttons/button_outline_l"
import ToggleButton from "/src/components/radio/slide_toggle_btn";
import SearchBox from "/src/components/searchBar/search_bar_email_history"
import DropDownMenu from "/src/components/dropsMenu/drops_menu";
import TextUnderline from "/src/components/buttons/text_button_underline_primary_s"
import CheckBox from "/src/components/radio/checkbox"

const Component = () => {

	return(
		<div className="page-wrap">
			<div className="contents-technology contents- contents-news-writer contents-event-writer contents-technology-retouch researcher-add researcher-contents">
				<h1 className="flex_ display-5-B">
					소속 등록/수정
				</h1>

				<div className="sub-title body-2-B flex_">
					<Badge value="1"/>
						기본 정보
				</div>

				<div className="content-1 content-wrap">
					<div className="input-wrap input-search">
						<Input labelText="소속" placeholder="소속을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
						<Icon icon="search" size={16} stroke="none" color="#574AFF" /> 
						<Icon icon="delete" size={16} stroke="none" color="#B3B6B8" /> 
					</div>
				</div>

				<div className="input-wrap">
					<Input labelText="부서/학과" placeholder="부서 또는 학과를 입력해주세요 (예: 컴퓨터공학과)" valueType="" helperTextResult="none" iconState="false"/>
					<p className="caption-R helper-txt">
						학부표기 방법: 컴퓨터공학부 / 컴퓨터공학과
					</p>
				</div>

				<div className="btn-wrap flex_">
					<div className="flex_">
						<Link href="#">
							<ButtonL text="초기화" />
						</Link>
						<Link href="/researcher/company">
							<Button text="저장" />
						</Link>
					</div>
				</div>

			</div>
		</div>
	)
}
export default Component;
