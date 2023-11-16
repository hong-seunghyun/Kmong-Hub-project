import React, {useState} from 'react';
import Icon from "components/icon/icon.tsx";
import 'scss/public.scss'
import 'scss/components_style.scss'

const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const ButtonSecondaryXl = () => {
		return(
			<button className={`btn_ radius-8 ac-purple btn-xl body-1-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
				<span className="flex_">
					<Icon size={11.6} color='#fff' stroke='#fff' icon='plus' />
						{props.text} 
						<Icon size={13} color='#fff' stroke='#fff' icon='chevronRight' />
				</span>
			</button>
		)
	}

	return(
			<ButtonSecondaryXl />
	)
}
export default Component;