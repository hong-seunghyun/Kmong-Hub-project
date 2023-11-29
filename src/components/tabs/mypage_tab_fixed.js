import React from "react";
import Link from 'next/link';

const Component = (props) => {
	const propsACtiveNumber = props.activeSubTab;

	return(
		<div className="tab-container">
			<ul className="flex_">
				<li className={`tab-item body-2-B ${props.active === 0 ? "active" : ""}`}>
					<span>
						<Link href="/mypage">
							내 정보 관리
						</Link>
					</span>
				</li>

				<li className={`tab-item body-2-B ${props.active === 1 ? "active" : ""}`}>
					<span>
						<Link href="/mypage/payment">
						결제 플랜
						</Link>
					</span>
				</li>

				<li className={`tab-item body-2-B ${props.active === 2 ? "active" : ""}`}>
					<span>
						<Link href="/mypage/history">
						결제 내역
						</Link>
					</span>
					
				</li>
			</ul>
		</div>
	)
}
export default Component;