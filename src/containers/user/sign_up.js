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
import ModalGuideA from "/src/components/modal/modal_uesr_guide_1";
import ModalGuideB from "/src/components/modal/modal_uesr_guide_2";
import { useState } from "react";
import { checkTheEmail, register, searchOrgn } from "../../asset/apis/signup";
import { kotechUrl } from "/src/asset/config/config.json"
import { useLayoutEffect } from "react";
import { useEffect } from "react";

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
	const [ ucmdCd, setUcmdCd ] = useState('');

	const [ orgn, setOrgn ] = useState('');

	const [ allCheckState, setAllCheckState ] = useState(false);

	const [ checkState1, setCheckState1 ] = useState(false);
	const [ checkState2, setCheckState2 ] = useState(false);
	const [ checkState3, setCheckState3 ] = useState(false);

	const [ orgnTel, setOrgnTel ] = useState('');

	const [ data, setData ] = useState([]);

	const [ emailToggle, setEmailToggle ] = useState();
	const [ passwordLight, setpasswordLight ] = useState();
	const [ checkPwToggle, setCheckPwToggle ] = useState();
	const [ telToggle, setTelToggle ] = useState();
	const [ nameToggle, setNameToggle ] = useState();
	const [ nicknameToggle, setNicknameToggle ] = useState();
	const [ orgnToggle, setOrgnToggle ] = useState();
	const [ orgnTelToggle, setOrgnTelToggle ] = useState();

	const [ modalOpenA, setModalOpenA ] = useState(false);
	const [ modalOpenB, setModalOpenB ] = useState(false);

	const showModalA = () => {
		setModalOpenA(true);
	}
	const showModalB = () => {
		setModalOpenB(true);
	}


	const allCheck = (checked) => {
		setAllCheckState(checked);
		if(checked) {
			setCheckState1(true);
			setCheckState2(true);
			setCheckState3(true);
		}
	}

	const checkEmail = async () => {
		if(!email.includes('@')) return;
		await checkTheEmail({email}).then(res => {
			console.log(res.data);
			alert('사용하실 수 없는 이메일 입니다!');
			setEmailToggle('filled');
		}).catch((err) => {
			setEmailToggle('violet');
		});
	}

	const verification = async () => {
    window.addEventListener("message", (message) => {
			if(message.data != '') {
				console.log(message.data);
				const encoded = message.data
					.replace(/[^0-9]/g, '')
					.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
				setTel(encoded);
			}
    });

    const left = window.screen.width / 2 - 500 / 2;
    const top = window.screen.height / 2 - 800 / 2;
    const option = `menubar=no, toolbar=no, resizable=no, width=500, height=600, left=${left}, top=${top}`;
		const url = new URL(window.location.href);
		const origin = url.origin;
    await window.open(
      `${kotechUrl}/api/v1/nice/encrypt/data?returnUrl=${kotechUrl}/api/v1/nice/decrypt/data&redirectUrl=${origin}/user/verification?to=/user/sign_up`,
      "nicePopup",
      option
    );
  };

	const searchOrgan = async (organ) => {
		await searchOrgn({query: organ}).then(res => {
			setData(res.data.result.rows);
			console.log(res.data.result.rows);
		}).catch(err => {
			console.log(err);
		});
	}

  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);

	const registerMember = () => {

		if(!(emailToggle == 'violet' &&
			passwordLight == 'violet' &&
			checkPwToggle == 'violet' &&
			telToggle == 'violet' &&
			nameToggle == 'violet' &&
			nicknameToggle == 'violet' &&
			orgnToggle == 'violet' &&
			orgnTelToggle== 'violet')) {
				alert('빈 칸을 모두 채워주세요.');
				return;
			}

		const dto = {
			emailAddr: email,
			hpNo: tel,
			mbrNm: name,
			nnmNm: nickname,
			nwlAgrmYn: checkState3 ? "Y" : "N",
			pwd: password,
			smsRcvAgrmYn: checkState2 ? "Y" : "N",
			ucmdCd: ucmdCd,
			orgnPhcNo: orgnTel
		};
		console.log(dto);
		register(dto, file, file2).then(res => {
			console.log(res.data);
			window.location = '/user/waiting_sign_up'
		}).catch(err => {
			console.log(err);
		});
	};

	useLayoutEffect(() => {
		searchOrgan();
	},[]);

	useEffect(() => {
		if(containsAlphabet(password) && containsNumbers(password) && isBetween8and12(password)) {
			setpasswordLight('violet');
		} else setpasswordLight('filled');
		if(password === password2 && password !== '') {
			setCheckPwToggle('violet');
		} else setCheckPwToggle('filled');
		if(name.length > 1) {
			setNameToggle('violet');
		} else setNameToggle('filled');
		if(nickname.length > 1) {
			setNicknameToggle('violet');
		} else setNicknameToggle('filled');
		if(orgn.length !== '') {
			setOrgnToggle('violet');
		} else setOrgnToggle('filled');
		if(orgnTel !== '') {
			setOrgnTelToggle('violet');
		} else setOrgnTelToggle('filled');
		if(tel !== '') {
			setTelToggle('violet');
		} else setTelToggle('filled');
	}, [password, password2, name, nickname, orgnTel, orgn]);

	useEffect(() => {
		setEmailToggle('filled');
	}, [email]);

	return(
			<div className="login sing-up">
				<h1 className="display-5-B">환영합니다.</h1>
				<p className="body-3-R sub-title txt-second-default">
				<span className="txt-violet-1">*</span>
				는 필수 입력 항목이에요.
				</p>
				<div className="sign-up-form">
					<div className="flex_ button-input box-">
						<Input importState="" labelText="이메일" placeholder="이메일을 입력해 주세요." valueType="" helperTextResult="none" iconState="true" state={email} setState={setEmail} light={emailToggle}/>
						<ButtonSecondary text="중복 확인" state={email.includes('@') ? "enabled" : "disabled"} onclick={checkEmail}/>
						<div className="flex_">
							<div className="flex_ check_flex txt-disabled caption-R" style={{color: emailToggle == 'violet' ? "#952dff" : "#b3b6b8"}}>
								<Icon icon="checkNone" size={7} color={emailToggle == 'violet' ? "#952dff" : "#b3b6b8"} stroke="" />
								이메일이 확인 되었습니다
							</div>
						</div>
					</div>
					<div className="flex_ box-">
						<InputPassword importState="" labelText="비밀번호" placeholder="비밀번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="true" state={password} setState={setPassword} light={passwordLight}/>
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
								특수문자 입력
							</div>
						</div>
					</div>
					<div className="flex_ box-">
						<InputPassword importState="" labelText="비밀번호 확인" placeholder="비밀번호를 다시 입력해 주세요." valueType="" helperTextResult="none" iconState="true" status={password2} setState={setPassword2} light={checkPwToggle}/>
						<div className="flex_">
							<div className="flex_ check_flex txt-disabled caption-R" style={{color: checkPwToggle == 'violet' ? "#952dff" : "#b3b6b8"}}>
								<Icon icon="checkNone" size={7} color={checkPwToggle == 'violet' ? "#952dff" : "#b3b6b8"} stroke="" />
								비밀번호가 일치 합니다
							</div>
						</div>
					</div>
					<div className="box-">
						<Input importState="" labelText="이름" placeholder="이름을 입력해 주세요." valueType="" helperTextResult="none" iconState="false" state={name} setState={setName} light={nameToggle}/>
					</div>
					<div className="box-">
						<Input importState="" labelText="닉네임" placeholder="닉네임을 입력해 주세요." valueType="" helperTextResult="none" iconState="false" state={nickname} setState={setNickname} light={nicknameToggle}/>
					</div>
					<div className="flex_ button-input box- button-full" style={{display: tel ? 'none' : 'block'}}>
						<p className="body-2-B txt-second-default">휴대폰<span className="txt-violet-1">*</span></p>
						<ButtonSecondary text="PASS 인증" state="enabled" onclick={verification}/>
					</div>
					<div className="flex_ button-input box-" style={{display: tel == '' ? 'none' : 'flex'}}>
						<TelInput importState="" labelText="휴대폰" placeholder="휴대폰을 입력해 주세요." valueType="" helperTextResult="none" iconState="false" state={tel} setState={setTel} light={telToggle}/>
						<ButtonSecondary text="중복 확인" state="enabled" onclick={verification}/>
						<div className="flex_">
							<div className="flex_ check_flex txt-disabled caption-R" style={{color: telToggle == 'violet' ? "#952dff" : "#b3b6b8"}}>
								<Icon icon="checkNone" size={7} color={telToggle == 'violet' ? "#952dff" : "#b3b6b8"} stroke="" />
								인증 되었습니다
							</div>
						</div>
					</div>
					<div className="input-box box-">
						<p className="body-2-B txt-second-default">프로필<span className="txt-violet-1">*</span></p>
						<Upload state="default" type="normal" fileState={file} setFileState={setFile}/>
						<p className="caption-R helper-txt">
							허용 사이즈: <span>800px x 800px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
						</p>
					</div>
					<div className="input-box box-">
						<p className="body-2-B txt-second-default">사업자 등록증<span className="txt-violet-1">*</span></p>
						<Upload state="default" type="normal" fileState={file2} setFileState={setFile2}/>
						<p className="caption-R helper-txt">
							허용 사이즈: <span>800px x 800px</span> <span className="bar">|</span> 파일 형식: <span>JPG,PNG,JPEG</span><span className="bar">|</span> 최대 파일 크기: <span>100mb</span>
						</p>
					</div>
					<div className="flex_ input-search box-">
						<p className="body-2-B txt-second-default">소속<span className="txt-violet-1">*</span></p>
						<SearchBar state={orgn} setState={setOrgn} data={data} setResult={setUcmdCd} light={orgnToggle}/>
						<p>{}</p>
					</div>
					<div className="box-">
						<Input importState="" labelText="소속 전화번호" placeholder="소속 전화번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="false" state={orgnTel} setState={setOrgnTel} light={orgnTelToggle}/>
					</div>

					<CheckBox size="small" label="전체 동의" checked={allCheckState} setCheckState={allCheck}/>
					<div class="bar bg-gray-5" />
					<CheckBox size="small"  label="(필수) 만 14세 이상이에요." checked={checkState1} setCheckState={setCheckState1}/>
					<CheckBox size="small"  label="(선택) 이메일/SMS 등 수신을 동의해요." checked={checkState2} setCheckState={setCheckState2}/>
					<CheckBox size="small"  label="(선택) 한국기술마켓의 뉴스레터 발송에 동의해요." checked={checkState3} setCheckState={setCheckState3}/>
					<Link href="/user/sign_up">
						<LoginBtn text="회원가입" onclick={registerMember}/>
					</Link>
					<p className="ps-txt caption-R txt-second-default flex_">
						회원가입 시 
						<span onClick={showModalA}>
							<TextBtn text="이용약관"/>
							{modalOpenA === true && <ModalGuideA />}
						</span>
						및
						<span onClick={showModalB}>
							<TextBtn text="개인정보 처리방침"/>
							{modalOpenB === true && <ModalGuideB />}
						</span>
						에 동의하게 됩니다.
					</p>
				</div>
			</div>
	)
}
export default Component;