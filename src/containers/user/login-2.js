import React from "react";
import Tabs from "/src/components/tabs/login_tab"
import Input from "/src/components/textFields/textInput.tsx";
import InputPassword from "/src/components/textFields/passwordInput.tsx"
import InputCode from "/src/components/textFields/codeInput.tsx"
import LoginBtn from "/src/components/buttons/button_primary_l"
import Link from "next/link"

const Component = () => {
	return(
			<div className="login">
				<h1 className="display-5-B">환영합니다.</h1>
				<p className="body-3-R sub-title txt-second-default">계속하시려면 로그인해 주세요.</p>
				<Tabs active={1} />
				<div className="login-form">
					<InputCode importState="none" labelText="로그인 코드" placeholder="로그인 코드를 입력해 주세요." valueType="" helperTextResult="none" iconState="true"/>
					<Input importState="none" labelText="이메일" placeholder="이메일을 입력해주세요." valueType="" helperTextResult="none" iconState="true"/>
					<InputPassword importState="none" labelText="비밀번호" placeholder="비밀번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="true"/>
					<Link href="/home">
						<LoginBtn text="로그인" />
					</Link>
				</div>
			</div>
	)
}
export default Component;