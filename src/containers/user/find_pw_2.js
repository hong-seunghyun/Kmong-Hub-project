import React from "react";
import Tabs from "/src/components/tabs/login_tab"
import Input from "/src/components/textFields/textInput.tsx";
import InputPassword from "/src/components/textFields/passwordInput.tsx"
import LoginBtn from "/src/components/buttons/button_primary_l"
import Link from "next/link"
import Badge from "/src/components/label/badge"
import { kotechUrl } from "/src/asset/config/config.json";
import { useRouter } from "next/router";

const Component = () => {

	const router = useRouter();

	const verification = async () => {
    window.addEventListener("message", (message) => {
			if(message.data != '') {
				console.log(message.data);
				window.location = `/user/find_pw_3?hpno=${message.data}&email=${router.query.email}`;
			}
    });

    const left = window.screen.width / 2 - 500 / 2;
    const top = window.screen.height / 2 - 800 / 2;
    const option = `menubar=no, toolbar=no, resizable=no, width=500, height=600, left=${left}, top=${top}`;
    await window.open(
      `${kotechUrl}/api/v1/nice/encrypt/data?returnUrl=${kotechUrl}/api	/v1/nice/decrypt/data&redirectUrl=http://localhost:3000/user/verification?to=/user/find_pw_2`,
      "nicePopup",
      option
    );
  };

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
					<Link href="/user/find_pw_2">
						<LoginBtn text="본인 인증" onclick={verification}/>
					</Link>
				</div>
			</div>
	)
}
export default Component;