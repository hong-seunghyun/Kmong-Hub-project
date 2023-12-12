import React from "react";
import Tabs from "/src/components/tabs/login_tab"
import Input from "/src/components/textFields/textInput.tsx";
import InputPassword from "/src/components/textFields/passwordInput.tsx"
import LoginBtn from "/src/components/buttons/button_primary_l"
import TextBtn from "/src/components/buttons/text_button_underline_primary_m"
import Link from "next/link"
import { login } from "../../asset/apis/siteApis";
import { useState } from "react";

const Component = () => {

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const Signin = () => {
		console.log(`EMAIL    : ${email}`);
		console.log(`PASSWORD : ${password}`)
	}

	return(
			<div className="login">
				<h1 className="display-5-B">환영합니다.</h1>
				<p className="body-3-R sub-title txt-second-default">계속하시려면 로그인해 주세요.</p>
				<Tabs active={0} />
				<div className="login-form">
					<Input importState="none" labelText="이메일" placeholder="이메일을 입력해주세요." valueType="" helperTextResult="none" iconState="true" state={email} setState={setEmail}/>
					<InputPassword importState="none" labelText="비밀번호" placeholder="비밀번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="true" state={password} setState={setPassword}/>
					<Link href="/home">
						<LoginBtn text="로그인" onclick={Signin}/>
					</Link>
					<div className="flex_ body-3-R">
						<Link href="/user/sign_up">
							<TextBtn text="한국기술HUB는 처음인가요?" />
						</Link>
						<div className="flex_ txt-second-default">
							<Link href="/user/find_id">
								이메일 찾기
							</Link>
							<div className="bar" />
							<Link href="/user/find_pw_1">
								비밀번호 찾기
							</Link>
						</div>
					</div>
				</div>
			</div>
	)
}
export default Component;