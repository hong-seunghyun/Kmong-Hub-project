import React from 'react';
import ButtonCta from "components/buttons/button_cta";
import 'scss/public.scss';
import 'scss/style.scss';

const Component = () => {
	return(
		<div className="header-container flex_ login_">
			<div className="flex_ list-wrap">
				<img src="/images/logo.png" alt="logo" />
				<ul className="body-2-R flex_">
					<li>요금제</li>
					<li>사용자 가이드</li>
				</ul>
			</div>
			<div className="header-content flex_">
				<div className="link-btn">
					<ButtonCta text="지금 시작하기"/>
				</div>
			</div>
		</div>
	)
}
export default Component;