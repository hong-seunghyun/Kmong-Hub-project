import React from "react";
import Link from "next/link";
import Label from "/src/components/label/label"
import TextButtonUnderlinePrimaryS from "/src/components/buttons/text_button_underline_primary_s";

const Component = (props) => {
	return(
		<div className="table-cell-container flex_ radius-8 body-3-R txt-third ">
			<div className="title-cell">
				{props.title}
			</div>
			<div className="pc-cell">
			<images src={props.pc} />
			</div>
			<div className="mobile-cell">
			<images src={props.mobile} />
			</div>
			<div className="date-cell">
				{props.dateFrom}<br/>
				{props.dateTo}
			</div>
			<div className="category-cell">
				<Label backgroundColor={props.labelBg} fontColor={props.labelColor} text={props.label} icon="false" iconColor="none"/>
			</div>
			<div className="etc-cell">
				<Link href={`${props.link}`} style={{width:'auto', height:'auto'}}>
				<TextButtonUnderlinePrimaryS text="조회"/>
				</Link>
			</div>
		</div>
	)
}
export default Component