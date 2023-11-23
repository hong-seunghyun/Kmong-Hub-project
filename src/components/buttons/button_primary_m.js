import React, {useState} from "react";
import Icon from "/src/components/icon/icon.tsx";


const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const ButtonPrimaryM = () => {
		return(
		<button className={`btn_ radius-8 ac-violet btn-m body-3-R ${isButton ? "pressed" : ""} ${props.state}`} onClick={onClickActive} >
			<span className="flex_">
			<Icon size={8.3} color="#fff" stroke="none" icon="plus" />
				{props.text} 
				<Icon size={9} color="#fff" stroke="none" icon="chevronRight" />
			</span>
		</button>
		)
	}


	return(
				<ButtonPrimaryM />
	)
}
export default Component;