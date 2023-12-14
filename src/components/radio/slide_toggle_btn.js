import React from "react";

const Component = ({ state, id, setState }) => {
  return (
    <div className={`toggle-container flex_ ${state}`}>
      <input
        type="checkbox"
        id={id}
        onChange={(e) => (e.target.checked ? setState("I") : setState("N"))}
      />
      <label for={id} />
    </div>
  );
};

export default Component;
