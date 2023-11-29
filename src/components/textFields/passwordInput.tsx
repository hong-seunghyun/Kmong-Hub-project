// email_input.tsx
import React, {useState} from "react";
import { helperTxt, helperTxtSet } from "../textFields/helperText";

interface InputProps {
	placeholder?: string;
	valueType?: string;
	helperTextResult: helperTxt;
	labelText?: string;
	importState?: string;
	iconState?: string;
	inputCountState?: string;
	maxLength: number;
};

const Email = ({ valueType, placeholder, helperTextResult, labelText, importState, iconState, inputCountState, maxLength }: InputProps) => {
	const [inputCount, setInputCount] = useState(0);
	const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };
	return(
		<div className="text-fields-wrap">
			<p className="body-2-B">{labelText}<span className={importState}>*</span></p>
			<div className={`input-container ${valueType} ${iconState}`} >
				<div className="wrap radius-8 bg-lightGray">
					<svg className="icon-email" xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M10 5.5002H2C1.55817 5.5002 1.2 5.85837 1.2 6.3002V11.3002C1.2 11.742 1.55817 12.1002 2 12.1002H10C10.4418 12.1002 10.8 11.742 10.8 11.3002V6.3002C10.8 5.85837 10.4418 5.5002 10 5.5002ZM2 4.3002C0.895431 4.3002 0 5.19563 0 6.3002V11.3002C0 12.4048 0.895431 13.3002 2 13.3002H10C11.1046 13.3002 12 12.4048 12 11.3002V6.3002C12 5.19563 11.1046 4.3002 10 4.3002H2Z" fill="#B3B6B8"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M5.4 10.3002V7.3002H6.6V10.3002H5.4Z" fill="#B3B6B8"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M5 1.9002C4.77909 1.9002 4.6 2.07928 4.6 2.3002V4.3002H3.4V2.3002C3.4 1.41654 4.11634 0.700195 5 0.700195H7C7.88366 0.700195 8.6 1.41654 8.6 2.3002V4.3002H7.4V2.3002C7.4 2.07928 7.22091 1.9002 7 1.9002H5Z" fill="#B3B6B8"/>
					</svg>
					<input
						onChange={onInputHandler}
						className="body-2-R radius-8"
						placeholder={placeholder}
						type="password"
					/>
					<span className={`input-count caption-R ${inputCountState}`}><span className="txt-second-default">{inputCount}</span> / {maxLength}</span>
					<svg className="icon-delete" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM8.17661 8.17666C7.94229 8.41097 7.56239 8.41097 7.32808 8.17666L5.9999 6.84848L4.67172 8.17666C4.43741 8.41097 4.05751 8.41097 3.8232 8.17666C3.58888 7.94234 3.58888 7.56245 3.8232 7.32813L5.15137 5.99995L3.82327 4.67185C3.58895 4.43753 3.58895 4.05763 3.82327 3.82332C4.05758 3.589 4.43748 3.589 4.6718 3.82332L5.9999 5.15143L7.32801 3.82332C7.56232 3.589 7.94222 3.589 8.17654 3.82332C8.41085 4.05763 8.41085 4.43753 8.17654 4.67185L6.84843 5.99995L8.17661 7.32813C8.41092 7.56245 8.41092 7.94235 8.17661 8.17666Z" fill="#B3B6B8"/>
					</svg>
				</div>
				<div className="helper-txt-wrap body-3-R">
					<p className="helper-txt">
						{helperTxtSet[helperTextResult].value}
					</p>
				</div>
			</div>
		</div>
	)
};
export default Email;