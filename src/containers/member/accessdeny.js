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
						상위 플랜 회원만<br />
						접근 가능한 페이지에요.
					</h1>

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
							<span className="txt-violet-1 txt_">
								만료까지 [N]일 남았어요.
							</span>
							<Link href="/member/operator_list">
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