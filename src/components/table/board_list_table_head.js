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
			<div className="note-cell">
				{props.headNote}
			</div>
			<div className="view-cell">
				{props.headView}
			</div>
			<div className="writer-cell">
				{props.headWriter}
			</div>
			<div className="date-cell">
				{props.headDate}
			</div>
			
			<div className="etc-cell">
				{props.headEtc}
			</div>
		</div>
	)
}
export default Component