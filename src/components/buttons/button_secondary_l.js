import React, {useState} from "react";
import Icon from "/src/components/icon/icon.tsx";


const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const ButtonSecondaryL = () => {
		return(
			<button className={`btn_ radius-8 ac-purple btn-l body-2-R ${isButton ? "pressed" : ""} ${props.state}`} onClick={onClickActive} >
				<span className="flex_">
					<Icon size={11.6} color="#fff" stroke="#fff" icon="plus" />
						{props.text} 
						<Icon size={13} color="#fff" stroke="#fff" icon="chevronRight" />
				</span>
			</button>
		)
	}
	return(
			<ButtonSecondaryL />
	)
}
export default Component;