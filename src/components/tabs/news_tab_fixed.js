import React from "react";
import Link from 'next/link';

const Component = (props) => {
	return(
		<div className="tab-container">
			<ul className="flex_">
				<li className={`tab-item body-2-B ${props.active === 0 ? "active" : ""}`}>
					<span>
						<Link href="/marketing/news_setting">
							뉴스레터 설정
						</Link>
					</span>
				</li>

				<li className={`tab-item body-2-B ${props.active === 1 ? "active" : ""}`}>
					<span>
						<Link href="/marketing/news">
							뉴스레터 목록
						</Link>
					</span>
				</li>
			</ul>
		</div>
	)
}
export default Component;