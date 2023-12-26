import React, { useState } from "react";
import Icon from "/src/components/icon/icon.tsx";
import { useEffect } from "react";

const Component = (props) => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const onChange = (e) => {
    setSearch(e.target.value);
    if (props.setState) props.setState(e.target.value);
    props.onchange && props.onchange(e.target.value);
    if (props.data.length === 0) setToggle(false);
    else setToggle(true);
  };

  const onclickSpan = (dummy) => {
    props.setResult(String(dummy.id));
    if (props.resultFunc) props.resultFunc();
    setToggle(false);
    setSearch(dummy.name);
  };

  const onBlur = () => {
    setToggle(false);
  };

  useEffect(() => {
    if (search === "") setToggle(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (props.state !== "") {
      setSearch(props.state);
    }
  }, [props.state]);

  // let filterTitle;

  // if (props.data) {
  //   filterTitle = props.data.filter((p) => {
  //     return p.name
  //       .replace(" ", "")
  //       .toLocaleLowerCase()
  //       .includes(search.toLocaleLowerCase());
  //   });
  // }

  return (
    <div
      className="search-container"
      style={{ width: props.width ? props.width : "" }}
    >
      <div
        className={`input-wrap radius-8 border-${
          props.light
            ? props.light === "none"
              ? "gray-4"
              : props.light
            : "gray-4"
        } bg-lightGray`}
      >
        <input
          style={{ width: props.width ? props.width : "" }}
          className="body-3-R txt-primary"
          type="text"
          placeholder="검색어를 입력해 주세요."
          value={search}
          onChange={onChange}
          onBlur={onBlur}
          onClick={onChange}
        />
        <span className="icon_serach">
          <Icon size={16} color="#574AFF" stroke="" icon="search" />
        </span>
      </div>
      <div
        className="wrap radius-8 border-gray-4"
        style={{ display: toggle ? "block" : "none" }}
      >
        <div
          className="flex_ result-search-box body-3-R "
          style={{ minHeight: "20px", maxHeight: "175px" }}
        >
          {props.data.map((dummy) => (
            <span
              style={{
                padding: "0.5rem 0rem",
                width: "100%",
                maxWidth: "100%",
              }}
              onMouseDown={() => {
                onclickSpan(dummy);
              }}
            >
              {dummy.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Component;
