import React from "react";


const Component = (props) => {
	return(
		<div className={`check-container flex_ body-3-R ${props.state} ${props.size}`}>
			<input type="checkbox" id={props.id}/>
			<label for={props.id}>{props.label}</label>
		</div>
	)
};
export default Component;
