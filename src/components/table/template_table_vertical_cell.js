import React from "react";
import Link from "next/link";
import Icon from "/src/components/icon/icon.tsx"

const Component = (props) => {
	return(
		<div className="table-cell-container flex_ radius-8 body-3-R txt-third ">
			<div className={`choice-cell ${props.choice? 'number':''}`}>
				<input type="checkbox" />
				<span>{props.number}</span>
			</div>
			<div className="title-cell">
				{props.title}
			</div>
			<div className="date-from-cell">
				{props.dateFrom}			
			</div>
			<div className="date-to-cell">
				{props.dateTo}
			</div>
			<div className="etc-cell">
				<div className="radius-8 border-gray-4 bg-white flex_">
					<Icon icon="more" size={16} color="#757779" stroke="none" />	
				</div>
			</div>
		</div>
	)
}
export default Component