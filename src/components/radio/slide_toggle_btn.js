import React from 'react';


const Component = (props) => {
	return(
		<div className={`toggle-container flex_ ${props.state}`}>
			<input type="checkbox" id={props.id} />
			<label  for={props.id} />
		</div>
	)
};

export default Component;
