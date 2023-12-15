import React from "react";


const Component = (props) => {

	let checked = props.checked;
	const onchange = () => {
		checked = !checked;
		props.setCheckState(checked);
	}

	return(
		<div className={`check-container flex_ body-3-R ${props.state} ${props.size}`}>
			<input type="checkbox" id={props.id} onChange={onchange}/>
			<label for={props.id}>{props.label}</label>
		</div>
	)
};
export default Component;
