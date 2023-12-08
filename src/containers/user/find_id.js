import React from "react";
import Tabs from "/src/components/tabs/login_tab"
import Input from "/src/components/textFields/textInput.tsx";
import InputPassword from "/src/components/textFields/passwordInput.tsx"
import LoginBtn from "/src/components/buttons/button_primary_l"

import TextBtn from "/src/components/buttons/text_button_underline_primary_m"
import Link from "next/link"

const Component = () => {
	return(
			<div className="login waiting-sign-up">
				<h1 className="display-5-B">
					아이디 찾기
				</h1>
				<p className="body-3-R sub-title txt-second-default">
				아이디를 찾기 위해 먼저 휴대전화로 <br />
				본인인증 해주세요.
				</p>
				<Link href="/user/find_result_id">
					<LoginBtn text="본인인증" />
				</Link>
			</div>
	)
}
export default Component;