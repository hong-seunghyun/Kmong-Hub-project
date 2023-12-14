import React, {useState} from "react";
import Icon from "/src/components/icon/icon.tsx";


const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = async () => {
		setButton(!isButton);
		props.onclick && await props.onclick();
	}
	const ButtonPrimaryL = () => {
		return(
		<button className={`btn_ radius-8 ac-violet btn-l body-2-R ${isButton ? "pressed" : ""} ${props.state}`} onClick={onClickActive} >
			<span className="flex_">
			<Icon size={11.6} color="#fff" stroke="none" icon="plus" />
				{props.text} 
				<Icon size={13} color="#fff" stroke="none" icon="chevronRight" />
			</span>
		</button>
		)
	}
	return(
				<ButtonPrimaryL />
	)
}
export default Component;