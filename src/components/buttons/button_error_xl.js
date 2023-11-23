import React, {useState} from "react";
import Icon from "/src/components/icon/icon.tsx";


const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const ButtonErrorXl = () => {
		return(
		<button className={`btn_ radius-8 wrong-red btn-xl body-1-R ${isButton ? "pressed" : ""} ${props.state}`} onClick={onClickActive} >
			<span className="flex_">
			<Icon size={11.6} color="#fff" stroke="none" icon="plus" />
				{props.text} 
				<Icon size={13} color="#fff" stroke="none" icon="chevronRight" />
			</span>
		</button>
		)
	}

	return(
		<ButtonErrorXl />
	)
}
export default Component;