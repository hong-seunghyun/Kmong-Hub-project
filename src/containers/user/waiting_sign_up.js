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
				<img src="/images/waitingForApproval_l.png" className="waitingForApproval_l"/>
				<h1 className="display-5-B">
					회원가입 승인 대기 중..
				</h1>
				<p className="body-3-R sub-title txt-second-default">
					관리자가 회원 가입 승인 대기 중입니다. <br />
					기간은 영업일 기준 3~5일 소요되며, <br />
					승인이 완료되면 이메일이 발송돼요
				</p>
				<Link href="/main">
					<LoginBtn text="메인으로 이동" />
				</Link>
			</div>
	)
}
export default Component;