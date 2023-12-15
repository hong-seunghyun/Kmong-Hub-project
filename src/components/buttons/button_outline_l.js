import React, { useState } from "react";

const Component = (props) => {
  const [isButton, setButton] = useState(false);

  const onClickActive = () => {
    if (props.onclick) props.onclick();
    setButton(!isButton);
  };
  const ButtonOutlineL = () => {
    return (
      <button
        className={`btn_ border-gray-3 radius-8 bg-white btn-l body-2-R ${
          isButton ? "pressed" : ""
        } ${props.state}`}
        onClick={onClickActive}
      >
        {props.text}
      </button>
    );
  };
  return <ButtonOutlineL />;
};
export default Component;
