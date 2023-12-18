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
import DatePicker from "/src/components/date/date-picker"
import OutlineBtn from "/src/components/buttons/button_outline_l"
import ToggleButton from "/src/components/radio/slide_toggle_btn";
import SearchBox from "/src/components/searchBar/search_bar_email_history"
import DropDownMenu from "/src/components/dropsMenu/drops_email_history_menu";
import TextUnderline from "/src/components/buttons/text_button_underline_primary_s"
import CheckBox from "/src/components/radio/checkbox"

const Component = () => {

	return(
		<div className="page-wrap">
			<div className="contents-technology contents- contents-news-writer contents-event-writer contents-add">
				<h1 className="flex_ display-5-B">
				행사 등록/수정
					<span className="flex_ ai-cnt bg-lightGray radius-8">
						<span className="flex_ caption-R txt-disabled">
							<Icon icon="ai" size={13} color="#574AFF" stroke="" />
							AI 생성 1회 사용 중
						</span>
						<span className="flex_ total-cnt body-3-R txt-second-default">
							AI 수정 가능 횟수
							<span className="flex_ number- body-3-B">
								<span className="left txt-violet-1">
									20
								</span>
								<span className="txt-disabled">
									/
								</span>
								<span className="total ">
									40
								</span>
							</span>
						</span>
					</span>
				</h1>

				<div className="sub-title body-2-B flex_">
					<Badge value="1"/>
						유형 선택
				</div>

				<div className="content-1 content-wrap">
					<div className="flex_ radio-flex">
						<span className="flex_">
							<Radio label="파일 업로드" state="disabled" name="radio-a" id="radio-a-2"/>
							<Label text="AI 사용" backgroundColor="bg-violet-5" fontColor="txt-violet-1" icon="true" iconColor="#574AFF"/>
						</span>
						<span className="flex_">
							<Radio label="텍스트 입력" state="disabled" name="radio-a" id="radio-a-3"/>
							<Label text="AI 사용" backgroundColor="bg-violet-5" fontColor="txt-violet-1" icon="true" iconColor="#574AFF"/>
						</span>
						<span className="flex_">
							<Radio label="사용 안함" state="disabled" name="radio-a" id="radio-a-4"/>
						</span>
					</div>
					<Upload state="default" type="normal" />
					<div className="flex_ btn_flex">
						<Link href="#">
							<Button text="AI 수정" />
						</Link>
					</div>
					
				</div>

				<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="/technology">
								<ButtonL text="이전으로" />
							</Link>
						</div>
						<div className="flex_">
							<Link href="#">
								<ButtonL text="초기화" />
							</Link>
							<Link href="#">
								<Button text="저장" />
							</Link>
						</div>
					</div>
				

			</div>
		</div>
	)
}
export default Component;