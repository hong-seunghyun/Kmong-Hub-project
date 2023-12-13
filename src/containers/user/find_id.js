import React from "react";
import Tabs from "/src/components/tabs/login_tab"
import Input from "/src/components/textFields/textInput.tsx";
import InputPassword from "/src/components/textFields/passwordInput.tsx"
import LoginBtn from "/src/components/buttons/button_primary_l"
import { kotechUrl } from "/src/asset/config/config.json"
import TextBtn from "/src/components/buttons/text_button_underline_primary_m"
import Link from "next/link"

const Component = () => {

	const verification = async () => {
		const left = screen.width / 2 - 500 / 2;
		const top = screen.height / 2 - 800 / 2;
		const option = `menubar=no, toolbar=no, resizable=no, width=500, height=600, left=${left}, top=${top}`;
		await window.open(`${kotechUrl}/api/v1/nice/encrypt/data?returnUrl=${kotechUrl}/api/v1/nice/decrypt/data&redirectUrl=http://localhost:3000/user/find_result_id`, 'nicePopup', option);

		window.update = async () => {
			// @ts-ignore
			if (window.certResult) {
				// @ts-ignore
				const res = await fetch(`/api/account/phone/duplicate?phone=${window.certResult.mobileno}`)
				if (res.ok) {
					const body = await res.json()
					if (body.isDuplicate) {
						openDefaultModal(['이미 사용 중인 휴대폰 번호입니다.'])
					} else {
						// @ts-ignore
						certResult.value = window.certResult
					}
				} else {
					openDefaultModal(['일시적인 오류가 발생했습니다.', '잠시 후 다시 시도해 주세요.'])
				}
			} else {
				openDefaultModal(['일시적인 오류가 발생했습니다.', '잠시 후 다시 시도해 주세요.'])
			}
		}
	}

	return(
			<div className="login waiting-sign-up">
				<h1 className="display-5-B">
					아이디 찾기
				</h1>
				<p className="body-3-R sub-title txt-second-default">
				아이디를 찾기 위해 먼저 휴대전화로 <br />
				본인인증 해주세요.
				</p>
				<Link href="/user/find_id">
					<LoginBtn text="본인인증" onclick={verification}/>
				</Link>
			</div>
	)
}
export default Component;