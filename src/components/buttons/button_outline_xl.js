import React, {useState} from 'react';
import 'scss/public.scss'
import 'scss/style.scss'

const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}
	const ButtonOutlineXl = () => {
		return(
			<button className={`btn_ border-gray-3 radius-8 bg-white btn-xl body-1-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
				{props.text}
			</button>
		)
	}

	return(
			<ButtonOutlineXl />
	)
}
export default Component;