import React from "react";


const Component = (props) => {
	return(
		<div className="table-head-container flex_ caption-R txt-disabled">
			<div className="title-cell">
				{props.headTitle}
			</div>
			<div className="pc-cell">
				{props.headPc}
			</div>
			<div className="mobile-cell">
				{props.headMobile}
			</div>
			<div className="date-cell">
				{props.headDate}
			</div>
			<div className="category-cell">
				{props.headCategory}
			</div>
			<div className="etc-cell">
				{props.headEtc}
			</div>
		</div>
	)
}
export default Component