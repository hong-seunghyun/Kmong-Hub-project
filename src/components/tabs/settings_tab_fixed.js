import React from "react";
import Link from 'next/link';

const Component = (props) => {
	const propsACtiveNumber = props.activeSubTab;

	return(
		<div className="tab-container">
			<ul className="flex_">
				<li className={`tab-item body-2-B ${props.active === 0 ? "active" : ""}`}>
					<span>
						<Link href="/settings/settings">
							기본 정보
						</Link>
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className={`radius-8 ${propsACtiveNumber === 0 ? "active" : ""}`} onClick={()=>{props.setSubTab(0)}}>
							기본 정보
						</li>
						<li className={`radius-8 ${propsACtiveNumber === 1 ? "active" : ""}`} onClick={()=>{props.setSubTab(1)}}>
							고객센터 설정
						</li>
						<li className={`radius-8 ${propsACtiveNumber === 2 ? "active" : ""}`} onClick={()=>{props.setSubTab(2)}}>
							이메일 설정
						</li>
					</ul>
				</li>

				<li className={`tab-item body-2-B ${props.active === 1 ? "active" : ""}`}>
					<span>
						<Link href="/settings/settings_business">
						사업자 정보
						</Link>
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className={`radius-8 ${propsACtiveNumber === 0 ? "active" : ""}`} onClick={()=>{props.setSubTab(0)}}>
							사업자 정보
						</li>
						<li className={`radius-8 ${propsACtiveNumber === 1 ? "active" : ""}`} onClick={()=>{props.setSubTab(1)}}>
							개인정보보호 책임자 정보
						</li>
					</ul>
				</li>

				<li className={`tab-item body-2-B ${props.active === 2 ? "active" : ""}`}>
					<span>
						<Link href="/settings/settings_terms">
						약관 계정
						</Link>
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className={`radius-8 ${propsACtiveNumber === 0 ? "active" : ""}`} onClick={()=>{props.setSubTab(0)}}>
							이용약관
						</li>
						<li className={`radius-8 ${propsACtiveNumber === 1 ? "active" : ""}`} onClick={()=>{props.setSubTab(1)}}>
							개인정보처리방침
						</li>
						<li className={`radius-8 ${propsACtiveNumber === 2 ? "active" : ""}`} onClick={()=>{props.setSubTab(2)}}>
							개인정보 수집 및 이용에 대한 동의 (회원가입)
						</li>
						<li className={`radius-8 ${propsACtiveNumber === 3 ? "active" : ""}`} onClick={()=>{props.setSubTab(3)}}>
							개인정보 수집 및 이용에 대한 동의 (게시판)
						</li>
						<li className={`radius-8 ${propsACtiveNumber === 4 ? "active" : ""}`} onClick={()=>{props.setSubTab(4)}}>
							광고성 정보 수신동의
						</li>
						<li className={`radius-8 ${propsACtiveNumber === 5 ? "active" : ""}`} onClick={()=>{props.setSubTab(5)}}>
							개인정보제공 설정
						</li>
					</ul>
				</li>

				<li className={`tab-item body-2-B ${props.active === 3 ? "active" : ""}`}>
					<span>
						<Link href="/settings/settings_script">
						스크립트
						</Link>
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className={`radius-8 ${propsACtiveNumber === 0 ? "active" : ""}`} onClick={()=>{props.setSubTab(0)}}>
							SEO 정보
						</li>
						<li className={`radius-8 ${propsACtiveNumber === 1 ? "active" : ""}`} onClick={()=>{props.setSubTab(1)}}>
							Google Analystics
						</li>
						<li className={`radius-8 ${propsACtiveNumber === 2 ? "active" : ""}`} onClick={()=>{props.setSubTab(2)}}>
							채널톡
						</li>
					</ul>
				</li>

				<li className={`tab-item body-2-B ${props.active === 4 ? "active" : ""}`}>
					<span>
						<Link href="/settings/settings_domain">
						도메인 설정
						</Link>
					</span>
				</li>

				<li className={`tab-item body-2-B ${props.active === 5 ? "active" : ""}`}>
					<span>
						<Link href="/settings/settings_join">
						회원가입 설정
						</Link>
					</span>
				</li>
			</ul>
		</div>
	)
}
export default Component;