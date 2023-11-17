import React, {useState} from 'react';
import 'scss/public.scss'
import 'scss/components_style.scss'

const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const ButtonCtaS = () => {
		return(
			<button className={`btn_ radius-8 ac-gradation btn-s body-3-R ${isButton ? 'pressed' : ''} ${props.state}`} onClick={onClickActive} >
				{props.text}
			</button>
		)
	}

	return(
		<ButtonCtaS />
	)
}
export default Component;