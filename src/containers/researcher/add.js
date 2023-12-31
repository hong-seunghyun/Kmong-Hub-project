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
					연구자 등록/수정
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
				</div>

				<div className="sub-title body-2-B flex_">
					<Badge value="2"/>
						기본 정보
				</div>

                <div className="input-wrap">
					<Input labelText="연구자명" placeholder="연구자명을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

                <div className="input-wrap">
                    <Upload state="default" type="normal"/>
                    <p className="caption-R helper-txt">
						허용 사이즈: <span>800px x 800px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
					</p>
                </div>

				<div className="input-wrap input-search">
					<Input labelText="부서/학과" placeholder="부서/학과를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
					<Icon icon="search" size={16} stroke="none" color="#574AFF" /> 
					<Icon icon="delete" size={16} stroke="none" color="#B3B6B8" /> 
				</div>

				<div className="input-wrap">
					<Input importState="none" labelText="직책" placeholder="직책을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<Input importState="none" labelText="연구실" placeholder="연구실 명을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<Input importState="none" labelText="연구실 홈페이지" placeholder="연구실 홈페이지를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

                <div className="input-wrap">
					<Input importState="none" labelText="휴대폰 번호" placeholder="휴대폰 번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

                <div className="input-wrap">
					<Input importState="none" labelText="사무실 전화번호" placeholder="사무실 전화번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

                <div className="input-wrap">
					<Input importState="none" labelText="이메일" placeholder="이메일을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

                <div className="input-wrap">
					<Input importState="none" labelText="홈페이지" placeholder="홈페이지를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="content-4 content-wrap">
					<div className="sub-title body-2-B flex_">
						<Badge value="3"/>
							경력 정보
					</div>
					<div className="direct_input radius-8">
						<p className="direct_input_title flex_">
							경력
							<Icon icon="cancel" size={9} color="#464749" stroke="none" />
						</p>
						<Input importState="none" labelText="회사명" placeholder="회사명을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
						<div className="flex_ right-flex">
                            <div>
                                <p className="table-caption body-2-B">권리구분<span className="txt-violet-1">*</span></p>
                                <DropDownMenu />
                            </div>
                            <div>
                                <p className="table-caption body-2-B">권리기간<span className="txt-violet-1">*</span></p>
                                <DatePicker />
                                <CheckBox size="small" label="재직 중" />
                            </div>
                        </div>
                        <p className="table-caption body-2-B">담당 업무<span className="txt-violet-1">*</span></p>
                        <TextArea labelText="" placeholder="담당하신 업무와 성과에 대해 간단명료하게 적어주세요" valueType="" helperTextResult="none"/>

					</div>
					<div className="flex_ button-input custom-button-wrap">
						<div className="custom-button bg-white flex_ radius-8">
							<Icon icon="plus" size={13} color="#464749" stroke="none" />
							경력 추가
						</div>
					</div>
				</div>

				<div className="content- ">
					<div className="sub-title body-2-B flex_">
						<Badge value="4"/>
							연구할 동영상
					</div>
					<div className="input-wrap">
                        <Input importState="" labelText="유튜브 URL" placeholder="URL을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
                    </div>
				</div>

                <div className="content- ">
					<div className="sub-title body-2-B flex_">
						<Badge value="5"/>
							강의
					</div>
					<div className="input-wrap">
                        <p className="table-caption body-2-B">강의 내역<span className="txt-violet-1">*</span></p>
                        <TextArea labelText="" placeholder="강의 내역을 입력해 주세요." valueType="" helperTextResult="none"/>
                    </div>
				</div>

                <div className="content- ">
					<div className="sub-title body-2-B flex_">
						<Badge value="6"/>
							대외활동
					</div>
					<div className="input-wrap">
                        <p className="table-caption body-2-B">활동 내역<span className="txt-violet-1">*</span></p>
                        <TextArea labelText="" placeholder="활동 내역을 입력해 주세요." valueType="" helperTextResult="none"/>
                    </div>
				</div>

                <div className="content- ">
					<div className="sub-title body-2-B flex_">
						<Badge value="7"/>
							연구분야
					</div>
					<div className="input-wrap">
                        <p className="table-caption body-2-B">연구 내역<span className="txt-violet-1">*</span></p>
                        <TextArea labelText="" placeholder="연구 내역을 입력해 주세요." valueType="" helperTextResult="none"/>
                    </div>
				</div>

                <div className="content- ">
					<div className="sub-title body-2-B flex_">
						<Badge value="8"/>
							학력
					</div>
					<div className="input-wrap">
                        <p className="table-caption body-2-B">학력 내역<span className="txt-violet-1">*</span></p>
                        <TextArea labelText="" placeholder="학력 내역을 입력해 주세요." valueType="" helperTextResult="none"/>
                    </div>
				</div>

                <div className="flex_ check_flex">
                    <CheckBox size="small" label="한국기술HUB에서 연구원 정보를 수집/활용하는 것에 동의해요." />
                    <p className="caption-R txt-third">
                        등록된 정보는 연구원 등록 및 조회, 기술이전 및 사업화 지원 업무에만 사용돼요
                    </p>
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