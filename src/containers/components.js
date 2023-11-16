// Total Sample Test Page 2023
// HSD Project index.js 
import React from "react";

import NavigationSide from "components/navigations/navigation_side";
import NavigationTopLogin from "components/navigations/navigation_top_login";
import NavigationTop from "components/navigations/navigation_top";
import ButtonCta from "components/buttons/button_cta";
import ButtonPrimaryS from "components/buttons/button_primary_s";
import ButtonPrimaryM from "components/buttons/button_primary_m";
import ButtonPrimaryL from "components/buttons/button_primary_l";
import ButtonPrimaryXL from "components/buttons/button_primary_xl";
import ButtonSecondaryS from "components/buttons/button_secondary_s";
import ButtonSecondaryM from "components/buttons/button_secondary_m";
import ButtonSecondaryL from "components/buttons/button_secondary_l";
import ButtonSecondaryXL from "components/buttons/button_secondary_xl";
import ButtonOutlineS from "components/buttons/button_outline_s";
import ButtonOutlineM from "components/buttons/button_outline_m";
import ButtonOutlineL from "components/buttons/button_outline_l";
import ButtonOutlineXL from "components/buttons/button_outline_xl";
import ButtonErrorS from "components/buttons/button_error_s";
import ButtonErrorM from "components/buttons/button_error_m";
import ButtonErrorL from "components/buttons/button_error_l";
import ButtonErrorXL from "components/buttons/button_error_xl";
import TextButtonUnderlinePrimaryS from "components/buttons/text_button_underline_primary_s";
import TextButtonUnderlinePrimaryM from "components/buttons/text_button_underline_primary_m";
import TextButtonUnderlinePrimaryL from "components/buttons/text_button_underline_primary_l";
import TextButtonUnderlinePrimaryXL from "components/buttons/text_button_underline_primary_xl";
import TextButtonUnderlineS from "components/buttons/text_button_underline_s";
import TextButtonUnderlineM from "components/buttons/text_button_underline_m";
import TextButtonUnderlineL from "components/buttons/text_button_underline_l";
import TextButtonUnderlineXL from "components/buttons/text_button_underline_xl";
import TextButtonPrimaryS from "components/buttons/text_button_primary_s";
import TextButtonPrimaryM from "components/buttons/text_button_primary_m";
import TextButtonPrimaryL from "components/buttons/text_button_primary_l";
import TextButtonPrimaryXL from "components/buttons/text_button_primary_xl";
import TextButtonS from "components/buttons/text_button_s";
import TextButtonM from "components/buttons/text_button_m";
import TextButtonL from "components/buttons/text_button_l";
import TextButtonXL from "components/buttons/text_button_xl";
import DropsMenu from "components/dropsMenu/drops_menu";
import SearchBar from "components/searchBar/search_bar";
import Icon from "components/icon/icon.tsx";
import SnackBar from "components/snackBar/snackBar";
import Label from "components/label/label";
import Badge from "components/label/badge";
import Pagnation from "components/pagnation/pagnation";
import TabFixed from "components/tabs/tab_fixed";
import TabScrollable from "components/tabs/tab_scrollable";
import InputEmail from "components/textFields/email_input.tsx";
import TextArea from "components/textFields/textArea.tsx";
import Footer from "components/footer/footer";
import Modal from "components/modal/modal";
import Radio from "components/radio/radio";
import Checkbox from "components/radio/checkbox";
import ToggleButton from "components/radio/slide_toggle_btn";
import DatePicker from "components/date/date-picker";
import DatePickerSingle from "components/date/date-picker-single";
import DatePickerSingleTime from "components/date/date-picker-single-time";
import Upload from "components/upload/upload"
import TabelVerticalCell from "components/table/table_vertical_cell";
import TabelVerticalHead from "components/table/table_vertical_head";
import TableHorizontal from "components/table/table_horizontal";

