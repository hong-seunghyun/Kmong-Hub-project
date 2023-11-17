import React, {useState} from 'react';
import Icon from "components/icon/icon.tsx";


const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}
	const ButtonErrorM = () => {
		return(
		<button className={`btn_ radius-8 wrong-red btn-m body-3-R ${isButton ? 'pressed' : ''} ${props.state}`} onClick={onClickActive} >
			<span className="flex_">
			<Icon size={8.3} color='#fff' stroke='#fff' icon='plus' />
				{props.text} 
				<Icon size={9} color='#fff' stroke='#fff' icon='chevronRight' />
			</span>
		</button>
		)
	}

	return(
		
				<ButtonErrorM />
			
	)
}
export default Component;