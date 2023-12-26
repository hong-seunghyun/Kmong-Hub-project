import React, {useState} from "react";
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
	const [ isRadioValue, setRadioValue ] = useState('');

	const PageB = () => {
		return(
			<div>
				<Upload state="default" type="normal" />
        <div className="flex_ btn_flex">
          <Link href="/support/add_select_document">
            <Button text="AI 수정" />
          </Link>
        </div>
			</div>
		)
	}
	const PageC = () => {
		return(
			<div>
				<TextArea labelText="" placeholder="기술에 대한 상세 정보를 입력해주시면, 이를 바탕으로 AI가 콘텐츠를 자동 생성해요." valueType="" helperTextResult="none"/>

				<div className="flex_ btn_flex">
					<Link href="/support/add_select_document">
						<Button text="AI 수정" />
					</Link>
				</div>
			</div>
		)
	}
	const PageD = () => {
		return(
			<div>
				<div className="sub-title body-2-B flex_">
					<Badge value="2"/>
						기본 정보
				</div>

				<div className="input-wrap input-search">
					<Input labelText="기관명" placeholder="한국기술HUB" valueType="" helperTextResult="none" iconState="false"/>
					<Icon icon="search" size={16} stroke="none" color="#574AFF" /> 
					<Icon icon="delete" size={16} stroke="none" color="#B3B6B8" /> 
				</div>

				<div className="input-wrap">
					<Input labelText="기술명" placeholder="기술명" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<Input labelText="출원번호" placeholder="123456789" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="input-wrap">
					<Input labelText="등록번호" placeholder="123456789" valueType="" helperTextResult="none" iconState="false"/>
				</div>

				<div className="flex_ right-flex">
					<div>
						<p className="table-caption body-2-B">권리구분<span className="txt-violet-1">*</span></p>
						<DropDownMenu />
					</div>
					<div>
						<p className="table-caption body-2-B">권리기간<span className="txt-violet-1">*</span></p>
						<DatePicker />
					</div>
				</div>

				<div className="input-wrap input-search">
					<Input labelText="소속" placeholder="한국기술HUB" valueType="" helperTextResult="none" iconState="false"/>
					<Icon icon="search" size={16} stroke="none" color="#574AFF" /> 
					<Icon icon="delete" size={16} stroke="none" color="#B3B6B8" /> 
				</div>


				<div className="flex_ button-input">
					<Input importState="" labelText="대표 연구자" placeholder="대표 연구자를 선택해 주세요." valueType="" helperTextResult="none" iconState="false"/>
					<Link href="/technology/main_researcher_list">
						<OutlineBtn text="선택" state=""/>
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

				<div className="flex_ button-input">
					<Input importState="" labelText="공동 연구자" placeholder="공동 연구자를 선택해 주세요." valueType="" helperTextResult="none" iconState="false"/>
					<Link href="/technology/public_researcher_list">
						<OutlineBtn text="선택" state=""/>
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

				<div className="input-wrap">
					<p className="table-caption body-2-B">콘텐츠 썸네일<span className="txt-violet-1">*</span></p>
					<Upload state="done" type="preview"/>
					<p className="caption-R helper-txt">
						허용 사이즈: <span>813px x 540px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
					</p>
				</div>

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
					</div>
					<div className="m-24" />
					<div className="flex_ button-input">
						<Input importState="" labelText="카테고리" placeholder="카테고리" valueType="" helperTextResult="none" iconState="false"/>
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
					</div>
				</div>

				<div className="content-4 content-wrap">
					<div className="sub-title body-2-B flex_">
						<Badge value="3"/>
							기술 정보
					</div>
					<div className="flex_ button-input">
						<Input importState="" labelText="제목" placeholder="제목" valueType="" helperTextResult="none" iconState="false"/>
						<ButtonSecondary text="AI 수정" state=""/>
					</div>
					<div className="flex_ button-input">
						<Input importState="" labelText="기술 분야" placeholder="기술 분야를 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
						<ButtonSecondary text="AI 수정" state=""/>
					</div>

					<p className="table-caption body-2-B">가격<span className="txt-violet-1">*</span></p>
					<div className="flex_ radio-flex">
						<span className="flex_">
							<Radio label="가격 협의" state="" name="radio-b" id="radio-b-2"/>
						</span>
						<span className="flex_">
							<Radio label="가격 입력" state="" name="radio-b" id="radio-b-3"/>
						</span>
					</div>

					<Input importState="none" labelText="" placeholder="100.000원" valueType="" helperTextResult="none" iconState="false"/>
					
					<p className="table-caption body-2-B">판매유형<span className="txt-violet-1">*</span></p>
					<div className="flex_ radio-flex">
						<span className="flex_">
							<Radio label="직접 판매" state="" name="radio-c" id="radio-c-2"/>
						</span>
						<span className="flex_">
							<Radio label="중개 판매" state="" name="radio-c" id="radio-c-3"/>
						</span>
					</div>

					<p className="table-caption body-2-B">거래방식<span className="txt-violet-1">*</span></p>
					<div className="flex_ radio-flex">
						<span className="flex_">
							<CheckBox label="특허 판매" size="small" />
						</span>
						<span className="flex_">
							<CheckBox label="노하우" size="small" />
						</span>
						<span className="flex_">
							<CheckBox label="라이선스" size="small" />
						</span>
						<span className="flex_">
							<CheckBox label="연구협력" size="small" />
						</span>
						<span className="flex_">
							<CheckBox label="솔루션" size="small" />
						</span>
						<span className="flex_">
							<CheckBox label="서비스/제품" size="small" />
						</span>
					</div>

					<p className="table-caption body-2-B">기술 완성도<span className="txt-violet-1">*</span></p>
					<div className="drop-down-wrap">
						<DropDownMenu />
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
					</div>
					</div>
				</div>

				<div className="content-4 content-wrap">
					<div className="sub-title body-2-B flex_">
						<Badge value="4"/>
							기술 소개
					</div>
					<div className="m-24" />
					<Editor />
					<div className="editor-btn button-wrap">
						<ButtonSecondary text="AI 수정" state=""/>
					</div>
				</div>

				<div className="content-4 content-wrap">
					<div className="sub-title body-2-B flex_">
						<Badge value="5"/>
							기술 홍보 동영상
					</div>
					<div className="input-wrap">
						<Input labelText="유튜브 URL" placeholder="http://www.kotech.co.kr" valueType="" helperTextResult="none" iconState="false"/>
					</div>
				</div>

				<div className="content-4 content-wrap">
					<div className="sub-title body-2-B flex_">
						<Badge value="5"/>
							연관 기술 정보
					</div>
					<div className="input-wrap flex-colum flex_">
						<Upload state="done" type="normal" file="hwp"/>
						<Upload state="done" type="normal" file="docx"/>
						<Upload state="done" type="normal" file="pdf"/>
						<p className="caption-R helper-txt">
						파일 형식: <span>PDF, DOCX, HWP</span> <span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
						</p>
					</div>
				</div>


				<div className="content-4 content-wrap">
					<div className="sub-title body-2-B flex_">
						<Badge value="7"/>
							매도 수/절차
					</div>
					<div className="direct_input radius-8">
						<p className="direct_input_title flex_">
							절차1
							<Icon icon="cancel" size={9} color="#464749" stroke="none" />
						</p>
						<Input importState="none" labelText="제목" placeholder="제목을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
						<div className="flex_ button-input">
							<Input importState="" labelText="카테고리 1" placeholder="카테고리 제목을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
							<OutlineBtn text={<Icon icon="plus" size={13} color="#464749" stroke="none"/>}/>
						</div>
					</div>
					<div className="flex_ button-input custom-button-wrap">
						<div className="custom-button bg-white flex_ radius-8">
							<Icon icon="plus" size={13} color="#464749" stroke="none" />
							매도/수 직접 입력
						</div>
						<Link href="/technology/selling_procedure" >
							<ButtonSecondary text="불러오기" state=""/>
						</Link>
					</div>
				</div>

				<div className="content-4 content-wrap">
					<div className="sub-title body-2-B flex_">
						<Badge value="8"/>
							문의처
					</div>
					<div className="flex_ button-input">
						<Input importState="" labelText="운영자 정보" placeholder="운영자 이름 및 연락처에 대해 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
						<Link href="/technology/operator_list">
							<OutlineBtn text="선택" state=""/>
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
				</div>
			</div>
		)
	}

	return(
		<div className="page-wrap">
			<div className="contents-technology contents- contents-news-writer contents-event-writer contents-add contents-technology-retouch">
				<h1 className="flex_ display-5-B">
					지원사업 등록/수정
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
							<Radio label="파일 업로드" state="" name="radio-a" id="radio-a-2" value="page2"  setRadioValue={setRadioValue}/>
							<Label text="AI 사용" backgroundColor="bg-violet-5" fontColor="txt-violet-1" icon="true" iconColor="#574AFF"/>
						</span>
						<span className="flex_">
							<Radio label="텍스트 입력" state="" name="radio-a" id="radio-a-3" value="page3"  setRadioValue={setRadioValue}/>
							<Label text="AI 사용" backgroundColor="bg-violet-5" fontColor="txt-violet-1" icon="true" iconColor="#574AFF"/>
						</span>
						<span className="flex_">
							<Radio label="사용 안함" state="" name="radio-a" id="radio-a-4" value="page4"  setRadioValue={setRadioValue}/>
						</span>
					</div>
					
					{isRadioValue === 'page2' && <PageB  />}
					{isRadioValue === 'page3' && <PageC />}
					{isRadioValue === 'page4' && <PageD />}
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
