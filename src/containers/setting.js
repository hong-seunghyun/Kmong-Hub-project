import React from 'react';
import 'scss/page_style.scss'

import NavigationTopLogin from "components/navigations/navigation_top_login";
import NavigationSide from "components/navigations/navigation_side";
import Tab from "components/tabs/settings_tab_fixed";
import Input from "components/textFields/textInput.tsx";

const Component = () => {
	return(
		<div className="container">
			<NavigationTopLogin />
			<NavigationSide />
			<div className="page-wrap">
				<div className="setting-contents">
					<h1 className="display-5-B">사이트 설정</h1>
					<Tab />
					<Input labelText="이메일" placeholder="이메일을 입력해 주세요" valueType="" helperTextResult="helperA"/>
				</div>
			</div>
		</div>
	)
}
export default Component;