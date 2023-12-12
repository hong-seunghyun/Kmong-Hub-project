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
			<div className="contents-technology contents- contents-news-writer contents-event-writer">
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
									40
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
					<TextArea labelText="" placeholder="뉴스에 대한 상세 정보를 입력해 주시면, 이를 바탕으로 AI가 콘텐츠를 자동 생성해요." valueType="" helperTextResult="none"/>
				</div>

				<div className="sub-title body-2-B flex_">
					<Badge value="2"/>
						기본 정보
				</div>

				<div className="flex_ button-input">
					<Input importState="" labelText="제목" placeholder="제목" valueType="" helperTextResult="none" iconState="false"/>
					<ButtonSecondary text="AI 수정" state=""/>
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

				<div className="content-3 content-wrap">
					<div className="flex_ button-input">
						<Input importState="" labelText="중요 키워드" placeholder="공동 연구자를 선택해 주세요." valueType="" helperTextResult="none" iconState="false"/>
						<ButtonSecondary text="AI 수정" state=""/>
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
					<div className="m-24" />
					<div className="flex_ button-input">
						<Input importState="" labelText="카테고리" placeholder="카테고리" valueType="" helperTextResult="none" iconState="false"/>
						<ButtonSecondary text="AI 수정" state=""/>
					</div>
				</div>

				<div className="content-4 content-wrap">
					<div className="sub-title body-2-B flex_">
						<Badge value="3"/>
							행사 정보
					</div>
					<p className="table-caption body-2-B">행사 장소<span className="txt-violet-1">*</span></p>
					<div className="flex_ radio-flex">
						<span className="flex_">
							<Radio label="온라인" state="" name="radio-b" id="radio-b-2"/>
						</span>
						<span className="flex_">
							<Radio label="오프라인" state="" name="radio-b" id="radio-b-3"/>
						</span>
						<span className="flex_">
							<Radio label="온·오프라인" state="" name="radio-b" id="radio-b-4"/>
						</span>
					</div>

					<Input importState="none" labelText="" placeholder="kotech@kotech.co.kr" valueType="" helperTextResult="none" iconState="false"/>
					
					<p className="table-caption body-2-B">모집 방법<span className="txt-violet-1">*</span></p>
					<div className="flex_ radio-flex">
						<span className="flex_">
							<Radio label="사이트 내 직접 모집" state="" name="radio-c" id="radio-c-2"/>
						</span>
						<span className="flex_">
							<Radio label="외부 사이트를 통해 모집" state="" name="radio-c" id="radio-c-3"/>
						</span>
					</div>
				</div>

				<div className="flex_ date-flex">
					<div>
						<p className="table-caption body-2-B">모집 일정<span className="txt-violet-1">*</span></p>
						<DatePicker />
					</div>
					<div>
						<p className="table-caption body-2-B">행사 일정<span className="txt-violet-1">*</span></p>
						<DatePicker />
					</div>
				</div>

				<div className="content-5 content-wrap">
					<p className="table-caption body-2-B">요금 구분<span className="txt-violet-1">*</span></p>
					<div className="flex_ radio-flex">
						<span className="flex_">
							<Radio label="무료" state="" name="radio-c" id="radio-c-2"/>
						</span>
						<span className="flex_">
							<Radio label="유료" state="" name="radio-c" id="radio-c-3"/>
						</span>
					</div>

					<Input importState="none" labelText="" placeholder="kotech@kotech.co.kr" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="flex_ input-flex">
					<Input importState="" labelText="입금 은행" placeholder="kb국민" valueType="" helperTextResult="none" iconState="false"/>
					<Input importState="" labelText="입금 계좌" placeholder="0123456789" valueType="" helperTextResult="none" iconState="false"/>
					<Input importState="" labelText="예금주" placeholder="미나 마수드" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="flex_ button-input custom-wrap-01">
					<Input importState="" labelText="모집 인원" placeholder="모집 인원을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
					<OutlineBtn text={<Icon icon="minus" size={3} color="#242424" stroke="none"/>}/>
					<OutlineBtn text={<Icon icon="plus" size={16} color="#242424" stroke="none"/>}/>
				</div>

				<div className="content-4 content-wrap">
					<div className="sub-title body-2-B flex_">
						<Badge value="4"/>
						설문 조사
						<ToggleButton  id="toggle-b"  state="default"/>
					</div>
					<div className="content-box radius-8 border-gray-3">
						<p className="flex_ body-3-B txt-second-default">
							질문 1
							<Icon icon="cancel" size={8} color="#242424" stroke="none" />
						</p>
						<div className="flex_ radio-flex">
							<span className="flex_">
								<Radio label="필수" state="" name="radio-d" id="radio-d-2"/>
							</span>
							<span className="flex_">
								<Radio label="선택" state="" name="radio-d" id="radio-d-3"/>
							</span>
						</div>
						<div className="flex_ search-box">
							<DropDownMenu />
							<SearchBox />
						</div>
						<div className="m-24" />
						<p className="flex_ body-3-B txt-second-default">
							선택지
							<TextUnderline text="순서변경" />
						</p>
						<div className="flex_ button-input custom-wrap-01">
							<span className="flex_">
								<CheckBox label="" size="small" />
							</span>
							<Input importState="" labelText="" placeholder="하느님이 보우하사 우리나라 만세" valueType="" helperTextResult="none" iconState="false"/>
							<OutlineBtn text={<Icon icon="plus" size={16} color="#242424" stroke="none"/>}/>
						</div>
						<div className="flex_ button-input custom-wrap-01">
							<span className="flex_">
								<CheckBox label="" size="small" />
							</span>
							<Input importState="" labelText="" placeholder="하느님이 보우하사 우리나라 만세" valueType="" helperTextResult="none" iconState="false"/>
							<OutlineBtn text={<Icon icon="minus" size={3} color="#242424" stroke="none"/>}/>
							<OutlineBtn text={<Icon icon="plus" size={16} color="#242424" stroke="none"/>}/>
						</div>
					</div>
				</div>

				<div className="button- radius-8 border-gray-3 flex_">
					<Icon icon="plus" size={13} color="#242424" stroke="none"/>
					질문 추가
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