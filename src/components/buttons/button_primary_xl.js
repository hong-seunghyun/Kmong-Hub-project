import React, {useState} from "react";
import Icon from "/src/components/icon/icon.tsx";


const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const ButtonPrimaryXl = () => {
		return(
		<button className={`btn_ radius-8 ac-violet btn-xl body-1-R ${isButton ? "pressed" : ""} ${props.state}`} onClick={onClickActive} >
			<span className="flex_">
			<Icon size={11.6} color="#fff" stroke="#fff" icon="plus" />
				{props.text} 
				<Icon size={13} color="#fff" stroke="#fff" icon="chevronRight" />
			</span>
		</button>
		)
	}

	return(
				<ButtonPrimaryXl />
	)
}
export default Component;