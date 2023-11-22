import React, {useState} from "react";
import Icon from "/src/components/icon/icon.tsx";


const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}
	const TextButtonUnderlineL = () => {
		return(
		<button className={`btn_ btn_text txt-violet body-2-R ${isButton ? "pressed" : ""} ${props.state}`} onClick={onClickActive} >
			<span className="flex_">
				<Icon size={11.6} color="inherit" stroke="inherit" icon="plus" />
					{props.text} 
				<Icon size={13} color="inherit" stroke="inherit" icon="chevronRight" />
			</span>
		</button>
		)
	}

	return(
				<TextButtonUnderlineL />
	)
}
export default Component;