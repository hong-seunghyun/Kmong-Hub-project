import React from "react";


const Component = (props) => {
	return(
		<div className={`radio-container flex_ body-3-R ${props.state}`}>
			<input type="radio" id={props.id}/>
			<label for={props.id}>{props.label}</label>
		</div>
	)
};
export default Component;
