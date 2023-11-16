import React from 'react';
import 'scss/public.scss';
import 'scss/components_style.scss';

const Component = (props) => {
	return(
		<div className={`toggle-container flex_ ${props.state}`}>
			<input type="checkbox" id={props.id} />
			<label  for={props.id} />
		</div>
	)
};

export default Component;
