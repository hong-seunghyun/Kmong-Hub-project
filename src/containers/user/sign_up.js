import React, { useRef } from "react";
import Tabs from "/src/components/tabs/login_tab"
import Input from "/src/components/textFields/textInput.tsx";
import TelInput from "/src/components/textFields/telInput.tsx"
import ButtonSecondary from "/src/components/buttons/button_secondary_l"
import InputPassword from "/src/components/textFields/passwordInput.tsx"
import Icon from "/src/components/icon/icon.tsx"
import Upload from "/src/components/upload/upload"
import CheckBox from "/src/components/radio/checkbox"
import LoginBtn from "/src/components/buttons/button_primary_l"
import TextBtn from "/src/components/buttons/text_button_underline_primary_m"
import Link from "next/link"
import SearchBar from "/src/components/searchBar/search_bar_company_management_menu";
import { useState } from "react";
import { checkTheEmail } from "../../asset/apis/signup";

const Component = () => {

	function containsNumbers(str) {
		return /[0-9]/.test(str);
	}

	function containsAlphabet(str) {
		return /[!@#^*_]/g.test(str);
	}

	function isBetween8and12(str) {
		return str.length >= 8 && str.length <= 12;
	}

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ password2, setPassword2 ] = useState('');
	const [ name, setName ] = useState('');
	const [ nickname, setNickname ] = useState('');
	const [ tel, setTel ] = useState('');

	const checkEmail = async () => {
		await checkTheEmail({email}).then(res => {
			console.log(res.data);
			alert('사용하실 수 없는 이메일 입니다!')
		}).catch((err) => {
			alert('사용하실 수 있는 이메일 입니다!');
		});
	}

  const [previewUrl, setPreviewUrl] = useState(null);
  const [previewUrl2, setPreviewUrl2] = useState(null);

	return(
			<div className="login sing-up">
				<h1 className="display-5-B">환영합니다.</h1>
				<p className="body-3-R sub-title txt-second-default">
				<span className="txt-violet-1">*</span>
				는 필수 입력 항목이에요.
				</p>
				<div className="sign-up-form">
					<div className="flex_ button-input box-">
						<Input importState="" labelText="이메일" placeholder="이메일을 입력해 주세요." valueType="" helperTextResult="none" iconState="true" state={email} setState={setEmail} />
						<ButtonSecondary text="중복 확인" state={email.includes('@') ? "enabled" : "disabled"} onclick={checkEmail}/>
					</div>
					<div className="flex_ box-">
						<InputPassword importState="" labelText="비밀번호" placeholder="비밀번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="true" state={password} setState={setPassword}/>
						<div className="flex_">
							<div className="flex_ check_flex txt-disabled caption-R" style={{color: containsNumbers(password) ? "#952dff" : "#b3b6b8"}}>
								<Icon icon="checkNone" size={7} color={containsNumbers(password) ? "#952dff" : "#b3b6b8"} stroke="" />
								숫자 입력
							</div>
							<div className="flex_ check_flex txt-disabled caption-R" style={{color: isBetween8and12(password) ? "#952dff" : "#b3b6b8"}}>
								<Icon icon="checkNone" size={7} color={isBetween8and12(password) ? "#952dff" : "#b3b6b8"} stroke=""/>
								8자 이상 ~ 12자 이하
							</div>
							<div className="flex_ check_flex txt-disabled caption-R"style={{color: containsAlphabet(password) ? "#952dff" : "#b3b6b8"}}>
								<Icon icon="checkNone" size={7} color={containsAlphabet(password) ? "#952dff" : "#b3b6b8"} stroke=""/>
								영문 입력
							</div>
						</div>
					</div>
					<div className="flex_ box-">
						<InputPassword importState="" labelText="비밀번호 확인" placeholder="비밀번호를 다시 입력해 주세요." valueType="" helperTextResult="none" iconState="true" status={password2} setState={setPassword2}/>
					</div>
					<div className="box-">
						<Input importState="" labelText="이름" placeholder="이름을 입력해 주세요." valueType="" helperTextResult="none" iconState="false" state={name} setState={setName}/>
					</div>
					<div className="box-">
						<Input importState="" labelText="닉네임" placeholder="닉네임을 입력해 주세요." valueType="" helperTextResult="none" iconState="false" state={nickname} setState={setNickname}/>
					</div>
					<div className="flex_ button-input box-">
						<TelInput importState="" labelText="휴대폰 번호" placeholder="휴대전화를 입력해 주세요." valueType="" helperTextResult="none" iconState="true" state={tel} setState={setTel}/>
						<ButtonSecondary text="중복 확인" state="disabled"/>
					</div>
					<div className="input-box box-">
						<p className="body-2-B txt-second-default">프로필<span className="txt-violet-1">*</span></p>
						<Upload state="default" type="normal" urlState={previewUrl} setUrlState={setPreviewUrl}/>
						<p className="caption-R helper-txt">
							허용 사이즈: <span>800px x 800px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
						</p>
					</div>
					<div className="input-box box-">
						<p className="body-2-B txt-second-default">사업자 등록증<span className="txt-violet-1">*</span></p>
						<Upload state="default" type="normal" urlState={previewUrl2} setUrlState={setPreviewUrl2}/>
						<p className="caption-R helper-txt">
							허용 사이즈: <span>800px x 800px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
						</p>
					</div>
					<div className="flex_ input-search box-">
						<p className="body-2-B txt-second-default">소속<span className="txt-violet-1">*</span></p>
						<SearchBar />
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