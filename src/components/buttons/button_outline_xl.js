import React, {useState} from 'react';


const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}
	const ButtonOutlineXl = () => {
		return(
			<button className={`btn_ border-gray-3 radius-8 bg-white btn-xl body-1-R ${isButton ? 'pressed' : ''} ${props.state}`} onClick={onClickActive} >
				{props.text}
			</button>
		)
	}

	return(
			<ButtonOutlineXl />
	)
}
export default Component;