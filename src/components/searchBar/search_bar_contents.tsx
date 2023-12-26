import React from "react";
import Icon from "/src/components/icon/icon";

type SearchBarProps = {
  keyword?: string
  setKeyword: (keyword: string) => void
  updateItems: () => Promise<void>
  placeholder?: string
}

const SearchBar = ({
  keyword, 
  setKeyword,
  updateItems,
  placeholder,
}: SearchBarProps) => {
  return (
    <div className="search-container">
      <div className={`input-wrap radius-8 border-gray-4 bg-lightGray`}>
        <input
          className="body-3-R txt-primary"
          type="text"
          placeholder={placeholder ?? '검색어를 입력하세요.'}
          onChange={e => setKeyword(e.target.value)}
          value={keyword}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              updateItems();
            }
          }}
        />
        <span className="icon_serach">
          <Icon 
            size={16} 
            color="#574AFF" 
            stroke="" 
            icon="search" 
            onClick={updateItems} 
          />
        </span>
      </div>
    </div>
  )
}

export default SearchBar;
