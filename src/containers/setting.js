import React from 'react';
import 'scss/page_style.scss'

import NavigationTopLogin from "components/navigations/navigation_top_login";
import NavigationSide from "components/navigations/navigation_side";

const Component = () => {
	return(
		<div className="container">
			<NavigationTopLogin />
			<NavigationSide />
			<div className="wrap">
				<div className="setting-contents">
					<h1 className="display-5-B">사이트 설정</h1>
				</div>
			</div>
		</div>
	)
}
export default Component;