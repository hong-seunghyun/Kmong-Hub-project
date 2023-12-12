import React from "react";
import Link from 'next/link';

const Component = (props) => {

	return(
		<div className="tab-container">
			<ul className="flex_">
				<li className={`tab-item body-3-B ${props.active === 0 ? "active" : ""}`}>
				<span>
						<Link href="/user/login">
						대표 관리자
						</Link>
					</span>
				</li>

				<li className={`tab-item body-3-B ${props.active === 1 ? "active" : ""}`}>
				<span>
						<Link href="/user/login-2">
						운영자
						</Link>
					</span>
				</li>
			</ul>
		</div>
	)
}
export default Component;