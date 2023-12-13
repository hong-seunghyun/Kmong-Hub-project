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
import DropDownMenu from "/src/components/dropsMenu/drops_menu";
import TextUnderline from "/src/components/buttons/text_button_underline_primary_s"
import CheckBox from "/src/components/radio/checkbox"
import ToggleSwich from "/src/components/radio/slide_toggle_btn"

const Component = () => {

	return(
		<div className="page-wrap">
			<div className="contents-technology contents- contents-news-writer contents-event-writer contents-technology-retouch content-support-detail">
				<h1 className="flex_ display-5-B">
					지원사업 등록/수정
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
					
				</div>

				<div className="sub-title body-2-B flex_">
					<Badge value="2"/>
						기본 정보
				</div>

				<div className="input-wrap">
					<Input labelText="제목" placeholder="제목" valueType="" helperTextResult="none" iconState="false"/>
				</div>

                <div className="input-wrap">
					<p className="table-caption body-2-B">콘텐츠 썸네일<span className="txt-violet-1">*</span></p>
					<Upload state="done" type="preview"/>
					<p className="caption-R helper-txt">
						허용 사이즈: <span>813px x 540px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
					</p>
				</div>
                <div className="m-24" />
                <Editor />

				<div className="input-wrap">
                    <p className="table-caption body-2-B">첨부 파일<span className="txt-violet-1">*</span></p>
					<Upload state="done" type="normal" file="docx"/>
                    <p className="caption-R helper-txt">
						파일 형식: <span>PDF,DOCX,HWP</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
					</p>
				</div>

				<div className="flex_ button-input">
					<Input importState="" labelText="대표 연구자" placeholder="대표 연구자를 선택해 주세요." valueType="" helperTextResult="none" iconState="false"/>
					<Link href="#">
                        <ButtonSecondary text="AI 수정" state=""/>
					</Link>
				</div>
				<div className="flex_ select-flex">
					<SelectLabel 
						backgroundColor="bg-violet-5" 
						fontColor="txt-violet-1" 
						text="AI 사용" 
						icon="true" 
						iconColor="#574AFF"
					/>
					<SelectLabel 
						backgroundColor="bg-violet-5" 
						fontColor="txt-violet-1" 
						text="AI 사용" 
						icon="true" 
						iconColor="#574AFF"
					/>
					<SelectLabel 
						backgroundColor="bg-violet-5" 
						fontColor="txt-violet-1" 
						text="AI 사용" 
						icon="true" 
						iconColor="#574AFF"
					/>
					<SelectLabel 
						backgroundColor="bg-violet-5" 
						fontColor="txt-violet-1" 
						text="AI 사용" 
						icon="true" 
						iconColor="#574AFF"
					/>
					<SelectLabel 
						backgroundColor="bg-violet-5" 
						fontColor="txt-violet-1" 
						text="AI 사용" 
						icon="true" 
						iconColor="#574AFF"
					/>
					<SelectLabel 
						backgroundColor="bg-violet-5" 
						fontColor="txt-violet-1" 
						text="AI 사용" 
						icon="true" 
						iconColor="#574AFF"
					/>
					<SelectLabel 
						backgroundColor="bg-violet-5" 
						fontColor="txt-violet-1" 
						text="AI 사용" 
						icon="true" 
						iconColor="#574AFF"
					/>
					<SelectLabel 
						backgroundColor="bg-violet-5" 
						fontColor="txt-violet-1" 
						text="AI 사용" 
						icon="true" 
						iconColor="#574AFF"
					/>
					<SelectLabel 
						backgroundColor="bg-violet-5" 
						fontColor="txt-violet-1" 
						text="AI 사용" 
						icon="true" 
						iconColor="#574AFF"
					/>
					<SelectLabel 
						backgroundColor="bg-violet-5" 
						fontColor="txt-violet-1" 
						text="AI 사용" 
						icon="true" 
						iconColor="#574AFF"
					/>
					<SelectLabel 
						backgroundColor="bg-violet-5" 
						fontColor="txt-violet-1" 
						text="AI 사용" 
						icon="true" 
						iconColor="#574AFF"
					/>
					<SelectLabel 
						backgroundColor="bg-violet-5" 
						fontColor="txt-violet-1" 
						text="AI 사용" 
						icon="true" 
						iconColor="#574AFF"
					/>
				</div>

				<div className="flex_ right-flex">
					<div>
						<p className="table-caption body-2-B">카테고리<span className="txt-violet-1">*</span></p>
						<DropDownMenu />
					</div>
					<div>
						<p className="table-caption body-2-B">신청기간<span className="txt-violet-1">*</span></p>
						<DatePicker />
					</div>
				</div>

                <div className="input-wrap">
					<Input labelText="소관 부처" placeholder="제목" valueType="" helperTextResult="none" iconState="false"/>
				</div>

                <div className="input-wrap">
					<Input labelText="수행 기관" placeholder="제목" valueType="" helperTextResult="none" iconState="false"/>
				</div>


				<div className="content-4 content-wrap">
                    <p className="table-caption body-2-B">모집 방법<span className="txt-violet-1">*</span></p>
                    <div className="flex_ flex-radio">
                        <Radio label="사이트 내 직접 모집" id="radio-a-1" name="radio" />
                        <Radio label="외부 사이트를 통해 모집" id="radio-a-2" name="radio" />
                    </div>
					<div className="direct_input radius-8">
						<p className="direct_input_title flex_ body-3-B">
							등록 요청 정보
						</p>
						<div className="swiper-flex flex_">
                            <div>
                                <h6 className="body-2-B">
                                    과제명
                                </h6>
                                <div className="flex_ radio-wrap">
                                    <ToggleSwich  id="toggle-a"  state="default"  />
                                    <span className="flex_">
                                        <Radio id="radio-a" label="필수" state="disabled" name="radio-0" />
                                        <Radio id="radio-b" label="선택" state="disabled" name="radio-0" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h6 className="body-2-B">
                                    사업자 주소
                                </h6>
                                <div className="flex_ radio-wrap">
                                    <ToggleSwich  id="toggle-a"  state="default"  />
                                    <span className="flex_">
                                        <Radio id="radio-a" label="필수" state="disabled" name="radio-0" />
                                        <Radio id="radio-b" label="선택" state="disabled" name="radio-0" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h6 className="body-2-B">
                                    휴대폰 번호
                                </h6>
                                <div className="flex_ radio-wrap">
                                    <ToggleSwich  id="toggle-a"  state="default"  />
                                    <span className="flex_">
                                        <Radio id="radio-a" label="필수" state="disabled" name="radio-0" />
                                        <Radio id="radio-b" label="선택" state="disabled" name="radio-0" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h6 className="body-2-B">
                                    사업자 등록 여부
                                </h6>
                                <div className="flex_ radio-wrap">
                                    <ToggleSwich  id="toggle-a"  state="default"  />
                                    <span className="flex_">
                                        <Radio id="radio-a" label="필수" state="disabled" name="radio-0" />
                                        <Radio id="radio-b" label="선택" state="disabled" name="radio-0" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h6 className="body-2-B">
                                    담당자명
                                </h6>
                                <div className="flex_ radio-wrap">
                                    <ToggleSwich  id="toggle-a"  state="default"  />
                                    <span className="flex_">
                                        <Radio id="radio-a" label="필수" state="disabled" name="radio-0" />
                                        <Radio id="radio-b" label="선택" state="disabled" name="radio-0" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h6 className="body-2-B">
                                    이메일
                                </h6>
                                <div className="flex_ radio-wrap">
                                    <ToggleSwich  id="toggle-a"  state="default"  />
                                    <span className="flex_">
                                        <Radio id="radio-a" label="필수" state="disabled" name="radio-0" />
                                        <Radio id="radio-b" label="선택" state="disabled" name="radio-0" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h6 className="body-2-B">
                                    사업자 등록번호
                                </h6>
                                <div className="flex_ radio-wrap">
                                    <ToggleSwich  id="toggle-a"  state="default"  />
                                    <span className="flex_">
                                        <Radio id="radio-a" label="필수" state="disabled" name="radio-0" />
                                        <Radio id="radio-b" label="선택" state="disabled" name="radio-0" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h6 className="body-2-B">
                                    소속
                                </h6>
                                <div className="flex_ radio-wrap">
                                    <ToggleSwich  id="toggle-a"  state="default"  />
                                    <span className="flex_">
                                        <Radio id="radio-a" label="필수" state="disabled" name="radio-0" />
                                        <Radio id="radio-b" label="선택" state="disabled" name="radio-0" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h6 className="body-2-B">
                                    첨부파일
                                </h6>
                                <div className="flex_ radio-wrap">
                                    <ToggleSwich  id="toggle-a"  state="default"  />
                                    <span className="flex_">
                                        <Radio id="radio-a" label="필수" state="disabled" name="radio-0" />
                                        <Radio id="radio-b" label="선택" state="disabled" name="radio-0" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h6 className="body-2-B">
                                    기업명
                                </h6>
                                <div className="flex_ radio-wrap">
                                    <ToggleSwich  id="toggle-a"  state="default"  />
                                    <span className="flex_">
                                        <Radio id="radio-a" label="필수" state="disabled" name="radio-0" />
                                        <Radio id="radio-b" label="선택" state="disabled" name="radio-0" />
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h6 className="body-2-B">
                                    직책
                                </h6>
                                <div className="flex_ radio-wrap">
                                    <ToggleSwich  id="toggle-a"  state="default"  />
                                    <span className="flex_">
                                        <Radio id="radio-a" label="필수" state="disabled" name="radio-0" />
                                        <Radio id="radio-b" label="선택" state="disabled" name="radio-0" />
                                    </span>
                                </div>
                            </div>
                        </div>
					</div>
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