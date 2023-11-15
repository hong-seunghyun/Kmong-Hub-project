import React from 'react';
import 'scss/public.scss';
import 'scss/style.scss';

const Component = (props) => {
	return(
		<div className="flex_" style={{gap:'20px'}}>
			<div className='badge-wrap radius-8 txt-white bg-violet-1'>
				{props.value}
			</div>
		</div>
	)
};
export default Component;