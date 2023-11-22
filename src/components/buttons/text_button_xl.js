import React, {useState} from "react";
import Icon from "/src/components/icon/icon.tsx";


const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const TextButtonUnderlineXl = () => {
		return(
		<button className={`btn_ txt-second body-1-R ${isButton ? "pressed" : ""} ${props.state}`} onClick={onClickActive} >
			<span className="flex_">
				<Icon size={11.6} color="inherit" stroke="inherit" icon="plus" />
					{props.text} 
				<Icon size={13} color="inherit" stroke="inherit" icon="chevronRight" />
			</span>
		</button>
		)
	}

	return(
				<TextButtonUnderlineXl />
	)
}
export default Component;