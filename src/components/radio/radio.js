import React, {useState} from "react";

const Component = (props) => {

	const [ isRadioValue, setRadioValue ] = useState('');
	
	const handleChange=(e)=>{
		setRadioValue(e.target.value);
		props.setRadioValue && props.setRadioValue(isRadioValue);
	}

	const clickValue=(e)=>{
		props.setRadioValue(isRadioValue);
	}

  return (
    <div className={`radio-container flex_ body-3-R ${props.state}`}>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        onClick={props.onclick}
        checked={props.checked}
				value={props.value}
				onChange={handleChange}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};
export default Component;
