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
			<div className="login find- find-1">
				<h1 className="display-5-B flex_">
					비밀번호 찾기
					<div className="flex_">
						<Badge value="1" />
						<Badge value="2" />
						<Badge value="3" />
					</div>
				</h1>
				<p className="body-3-R sub-title txt-second-default">가입한 아이디를 입력해 주세요.</p>
				<div className="login-form">
					<Input importState="none" labelText="이메일" placeholder="이메일을 입력해주세요." valueType="" helperTextResult="none" iconState="true"/>
					<Link href="/user/find_pw_2">
						<LoginBtn text="다음" />
					</Link>
					<div className="flex_ body-3-R find-id">
						<Link href="/user/find_id">
							<TextBtn text="혹시 이메일을 잊으셨나요?" />
						</Link>
					</div>
				</div>
			</div>
	)
}
export default Component;