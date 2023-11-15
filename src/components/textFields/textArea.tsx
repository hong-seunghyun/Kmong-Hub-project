// email_input.tsx
import React, {useState} from 'react';
import { helperTxt, helperTxtSet } from "components/textFields/helperText.ts";

interface InputProps {
	placeholder?: string;
	valueType?: string;
	helperTextResult?: helperTxt;
	labelText?: string;
};

const Email = ({ valueType, placeholder, helperTextResult, labelText }: InputProps) => {
	const [inputCount, setInputCount] = useState(0);
	const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };
	return(
		<div className="text-fields-wrap">
			<p className="caption-B">{labelText}<span>*</span></p>
			<div className={`textarea-container ${valueType}`} >
				<div className="wrap radius-8 bg-lightGray">
					<textarea 
						onChange={onInputHandler}
						maxLength="1200"
						className="body-3-R radius-8"
						placeholder={placeholder}
					/>
					<span className="input-count caption-R "><span>{inputCount}</span> / 1200</span>
				</div>
				<div className="helper-txt-wrap caption-R">
					<p className="helper-txt">
						{helperTxtSet[helperTextResult].value}
					</p>
				</div>
			</div>
		</div>
	)
	

};
export default Email;