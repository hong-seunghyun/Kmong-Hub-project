// email_input.tsx
import React, { Dispatch, SetStateAction, useState } from "react";
import { helperTxt, helperTxtSet } from "./helperText";

interface InputProps {
  placeholder?: string;
  valueType?: string;
  helperTextResult: helperTxt;
  labelText?: string;
  importState?: string;
  iconState?: string;
  inputCountState?: string;
  maxLength: number;
  state: string;
  light?: boolean
  setState: Dispatch<SetStateAction<string>>;
}

const Input = ({
  state,
  setState,
  valueType,
  placeholder,
  helperTextResult,
  labelText,
  importState,
  iconState,
  inputCountState,
  maxLength,
  light
}: InputProps) => {
  const [inputCount, setInputCount] = useState(0);
  const onInputHandler = (e: any) => {
    const encoded = e.target.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
    setState(encoded);
    setInputCount(e.target.value.length);
  };
  return (
    <div className="text-fields-wrap">
      <p className="body-2-B">
        {labelText}
        <span className={importState}>*</span>
      </p>
      <div className={`input-container ${valueType} ${iconState}`}>
        <div className={`wrap radius-8 bg-lightGray ${light ? `border-${light}` : ''}`}>
          <svg
            className="icon-email"
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.2 1.7V8.3H10.8V1.7H1.2ZM1 0.5C0.447715 0.5 0 0.947715 0 1.5V8.5C0 9.05229 0.447715 9.5 1 9.5H11C11.5523 9.5 12 9.05229 12 8.5V1.5C12 0.947715 11.5523 0.5 11 0.5H1Z"
              fill="#B3B6B8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.00049 5.46877L0.625183 1.96852L1.37482 1.03148L5.75012 4.53172C5.89621 4.64859 6.10379 4.64859 6.24988 4.53172L10.6252 1.03148L11.3748 1.96852L6.99951 5.46877C6.41516 5.93625 5.58484 5.93624 5.00049 5.46877Z"
              fill="#B3B6B8"
            />
          </svg>
          <input
            value={state}
            onChange={onInputHandler}
            className="body-2-R radius-8"
            placeholder={placeholder}
            disabled={true}
          />
          <span className={`input-count caption-R ${inputCountState}`}>
            <span className="txt-second-default">{inputCount}</span> /{" "}
            {maxLength}
          </span>
          <svg
            className="icon-delete"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM8.17661 8.17666C7.94229 8.41097 7.56239 8.41097 7.32808 8.17666L5.9999 6.84848L4.67172 8.17666C4.43741 8.41097 4.05751 8.41097 3.8232 8.17666C3.58888 7.94234 3.58888 7.56245 3.8232 7.32813L5.15137 5.99995L3.82327 4.67185C3.58895 4.43753 3.58895 4.05763 3.82327 3.82332C4.05758 3.589 4.43748 3.589 4.6718 3.82332L5.9999 5.15143L7.32801 3.82332C7.56232 3.589 7.94222 3.589 8.17654 3.82332C8.41085 4.05763 8.41085 4.43753 8.17654 4.67185L6.84843 5.99995L8.17661 7.32813C8.41092 7.56245 8.41092 7.94235 8.17661 8.17666Z"
              fill="#B3B6B8"
            />
          </svg>
        </div>
        <div className="helper-txt-wrap body-3-R">
          <p className="helper-txt">{helperTxtSet[helperTextResult].value}</p>
        </div>
      </div>
    </div>
  );
};
export default Input;
