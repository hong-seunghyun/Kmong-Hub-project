import React, {useState} from 'react';
import 'scss/public.scss'
import 'scss/components_style.scss'

const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const ButtonOutlineM = () => {
		return(
			<button className={`btn_ border-gray-3 radius-8 bg-white btn-m body-3-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
				{props.text}
			</button>
		)
	}

	return(
			<ButtonOutlineM />
	)
}
export default Component;