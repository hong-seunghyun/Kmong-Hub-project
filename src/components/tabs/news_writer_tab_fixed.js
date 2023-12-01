import React from "react";
import Link from 'next/link';
import Icon from "/src/components/icon/icon.tsx"

const Component = (props) => {
	return(
		<div className="tab-container">
			<ul className="flex_">
				<li className={`tab-item body-2-B ${props.active === 0 ? "active" : ""}`}>
					<span>
						<Link href="/marketing/news_setting">
							기술이전 선택
						</Link>
					</span>
				</li>
				<li className="arrow">
					<span>
					<Icon icon="chevronRight" size={9} color="#464749" stroke="none" />
					</span>
				</li>
				<li className={`tab-item body-2-B ${props.active === 1 ? "active" : ""}`}>
					<span>
						<Link href="/marketing/news">
							행사 선택
						</Link>
					</span>
				</li>
				<li className="arrow">
					<span>
					<Icon icon="chevronRight" size={9} color="#464749" stroke="none" />
					</span>
				</li>

				<li className={`tab-item body-2-B ${props.active === 2 ? "active" : ""}`}>
					<span>
						<Link href="/marketing/news">
							지원사업
						</Link>
					</span>
				</li>
				<li className="arrow">
					<span>
					<Icon icon="chevronRight" size={9} color="#464749" stroke="none" />
					</span>
				</li>
				<li className={`tab-item body-2-B ${props.active === 3 ? "active" : ""}`}>
					<span>
						<Link href="/marketing/news">
							뉴스 선택
						</Link>
					</span>
				</li>
				<li className="arrow">
					<span>
					<Icon icon="chevronRight" size={9} color="#464749" stroke="none" />
					</span>
				</li>

				<li className={`tab-item body-2-B ${props.active === 4 ? "active" : ""}`}>
					<span>
						<Link href="/marketing/news">
							뉴스 레터
						</Link>
					</span>
				</li>
			</ul>
		</div>
	)
}
export default Component;