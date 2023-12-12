import React from "react";
import Link from 'next/link';

const Component = (props) => {

	return(
		<div className="tab-container">
			<ul className="flex_">
				<li className={`tab-item body-3-B ${props.active === 0 ? "active" : ""}`}>
                    <span>
                        <Link href="/event/list_detail">
                        전체 00
                        </Link>
                    </span>
				</li>

				<li className={`tab-item body-3-B ${props.active === 1 ? "active" : ""}`}>
                    <span>
                        <Link href="/event/list_detail_2">
                        승인 완료 00
                        </Link>
                    </span>
				</li>
                
                <li className={`tab-item body-3-B ${props.active === 2 ? "active" : ""}`}>
                    <span>
                        <Link href="/event/list_detail_3">
                        취소 요청 00
                        </Link>
                    </span>
				</li>

                <li className={`tab-item body-3-B ${props.active === 3 ? "active" : ""}`}>
                    <span>
                        <Link href="/event/list_detail_4">
                        승인 대기 00
                        </Link>
                    </span>
				</li>
			</ul>
		</div>
	)
}
export default Component;