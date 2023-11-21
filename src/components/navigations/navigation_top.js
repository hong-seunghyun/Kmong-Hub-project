import React from 'react';
import ButtonCta from "components/buttons/button_cta";


const Component = () => {

	const linkBtn = () => {
    window.location.href="/settings/settings";
  };

	return(
		<div className="header-container flex_ login_">
			<div className="flex_ list-wrap">
				<a href="/"><img src="/images/logo.png" alt="logo" /></a>
				<ul className="body-2-R flex_">
					<li><a href="/etc/rate-plan">요금제</a></li>
					<li><a href="/etc/user-guide">사용자 가이드</a></li>
				</ul>
			</div>
			<div className="header-content flex_">
				<div className="link-btn" onClick={()=>{linkBtn()}}>
					<ButtonCta  text="지금 시작하기"/>
				</div>
			</div>
		</div>
	)
}
export default Component;