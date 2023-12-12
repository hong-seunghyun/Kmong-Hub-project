import React from "react";
import Tabs from "/src/components/tabs/login_tab"
import Input from "/src/components/textFields/textInput.tsx";
import InputPassword from "/src/components/textFields/passwordInput.tsx"
import LoginBtn from "/src/components/buttons/button_primary_l"
import OutlineBtn from "/src/components/buttons/button_outline_l"
import TextBtn from "/src/components/buttons/text_button_underline_primary_m"
import Link from "next/link"

const Component = () => {
	return(
			<div className="login waiting-sign-up find-">
				<h1 className="display-5-B">
					아이디 찾기 결과
				</h1>
				<div className="body-3-R sub-title-box txt-second-default radius-8 bg-lightGray">
					<p className="body-2-B">
					kotech@kotech.co.kr
					</p>
					<p className="body-3-R txt-third">
					2022. 03. 21 가입
					</p>
				</div>
				<Link href="/user/login">
					<LoginBtn text="로그인" />
				</Link>
				<Link href="/user/find_pw">
					<OutlineBtn text="비밀번호 찾기" />
				</Link>
			</div>
	)
}
export default Component;