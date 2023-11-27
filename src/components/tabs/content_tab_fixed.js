import React from "react";
import Link from 'next/link';

const Component = (props) => {

	return(
		<div className="tab-container">
			<ul className="flex_">
				<li className={`tab-item body-3-B ${props.active === 0 ? "active" : ""}`}>
				<span>
						<Link href="/contents">
						기술 이전
						</Link>
					</span>
				</li>

				<li className={`tab-item body-3-B ${props.active === 1 ? "active" : ""}`}>
				<span>
						<Link href="/contents/news">
						뉴스
						</Link>
					</span>
				</li>

				<li className={`tab-item body-3-B ${props.active === 2 ? "active" : ""}`}>
				<span>
						<Link href="/contents/event">
						행사
						</Link>
					</span>
				</li>

				<li className={`tab-item body-3-B ${props.active === 3 ? "active" : ""}`}>
				<span>
						<Link href="/contents/support">
						지원 사업
						</Link>
					</span>
				</li>

				<li className={`tab-item body-3-B ${props.active === 4 ? "active" : ""}`}>
				<span>
						<Link href="/contents/contents">
						콘텐츠 노출
						</Link>
					</span>
				</li>
			</ul>
		</div>
	)
}
export default Component;