import React, { useState } from "react";
import Icon from "/src/components/icon/icon.tsx"
import Label from "/src/components/label/label";
import Button from "/src/components/buttons/button_cta"
import Link from "next/link"

const Component = () => {

	return(
		<div className="container">
			<div className="page-wrap">
				<div className="member- accessdeny accessdeny_freemember">
					<img src="/images/waitingForApproval_l.png" alt="waitingForApproval_l" />
					<h1 className="display-5-B">
						유료 회원만<br />
						접근 가능한 페이지에요.
					</h1>
					<p className="text_ body-3-R txt-">
						유료 플랜으로 전환하시고 더 나은 서비스를 경험해 보세요!
					</p>

					<div className="title-box flex_ bg-lightGray body-3-R">
						<div className="flex_">
							<div className="flex_ txt-second-default">
								<Icon icon="card" size={13} stroke="#b3b6b8" color="none" />
								나의 플랜
							</div>
							<div className="flex_">
								<Label text="BASIC" backgroundColor="bg-violet-1" fontColor="txt-white" icon="false" />
								N개월
							</div>
						</div>
						<div className="flex_ button_flex">
							<Link href="/member/accessdeny">
								<Button text="플랜 업그레이드" />
							</Link>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}
export default Component;