import React from "react";
import Tabs from "/src/components/tabs/login_tab"
import Input from "/src/components/textFields/textInput.tsx";
import InputPassword from "/src/components/textFields/passwordInput.tsx"
import LoginBtn from "/src/components/buttons/button_primary_l"
import TextBtn from "/src/components/buttons/text_button_underline_primary_m"
import Link from "next/link"

const Component = () => {
	return(
			<div className="login waiting-sign-up find-4">
				<img src="/images/password.png" className="password"/>
				<h1 className="display-5-B">
				비밀번호를 재설정했어요.
				</h1>
				<Link href="/main">
					<LoginBtn text="메인으로 이동" />
				</Link>
			</div>
	)
}
export default Component;