import React, { useState } from "react";
import Icon from "/src/components/icon/icon.tsx";

const Component = (props) => {
  const [isButton, setButton] = useState(false);

  const onClickActive = async () => {
    if (props.state === "disabled") return;
    setButton(!isButton);
    props.onclick && (await props.onclick());
  };
  const ButtonPrimaryL = () => {
    return (
      <button
        className={`btn_ radius-8 ${
          props.isActive == null
            ? "ac-violet"
            : props.isActive
            ? "ac-violet"
            : "bg-gray"
        } btn-l body-2-R ${isButton ? "pressed" : ""} ${props.state}`}
        onClick={onClickActive}
      >
        <span
          className={`flex_ ${
            props.isActive != null && !props.isActive ? "txt-disabled" : ""
          }`}
        >
          <Icon size={11.6} color="#fff" stroke="none" icon="plus" />
          {props.text}
          <Icon size={13} color="#fff" stroke="none" icon="chevronRight" />
        </span>
      </button>
    );
  };
  return <ButtonPrimaryL />;
};
export default Component;
