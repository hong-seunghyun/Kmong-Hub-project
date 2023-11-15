import React, {useState} from 'react';
import Icon from "components/icon/icon.tsx";
import 'scss/public.scss'
import 'scss/style.scss'

const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const ButtonSecondaryS = () => {
		return(
			<button className={`btn_ radius-8 ac-purple btn-s caption-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
				<span className="flex_">
						<Icon size={8.3} color='#fff' stroke='#fff' icon='plus' />
							{props.text}
						<Icon size={9} color='#fff' stroke='#fff' icon='chevronRight' />
				</span>
			</button>
		)
	}

	return(
				<ButtonSecondaryS />
	)
}
export default Component;