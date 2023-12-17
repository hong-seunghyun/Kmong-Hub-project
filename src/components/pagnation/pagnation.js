import React from "react";

import Icon from "/src/components/icon/icon.tsx";
const Component = (props) => {
  return (
    <div className={`pagnation-container body-3-R regular flex_ ${props.size}`}>
      <span className="pagnation_box arrow">
        <Icon size={13} color="" stroke="none" icon="chevronLeft" />
      </span>
      <div className="flex_ pagnation-wrap">
        <span
          className={`pagnation_box ${props.pageIdx === 1 && "active"}`}
          onClick={() => props.setPageIdx(1)}
        >
          1
        </span>
        <span
          className={`pagnation_box ${props.pageIdx === 2 && "active"}`}
          onClick={() => props.setPageIdx(2)}
        >
          2
        </span>
        <span
          className={`pagnation_box ${props.pageIdx === 3 && "active"}`}
          onClick={() => props.setPageIdx(3)}
        >
          3
        </span>
        <span
          className={`pagnation_box ${props.pageIdx === 4 && "active"}`}
          onClick={() => props.setPageIdx(4)}
        >
          4
        </span>
        <span
          className={`pagnation_box ${props.pageIdx === 5 && "active"}`}
          onClick={() => props.setPageIdx(5)}
        >
          5
        </span>
        <span
          className={`pagnation_box ${props.pageIdx === 6 && "active"}`}
          onClick={() => props.setPageIdx(6)}
        >
          6
        </span>
        <span
          className={`pagnation_box ${props.pageIdx === 7 && "active"}`}
          onClick={() => props.setPageIdx(7)}
        >
          7
        </span>
        <span
          className={`pagnation_box ${props.pageIdx === 8 && "active"}`}
          onClick={() => props.setPageIdx(8)}
        >
          8
        </span>
        <span
          className={`pagnation_box ${props.pageIdx === 9 && "active"}`}
          onClick={() => props.setPageIdx(9)}
        >
          9
        </span>
        <span
          className={`pagnation_box ${props.pageIdx === 10 && "active"}`}
          onClick={() => props.setPageIdx(10)}
        >
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
