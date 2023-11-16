import React from 'react';
import Icon from 'components/icon/icon.tsx';
import 'scss/public.scss';
import 'scss/components_style.scss';

const Component = (props) => {
	return(
		<div className={`label-wrap flex_inline radius-8 label_ ${props.backgroundColor} ${props.fontColor} ${props.icon}`}>
			<Icon size={13} color={props.iconColor} stroke='' icon='ai'/>
			<p className="caption-R">
				{props.text}
			</p>
		</div>
	)
};
export default Component;