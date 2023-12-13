import React from "react";
import Link from 'next/link';

const Component = (props) => {
	return(
		<div className="tab-container">
			<ul className="flex_">
				<li className={`tab-item body-2-B ${props.active === 0 ? "active" : ""}`}>
					<span>
						<Link href="/marketing/setting">
							 서류 제출 안내
						</Link>
					</span>
				</li>

				<li className={`tab-item body-2-B ${props.active === 1 ? "active" : ""}`}>
					<span>
						<Link href="/marketing/setting_02">
							발신자 정보 조회
						</Link>
					</span>
				</li>
			</ul>
		</div>
	)
}
export default Component;