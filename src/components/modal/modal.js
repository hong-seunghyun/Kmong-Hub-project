import React from "react";

import ButtonPrimaryXL from "/src/components/buttons/button_primary_xl";
import ButtonErrorXL from "/src/components/buttons/button_error_xl";
import ButtonOutlineXL from "/src/components/buttons/button_outline_xl";

const Component = (props) => {
  return (
    <div className="modal-container radius-20 flex_">
      {/* <img src="/images/file.png" alt="file" /> */}
      <div className="text-wrap flex_">
        <h6 className="heading-3-B">{props.title}</h6>
        <p className="body-3-R">{props.text}</p>
      </div>
      <div
        className={`btn-wrap ${props.type} ${props.value} ${props.count} flex_`}
      >
        {/*
			props.count = 보여주는 버튼의 갯수를 적어줍니다 / one, two
			props.value = 메인 버튼의 상태를 보여줍니다.(primary와 error) / default, error 
			props.type = 버튼의 정렬방식을 나타냅니다. (한줄 정렬, 두줄 정렬) / full-button, half-button
		*/}
        <div className="primary-btn btn-box">
          <ButtonPrimaryXL
            text={props.label ? props.label[0].text : ""}
            onclick={props.label ? props.label[0].onClick : () => {}}
          />
        </div>
        <div className="error-btn btn-box">
          <ButtonErrorXL
            text={props.label ? props.label[1] : ""}
            onclick={props.label ? props.label[1].onClick : () => {}}
          />
        </div>
        <div className="outline-btn btn-box">
          <ButtonOutlineXL
            text={props.label ? props.label[2] : ""}
            onclick={props.label ? props.label[2].onClick : () => {}}
          />
        </div>
      </div>
    </div>
  );
};
export default Component;
