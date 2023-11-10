import React, {useState} from 'react';
import 'scss/public.scss'
import 'scss/style.scss'

const Component = () => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const ButtonCtaS = () => {
		return(
			<button className={`btn_ radius-8 ac-gradation btn-s body-3-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
				label
			</button>
		)
	}

	return(
		<div>
		<ButtonCtaS />
		<p style={{margin:'20px'}} />
		<button className={'btn_ radius-8 ac-gradation btn-s body-3-R disabled'} >
			label
		</button>
		</div>
	)
}
export default Component;