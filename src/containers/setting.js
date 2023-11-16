import React from 'react';
import 'scss/page_style.scss'

import NavigationTopLogin from "components/navigations/navigation_top_login";
import NavigationSide from "components/navigations/navigation_side";
import Tab from "components/tabs/settings_tab_fixed";

const Component = () => {
	return(
		<div className="container">
			<NavigationTopLogin />
			<NavigationSide />
			<div className="wrap">
				<div className="setting-contents">
					<h1 className="display-5-B">사이트 설정</h1>
					<Tab />
				</div>
			</div>
		</div>
	)
}
export default Component;