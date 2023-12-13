import React from "react";
import Link from 'next/link';

const Component = (props) => {
	return(
		<div className="tab-container">
			<ul className="flex_">
				<li className={`tab-item body-2-B ${props.active === 0 ? "active" : ""}`}>
					<span>
						<Link href="/transaction/transaction">
							거래 등록
						</Link>
					</span>
				</li>

				<li className={`tab-item body-2-B ${props.active === 1 ? "active" : ""}`}>
					<span>
						<Link href="/transaction/transaction">
							거래 요청
						</Link>
					</span>
				</li>
			</ul>
		</div>
	)
}
export default Component;