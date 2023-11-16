import React from 'react';
import 'scss/public.scss';
import 'scss/components_style.scss';

const Component = (props) => {
	return(
		<div className={`check-container flex_ body-3-R ${props.state} ${props.size}`}>
			<input type="checkbox" id={props.id}/>
			<label for={props.id}>{props.label}</label>
		</div>
	)
};
export default Component;
