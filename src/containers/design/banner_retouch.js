import React from "react";
import Badge from "/src/components/label/badge"
import Radio from "/src/components/radio/radio"
import Input from "/src/components/textFields/textInput.tsx";
import DatePicker from "/src/components/date/date-picker"
import Upload from "/src/components/upload/upload"
import ButtonL from "/src/components/buttons/button_outline_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";

const Component = () => {
	return(
		<div className="page-wrap">
			<div className="design- design-popup">

				<div className="head-wrap flex_">
					<h1 className="display-5-B">
						배너 등록/수정
					</h1>
				</div>

				<div className="sub-title body-2-B flex_">
					<Badge value="1"/>
						기본 정보
				</div>

				<div className="box-">
					<Input labelText="배너 이름" placeholder="테스트명" valueType="" helperTextResult="none" iconState="false"/>
				</div>
				<div className="box-">
					<p className="table-caption body-2-B">로고 이미지<span className="txt-violet-1">*</span></p>
					<Radio label="노출 무제한" id="radio-a" name="radio-a"/>
					<DatePicker />
				</div>
				<div className="box-">
					<p className="table-caption body-2-B">PC 배너<span className="txt-violet-1">*</span></p>
					<Upload state="done" type="preview" />
					<p className="caption-R helper-txt">
						허용 사이즈: <span>Npx x Npx</span> <span className="bar">|</span> 파일 형식: <span>PNG</span><span className="bar">|</span> 최대 파일 크기: <span>00mb</span>
					</p>
				</div>
				<div className="box-">
					<p className="table-caption body-2-B">모바일 배너<span className="txt-violet-1">*</span></p>
					<Upload state="done" type="preview" />
					<p className="caption-R helper-txt">
						허용 사이즈: <span>Npx x Npx</span> <span className="bar">|</span> 파일 형식: <span>PNG</span><span className="bar">|</span> 최대 파일 크기: <span>00mb</span>
					</p>
				</div>
				<div className="box-">
					<Input labelText="배너 링크" placeholder="www.google.co.kr" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="btn-wrap flex_">
						<div className="flex_">
							<Link href="#">
								<ButtonL text="초기화" />
							</Link>
							<Link href="/design/banner_list">
								<Button text="저장" />
							</Link>
						</div>
					</div>
			</div>
				
		</div>
	)
};

export default Component;