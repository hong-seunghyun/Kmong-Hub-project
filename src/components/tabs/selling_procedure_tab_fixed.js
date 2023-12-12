import React from "react";
import Link from 'next/link';

const Component = (props) => {
	return(
		<div className="tab-container">
			<ul className="flex_">
				<li className={`tab-item body-2-B ${props.active === 0 ? "active" : ""}`}>
					<span>
						<Link href="/technology/selling_procedure">
							운영자
						</Link>
					</span>
				</li>

				<li className={`tab-item body-2-B ${props.active === 1 ? "active" : ""}`}>
					<span>
						<Link href="/technology/selling_procedure_02">
							연구자
						</Link>
					</span>
				</li>

				<li className={`tab-item body-2-B ${props.active === 2 ? "active" : ""}`}>
					<span>
						<Link href="/technology/selling_procedure_03">
							담당자
						</Link>
					</span>
				</li>
			</ul>
		</div>
	)
}
export default Component;