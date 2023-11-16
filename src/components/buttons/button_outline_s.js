import React, {useState} from 'react';
import 'scss/public.scss'
import 'scss/components_style.scss'

const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const ButtonOutlineS = () => {
		return(
			<button className={`btn_ border-gray-3 radius-8 bg-white btn-s caption-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
				{props.text}
			</button>
		)
	}

	return(
				<ButtonOutlineS />
	)
}
export default Component;