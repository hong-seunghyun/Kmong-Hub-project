import React from 'react';


import ButtonPrimaryXL from "components/buttons/button_primary_xl";
import ButtonErrorXL from "components/buttons/button_error_xl";
import ButtonOutlineXL from "components/buttons/button_outline_xl";

const Component = (props) => {
	return(
		<div className="modal-container radius-20 flex_">
			<img src="/images/file.png" alt="file" />
			<div className="text-wrap flex_">
				<h6 className="heading-3-B">{props.title}</h6>
				<p className="body-3-R">{props.text}</p>
			</div>
			<div className={`btn-wrap ${props.type} ${props.value} ${props.count} flex_`}>
				<div className="primary-btn btn-box">
				<ButtonPrimaryXL text="label"/>
				</div>
				<div className="error-btn btn-box">
				<ButtonErrorXL text="label"/>
				</div>
				
				<div className="outline-btn btn-box">
				<ButtonOutlineXL text="label"/>
				</div>
			</div>
		</div>
	)
}
export default Component ;