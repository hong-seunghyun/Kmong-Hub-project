// email_input.tsx
import React, {useState} from "react";

import { helperTxt, helperTxtSet } from "../textFields/helperText";

interface InputProps {
	placeholder?: string;
	valueType?: string;
	helperTextResult: helperTxt;
	labelText?: string;
	importState?: string;
};

const Email = ({ valueType, placeholder, helperTextResult, labelText, importState }: InputProps) => {
	const [inputCount, setInputCount] = useState(0);
	const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };
	return(
		<div className="text-fields-wrap">
			<p className="caption-B">{labelText}<span className={importState}>*</span></p>
			<div className={`textarea-container ${valueType}`} >
				<div className="wrap radius-8 bg-lightGray">
					<textarea 
						onChange={onInputHandler}
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