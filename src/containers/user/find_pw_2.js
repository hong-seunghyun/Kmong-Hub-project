import React from "react";
import Tabs from "/src/components/tabs/login_tab"
import Input from "/src/components/textFields/textInput.tsx";
import InputPassword from "/src/components/textFields/passwordInput.tsx"
import LoginBtn from "/src/components/buttons/button_primary_l"
import TextBtn from "/src/components/buttons/text_button_underline_primary_m"
import Link from "next/link"
import Badge from "/src/components/label/badge"

const Component = () => {
	return(
			<div className="login find- find-2">
				<h1 className="display-5-B flex_">
					비밀번호 찾기
					<div className="flex_">
						<Badge value="1" />
						<Badge value="2" />
						<Badge value="3" />
					</div>
				</h1>
				<p className="body-3-R sub-title txt-second-default">비밀번호를 찾기 위해 먼저 휴대 전화로 본인인증 해주세요.</p>
				<div className="login-form">
					<Link href="/user/find_pw_3">
						<LoginBtn text="본인 인증" />
					</Link>
				</div>
			</div>
	)
}
export default Component;