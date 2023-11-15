import React from 'react';
import Icon from "components/icon/icon.tsx";
import ButtonSecondaryS from "components/buttons/button_secondary_s";
import 'scss/public.scss';
import 'scss/style.scss';

const Component = () => {
	return(
		<div className="header-container flex_">
			<img src="/images/logo.png" alt="logo" />
			<div className="header-content flex_">
				<div className="icon-wrap flex_">
					<Icon size={24} icon="bell" color="none" stroke='#464749' />
				</div>
				<div className="user-wrap flex_ body-3-R">
					<img src="/images/user_icon_s.png" alt="logo" />
					<p>test@naver.com</p>
				</div>
				<div className="logout-btn caption-R">
					로그아웃
				</div>
				<div className="link-btn">
					<ButtonSecondaryS text="사이트 이동"/>
				</div>
			</div>
		</div>
	)
}
export default Component;