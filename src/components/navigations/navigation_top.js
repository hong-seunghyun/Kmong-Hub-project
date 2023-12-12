import React from "react";
import ButtonCta from "/src/components/buttons/button_cta";
import Link from "next/link";

const Component = () => {

	const linkBtn = () => {
    window.location.href="/user/login";
  };

	return(
		<div className="header-container flex_ login_">
			<div className="flex_ list-wrap">
				<Link href={`/`}><img src="/images/logo.png" alt="logo" /></Link>
				<ul className="body-2-R flex_">
					<li><Link href={`/etc/rate-plan`}>요금제</Link></li>
					<li><Link href={`/etc/user-guide-01`}>사용자 가이드</Link></li>
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