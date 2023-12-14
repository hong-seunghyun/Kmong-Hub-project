import React from "react";
import Tabs from "/src/components/tabs/login_tab"
import Input from "/src/components/textFields/textInput.tsx";
import InputPassword from "/src/components/textFields/passwordInput.tsx"
import LoginBtn from "/src/components/buttons/button_primary_l"
import TextBtn from "/src/components/buttons/text_button_underline_primary_m"
import Link from "next/link"
import Badge from "/src/components/label/badge"
import Icon from "/src/components/icon/icon.tsx"
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

const Component = () => {

	const router = useRouter();

	useLayoutEffect(() => {
		if(!router.isReady) return;
		console.log(router.query);
	});

	return(
			<div className="login find- sing-up find-3">
				<h1 className="display-5-B flex_">
					비밀번호 재설정
					<div className="flex_">
						<Badge value="1" />
						<Badge value="2" />
						<Badge value="3" />
					</div>
				</h1>
				<p className="body-3-R sub-title txt-second-default">비밀번호를 찾기 위해 먼저 휴대 전화로 본인인증 해주세요.</p>
				<div className="sign-up-form">
					<div className="flex_ box-">
						<InputPassword importState="" labelText="비밀번호" placeholder="비밀번호를 입력해 주세요." valueType="" helperTextResult="none" iconState="true"/>
						<div className="flex_">
							<div className="flex_ check_flex txt-disabled caption-R">
								<Icon icon="checkNone" size={7} color="#b3b6b8" stroke="" />
								숫자 입력
							</div>
							<div className="flex_ check_flex txt-disabled caption-R">
								<Icon icon="checkNone" size={7} color="#b3b6b8" stroke="" />
								8자 이상 ~ 12자 이하
							</div>
							<div className="flex_ check_flex txt-disabled caption-R">
								<Icon icon="checkNone" size={7} color="#b3b6b8" stroke="" />
								영문 입력
							</div>
						</div>
					</div>
					<div className="flex_ box-">
						<InputPassword importState="" labelText="비밀번호 확인" placeholder="비밀번호를 다시 입력해 주세요." valueType="" helperTextResult="none" iconState="true"/>
					</div>
					<Link href="/user/find_pw_4">
						<LoginBtn text="확인" />
					</Link>
				</div>
			</div>
	)
}
export default Component;