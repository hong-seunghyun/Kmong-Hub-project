import React, {useState} from 'react';
import Icon from "components/icon/icon.tsx";
import 'scss/public.scss'
import 'scss/components_style.scss'

const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}


	const TextButtonUnderlineM = () => {
		return(
		<button className={`btn_ txt-violet body-3-R ${isButton ? 'pressed' : ''}`} onClick={onClickActive} >
			<span className="flex_">
				<Icon size={8.3} color='inherit' stroke='inherit' icon='plus' />
				{props.text} 
				<Icon size={9} color='inherit' stroke='inherit' icon='chevronRight' />
			</span>
		</button>
		)
	}


	return(
				<TextButtonUnderlineM />
	)
}
export default Component;