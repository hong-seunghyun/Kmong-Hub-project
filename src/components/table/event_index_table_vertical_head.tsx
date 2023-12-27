import React from "react";

type Props = {
  headChoice: string
  headCategory: string
  headTitle: string
  headState: string
  headWriter: string
  headDate: string
  headEtc: string
}

const EventTableHead = (props: Props) => {
	return(
		<div className="table-head-container flex_ caption-R txt-disabled">
			<div className="pin-cell">
				고정
			</div>
			<div className="choice-cell">
				{props.headChoice}
			</div>
			<div className="category-cell">
				{props.headCategory}
			</div>
			<div className="title-cell">
				{props.headTitle}
			</div>
			<div className="state-cell">
				{props.headState}
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

export default EventTableHead