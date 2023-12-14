import React from "react";

import Icon from "/src/components/icon/icon.tsx";
const Component = (props) => {
  return (
    <div
      className={`pagnation-container body-3-R regular flex_  ${props.size}`}
    >
      <span className="pagnation_box arrow">
        <Icon size={13} color="" stroke="none" icon="chevronLeft" />
      </span>
      <div className="flex_ pagnation-wrap">
        <span className={`pagnation_box ${props.pageIdx == 1 && "active"}`}>
          1
        </span>
        <span className={`pagnation_box ${props.pageIdx == 2 && "active"}`}>
          2
        </span>
        <span className={`pagnation_box ${props.pageIdx == 3 && "active"}`}>
          3
        </span>
        <span className={`pagnation_box ${props.pageIdx == 4 && "active"}`}>
          4
        </span>
        <span className={`pagnation_box ${props.pageIdx == 5 && "active"}`}>
          5
        </span>
        <span className={`pagnation_box ${props.pageIdx == 6 && "active"}`}>
          6
        </span>
        <span className={`pagnation_box ${props.pageIdx == 7 && "active"}`}>
          7
        </span>
        <span className={`pagnation_box ${props.pageIdx == 8 && "active"}`}>
          8
        </span>
        <span className={`pagnation_box ${props.pageIdx == 9 && "active"}`}>
          9
        </span>
        <span className={`pagnation_box ${props.pageIdx == 10 && "active"}`}>
          10
        </span>
      </div>
      <span className="pagnation_box arrow">
        <Icon size={13} color="" stroke="none" icon="chevronRight" />
      </span>
    </div>
  );
};
export default Component;
