import React from "react";
import Tabs from "/src/components/tabs/login_tab"
import Input from "/src/components/textFields/textInput.tsx";
import ButtonSecondary from "/src/components/buttons/button_secondary_l"
import InputPassword from "/src/components/textFields/passwordInput.tsx"
import Icon from "/src/components/icon/icon.tsx"
import Upload from "/src/components/upload/upload"
import CheckBox from "/src/components/radio/checkbox"
import LoginBtn from "/src/components/buttons/button_primary_l"
import TextBtn from "/src/components/buttons/text_button_underline_primary_m"
import Link from "next/link"

const Component = () => {
	return(
			<div className="login sing-up">
				<h1 className="display-5-B">환영합니다.</h1>
				<p className="body-3-R sub-title txt-second-default">
				<span className="txt-violet-1">*</span>
				는 필수 입력 항목이에요.
				</p>
				<div className="sign-up-form">
					<div className="flex_ button-input box-">
						<Input importState="" labelText="이메일" placeholder="이메일을 입력해 주세요." valueType="" helperTextResult="none" iconState="true"/>
						<ButtonSecondary text="중복 확인" state="disabled"/>
					</div>
					<div className="flex_ box-">
						<InputPassword importState="" labelText="비밀번호" placeholder="비밀번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="true"/>
						<div className="flex_">
							<div className="flex_ check_flex txt-disabled caption-R">
								<Icon icon="checkNone" size={7} color="#b3b6b8" stroke="" />
								숫자 입력
							</div>
							<div className="flex_ check_flex txt-disabled caption-R">
								<Icon icon="checkNone" size={7} color="#b3b6b8" stroke="" />
								8자 이상 ~ 12자 이하
							</div>
							<div className="flex_ check_flex txt-disabled caption-R">
								<Icon icon="checkNone" size={7} color="#b3b6b8" stroke="" />
								영문 입력
							</div>
						</div>
					</div>
					<div className="flex_ box-">
						<InputPassword importState="" labelText="비밀번호 확인" placeholder="비밀번호를 다시 입력해 주세요." valueType="" helperTextResult="none" iconState="true"/>
					</div>
					<div className="box-">
						<Input importState="" labelText="이름" placeholder="이름을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
					</div>
					<div className="box-">
						<Input importState="" labelText="닉네임" placeholder="닉네임을 입력해 주세요." valueType="" helperTextResult="none" iconState="false"/>
					</div>
					<div className="flex_ button-input box-">
						<Input importState="" labelText="휴대폰 번호" placeholder="휴대전화를 입력해 주세요." valueType="" helperTextResult="none" iconState="true"/>
						<ButtonSecondary text="중복 확인" state="disabled"/>
					</div>
					<div className="input-box box-">
						<p className="body-2-B txt-second-default">프로필<span className="txt-violet-1">*</span></p>
						<Upload state="default" type="normal"/>
						<p className="caption-R helper-txt">
							허용 사이즈: <span>800px x 800px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
						</p>
					</div>
					<div className="input-box box-">
						<p className="body-2-B txt-second-default">사업자 등록증<span className="txt-violet-1">*</span></p>
						<Upload state="default" type="normal"/>
						<p className="caption-R helper-txt">
							허용 사이즈: <span>800px x 800px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
						</p>
					</div>
					<div className="flex_ input-search box-">
						<Input labelText="소속" placeholder="소속을 검색해 주세요." valueType="" helperTextResult="none" iconState="false"/>
						<Icon icon="search" size={16} stroke="none" color="#574AFF" /> 
					</div>

					<CheckBox size="small" label="전체 동의" />
					<div class="bar bg-gray-5" />
					<CheckBox size="small"  label="(필수) 만 14세 이상이에요." />
					<CheckBox size="small"  label="(선택) 이메일/SMS 등 수신을 동의해요." />
					<CheckBox size="small"  label="(선택) 한국기술마켓의 뉴스레터 발송에 동의해요." />
					<Link href="/user/waiting_sign_up">
						<LoginBtn text="회원가입" />
					</Link>
					<p className="ps-txt caption-R txt-second-default flex_">
						회원가입 시 
						<Link href="#">
							<TextBtn text="이용약관" />
						</Link>
						및
						<Link href="#">
							<TextBtn text="개인정보처리방침" />
						</Link>
						에 동의하게 됩니다.
					</p>
				</div>
			</div>
	)
}
export default Component;