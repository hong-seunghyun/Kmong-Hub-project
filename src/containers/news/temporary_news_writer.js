import React from "react";
import ButtonL from "/src/components/buttons/button_outline_l"
import Button from "/src/components/buttons/button_primary_l"
import Link from "next/link";
import Label from "/src/components/label/label";
import SelectLabel from "/src/components/label/select_label";
import Editor from "/src/components/editorBox/index"
import Badge from "/src/components/label/badge"
import Radio from "/src/components/radio/radio"
import Upload from "/src/components/upload/upload"
import ButtonSecondary from "/src/components/buttons/button_secondary_l"
import Input from "/src/components/textFields/textInput.tsx"

const Component = () => {

	return(
		<div className="page-wrap">
			<div className="contents-technology contents- contents-news-writer">
				<h1 className="flex_ display-5-B">
					뉴스 등록/수정
				</h1>

				<div className="sub-title body-2-B flex_">
					<Badge value="1"/>
						유형 선택
				</div>

				<div className="content-1 content-wrap">
					<div className="flex_ radio-flex">
						<span className="flex_">
							<Radio label="기술문서 업로드" state="" name="radio-a" id="radio-a-1"/>
							<Label text="AI 사용" backgroundColor="bg-violet-5" fontColor="txt-violet-1" icon="true" iconColor="#574AFF"/>
						</span>
						<span className="flex_">
							<Radio label="파일 업로드" state="" name="radio-a" id="radio-a-2"/>
							<Label text="AI 사용" backgroundColor="bg-violet-5" fontColor="txt-violet-1" icon="true" iconColor="#574AFF"/>
						</span>
						<span className="flex_">
							<Radio label="텍스트 입력" state="" name="radio-a" id="radio-a-3"/>
							<Label text="AI 사용" backgroundColor="bg-violet-5" fontColor="txt-violet-1" icon="true" iconColor="#574AFF"/>
						</span>
						<span className="flex_">
							<Radio label="사용 안함" state="" name="radio-a" id="radio-a-4"/>
						</span>
					</div>
					
				</div>

				<div className="sub-title body-2-B flex_">
					<Badge value="2"/>
						뉴스 정보
				</div>

				<div className="input-wrap">
					<Input importState="" labelText="제목" placeholder="제목" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<Input importState="" labelText="부제목" placeholder="부제목" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<p className="table-caption body-2-B">콘텐츠 썸네일<span className="txt-violet-1">*</span></p>
					<Upload state="default" type="normal"/>
					<p className="caption-R helper-txt">
						허용 사이즈: <span>813px x 540px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
					</p>
				</div>

				
				<div className="content-2 content-wrap">
					<div className="sub-title body-2-B flex_">
						<Badge value="3"/>
							뉴스 내용
					</div>
					<Editor />
					<div className="button-wrap">
						<ButtonSecondary text="AI 수정" state=""/>
					</div>
				</div>

				<div className="content-3 content-wrap">
					<div className="sub-title body-2-B flex_">
						<Badge value="4"/>
							뉴스 부가 정보
					</div>
					<div className="flex_ button-input">
						<Input importState="" labelText="중요 키워드" placeholder="공동 연구자를 선택해 주세요." valueType="" helperTextResult="none" iconState="false"/>
						<ButtonSecondary text="AI 수정" state=""/>
					</div>
				</div>

				<div className="content-4 content-wrap">
					<div className="sub-title body-2-B flex_">
						<Badge value="5"/>
							카테고리
					</div>
					<Input importState="none" labelText="" placeholder="한국기술HUB" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="btn-wrap flex_">
					<div className="flex_">
						<Link href="#">
							<ButtonL text="초기화" />
						</Link>
						<Link href="/news/news_writer">
							<Button text="저장" />
						</Link>
					</div>
				</div>
				


			</div>
		</div>
	)
}
export default Component;