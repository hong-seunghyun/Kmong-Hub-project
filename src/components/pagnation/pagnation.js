import React from "react";

import Icon from "/src/components/icon/icon.tsx";
const Component = (props) => {
  return (
    <div className={`pagnation-container body-3-R regular flex_ ${props.size}`}>
      <span className="pagnation_box arrow">
        <Icon size={13} color="" stroke="none" icon="chevronLeft" />
      </span>
      <div className="flex_ pagnation-wrap">
        <span className="pagnation_box active">1</span>
        <span className="pagnation_box">2</span>
        <span className="pagnation_box">3</span>
        <span className="pagnation_box">4</span>
        <span className="pagnation_box">5</span>
        <span className="pagnation_box">6</span>
        <span className="pagnation_box">7</span>
        <span className="pagnation_box">8</span>
        <span className="pagnation_box">9</span>
        <span className="pagnation_box">10</span>
      </div>
      <span className="pagnation_box arrow">
        <Icon size={13} color="" stroke="none" icon="chevronRight" />
      </span>
    </div>
  );
};
export default Component;
