import React from "react";

const Component = (props) => {
  let checked = props.checked;
  const onchange = () => {
    checked = !checked;
    if (props.setCheckState) props.setCheckState(checked);
    if (props.setCheckFunc) props.setCheckFunc();
  };

  return (
    <div
      className={`check-container flex_ body-3-R ${props.state} ${props.size}`}
    >
      <input
        type="checkbox"
        id={props.id}
        onChange={onchange}
        checked={props.checked}
      />
      <label htmlFor={props.id} onClick={onchange}>
        {props.label}
      </label>
    </div>
  );
};
export default Component;
