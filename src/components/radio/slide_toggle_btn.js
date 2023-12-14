import React from "react";

const Component = ({ state, id, setState, checked }) => {
  return (
    <div className={`toggle-container flex_ ${state}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => (e.target.checked ? setState("I") : setState("N"))}
      />
      <label for={id} />
    </div>
  );
};

export default Component;
