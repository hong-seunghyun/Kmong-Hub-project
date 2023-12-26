import React from "react";


import ButtonPrimaryXL from "/src/components/buttons/button_primary_xl";
import ButtonOutlineXL from "/src/components/buttons/button_outline_xl";

const Component = (props) => {
	return(
		<div className="modal-container radius-20 flex_ ai-modal">
			<div className="text-wrap flex_">
				<h6 className="heading-3-B">
					AI 생성 시<br></br>
					AI 생성 가능 횟수가 1회 차감돼요.
				</h6>
				<p className="body-3-R txt-third">
					잔여 횟수 : [N]회
				</p>
			</div>
			<div className={`btn-wrap flex_ default`}>
				<ButtonOutlineXL text="취소"/>
				<ButtonPrimaryXL text="생성"/>
			</div>
		</div>
	)
}
export default Component ;