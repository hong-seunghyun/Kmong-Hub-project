import React from "react";


const Component = (props) => {
	return(
		<div className="table-head-container flex_ caption-R txt-disabled">
			<div className="choice-cell">
				{props.headChoice}
			</div>
			<div className="category-cell">
				{props.headCategory}
			</div>
			<div className="title-cell">
				{props.headTitle}
			</div>
			<div className="belong-cell">
				{props.headBelong}
			</div>
			<div className="writer-cell">
				{props.headWriter}
			</div>
			<div className="position-cell">
				{props.headPosition}
			</div>
			<div className="etc-cell">
				{props.headEtc}
			</div>
		</div>
	)
}
export default Component