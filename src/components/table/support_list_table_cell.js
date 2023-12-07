import React from "react";
import Link from "next/link";
import Label from "/src/components/label/label"
import TextButtonUnderlinePrimaryS from "/src/components/buttons/text_button_underline_primary_s";
import TextButtonUnderlineS from "/src/components/buttons/text_button_underline_s";

const Component = (props) => {
	return(
		<div className="table-cell-container flex_ radius-8 body-3-R txt-third ">
			<div className={`choice-cell ${props.choice? 'number':''}`}>
				<input type="checkbox" />
				<span>{props.number}</span>
			</div>
			<div className="category-cell">
			<Label backgroundColor={props.labelBg} fontColor={props.labelColor} text={props.label} icon="false" iconColor="none"/>
			</div>
			<div className="title-cell">
				{props.title}
			</div>
			<div className="state-cell">
				<Label backgroundColor={props.stateBg} fontColor={props.stateColor} text={props.state} icon="false" iconColor="none"/>
			</div>
			<div className="writer-cell">
				{props.writer}
			</div>
			<div className="date-cell">
				{props.date}
			</div>
			<div className="etc-cell">
				<Link href={`${props.link}`} style={{width:'auto'}}>
					<TextButtonUnderlineS text="신청목록"/>
				</Link>
				<TextButtonUnderlinePrimaryS text="삭제"/>
			</div>
		</div>
	)
}
export default Component