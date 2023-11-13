import React from 'react';
import 'scss/public.scss';
import 'scss/style.scss';

const Component = () => {
	return(
		<div className="flex_" style={{gap:'20px'}}>
			<div className='badge-wrap radius-8 txt-white bg-violet-1'>
				4
			</div>
			<div className='badge-wrap radius-8 txt-white bg-violet-1'>
				99+
			</div>
		</div>
	)
};
export default Component;