import React, { useState } from "react";
import Icon from "/src/components/icon/icon.tsx";

const dummy = [
  {
    id: 1,
    title: "전체",
  },
  {
    id: 2,
    title: "업체명",
  },
  {
    id: 3,
    title: "대표자",
  },
  {
    id: 4,
    title: "업종",
  },
];

const Component = (props) => {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const filterTitle = dummy
    ? dummy.filter((p) => {
        return p.title
          .replace(" ", "")
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      })
    : [];
  return (
    <div className="drops-menu-container">
      <div className="input-wrap radius-8 border-gray-4 bg-lightGray">
        <input
          className="body-3-R txt-primary"
          type="text"
          placeholder={props.placeholder}
          value={search}
          onChange={onChange}
        />
        <span className="icon_serach">
          <Icon size={9} color="#464749" stroke="" icon="chevronDown" />
        </span>
      </div>
      <div className="wrap radius-8 border-gray-4">
        <div className="flex_ result-search-box  body-3-R ">
          {filterTitle &&
            filterTitle.map((dummy) => <span>{dummy.title}</span>)}
        </div>
      </div>
    </div>
  );
};
export default Component;
