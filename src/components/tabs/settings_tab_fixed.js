import React from 'react';


const Component = (props) => {
	const propsACtiveNumber = props.activeSubTab;

	const settingDefaultLink = () => {
    window.location.href="/settings/settings";
  };
	const settingBusinessLink = () => {
    window.location.href="/settings/settings_business";
  };

	return(
		<div className="tab-container">
			<ul className="flex_">
				<li className={`tab-item body-3-B ${props.active === 0 ? 'active' : ''}`}>
					<span onClick={()=>{
							settingDefaultLink();
						}}>
						기본 정보
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className={`radius-8 ${propsACtiveNumber === 0 ? 'active' : ''}`} onClick={()=>{props.setSubTab(0)}}>
							기본 정보
						</li>
						<li className={`radius-8 ${propsACtiveNumber === 1 ? 'active' : ''}`} onClick={()=>{props.setSubTab(1)}}>
							고객센터 설정
						</li>
						<li className={`radius-8 ${propsACtiveNumber === 2 ? 'active' : ''}`} onClick={()=>{props.setSubTab(2)}}>
							이메일 설정
						</li>
					</ul>
				</li>

				<li className={`tab-item body-3-B ${props.active === 1 ? 'active' : ''}`}>
					<span onClick={()=>{
							settingBusinessLink();
						}}>
						사업자 정보
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className={`radius-8 ${propsACtiveNumber === 0 ? 'active' : ''}`} onClick={()=>{props.setSubTab(0)}}>
							사업자 정보
						</li>
						<li className={`radius-8 ${propsACtiveNumber === 1 ? 'active' : ''}`} onClick={()=>{props.setSubTab(1)}}>
							개인정보보호 책임자 정보
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
						스크립트
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
						도메인 설정
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
						회원가입 설정
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