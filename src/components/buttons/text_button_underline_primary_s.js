import React, {useState} from 'react';
import Icon from "components/icon/icon.tsx";


const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const TextButtonUnderlineS = () => {
		return(
		<button className={`btn_ btn_text txt-violet caption-R ${isButton ? 'pressed' : ''} ${props.state}`} onClick={onClickActive} >
			<span className="flex_">
				<Icon size={8.3} color='inherit' stroke='inherit' icon='plus' />
				{props.text} 
				<Icon size={9} color='inherit' stroke='inherit' icon='chevronRight' />
			</span>
		</button>
		)
	}


	return(
				<TextButtonUnderlineS />
	)
}
export default Component;