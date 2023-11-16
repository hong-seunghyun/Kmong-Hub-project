import React from 'react';
import 'scss/public.scss';
import 'scss/components_style.scss';

const Component = () => {
	return(
		<div className="tab-container">
			<ul className="flex_">
				<li className="tab-item body-3-B active">
					<span>
						기본정보
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 ">
							기본 정보
						</li>
						<li className="radius-8 ">
							고객센터 설정
						</li>
						<li className="radius-8">
							이메일 설정
						</li>
					</ul>
				</li>

				<li className="tab-item body-3-B">
					<span>
						사업자 정보
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 ">
							subTab
						</li>
						<li className="radius-8 ">
							subTab
						</li>
					</ul>
				</li>

				<li className="tab-item body-3-B">
					<span>
						약관 계정
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>

				<li className="tab-item body-3-B">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>

				<li className="tab-item body-3-B">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>

				<li className="tab-item body-3-B">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>
			</ul>
		</div>
	)
}
export default Component;