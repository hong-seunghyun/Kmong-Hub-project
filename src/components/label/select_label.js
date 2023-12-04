import React from "react";
import Icon from "/src/components/icon/icon.tsx";


const Component = (props) => {
	return(
		<div className={`label-wrap flex_inline radius-8 select_label label_ ${props.backgroundColor} ${props.fontColor} ${props.icon}`}>
			
			<p className="caption-R">
				{props.text}
			</p>
			<Icon size={12} color={props.iconColor} stroke="" icon="delete"/>
		</div>
	)
};
export default Component;