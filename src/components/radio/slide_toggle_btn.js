import React, {useState} from "react";


const Component = ({state, id }) => {

	return(
		<div className={`toggle-container flex_ ${state}`}>
			<input 
				type="checkbox" 
				id={id} 
			/>
			<label  for={id} />
		</div>
	)
};

export default Component;
