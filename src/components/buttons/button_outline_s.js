import React, {useState} from "react";


const Component = (props) => {
	const [isButton, setButton ] = useState(false);

	const onClickActive = () => {
		setButton(!isButton);
	}

	const ButtonOutlineS = () => {
		return(
			<button className={`btn_ border-gray-3 radius-8 bg-white btn-s caption-R ${isButton ? "pressed" : ""} ${props.state}`} onClick={onClickActive} >
				{props.text}
			</button>
		)
	}

	return(
				<ButtonOutlineS />
	)
}
export default Component;