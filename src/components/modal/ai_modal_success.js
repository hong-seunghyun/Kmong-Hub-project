import React from "react";


import ButtonPrimaryXL from "/src/components/buttons/button_primary_xl";
import ButtonOutlineXL from "/src/components/buttons/button_outline_xl";

const Component = (props) => {
	return(
		<div className="modal-container radius-20 flex_ ai-modal ai-modal-success">
			<img src='/images/waitingForApproval_s.png' alt="waitingForApproval_s" />
			<div className="text-wrap flex_">
				<h6 className="heading-3-B">
				AI 생성 중...
				</h6>
				<p className="body-3-R txt-third">
				약 5분 정도의 시간이 필요해요.<br />
문서 작성 완료 시 바로 알림을 드릴게요.
				</p>
			</div>
			<div className={`btn-wrap flex_ default`}>
				<ButtonPrimaryXL text="연구자 정보 목록으로"/>
			</div>
		</div>
	)
}
export default Component ;