const Component = () => {
		return(
			<div className="App">
		<div style={{margin:'20px'}}>
			<h1>Navigation Side</h1>

			<NavigationSide />

			<hr/>
		
			<div style={{margin:'20px'}} />
			<h1>Navigation Top</h1>
			<NavigationTop />
			<div style={{margin:'20px'}} />
			<NavigationTopLogin />
			<div style={{margin:'20px'}} />
			<hr/>

			<div style={{margin:'20px'}} />
			<h1>Button</h1>
			<div style={{margin:'20px'}} />
			<div className="flex_" style={{gap:'20px', flexDirection:'column'}}>
				<span>
					<p style={{margin:'20px'}}>CTA</p>
					<ButtonCta />
				</span>
				<span>
					<p style={{margin:'20px'}}>Primary</p>
					<ButtonPrimaryS text="label"/>
					<ButtonPrimaryM text="label"/>
					<ButtonPrimaryL text="label"/>
					<ButtonPrimaryXL text="label"/>
				</span>
				<span>
					<p style={{margin:'20px'}}>Secondary</p>
					<ButtonSecondaryS text="label"/>
					<ButtonSecondaryM text="label"/>
					<ButtonSecondaryL text="label"/>
					<ButtonSecondaryXL text="label"/>
				</span>
				<span>
					<p style={{margin:'20px'}}>Outline</p>
					<ButtonOutlineS text="label"/>
					<ButtonOutlineM text="label"/>
					<ButtonOutlineL text="label"/>
					<ButtonOutlineXL text="label"/>

				</span>
				<span>
					<p style={{margin:'20px'}}>Error</p>
					<ButtonErrorS text="label"/>
					<ButtonErrorM text="label"/>
					<ButtonErrorL text="label"/>
					<ButtonErrorXL text="label"/>
				</span>
				<span>
					<p style={{margin:'20px'}}>Text Button Underline Primary</p>
					<TextButtonUnderlinePrimaryS text="label"/>
					<TextButtonUnderlinePrimaryM text="label"/>
					<TextButtonUnderlinePrimaryL text="label"/>
					<TextButtonUnderlinePrimaryXL text="label"/>
				</span>
				<span>
					<p style={{margin:'20px'}}>Text Button Underline</p>
					<TextButtonUnderlineS text="label"/>
					<TextButtonUnderlineM text="label"/>
					<TextButtonUnderlineL text="label"/>
					<TextButtonUnderlineXL text="label"/>
				</span>
				<span>
					<p style={{margin:'20px'}}>Text Button Primary</p>
					<TextButtonPrimaryS text="label"/>
					<TextButtonPrimaryM text="label"/>
					<TextButtonPrimaryL text="label"/>
					<TextButtonPrimaryXL text="label"/>
				</span>
				<span>
					<p style={{margin:'20px'}}>Text Button</p>
					<TextButtonS text="label"/>
					<TextButtonM text="label"/>
					<TextButtonL text="label"/>
					<TextButtonXL text="label"/>
				</span>
			</div>

			<hr/>

			<div style={{margin:'20px'}}>
				<h1>Label</h1>
				<div style={{margin:'20px'}} />
				<div style={{display:'flex', gap:'20px'}}>
					<div style={{display:'flex', gap:'20px', flexDirection:'column'}}>
						<Label backgroundColor="bg-violet-5" fontColor="txt-violet-1" text="label" icon="true" iconColor="#574AFF"/>
						<Label backgroundColor="bg-violet-5" fontColor="txt-violet-1" text="label" icon="false" iconColor=""/>
					</div>
					<div style={{display:'flex', gap:'20px', flexDirection:'column'}}>
						<Label backgroundColor="bg-violet-1" fontColor="txt-white" text="label" icon="true" iconColor="#FFFFFF"/>
						<Label backgroundColor="bg-violet-1" fontColor="txt-white" text="label" icon="false" iconColor=""/>
					</div>
					<div style={{display:'flex', gap:'20px', flexDirection:'column'}}>
						<Label backgroundColor="bg-purple-1" fontColor="txt-white" text="label" icon="true" iconColor="#FFFFFF"/>
						<Label backgroundColor="bg-purple-1" fontColor="txt-white" text="label" icon="false" iconColor=""/>
					</div>
					<div style={{display:'flex', gap:'20px', flexDirection:'column'}}>
						<Label backgroundColor="bg-pink-1" fontColor="txt-white" text="label" icon="true" iconColor="#FFFFFF"/>
						<Label backgroundColor="bg-pink-1" fontColor="txt-white" text="label" icon="false" iconColor=""/>
					</div>
					<div style={{display:'flex', gap:'20px', flexDirection:'column'}}>
						<Label backgroundColor="bg-mint-1" fontColor="txt-white" text="label" icon="true" iconColor="#FFFFFF"/>
						<Label backgroundColor="bg-mint-1" fontColor="txt-white" text="label" icon="false" iconColor=""/>
					</div>
					<div style={{display:'flex', gap:'20px', flexDirection:'column'}}>
						<Label backgroundColor="bg-gold-1" fontColor="txt-white" text="label" icon="true" iconColor="#FFFFFF"/>
						<Label backgroundColor="bg-gold-1" fontColor="txt-white" text="label" icon="false" iconColor=""/>
					</div>
					<div style={{display:'flex', gap:'20px', flexDirection:'column'}}>
						<Label backgroundColor="bg-wrong-red-hover" fontColor="txt-white" text="label" icon="true" iconColor="#FFFFFF"/>
						<Label backgroundColor="bg-wrong-red-hover" fontColor="txt-white" text="label" icon="false" iconColor=""/>
					</div>
					<div style={{display:'flex', gap:'20px', flexDirection:'column'}}>
						<Label backgroundColor="bg-gray-6" fontColor="txt-third" text="label" icon="true" iconColor="#B3B6B8"/>
						<Label backgroundColor="bg-gray-6" fontColor="txt-third" text="label" icon="false" iconColor=""/>
					</div>
				</div>
				
			</div>

			<hr/>

			<div style={{margin:'20px'}}>
				<h1>Badge</h1>
				<div style={{margin:'20px'}} />
				<Badge value="7"/>
			</div>

			<hr/>

			<div style={{margin:'20px'}}>
				<h1>Pagnation</h1>
				<div style={{margin:'20px'}} />
				<Pagnation />
			</div>

			<hr/>

			<div style={{margin:'20px', paddingBottom:'100px'}}>
				<h1>Tab</h1>
				<div style={{margin:'20px'}} />
				<TabFixed />
				<div style={{margin:'100px'}} />
				<TabScrollable />
			</div>

			<hr/>

			<div style={{margin:'20px', paddingBottom:'100px'}}>
				<h1>Text Fields</h1>
				<div style={{margin:'20px'}} />
				<InputEmail labelText="이메일" placeholder="이메일을 입력해 주세요" valueType="" helperTextResult="helperA"/>
				<InputEmail labelText="이메일"placeholder="이메일을 입력해 주세요" valueType="error" helperTextResult="helperB"/>
				<InputEmail labelText="이메일" placeholder="이메일을 입력해 주세요" valueType="success" helperTextResult="helperC"/>
			
				<TextArea labelText="이메일" placeholder="이메일을 입력해 주세요" valueType="" helperTextResult="helperA"/>
				<TextArea labelText="이메일"placeholder="이메일을 입력해 주세요" valueType="error" helperTextResult="helperB"/>
				<TextArea labelText="이메일" placeholder="이메일을 입력해 주세요" valueType="success" helperTextResult="helperC"/>
			</div>

			<hr/>

			<div style={{margin:'20px', paddingBottom:'100px'}}>
				<h1>Drops Menu</h1>
				<div style={{margin:'20px'}} />
				<DropsMenu placeholder="소속을 선택해 주세요." valueType="success"/>
			</div>

			<hr/>

			<div style={{margin:'20px', paddingBottom:'100px', background:'#aeaeae'}}>
				<h1>Modal</h1>
				<div style={{margin:'20px'}} />
				<div style={{display:'flex', gap:'20px'}}>
					<Modal type="full-button" value="default" count="one" title="이것은 제목입니다." text="이것은 내용입니다."/>
					<Modal type="full-button" value="error" count="one" title="이것은 제목입니다." text="이것은 내용입니다."/>
				</div>
				<div style={{margin:'20px'}} />
				<div style={{display:'flex', gap:'20px'}}>
					<Modal type="full-button" value="default" count="two" title="이것은 제목입니다." text="이것은 내용입니다."/>
					<Modal type="full-button" value="error" count="two" title="이것은 제목입니다." text="이것은 내용입니다."/>
				</div>
				<div style={{margin:'20px'}} />
				<div style={{display:'flex', gap:'20px'}}>
					<Modal type="half-button" value="default" count="two" title="이것은 제목입니다." text="이것은 내용입니다."/>
					<Modal type="half-button" value="error" count="two" title="이것은 제목입니다." text="이것은 내용입니다."/>
				</div>
			</div>

			<hr/>

			<div style={{margin:'20px'}}>
				<h1>Radio</h1>
				<Radio id="radio-a" label="Radio" state="default"/>
				<Radio id="radio-b" label="Radio" state="active"/>
				<Radio id="radio-c" label="Radio" state="disabled"/>
			</div>
			<hr/>

			<div style={{margin:'20px'}}>
				<h1>Checkbox</h1>
				<Checkbox size="small" id="check-a" label="Check Box" state="default"/>
				<Checkbox size="small" id="check-b" label="Check Box" state="active"/>
				<Checkbox size="small" id="check-c" label="Check Box" state="disabled"/>
				<Checkbox size="large" id="check-d" label="Check Box" state="default"/>
				<Checkbox size="large" id="check-e" label="Check Box" state="active"/>
				<Checkbox size="large" id="check-f" label="Check Box" state="disabled"/>
			</div>

			<div style={{margin:'20px'}}>
				<h1>Toggle Button</h1>
				<ToggleButton  id="toggle-a"  state="default"/>
				<div style={{margin:'20px'}} />
				<ToggleButton  id="toggle-b"  state="active"/>
				<div style={{margin:'20px'}} />
				<ToggleButton  id="toggle-c"  state="disabled"/>
			</div>

			<hr/>

			<div style={{margin:'20px'}}>
				<h1>Snack Bar</h1>
				<div style={{margin:'20px'}} />
				<SnackBar />
				<div style={{margin:'20px'}} />
			</div>

			<hr/>

			<div style={{margin:'20px'}}>
				<h1>Search Bar</h1>
				<div style={{margin:'20px'}} />
				<SearchBar />
				<div style={{margin:'20px'}} />
			</div>

			<hr/>

			<div style={{margin:'20px'}}>
				<h1>Icon</h1>
				<div style={{margin:'20px'}} />
				<span className="flex_" style={{gap:'20px', alignItems:'center'}}>
					<Icon size={14} color="none" stroke="#464749" icon="setting" />
					<Icon size={9} color="#464749" stroke="none" icon="mail" />
					<Icon size={12} color="#464749" stroke="none" icon="pw" />
					<Icon size={10} color="#464749" stroke="none" icon="eye" />
					<Icon size={9} color="#464749" stroke="none" icon="chevronRight" />
					<Icon size={5} color="#464749" stroke="none" icon="chevronDown" />
					<Icon size={5} color="#464749" stroke="none" icon="chevronUp" />
					<Icon size={9} color="#464749" stroke="none" icon="chevronLeft" />
					<Icon size={12} color="#464749" stroke="none" icon="inform" />
					<Icon size={12} color="#464749" stroke="none" icon="delete" />
					<Icon size={9} color="#464749" stroke="none" icon="plus" />
					<Icon size={16} color="none" stroke="#464749" icon="bell" />
					<Icon size={13} color="#464749" stroke="none" icon="ai" />
					<Icon size={8} color="#464749" stroke="none" icon="cancel" />
					<Icon size={8} color="#464749" stroke="none" icon="checkNone" />
					<Icon size={13} color="#464749" stroke="none" icon="search" />
					<Icon size={1.5} color="#464749" stroke="none" icon="minus" />
					<Icon size={16} color="#464749" stroke="none" icon="checkCircle" />
					<Icon size={16} color="none" stroke="#464749" icon="home" />
					<Icon size={17} color="none" stroke="#464749" icon="setting" />
					<Icon size={16} color="#464749" stroke="none" icon="content" />
					<Icon size={14} color="#464749" stroke="none" icon="chevronRight" />
					<Icon size={8} color="#464749" stroke="none" icon="chevronDown" />
					<Icon size={8} color="#464749" stroke="none" icon="chevronUp" />
					<Icon size={14} color="#464749" stroke="none" icon="chevronLeft" />
					<Icon size={16} color="#464749" stroke="none" icon="inform" />
					<Icon size={16} color="#464749" stroke="none" icon="delete" />
					<Icon size={13} color="#464749" stroke="none" icon="plus" />
					<Icon size={14.5} color="none" stroke="#464749" icon="bell" />
					<Icon size={10} color="#464749" stroke="none" icon="cancel" />
					<Icon size={9} color="#464749" stroke="none" icon="checkNone" />
					<Icon size={16} color="#464749" stroke="none" icon="search" />
					<Icon size={1.5} color="#464749" stroke="none" icon="minus" />
					<Icon size={24} color="#464749" stroke="none" icon="checkCircle" />
					<Icon size={13} color="none" stroke="#464749" icon="card" />
					<Icon size={17} color="none" stroke="#464749" icon="document" />
					<Icon size={15} color="#464749" stroke="none" icon="researcher" />
					<Icon size={15} color="none" stroke="#464749" icon="member" />
					<Icon size={12} color="#464749" stroke="none" icon="transaction" />
					<Icon size={15} color="none" stroke="#464749" icon="design" />
					<Icon size={14} color="#464749" stroke="none" icon="marketing" />
					<Icon size={15} color="none" stroke="#464749" icon="question" />
					<Icon size={13} color="none" stroke="#464749" icon="mypage" />
					<Icon size={15} color="none" stroke="#464749" icon="statistic" />
					<Icon size={16} color="#464749" stroke="none" icon="board" />
					<Icon size={14} color="#464749" stroke="none" icon="more" />
					<Icon size={18} color="#464749" stroke="none" icon="arrowRight" />
					<Icon size={18} color="#464749" stroke="none" icon="arrowLeft" />
					<Icon size={9} color="#464749" stroke="#464749" icon="menu" />
				</span>
			</div>

			<hr/>

			<div style={{margin:'20px'}}>
				<h1>Img source</h1>
				<div style={{display:'flex', gap:'20px', justifyContent:'center', alignItems:'center'}} >
					<img src='/images/waitingForApproval_s.png' alt="waitingForApproval_s" />
					<img src='/images/file.png' alt="file" />
					<img src='/images/pdf.png' alt="pdf" />
					<img src='/images/jpg.png' alt="jpg" />
					<img src='/images/png.png' alt="png" />
					<img src='/images/hwp.png' alt="hwp" />
					<img src='/images/docx.png' alt="docx" />
				</div>
				<div style={{margin:'20px'}} />
				<div style={{display:'flex', gap:'20px', justifyContent:'center', alignItems:'center'}} >
					<img src='/images/waitingForApproval_l.png' alt="waitingForApproval_l" />
					<img src='/images/nodata.png' alt="nodata" />
					<img src='/images/password.png' alt="password" />
				</div>
			</div>

			<hr/>

			<div style={{margin:'20px'}}>
				<h1>Upload</h1>
				<div style={{margin:'20px'}} />
				<Upload state="default" type="normal"/>
				<div style={{margin:'20px'}} />
				<Upload state="default" type="technology"/>
				<div style={{margin:'20px'}} />
				<Upload state="proceeding" type="normal"/>
				<div style={{margin:'20px'}} />
				<Upload state="done" type="normal"/>
				<div style={{margin:'20px'}} />
				<Upload state="done" type="technology"/>
				<div style={{margin:'20px'}} />
				<Upload state="done" type="preview"/>
			</div>

			<hr/>
			<div style={{margin:'20px'}}>
				<DatePicker date="true" state=""/>
			</div>
			<div style={{margin:'20px'}}>
				<DatePicker date="" state="error"/>
			</div>
			<div style={{margin:'20px'}}>
				<DatePickerSingle date="true" state=""/>
			</div>
			<div style={{margin:'20px'}}>
				<DatePickerSingleTime date="true" state=""/>
			</div>
			<hr/>

			<div style={{margin:'20px'}}>
				<h1>Upload</h1>
				<div style={{margin:'20px'}} />
				<div className="table-container">
					<TabelVerticalHead
						headChoice="선택"
						headCategory="카테고리"
						headTitle="기술이전명"
						headWriter="연구원"
						headDate="등록연도"
						headEtc="관리"
					/>
					<TabelVerticalCell 
						labelBg="bg-mint-1"
						labelColor="txt-white"
						label="보고서"
						title="기술이전명"
						writer="미나 마수드 외2"
						date="YYYY.MM.DD"
					/>
					<TabelVerticalCell 
						labelBg="bg-gold-1"
						labelColor="txt-white"
						label="논문"
						title="기술이전명"
						writer="미나 마수드 외2"
						date="YYYY.MM.DD"
					/>
					<TabelVerticalCell 
						labelBg="bg-gold-1"
						labelColor="txt-white"
						label="논문"
						title="기술이전명"
						writer="미나 마수드 외2"
						date="YYYY.MM.DD"
					/>
					<TabelVerticalCell 
						labelBg="bg-gold-1"
						labelColor="txt-white"
						label="논문"
						title="기술이전명"
						writer="미나 마수드 외2"
						date="YYYY.MM.DD"
					/>
					<TabelVerticalCell 
						labelBg="bg-violet-5"
						labelColor="txt-violet-1"
						label="특허"
						title="기술이전명"
						writer="미나 마수드 외2"
						date="YYYY.MM.DD"
					/>
					<TabelVerticalCell 
						labelBg="bg-violet-5"
						labelColor="txt-violet-1"
						label="특허"
						title="기술이전명"
						writer="미나 마수드 외2"
						date="YYYY.MM.DD"
					/>
					<TabelVerticalCell 
						labelBg="bg-mint-1"
						labelColor="txt-white"
						label="보고서"
						title="기술이전명"
						writer="미나 마수드 외2"
						date="YYYY.MM.DD"
					/>
					<TabelVerticalCell 
						labelBg="bg-gold-1"
						labelColor="txt-white"
						label="논문"
						title="기술이전명"
						writer="미나 마수드 외2"
						date="YYYY.MM.DD"
					/>
					<TabelVerticalCell 
						labelBg="bg-gold-1"
						labelColor="txt-white"
						label="논문"
						title="기술이전명"
						writer="미나 마수드 외2"
						date="YYYY.MM.DD"
					/>
					<TabelVerticalCell 
						labelBg="bg-gold-1"
						labelColor="txt-white"
						label="논문"
						title="기술이전명"
						writer="미나 마수드 외2"
						date="YYYY.MM.DD"
					/>
				</div>
			</div>

			<hr />
			<div style={{margin:'20px'}}>
				<TableHorizontal />
			</div>
			<hr />

			<div style={{margin:'20px'}}>
				<Footer />
			</div>
		</div>
  </div>
		)
};

export default Component;