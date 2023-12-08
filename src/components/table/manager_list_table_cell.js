import React from "react";
import Link from "next/link";
import TextButtonUnderlinePrimaryS from "/src/components/buttons/text_button_underline_primary_s";

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
			<div className="phone-cell">
				{props.phone}
			</div>
			<div className="company-cell">
				{props.company}
			</div>
			<div className="date-cell">
				{props.date}
			</div>
			<div className="etc-cell">
				<Link style={{width:'auto', }} href={`${props.link}`}>
					<TextButtonUnderlinePrimaryS text="조회"/>
				</Link>
			</div>
		</div>
	)
}
export default Component