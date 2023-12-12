import React from "react";


const Component = (props) => {
	return(
		<div className="table-head-container flex_ caption-R txt-disabled">
			<div className="choice-cell">
				{props.headChoice}
			</div>
			<div className="title-cell">
				{props.headTitle}
			</div>
			<div className="email-cell">
				{props.headEmail}
			</div>
			<div className="date-cell">
				{props.headDate}
			</div>
			<div className="access-cell">
				{props.headAccess}
			</div>
			<div className="etc-cell">
				{props.headEtc}
			</div>
		</div>
	)
}
export default Component