import React from "react";
import Link from "next/link";
import TextButtonUnderlinePrimaryS from "/src/components/buttons/text_button_underline_primary_s";

const Component = (props) => {
	return(
		<div className="table-cell-container flex_ radius-8 body-3-R txt-third ">
			<div className={`radio-cell ${props.choice? 'number':''}`}>
				<input type="radio" />
				<span>{props.number}</span>
			</div>
			<div className="title-cell">
				<Link style={{width:'auto'}} href={`${props.listLink}`}>
					{props.title}
				</Link>
			</div>
			<div className="date-cell">
				{props.date}
			</div>
			<div className="etc-cell">
					<TextButtonUnderlinePrimaryS text="삭제"/>
			</div>
		</div>
	)
}
export default Component