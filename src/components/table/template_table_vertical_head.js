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
			<div className="date-from-cell">
				{props.headDateFrom}
			</div>
			<div className="date-to-cell">
				{props.headDateTo}
			</div>
			<div className="etc-cell">
				{props.headEtc}
			</div>
		</div>
	)
}
export default Component