import React, {useState} from 'react';
import Icon from "components/icon/icon.tsx";
import 'scss/public.scss'
import 'scss/components_style.scss'

const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}



	const ButtonErrorL = () => {
		return(
		<button className={`btn_ radius-8 wrong-red btn-l body-2-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
			<span className="flex_">
				<Icon size={11.6} color='#fff' stroke='#fff' icon='plus' />
					{props.text}
				<Icon size={13} color='#fff' stroke='#fff' icon='chevronRight' />
			</span>
		</button>
		)
	}

	return(
		<ButtonErrorL />	
	)
}
export default Component;